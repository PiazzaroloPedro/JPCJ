// Função para lidar com a seleção do tamanho do produto
function selecionarTamanho(tamanhoButton) {
    const sizeButtons = tamanhoButton.parentNode.querySelectorAll('button');
    sizeButtons.forEach(button => {
        button.classList.remove('pressed'); // Remove a classe 'pressed' de todos os botões de tamanho
    });
    tamanhoButton.classList.add('pressed'); // Adiciona a classe 'pressed' apenas ao botão clicado
}

// Função para exibir os produtos no carrinho
function exibirProdutosNoCarrinho() {
    const carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
    const carrinhoSection = document.getElementById('carrinho');

    // Limpa o conteúdo atual do carrinho
    carrinhoSection.innerHTML = '';

    // Adiciona os produtos ao carrinho
    carrinho.forEach((produto, index) => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('cart-item');
        divProduto.innerHTML = ` 
            <img src="${produto.imagemURL}" alt="${produto.descricao}">
            <div class="product-description">
                <p>${produto.descricao}</p>
                <div class="options">
                    <div class="size-buttons">
                        <button>PP</button>
                        <button>P</button>
                        <button>M</button>
                        <button>G</button>
                        <button>GG</button>
                    </div>
                    <div class="quantity-selector">
                        <label for="quantity">Quantidade:</label>
                        <select id="quantity" name="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <div class="product-price">
                            <!-- Ícone do coração para favoritar -->
                            <i class="fas fa-heart"></i>
                            <p>Valor: R$ <span class="valor-produto">${extrairValorProduto(produto.descricao)}</span></p>
                            <button class="remove-product">Remover</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const quantitySelector = divProduto.querySelector('#quantity');
        quantitySelector.value = produto.quantidade; // Define o valor do campo de seleção como a quantidade atual

        quantitySelector.addEventListener('change', () => {
            produto.quantidade = parseInt(quantitySelector.value); // Atualiza a quantidade do produto
            sessionStorage.setItem('carrinho', JSON.stringify(carrinho)); // Armazena o carrinho atualizado na sessionStorage
        });

        // Adiciona um event listener para remover o produto ao clicar no botão
        const removeButton = divProduto.querySelector('.remove-product');
        removeButton.addEventListener('click', () => {
            carrinho.splice(index, 1); // Remove o produto do array do carrinho
            sessionStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza a sessionStorage
            exibirProdutosNoCarrinho(); // Atualiza a exibição dos produtos no carrinho
        });

        // Adiciona event listeners aos botões de tamanho
        const sizeButtons = divProduto.querySelectorAll('.size-buttons button');
        sizeButtons.forEach(button => {
            button.addEventListener('click', () => {
                selecionarTamanho(button); // Chama a função com o botão clicado como argumento
            });
        });

        carrinhoSection.appendChild(divProduto);
    });
}

// Função para extrair o valor do produto da descrição
function extrairValorProduto(descricao) {
    const padrao = /Valor: R\$\s*(\d+\.\d{2})/;
    const correspondencia = descricao.match(padrao);
    if (correspondencia) {
        return correspondencia[1]; // Retorna o valor do produto encontrado na descrição
    } else {
        return 'Valor não encontrado'; // Retorna uma mensagem se o valor do produto não for encontrado na descrição
    }
}

// Função para alternar a cor do ícone de coração quando pressionado
function toggleFavorite() {
    const heartIcon = this;
    heartIcon.classList.toggle('favorite'); // Adiciona ou remove a classe 'favorite' para alternar a cor
}

// Adiciona um evento de clique ao ícone de coração
document.querySelectorAll('.product-price i.fa-heart').forEach(heartIcon => {
    heartIcon.addEventListener('click', toggleFavorite);
});

// Chama a função ao carregar a página
window.onload = exibirProdutosNoCarrinho;

// Event listener para limpar o carrinho
document.querySelector('.clear-cart').addEventListener('click', function () {
    // Limpa o carrinho na sessionStorage
    sessionStorage.removeItem('carrinho');
    // Atualiza a exibição dos produtos no carrinho
    exibirProdutosNoCarrinho();
});
