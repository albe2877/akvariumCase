//Her kommer start lyden "klik på fiskene for at hører mere"
// 1. Find lydfilen i HTML
const klikPaaFiskeneAudio = document.querySelector("#klikPaaFiskeneAudio");

function afspilKlikPaaFiskene() {
  if (!klikPaaFiskeneAudio) return;
  if (!klikPaaFiskeneAudio.paused) return;

  klikPaaFiskeneAudio.currentTime = 0;
  klikPaaFiskeneAudio.play().catch((error) => {
    console.warn("Browseren blokerede automatisk afspilning. Klik på siden for at starte lyden.", error);
  });
}

// Forsøg ét sekund efter sideindlæsning. Hvis browseren blokerer lyden,
// start den ved første brugerhandling.
window.setTimeout(afspilKlikPaaFiskene, 1000);
window.addEventListener("pointerdown", afspilKlikPaaFiskene, { once: true });
window.addEventListener("keydown", afspilKlikPaaFiskene, { once: true });

// Afspil igen efter 10 sekunder, når lydsporet er færdigt.
if (klikPaaFiskeneAudio) {
  klikPaaFiskeneAudio.addEventListener("ended", () => {
    window.setTimeout(afspilKlikPaaFiskene, 10000);
  });
}

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


let isDragging = false; /* fortæller om brugeren trækker, starter som false, men bliver true når man trykker ned på musen */
let startX; /* gemmer musens vandrette position */
let startScrollLeft;
/* startScrollLeft gemmer hvor langt indholdet er scrollet. Så siden ikke rykker tilbage når der trækkes med musen. */


screen.addEventListener("mousedown", (event) => {
  if (event.button !== 0 || event.target.closest("button")) return;
  /* gør at kun venstre museknap ikke triggerer træk - return = stop funktionen */

  /* når musen klikkes, bliver isDragging istedet true */
  isDragging = true;
  startX = event.clientX;
  startScrollLeft = screen.scrollLeft;
});


/* Dette fortæller browseren, at den skal følge musens bevægelser. 
window bruges, så bevægelsen stadig registreres, hvis musen kommer uden for screen. */
window.addEventListener("mousemove", (event) => {
  if (!isDragging) return; /* !isDragging = ikke igang med at trække */

  screen.scrollLeft = startScrollLeft - (event.clientX - startX);
  /* dette regner ud hvor langt musen er flyttet,
  og trækker det fra startScrollLeft, så indholdet følger musen */
});

window.addEventListener("mouseup", () => {
  isDragging = false;
  /* når musen slippes, scrolles der ikke */
});


/* forsøger at sætte baggrundsmusik ind på startsiden */
const baggrundsmusik = document.getElementById("baggrundsmusik");
baggrundsmusik.volume = 0.08; /*sætter lydstyrken lavt, så den ikke overdøver de andre lyde. */

/*sessionStorage bruges til at gemme musikkens position, så den ikke starter forfra når man skifter mellem sider. */
baggrundsmusik.addEventListener("timeupdate",function() {
  sessionStorage.setItem("musikTid", baggrundsmusik.currentTime);
}); 

window.addEventListener("pagehide", function() {
  sessionStorage.setItem("musikTid", baggrundsmusik.currentTime);
});

/*gør så musikken starter fra den gemte position, når man vender tilbage til siden. */
baggrundsmusik.addEventListener("loadedmetadata", function() {
  console.log("musikken virker")
  const gemTid = sessionStorage.getItem("musikTid");
  if (gemTid !== null) {
    baggrundsmusik.currentTime = Number(gemTid);
  }

  /* forsøger at afspille musikken, og logger en besked i konsollen, hvis det lykkes
  */
  baggrundsmusik.play().then(function() {
  console.log("Musikken spiller");
}).catch(function(feil) {
  console.log("Afspilning fejlede:", feil);
});
  });
