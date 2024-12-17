document.addEventListener("DOMContentLoaded", () => {
  const shopLinks = document.querySelectorAll(".shop-link");
  const popup = document.getElementById("shop-popup");
  const closePopup = document.getElementById("close-popup");

  console.log({ shopLinks, popup, closePopup });

  shopLinks.forEach((shopLink) => {
    shopLink.addEventListener("click", (event) => {
      event.preventDefault();
      popup.style.display = "flex";
    });
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
