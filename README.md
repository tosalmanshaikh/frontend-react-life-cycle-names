# Opdrachtbeschrijving
Dit is een kleine opdracht om - extra versimpelt - te oefenen met het schrijven van Life Cycle functies.

## Applicatie starten
Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken. Begin met het maken van wijzigingen in src/App.js: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.

## Stappenplan
1. Maak in `App.js` een stukje state aan voor de actieve naam (`activeName`)
2. Geef de _waarde_ daarvan en de _setter functie_ mee aan alle `<NameItem />` componenten
3. Maak de buttons functioneel door de setter functie te gebruiken, die op de klik die specifieke naam als actieve naam _setten_.
4. Zorg ervoor dat `App.js` het volgende doet doormiddel van Life Cycles:
   * Alléén als de pagina gerefresht wordt, wordt er `"We gaan beginnen!"` gelogd
5. Zorg ervoor dat het `NameItem` component het volgende doet doormiddel van Life Cycles:
    * Alléén als de pagina gerefresht wordt, wordt er `"<naam> is in de DOM geplaatst"` gelogd
    * Alleen als de actieve naam veranderd wordt, omdat de gebruiker een button heeft geklikt, en de actieve naam is op dat moment de naam van dát component geworden, wordt er `"<naam> wil graag een biertje bestellen"` gelogd.
