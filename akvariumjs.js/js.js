const screen = document.querySelector("#screen");

document.querySelector(".venstrePil").addEventListener("click", () => {
  screen.scrollBy({ left: -screen.clientWidth, behavior: "smooth" });
});

document.querySelector(".højrePil").addEventListener("click", () => {
  screen.scrollBy({ left: screen.clientWidth, behavior: "smooth" });
});