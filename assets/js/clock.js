function updateClock() {
  const clockElement = document.getElementById("real-time-clock");
  const dateElement = clockElement.querySelector(".date");
  const timeElement = clockElement.querySelector(".time");

  const now = new Date();

  const formattedDate = now.toLocaleDateString("pt-BR");

  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const timeZone = "-03";

  dateElement.textContent = formattedDate;
  timeElement.textContent = `${formattedTime} ${timeZone}`;
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateClock, 1000);
  updateClock();
});
