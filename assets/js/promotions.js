const messages = [
  "Frete grátis por tempo limitado! Aproveite já!",
  "10% OFF na sua primeira compra!",
  "Compre 2 e leve 3 em produtos selecionados!",
];

let currentIndex = 0;

function updatePromoText() {
  const promoText = document.querySelector(".promo-text");
  promoText.textContent = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;
}

setInterval(updatePromoText, 10000);
