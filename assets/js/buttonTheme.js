const themeToggleButton = document.getElementById("theme-toggle");
const rootElement = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  rootElement.classList.add(savedTheme);
}

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    const isLightTheme = rootElement.classList.toggle("light-theme");
    localStorage.setItem("theme", isLightTheme ? "light-theme" : "");
  });
}
