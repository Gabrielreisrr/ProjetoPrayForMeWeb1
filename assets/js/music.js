const music = document.getElementById("background-music");
const disc = document.querySelector(".music-disc");

function toggleMusic() {
  if (music.paused) {
    music.play();
    disc.classList.remove("paused");
  } else {
    music.pause();
    disc.classList.add("paused");
  }
}
