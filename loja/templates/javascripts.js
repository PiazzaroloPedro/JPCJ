let currentIndex = 0; // Índice do slide atual
const intervalTime = 3000; // Tempo de transição em milissegundos
let intervalId; // ID do intervalo para poder limpar depois

const slides = document.querySelectorAll('.slides img'); // Seleciona todas as imagens dentro de '.slides'

function startCarousel() {
    intervalId = setInterval(nextImage, intervalTime);
}

function nextImage() {
    slides[currentIndex].style.display = 'none'; // Oculta o slide atual
    currentIndex = (currentIndex + 1) % slides.length; // Move para o próximo slide, com looping
    slides[currentIndex].style.display = 'block'; // Mostra o novo slide
}

// Mostra o primeiro slide e inicia o carrossel
window.onload = () => {
    slides[currentIndex].style.display = 'block';
    startCarousel();
};

// Ligar o slider à posição das imagens
const slider = document.getElementById('slider');

slider.addEventListener('input', function() {
    clearInterval(intervalId); // Para o carrossel automático
    slides[currentIndex].style.display = 'none'; // Oculta o slide atual
    currentIndex = parseInt(this.value) - 1;
    slides[currentIndex].style.display = 'block'; // Mostra o slide correspondente ao slider
    startCarousel(); // Reinicia o carrossel automático
});


//fim do carrosel de fotos
