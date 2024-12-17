document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const asideNav = document.querySelector(".asside-nav");

  menuToggle.addEventListener("click", () => {
    asideNav.classList.toggle("expanded");
  });
});
