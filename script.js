// ================================================================
//  CARROSSEL
// ================================================================
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
let currentIndex = 0;
const totalSlides = slides.length;

function goToSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
});

// Autoplay
let autoSlide = setInterval(nextSlide, 5000);
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});
carouselContainer.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 5000);
});

// ================================================================
//  CARRINHO
// ================================================================
let cart = [];

function updateCartUI() {
    const count = document.querySelector('.cart-count');
    const items = document.getElementById('cart-items');
    const total = document.getElementById('cart-total-value');
    if (count) count.textContent = cart.reduce((acc, item) => acc + item.qty, 0);

    if (items) {
        if (cart.length === 0) {
            items.innerHTML = '<p style="color:#999; text-align:center;">Seu carrinho está vazio.</p>';
            if (total) total.textContent = 'R$ 0,00';
            return;
        }
        let html = '';
        let totalValue = 0;
        cart.forEach((item) => {
            const subtotal = item.price * item.qty;
            totalValue += subtotal;
            html += `
                <div class="cart-item">
                    <span class="item-name">${item.name} x${item.qty}</span>
                    <span class="item-price">R$ ${subtotal.toFixed(2)}</span>
                </div>
            `;
        });
        items.innerHTML = html;
        if (total) total.textContent = `R$ ${totalValue.toFixed(2)}`;
    }
}

function addToCart(name, price, qty = 1) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ name, price, qty });
    }
    updateCartUI();
    document.getElementById('cart-overlay').classList.add('active');
}

// Adicionar ao carrinho
document.getElementById('btn-add-cart').addEventListener('click', () => {
    const qty = parseInt(document.getElementById('quantidade').value) || 1;
    addToCart('Echo Dot 5G', 139.99, qty);
});
document.getElementById('btn-cart-sidebar').addEventListener('click', () => {
    addToCart('Echo Dot 5G', 139.99, 1);
});

// Fechar carrinho
document.getElementById('cart-close').addEventListener('click', () => {
    document.getElementById('cart-overlay').classList.remove('active');
});
document.getElementById('cart-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById('cart-overlay').classList.remove('active');
    }
});

// Checkout a partir do carrinho
document.getElementById('cart-checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }
    document.getElementById('cart-overlay').classList.remove('active');
    abrirCheckout();
});

// Comprar agora
document.getElementById('btn-comprar-agora').addEventListener('click', () => {
    cart = [{ name: 'Echo Dot 5G', price: 139.99, qty: 1 }];
    updateCartUI();
    abrirCheckout();
});
document.getElementById('btn-buy-sidebar').addEventListener('click', () => {
    cart = [{ name: 'Echo Dot 5G', price: 139.99, qty: 1 }];
    updateCartUI();
    abrirCheckout();
});

// ================================================================
//  CHECKOUT
// ================================================================
const overlayCheckout = document.getElementById('checkout-overlay');
const closeCheckoutBtn = document.getElementById('checkout-close');
const steps = document.querySelectorAll('.checkout-step');
const nextBtns = document.querySelectorAll('.checkout-next');
const finalizarBtn = document.getElementById('btn-finalizar-compra');
const voltarBtn = document.getElementById('btn-voltar-loja');

let currentStep = 1;
const totalSteps = 4;

function abrirCheckout() {
    overlayCheckout.classList.add('active');
    goToStep(1);
    document.body.style.overflow = 'hidden';
    const resumo = document.getElementById('checkout-resumo');
    if (cart.length === 0) {
        resumo.innerHTML = '<p style="color:#999;">Carrinho vazio.</p>';
        return;
    }
    let html = '';
    let total = 0;
    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        html += `
            <div class="checkout-product">
                <span class="checkout-product-icon">🔊</span>
                <div class="checkout-product-info">
                    <h4>${item.name}</h4>
                    <p>Quantidade: ${item.qty}</p>
                    <span class="checkout-price">R$ ${subtotal.toFixed(2)}</span>
                </div>
            </div>
        `;
    });
    html += `<div style="text-align:right; font-size:18px; font-weight:700; color:#3483FA;">Total: R$ ${total.toFixed(2)}</div>`;
    resumo.innerHTML = html;
}

function closeCheckout() {
    overlayCheckout.classList.remove('active');
    document.body.style.overflow = '';
}

function goToStep(step) {
    steps.forEach((s, i) => {
        s.classList.toggle('active', i + 1 === step);
    });
    currentStep = step;
    document.querySelector('.checkout-modal').scrollTop = 0;
}

closeCheckoutBtn.addEventListener('click', closeCheckout);
overlayCheckout.addEventListener('click', (e) => {
    if (e.target === overlayCheckout) closeCheckout();
});

nextBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const next = parseInt(this.dataset.next);
        if (next && next <= totalSteps) {
            if (currentStep === 2) {
                if (!validarEndereco()) return;
            }
            goToStep(next);
        }
    });
});

function validarEndereco() {
    const nome = document.getElementById('nome').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const rua = document.getElementById('rua').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const uf = document.getElementById('uf').value.trim();

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

finalizarBtn.addEventListener('click', function() {
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
        alert('Validade no formato MM/AA.');
        return;
    }
    if (cvv.length < 3) {
        alert('CVV inválido.');
        return;
    }

    this.textContent = '⏳ Processando...';
    this.disabled = true;

    setTimeout(() => {
        this.textContent = 'Finalizar compra';
        this.disabled = false;
        goToStep(4);
        cart = [];
        updateCartUI();
    }, 1500);
});

voltarBtn.addEventListener('click', () => {
    closeCheckout();
    document.querySelectorAll('.checkout-step input, .checkout-step select').forEach(el => {
        if (el.type !== 'button') el.value = '';
    });
    goToStep(1);
});

// ================================================================
//  MÁSCARAS
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

document.getElementById('uf').addEventListener('input', function(e) {
    this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 2);
});
