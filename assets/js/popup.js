document.addEventListener("DOMContentLoaded", () => {
  const shopLink = document.getElementById("shop-link");
  const popup = document.getElementById("shop-popup");
  const closePopup = document.getElementById("close-popup");

  //   console.log({ shopLink, popup, closePopup });

  shopLink.addEventListener("click", (event) => {
    event.preventDefault();
    popup.style.display = "flex";
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
