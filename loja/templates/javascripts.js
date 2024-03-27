//começo do carrosel de fotos
let count = 1;
let intervalId;
let intervalTime = 4000; // Intervalo de tempo padrão

document.getElementById("radio1").checked = true;

function startCarousel() {
    intervalId = setInterval(nextImage, intervalTime);
}

// Inicia o carrossel quando a página carrega
startCarousel();

function nextImage() {
    count++;
    if (count > 11) {
        count = 1;
    }
    document.querySelector('input[name="radio-btn"]:nth-of-type(' + count + ')').checked = true;
}

// Event listener para os botões de rádio
document.querySelectorAll('input[name="radio-btn"]').forEach(function (radio) {
    radio.addEventListener('click', function () {
        clearInterval(intervalId); // Limpa o intervalo atual
        setTimeout(startCarousel, 4000); // Espera 4 segundos antes de reiniciar o carrossel
    });
});

//fim do carrosel de fotos


        
