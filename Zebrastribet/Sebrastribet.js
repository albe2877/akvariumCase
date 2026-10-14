
//const
//Opret en fast navngivet reference 
//Du fortæller JavaScript, at du vil gemme noget under et navn.

//madBobbel
//Navnet, du vælger
//Du bestemmer selv navnet. Det bliver din måde at henvise til taleboblen på i JavaScript.

//document.querySelector(...)
// Det, der skal gemmes
// JavaScript finder taleboblen i din HTML, og referencen til det fundne element gemmes under navnet madBobbel.


// 1. Skab connection til de fire talebobler i HTML
const levestedBobbel = document.querySelector(".LevestedBobbel");
const madBobbel = document.querySelector(".madBobbel");
const stoerrelseBobbel = document.querySelector(".stoerrelseBobbel");
const alderBobbel = document.querySelector(".alderBobbel");

// 2. Skab connection til de fire lydfiler i HTML
const levestedAudio = document.querySelector("#levestedAudio");
const madAudio = document.querySelector("#madAudio");
const stoerrelseAudio = document.querySelector("#stoerrelseAudio");
const alderAudio = document.querySelector("#alderAudio");


