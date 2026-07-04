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
