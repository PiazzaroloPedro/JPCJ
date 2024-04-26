// carrinho.js
// Função para exibir os produtos no carrinho
function exibirProdutosNoCarrinho() {
    const carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
    const carrinhoSection = document.getElementById('carrinho');

    // Limpa o conteúdo atual do carrinho
    carrinhoSection.innerHTML = '';

    // Adiciona os produtos ao carrinho
    carrinho.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('cart-item');
        divProduto.innerHTML = ` 
        <img src="${produto.imagemURL}" alt="${produto.descricao}">
        <div class="product-description">
            <p>${produto.descricao}</p>
            <div class="tamanho-buttons">
                <button>PP</button>
                <button>P</button>
                <button>M</button>
                <button>G</button>
                <button>GG</button>
            </div>
        </div>
        `;
        carrinhoSection.appendChild(divProduto);
    });
}

// Chama a função ao carregar a página
window.onload = exibirProdutosNoCarrinho;

// Event listener para limpar o carrinho
document.querySelector('.clear-cart').addEventListener('click', function () {
    // Limpa o carrinho na sessionStorage
    sessionStorage.removeItem('carrinho');
    // Atualiza a exibição dos produtos no carrinho
    exibirProdutosNoCarrinho();
});
