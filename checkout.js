function irPara(step) {
    var steps = document.querySelectorAll('.checkout-step');
    var indicators = document.querySelectorAll('.step-indicator');

    steps.forEach(function(s, i) {
        if (i + 1 === step) {
            s.classList.add('active');
            s.style.display = 'block';
        } else {
            s.classList.remove('active');
            s.style.display = 'none';
        }
    });

    indicators.forEach(function(ind, i) {
        ind.classList.remove('active', 'done');
        if (i + 1 === step) {
            ind.classList.add('active');
        } else if (i + 1 < step) {
            ind.classList.add('done');
        }
    });

    document.querySelector('.checkout-container').scrollTop = 0;
}
function validarEndereco() {
    var nome = document.getElementById('nome').value.trim();
    var cep = document.getElementById('cep').value.trim();
    var rua = document.getElementById('rua').value.trim();
    var numero = document.getElementById('numero').value.trim();
    var cidade = document.getElementById('cidade').value.trim();
    var uf = document.getElementById('uf').value.trim();

    if (!nome || !cep || !rua || !numero || !cidade || !uf) {
        alert('Preencha todos os campos obrigatórios (*).');
        return false;
    }
    if (uf.length !== 2) {
        alert('UF deve ter 2 letras (ex: SP, RJ).');
        return false;
    }
    return true;
}

function validarPagamento() {
    var cartao = document.getElementById('cartao').value.trim();
    var validade = document.getElementById('validade').value.trim();
    var cvv = document.getElementById('cvv').value.trim();
    var nomeCartao = document.getElementById('nome-cartao').value.trim();

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
    if (!validarEndereco()) return;
    if (!validarPagamento()) return;

    var btn = document.getElementById('btn-finalizar');
    btn.textContent = 'Processando...';
    btn.disabled = true;

    setTimeout(function() {
        btn.textContent = 'Finalizar compra';
        btn.disabled = false;
        irPara(4);
        if (typeof limparCarrinho === 'function') {
            limparCarrinho();
        }
        var counters = document.querySelectorAll('.cart-count');
        counters.forEach(function(el) {
            el.textContent = '0';
        });
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cep').addEventListener('input', function() {
        var value = this.value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.substring(0, 5) + '-' + value.substring(5, 8);
        }
        this.value = value;
    });

    document.getElementById('cartao').addEventListener('input', function() {
        var value = this.value.replace(/\D/g, '');
        var formatted = '';
        for (var i = 0; i < value.length && i < 16; i++) {
            if (i > 0 && i % 4 === 0) formatted += ' ';
            formatted += value[i];
        }
        this.value = formatted;
    });

    document.getElementById('validade').addEventListener('input', function() {
        var value = this.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        this.value = value;
    });

    document.getElementById('cvv').addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').substring(0, 3);
    });

    document.getElementById('uf').addEventListener('input', function() {
        this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 2);
    });

    var resumo = document.getElementById('checkout-resumo');
    if (resumo && typeof carrinho !== 'undefined') {
        if (carrinho.length === 0) {
            resumo.innerHTML = '<p style="color:#999; text-align:center;">Seu carrinho está vazio.</p>';
        } else {
            var html = '';
            var total = 0;
            carrinho.forEach(function(item) {
                var subtotal = item.preco * item.quantidade;
                total += subtotal;
                html += '<div class="checkout-resumo-item">';
                html += '<span>' + item.nome + ' x' + item.quantidade + '</span>';
                html += '<span>R$ ' + subtotal.toFixed(2) + '</span>';
                html += '</div>';
            });
            html += '<div class="checkout-resumo-total">';
            html += '<span>Total</span>';
            html += '<span>R$ ' + total.toFixed(2) + '</span>';
            html += '</div>';
            resumo.innerHTML = html;
        }
    }

    if (typeof atualizarCarrinhoUI === 'function') {
        atualizarCarrinhoUI();
    }
});
