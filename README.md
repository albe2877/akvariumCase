# akvariumCase

Repository til gruppearbejde om akvarieskærmen i Storcenter Nord.

## Svømmeskærmen

Svømmeskærmen er lavet i `Svoemmeskaerm/Svoemmeskaerm.html` med styling i
`Svoemmeskaerm/Svoemmeskaerm.css`. Skærmen viser akvariets baggrund med
illustrationer af dyr fra `Images/Svømmeskærm` placeret ovenpå.

### HTML og billeder

- HTML-dokumentets sprog er sat til dansk, og dokumentet indlæser det tilhørende
  CSS-stylesheet.
- Akvariebaggrunden indlæses fra `Images/baggrund.svg` som et dekorativt billede.
  Den har derfor en tom alternativ tekst, så skærmlæsere ikke får oplæst
  baggrunden som indhold.
- De 14 illustrationer er samlet i en liste med en tilgængelig dansk
  overskrift. Hvert billede har sin egen alternative tekst med dyrets navn.
- Listen indeholder gulfinnet kirurgfisk, havsnegl, klovnfisk, orangeplettet
  kirurgfisk, paletkirurg, pincetfisk, pindsvinefisk, rævefjæs,
  rødehavskirurg, røgfarvet kirurgfisk, sohal kirurg, søstjerne, turbosnegl
  og zebrastribet kirurgfisk.
- Billedstierne er relative til HTML-filen. SVG’ernes oprindelige proportioner
  bevares, så de ikke strækkes ud af form.

### Layout og baggrund

- Scenen fylder hele browserens højde. Baggrunden dækker scenen, og dens
  `object-fit: cover`-indstilling tilpasser den til skærmen uden at forvrænge
  billedet. Afhængigt af skærmens format kan noget af baggrundens yderkant blive
  beskåret.
- På større skærme vises illustrationerne i fire kolonner og fire rækker.
  Hvert dyr har sit eget lige store gitterfelt med afstand og indvendig luft,
  så billederne fordeles over baggrunden uden at overlappe hinanden.
- Billederne bruger `object-fit: contain`, så hele hver illustration kan ses
  inden for sit felt, også når de enkelte SVG-filer har forskellige formater.
- På skærme, der er højst 600 pixels brede, skifter gitteret til to kolonner
  og syv rækker. Mellemrum og indvendig luft justeres, så layoutet passer til
  den smallere skærm.
- Scenen og siden skjuler overskydende indhold, så skærmen ikke får
  rullebjælker.

### Bevægelse og tilgængelighed

- Hvert dyr bevæger sig roligt syv pixels fra side til side i en løbende
  animation på seks sekunder. Bevægelsen går frem og tilbage og er forskudt
  mellem elementerne, så alle dyrene ikke svømmer i takt.
- Den sideværts bevægelse ligger inden for hvert gitterfelt; billedernes
  bevægelse ændrer ikke gitterets placering.
- SVG-filer, der selv indeholder animationer, bruges fortsat som SVG-billeder,
  så deres eksisterende animationer bevares.
- Hvis brugerens enhed er indstillet til reduceret bevægelse, slår CSS
  svømmeanimationen fra for at følge brugerens bevægelsesindstilling.

### SVG-baggrunde

Fem SVG-illustrationer havde en udfyldt rektangel som baggrund, der dækkede
akvariebilledet bag dem. De rektangler er fjernet, så baggrunden nu er
gennemsigtig omkring dyrene:

- `OrangeplettetSvømmeskærm.svg`
- `PindsvinefiskSvømmeskærm.svg`
- `RødehavskirurgSvømmeskærm.svg`
- `SohalkirurgSvømmeskærm.svg`
- `TurbosneglSvømmeskærm.svg`

Kun de udfyldte baggrundsrektangler blev fjernet; illustrationernes øvrige
indhold, farver og animationer er bevaret.
