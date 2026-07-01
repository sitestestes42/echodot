function validarEndereco() {
    const nome = document.getElementById('nome').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const rua = document.getElementById('rua').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const uf = document.getElementById('uf').value.trim();

    if (!nome || !cep || !rua || !numero || !cidade || !uf) {
        alert('Preencha todos os campos obrigatórios.');
        return false;
    }
    if (uf.length !== 2) {
        alert('UF deve ter 2 letras (ex: SP, RJ).');
        return false;
    }
    return true;
}

function validarPagamento() {
    const cartao = document.getElementById('cartao').value.trim();
    const validade = document.getElementById('validade').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const nomeCartao = document.getElementById('nome-cartao').value.trim();

    if (!cartao || !validade || !cvv || !nomeCartao) {
        alert('Preencha todos os dados do cartão.');
        return false;
    }
    if (cartao.replace(/\s/g, '').length < 16) {
        alert('Número do cartão inválido.');
        return false;
    }
    if (!validade.match(/^\d{2}\/\d{2}$/)) {
        alert('Validade no formato MM/AA.');
        return false;
    }
    if (cvv.length < 3) {
        alert('CVV inválido.');
        return false;
    }
    return true;
}

function finalizarCompra() {
    const enderecoOk = validarEndereco();
    if (!enderecoOk) return;

    const pagamentoOk = validarPagamento();
    if (!pagamentoOk) return;

    const btn = document.getElementById('btn-finalizar');
    btn.textContent = 'Processando...';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = 'Finalizar compra';
        btn.disabled = false;
        document.getElementById('step-1').classList.remove('active');
        document.getElementById('step-2').classList.remove('active');
        document.getElementById('step-3').classList.remove('active');
        document.getElementById('step-4').classList.add('active');
        limparCarrinho();
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function() {
    const inputs = {
        cep: document.getElementById('cep'),
        cartao: document.getElementById('cartao'),
        validade: document.getElementById('validade'),
        cvv: document.getElementById('cvv'),
        uf: document.getElementById('uf')
    };

    if (inputs.cep) {
        inputs.cep.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 5) {
                value = value.substring(0, 5) + '-' + value.substring(5, 8);
            }
            this.value = value;
        });
    }

    if (inputs.cartao) {
        inputs.cartao.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            let formatted = '';
            for (let i = 0; i < value.length && i < 16; i++) {
                if (i > 0 && i % 4 === 0) formatted += ' ';
                formatted += value[i];
            }
            this.value = formatted;
        });
    }

    if (inputs.validade) {
        inputs.validade.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            this.value = value;
        });
    }

    if (inputs.cvv) {
        inputs.cvv.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '').substring(0, 3);
        });
    }

    if (inputs.uf) {
        inputs.uf.addEventListener('input', function() {
            this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 2);
        });
    }

    const steps = document.querySelectorAll('.checkout-step');
    const nextBtns = document.querySelectorAll('.checkout-next');
    let currentStep = 1;

    function goToStep(step) {
        steps.forEach((s, i) => {
            s.classList.toggle('active', i + 1 === step);
        });
        currentStep = step;
        document.querySelector('.checkout-modal').scrollTop = 0;
    }

    nextBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const next = parseInt(this.dataset.next);
            if (next && next <= 4) {
                if (currentStep === 1) {
                    if (validarEndereco()) {
                        goToStep(next);
                    }
                } else if (currentStep === 2) {
                    if (validarPagamento()) {
                        goToStep(next);
                    }
                } else {
                    goToStep(next);
                }
            }
        });
    });

    const closeBtn = document.querySelector('.checkout-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            document.querySelector('.checkout-overlay').classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    const overlay = document.querySelector('.checkout-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    const voltarBtn = document.getElementById('btn-voltar-loja');
    if (voltarBtn) {
        voltarBtn.addEventListener('click', function() {
            document.querySelector('.checkout-overlay').classList.remove('active');
            document.body.style.overflow = '';
            goToStep(1);
            document.querySelectorAll('.checkout-step input, .checkout-step select').forEach(el => {
                if (el.type !== 'button') el.value = '';
            });
        });
    }

    const finalizar = document.getElementById('btn-finalizar');
    if (finalizar) {
        finalizar.addEventListener('click', finalizarCompra);
    }
});
