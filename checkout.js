document.addEventListener('DOMContentLoaded', function() {

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

    function goToStep(step) {
        const steps = document.querySelectorAll('.checkout-step');
        steps.forEach(function(s, i) {
            if (i + 1 === step) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
        document.querySelector('.checkout-container').scrollTop = 0;
    }

    // Botões "Continuar"
    const nextBtns = document.querySelectorAll('.checkout-next');
    nextBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const next = parseInt(this.dataset.next);
            if (next === 2) {
                if (validarEndereco()) {
                    goToStep(next);
                }
            } else if (next === 3) {
                if (validarPagamento()) {
                    goToStep(next);
                }
            } else {
                goToStep(next);
            }
        });
    });

    // Finalizar compra
    const finalizarBtn = document.getElementById('btn-finalizar');
    if (finalizarBtn) {
        finalizarBtn.addEventListener('click', function() {
            const enderecoOk = validarEndereco();
            if (!enderecoOk) return;

            const pagamentoOk = validarPagamento();
            if (!pagamentoOk) return;

            this.textContent = 'Processando...';
            this.disabled = true;

            setTimeout(function() {
                finalizarBtn.textContent = 'Finalizar compra';
                finalizarBtn.disabled = false;
                goToStep(4);
                if (typeof limparCarrinho === 'function') {
                    limparCarrinho();
                }
            }, 1500);
        });
    }

    // Máscaras
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 5) {
                value = value.substring(0, 5) + '-' + value.substring(5, 8);
            }
            this.value = value;
        });
    }

    const cartaoInput = document.getElementById('cartao');
    if (cartaoInput) {
        cartaoInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            let formatted = '';
            for (let i = 0; i < value.length && i < 16; i++) {
                if (i > 0 && i % 4 === 0) formatted += ' ';
                formatted += value[i];
            }
            this.value = formatted;
        });
    }

    const validadeInput = document.getElementById('validade');
    if (validadeInput) {
        validadeInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            this.value = value;
        });
    }

    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '').substring(0, 3);
        });
    }

    const ufInput = document.getElementById('uf');
    if (ufInput) {
        ufInput.addEventListener('input', function() {
            this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 2);
        });
    }

    // Garantir que a etapa 1 esteja visível ao carregar
    goToStep(1);

});
