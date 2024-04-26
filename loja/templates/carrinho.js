// Função para exibir os produtos no carrinho
function exibirProdutosNoCarrinho() {
    const carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
    const carrinhoSection = document.getElementById('carrinho');

    // Limpa o conteúdo atual do carrinho
    carrinhoSection.innerHTML = '';

    // Adiciona os produtos ao carrinho em linhas de até 4 produtos por linha
    for (let i = 0; i < carrinho.length; i += 4) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = i; j < i + 4 && j < carrinho.length; j++) {
            const divProduto = document.createElement('div');
            divProduto.classList.add('produto');
            divProduto.innerHTML = `
                <div>
                    <img src="${carrinho[j].imagemURL}">
                    <p>${carrinho[j].descricao}</p>
                </div>
            `;
            row.appendChild(divProduto);
        }

        carrinhoSection.appendChild(row);
    }

    // Adiciona o event listener para o botão "Limpar Carrinho"
    const clearCartButton = document.querySelector('.clear-cart');
    clearCartButton.addEventListener('click', function () {
        // Limpa o carrinho na sessionStorage
        sessionStorage.removeItem('carrinho');
        // Reexibe os produtos no carrinho (que estarão vazios após limpar)
        exibirProdutosNoCarrinho();
    });
}

// Chama a função ao carregar a página
window.onload = exibirProdutosNoCarrinho;
