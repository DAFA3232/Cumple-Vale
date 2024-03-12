let messageIndex = 0;
const messages = [
  "¡Te deseo un día lleno de alegría y bendiciones!",
  "Que este día esté lleno de sorpresas y momentos inolvidables.",
  "Eres luz en mi vida.",
  "¡Que este año sea el mejor de todos!",
  "Porfa no te vayas...",
  "Sigue sonriendo, que te queda linda la sonrisa ;)",
  "TE QUIERO MUCHO",
  "FELIZ CUMPLEAÑOS #27, WUJUUUUUU",
  "PD: OJALA ME TRAICIONES...",
  "LOFE YOU <3",
];

function changeMessage() {
  const mensajeElement = document.getElementById("mensaje");
  messageIndex = (messageIndex + 1) % messages.length;
  mensajeElement.textContent = messages[messageIndex];
}

// Carousel
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");
const totalImages = images.length;

function showNextImage() {
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].style.display = "block";
}

setInterval(showNextImage, 5000);
