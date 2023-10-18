/*// JavaScript
const carouselCards = document.querySelector(".carousel-cards");
const cards = carouselCards.querySelectorAll(".cards-item");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentCard = 0;

nextButton.addEventListener("click", () => {
    currentCard++;
    if (currentCard >= cards.length) {
        currentCard = 0;
    }
    carouselCards.style.transform = `translateX(-${currentCard * cards[0].clientWidth}px)`;
});

prevButton.addEventListener("click", () => {
    currentCard--;
    if (currentCard < 0) {
        currentCard = cards.length - 1;
    }
    carouselCards.style.transform = `translateX(-${currentCard * cards[0].clientWidth}px)`;
});

// Movimiento automático del carrusel
setInterval(() => {
    nextButton.click();
}, 3000); // 3000 milisegundos (3 segundos)

// Mostrar solo 3 cards
carouselCards.style.overflow = "hidden";
carouselCards.style.width = `${cards[0].clientWidth * 3}px`;*/

// JavaScript
const carouselCards = document.querySelector(".carousel-cards");
const cards = carouselCards.querySelectorAll(".cards-item");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentCard = 0;

// Movimiento automático del carrusel
setInterval(() => {
  nextButton.click();
}, 3000); // 3000 milisegundos (3 segundos)

// Mostrar solo 3 cards
carouselCards.style.overflow = "hidden";
carouselCards.style.width = `${cards[0].clientWidth * 4}px`;

// Botones de navegación
nextButton.addEventListener("click", () => {
  currentCard++;
  if (currentCard >= cards.length) {
    currentCard = 0;
  }
  carouselCards.style.transform = `translateX(-${currentCard * cards[0].clientWidth}px)`;
});

prevButton.addEventListener("click", () => {
  currentCard--;
  if (currentCard < 0) {
    currentCard = cards.length - 1;
  }
  carouselCards.style.transform = `translateX(-${currentCard * cards[0].clientWidth}px)`;
});



