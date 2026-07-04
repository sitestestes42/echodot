let carrinho = [];

function carregarCarrinho() {
    const dados = localStorage.getItem('nexus_carrinho');
    if (dados) {
        carrinho = JSON.parse(dados);
    }
    atualizarCarrinhoUI();
}

function salvarCarrinho() {
    localStorage.setItem('nexus_carrinho', JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id, quantidade = 1) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;

    const itemExistente = carrinho.find(item => item.id === id);
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagens[0] || '',
            quantidade: quantidade
        });
    }
    salvarCarrinho();
    atualizarCarrinhoUI();
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    salvarCarrinho();
    atualizarCarrinhoUI();
}

function alterarQuantidade(id, novaQuantidade) {
    const item = carrinho.find(i => i.id === id);
    if (!item) return;
    if (novaQuantidade <= 0) {
        removerDoCarrinho(id);
        return;
    }
    item.quantidade = novaQuantidade;
    salvarCarrinho();
    atualizarCarrinhoUI();
}

function limparCarrinho() {
    carrinho = [];
    salvarCarrinho();
    atualizarCarrinhoUI();
}

function totalCarrinho() {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

function totalItensCarrinho() {
    return carrinho.reduce((total, item) => total + item.quantidade, 0);
}

function atualizarCarrinhoUI() {
    const contadores = document.querySelectorAll('.cart-count');
    contadores.forEach(el => {
        el.textContent = totalItensCarrinho();
    });

    const container = document.getElementById('carrinho-items');
    if (container) {
        if (carrinho.length === 0) {
            container.innerHTML = '<p class="carrinho-vazio"><i class="fas fa-shopping-bag"></i> Seu carrinho está vazio.</p>';
        } else {
            let html = '';
            carrinho.forEach(item => {
                html += `
                    <div class="carrinho-item">
                        <div class="carrinho-item-info">
                            <img src="${item.imagem}" alt="${item.nome}" />
                            <div>
                                <h4>${item.nome}</h4>
                                <span>R$ ${item.preco.toFixed(2)}</span>
                            </div>
                        </div>
                        <div class="carrinho-item-actions">
                            <input type="number" value="${item.quantidade}" min="1" 
                                   onchange="alterarQuantidade(${item.id}, parseInt(this.value))" />
                            <button onclick="removerDoCarrinho(${item.id})"><i class="fas fa-trash"></i> Remover</button>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
        }
    }

    const totalElement = document.getElementById('carrinho-total');
    if (totalElement) {
        totalElement.textContent = `R$ ${totalCarrinho().toFixed(2)}`;
    }
}
