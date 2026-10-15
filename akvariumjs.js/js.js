const screen = document.querySelector("#screen");
const leftButton = document.querySelector(".venstrePil");
const rightButton = document.querySelector(".hoejrePil");
/* disse første linjer finder den fastlagte skærm og knapper */

const scrollAmount = 850; /* længden af et scroll med klik */

/* sætter en max scroll width og disabler knapperne når man når til enderne */
function updateScrollButtons() {
  const maxScroll = screen.scrollWidth - screen.clientWidth;
  leftButton.disabled = screen.scrollLeft <= 1;
  rightButton.disabled = screen.scrollLeft >= maxScroll - 1;
}

/* dette er selve scroll events'ene - henviser tilbage til -scrollAmount og gør overgangen smooth */
leftButton.addEventListener("click", () => {
  screen.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

rightButton.addEventListener("click", () => {
  screen.scrollBy({ left: scrollAmount, behavior: "smooth" });
});


screen.addEventListener("scroll", updateScrollButtons); /* opdaterer knapperne når man scroller med musen */
updateScrollButtons(); /* checker startpositionen ved sideindlæsning for at se om knapperne skal disables */


let isDragging = false;
let startX;
let startScrollLeft;

screen.addEventListener("mousedown", (event) => {
  if (event.button !== 0 || event.target.closest("button")) return;

  isDragging = true;
  startX = event.clientX;
  startScrollLeft = screen.scrollLeft;
});

window.addEventListener("mousemove", (event) => {
  if (!isDragging) return;

  screen.scrollLeft = startScrollLeft - (event.clientX - startX);
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});