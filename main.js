document.addEventListener('DOMContentLoaded', function() {
    carregarCarrinho();

    const ofertasContainer = document.getElementById('ofertas-container');
    const destaquesContainer = document.getElementById('destaques-container');

    // Embaralha os produtos para variar a cada carregamento
    const produtosEmbaralhados = [...produtos].sort(() => Math.random() - 0.5);

    if (ofertasContainer) {
        // Mostra até 8 produtos com preço antigo (ofertas)
        const ofertas = produtos.filter(p => p.preco_antigo).slice(0, 8);
        ofertas.forEach(p => {
            ofertasContainer.appendChild(criarCardProduto(p));
        });
    }

    if (destaquesContainer) {
        // Mostra os 12 primeiros produtos (ou todos, se quiser)
        const destaques = produtos.slice(0, 12);
        destaques.forEach(p => {
            destaquesContainer.appendChild(criarCardProduto(p));
        });
    }

    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    if (searchInput && searchBtn) {
        function buscar() {
            const termo = searchInput.value.trim().toLowerCase();
            if (termo) {
                window.location.href = `produtos.html?busca=${encodeURIComponent(termo)}`;
            }
        }
        searchBtn.addEventListener('click', buscar);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') buscar();
        });
    }
});

function criarCardProduto(produto) {
    const div = document.createElement('div');
    div.className = 'produto-card';
    div.innerHTML = `
        <img src="${produto.imagens[0]}" alt="${produto.nome}" />
        <span class="produto-nome">${produto.nome}</span>
        <span class="produto-preco">R$ ${produto.preco.toFixed(2)}</span>
        <span class="produto-parcelado">em até 4x de R$ ${(produto.preco / 4).toFixed(2)}</span>
        <button class="btn-comprar" data-id="${produto.id}">Comprar</button>
    `;
    const btn = div.querySelector('.btn-comprar');
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const id = parseInt(this.dataset.id);
        adicionarAoCarrinho(id);
        alert('Produto adicionado ao carrinho!');
    });
    div.addEventListener('click', function() {
        window.location.href = `produto.html?id=${produto.id}`;
    });
    return div;
}
