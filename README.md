# Opdrachtbeschrijving
Je gaat een applicatie maken die bijhoudt wie er op dit moment een rondje geeft!

![screenshot](./src/assets/screenshot.png)

Wanneer het component voor het eerst gerenderd wordt, wil je dit in de console loggen. En wanneer de persoon die een rondje geeft veranderd, log je dit ook in de console.
Hier zul je dus twee life cycle effecten voor moeten toepassen! Volg de stapjes in het onderstaande stappenplan.

## Applicatie starten
Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken. Begin met het maken van wijzigingen in src/App.js: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.

## Stappenplan
1. Maak in `App.js` een stukje state aan voor de actieve naam (`activeName`) die op dat moment een rondje geeft;
2. Geef de _waarde_ daarvan en de _setter functie_ mee aan alle `<NameItem />` componenten;
3. Maak de buttons functioneel door de setter functie te gebruiken, die op de klik die specifieke naam als actieve naam _setten_.
4. Zorg ervoor dat `App.js` het volgende doet doormiddel van Life Cycles:
   * Alléén als de pagina gerefresht wordt, wordt er `"We gaan beginnen!"` gelogd. _Tip_: kies een leuke emoji ter referentie
5. Zorg ervoor dat het `NameItem` component het volgende doet doormiddel van Life Cycles:
   * Alléén als het component gemount wordt, wordt er `"<naam> is in de DOM geplaatst"` gelogd
   * Alleen als de actieve naam veranderd wordt (omdat de gebruiker een button heeft geklikt) en de actieve naam is op dat moment de naam van dát component geworden, wordt er `"<naam> wil graag een biertje bestellen"` gelogd.

## De applicatie starten
1. `npm install`
2. `npm start`
