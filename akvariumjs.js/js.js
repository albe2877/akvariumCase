const screen = document.querySelector("#screen");
const leftButton = document.querySelector(".venstrePil");
const rightButton = document.querySelector(".hoejrePil");

screen.scrollLeft = screen.clientWidth / 3;

leftButton.addEventListener("click", () => {
  screen.scrollBy({ left: -screen.clientWidth / 3, behavior: "smooth" });
  leftButton.disabled = true;
});

rightButton.addEventListener("click", () => {
  screen.scrollBy({ left: screen.clientWidth / 3, behavior: "smooth" });
  rightButton.disabled = true;
});