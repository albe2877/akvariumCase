
console.log("Det virker sgu!!:)");


//const
//Opret en fast navngivet reference 
//Du fortæller JavaScript, at du vil gemme noget under et navn.

//madBobbel
//Navnet, du vælger
//Du bestemmer selv navnet. Det bliver din måde at henvise til taleboblen på i JavaScript.

//document.querySelector(...)
// Det, der skal gemmes
// JavaScript finder taleboblen i din HTML, og referencen til det fundne element gemmes under navnet madBobbel.


// 1. Find de fire talebobler i HTML, og gem en reference til hver
const levestedBobbel = document.querySelector(".LevestedBobbel");
const madBobbel = document.querySelector(".madBobbel");
const stoerrelseBobbel = document.querySelector(".stoerrelseBobbel");
const alderBobbel = document.querySelector(".alderBobbel");

// 2. Find de fire lydfiler i HTML, og gem en reference til hver
const hejTrykPaaMigAudio = document.querySelector("#hejTrykPaaMig")
const levestedAudio = document.querySelector("#levestedAudio");
const madAudio = document.querySelector("#madAudio");
const stoerrelseAudio = document.querySelector("#stoerrelseAudio");
const alderAudio = document.querySelector("#alderAudio");

setTimeout(function() {
    console.log("Nu afspilles velkomstlyden");
    hejTrykPaaMigAudio.play().catch(function(error) {
        console.warn("Browseren tillod ikke automatisk afspilning:", error);
    });
}, 1000);

// Det der kommer nu er vores opskrift. 
//Vi opretter en funktion som gør noget bestemt. Vi giver den navnet: afspilLyd.
//(lyd) er en parameter. Den gør det muligt at sende en bestemt lydfil ind i funktionen,når vi senere kalder den.

function afspilLyd(lyd) {

    console.log("1. Funktionen afspilLyd bliver kørt");

    // Stop velkomstlyden
    hejTrykPaaMigAudio.pause();
    hejTrykPaaMigAudio.currentTime = 0;

    console.log("2. Velkomstlyden er sat på pause");

    // Stop alle informationslyde
    levestedAudio.pause();
    madAudio.pause();
    stoerrelseAudio.pause();
    alderAudio.pause();

    // Nulstil informationslydene
    levestedAudio.currentTime = 0;
    madAudio.currentTime = 0;
    stoerrelseAudio.currentTime = 0;
    alderAudio.currentTime = 0;

    console.log("3. Afspiller den valgte lyd");

    // Afspil den valgte informationslyd
    lyd.play().catch(function(error) {
        console.error("Kunne ikke afspille lydfilen:", error);
    });
        //lyd henviser til den lydfil vi har sendt ind i funktionen
        //.play() starter afspilningen af lyden 
}


    
// Nu skal vi gøre taleboblerne klikbare, og forbinde dem med den rigtige lydfil

// Klik på Levested
levestedBobbel.addEventListener("click", function() {
    console.log("Levested blev valgt");

    hejTrykPaaMigAudio.pause(); // Stop velkomstlyden
    afspilLyd(levestedAudio);
});

// Klik på Mad
madBobbel.addEventListener("click", function() {
    console.log("Mad blev valgt");

    hejTrykPaaMigAudio.pause(); // Stop velkomstlyden
    afspilLyd(madAudio);
});

// Klik på Størrelse
stoerrelseBobbel.addEventListener("click", function() {
    console.log("Størrelse blev valgt");

    hejTrykPaaMigAudio.pause(); // Stop velkomstlyden
    afspilLyd(stoerrelseAudio);
});

// Klik på Alder
alderBobbel.addEventListener("click", function() {
    console.log("Alder blev valgt");

    hejTrykPaaMigAudio.pause(); // Stop velkomstlyden
    afspilLyd(alderAudio);
});

//alderBobbel
// Er en variabel, der indeholder en reference til Alder-taleboblen i HTML. (Den viser hen til boblen i html)

//.addEventListener 
// Er en metode, der fortæller JavaScript, at det skal lytte efter en bestemt hændelse på taleboblen.
// Altså når der kommer klik på levestedBobbel skal der ske noget ->

//"click" 
// Er den hændelse, vi lytter efter. Her er det et klik med musen eller et tryk på elementet.

//function() 
// Er en funktion, der indeholder den kode, som skal udføres, når der bliver klikket på taleboblen. Længere oppe lavede vi funktionen afspilLyd.

//console.log() 
// Er en metode, der skriver en besked i console. Vi bruger den til at kontrollere, om koden virker, og til at finde fejl.

//afspilLyd() 
// Er den opskrift vi tidligere lavede.
// Nu fortæller vi altså at den skal bruge opskriften vi lavede tidliger. 
// -> Stop alle fire lydfiler først 
// -> Start den valgte lyd fra begyndelsen 
// -> Skriv en besked i konsollen, så vi kan følge med i, hvad koden gør. 
// -> Afspil den lyd, vi har valgt