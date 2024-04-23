// Função para exibir os produtos no carrinho
function exibirProdutosNoCarrinho() {
    const carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || []; // Recupera o carrinho da sessionStorage ou cria um novo array vazio se não existir
    const carrinhoSection = document.getElementById('carrinho');

    // Limpa o conteúdo atual do carrinho
    carrinhoSection.innerHTML = '';

    // Adiciona cada produto ao carrinho
    carrinho.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.innerHTML = `
            <div>
                <img src="${produto.imagemURL}">
                <p>${produto.descricao}</p>
            </div>
        `;
        carrinhoSection.appendChild(divProduto);
    });
}

// Chama a função ao carregar a página
window.onload = exibirProdutosNoCarrinho;



