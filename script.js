// ================================================================
//  CHECKOUT MODAL
// ================================================================
const overlay = document.getElementById('checkout-overlay');
const modal = document.getElementById('checkout-modal');
const closeBtn = document.getElementById('checkout-close');
const btnComprarHero = document.getElementById('btn-comprar-hero');
const btnHeaderComprar = document.getElementById('btn-header-comprar');
const steps = document.querySelectorAll('.checkout-step');
const nextBtns = document.querySelectorAll('.checkout-next');
const finalizarBtn = document.getElementById('btn-finalizar-compra');
const voltarBtn = document.getElementById('btn-voltar-loja');

let currentStep = 1;
const totalSteps = 4;

function openCheckout() {
    overlay.classList.add('active');
    goToStep(1);
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function goToStep(step) {
    steps.forEach((s, i) => {
        s.classList.toggle('active', i + 1 === step);
    });
    currentStep = step;
    // Scroll to top do modal
    modal.scrollTop = 0;
}

// Abrir checkout
btnComprarHero.addEventListener('click', openCheckout);
btnHeaderComprar.addEventListener('click', (e) => {
    e.preventDefault();
    openCheckout();
});

// Fechar
closeBtn.addEventListener('click', closeCheckout);
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCheckout();
});

// Avançar etapas
nextBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const next = parseInt(this.dataset.next);
        if (next && next <= totalSteps) {
            // Validação básica para etapa 2 (endereço)
            if (currentStep === 2) {
                if (!validarEndereco()) return;
            }
            goToStep(next);
        }
    });
});

// ================================================================
//  VALIDAÇÃO DE ENDEREÇO
// ================================================================
function validarEndereco() {
    const nome = document.getElementById('nome').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const rua = document.getElementById('rua').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const uf = document.getElementById('uf').value.trim();

    if (!nome || !cep || !rua || !numero || !cidade || !uf) {
        alert('Preencha todos os campos obrigatórios (marcados com *).');
        return false;
    }
    if (uf.length !== 2) {
        alert('UF deve ter 2 letras (ex: SP, RJ).');
        return false;
    }
    return true;
}

// ================================================================
//  FINALIZAR COMPRA
// ================================================================
finalizarBtn.addEventListener('click', function() {
    // Validação básica de pagamento
    const cartao = document.getElementById('cartao').value.trim();
    const validade = document.getElementById('validade').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const nomeCartao = document.getElementById('nome-cartao').value.trim();

    if (!cartao || !validade || !cvv || !nomeCartao) {
        alert('Preencha todos os dados do cartão.');
        return;
    }
    if (cartao.replace(/\s/g, '').length < 16) {
        alert('Número do cartão inválido.');
        return;
    }
    if (!validade.match(/^\d{2}\/\d{2}$/)) {
        alert('Validade deve estar no formato MM/AA.');
        return;
    }
    if (cvv.length < 3) {
        alert('CVV inválido.');
        return;
    }

    // Simular processamento
    this.textContent = '⏳ Processando...';
    this.disabled = true;

    setTimeout(() => {
        this.textContent = 'Finalizar Compra';
        this.disabled = false;
        goToStep(4); // Tela de confirmação
    }, 1500);
});

// ================================================================
//  VOLTAR À LOJA
// ================================================================
voltarBtn.addEventListener('click', () => {
    closeCheckout();
    // Resetar formulários
    document.querySelectorAll('.checkout-step input, .checkout-step select').forEach(el => {
        if (el.type !== 'button') el.value = '';
    });
    goToStep(1);
});

// ================================================================
//  MÁSCARAS PARA INPUTS
// ================================================================
document.getElementById('cep').addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }
    this.value = value;
});

document.getElementById('cartao').addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    let formatted = '';
    for (let i = 0; i < value.length && i < 16; i++) {
        if (i > 0 && i % 4 === 0) formatted += ' ';
        formatted += value[i];
    }
    this.value = formatted;
});

document.getElementById('validade').addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.value = value;
});

document.getElementById('cvv').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '').substring(0, 3);
});

// ================================================================
//  MASCARA PARA UF (maiúsculas)
// ================================================================
document.getElementById('uf').addEventListener('input', function(e) {
    this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 2);
});
