# 5. Tekniske løsninger og programmering

## Innledning

I Intuitive Flow har jeg brukt HTML, CSS og JavaScript. HTML bestemmer innholdet på sidene, CSS bestemmer hvordan det ser ut, og JavaScript gjør at brukeren kan gjøre mer enn bare å lese tekst.

I denne delen viser jeg fem kodeeksempler fra versjon 4.2.0. Jeg har valgt dem fordi de viser forskjellige deler av programmeringen. Eksemplene har fått kommentarer og litt tydeligere formatering, men de er hentet fra prosjektet. Jeg forklarer hvordan de fungerer, hva jeg må være oppmerksom på, og hvordan jeg kan kontrollere resultatet.

## 5.1 Navigasjonsmeny med JavaScript

**Kode:** [`examples/navigation.js`](../examples/navigation.js)

På mobil har nettsiden en knapp som åpner og lukker menyen. Når siden er ferdig lastet, bruker JavaScript `querySelector` til å finne menyknappen (`.menu-toggle`) og menyområdet (`.header-right`).

Når brukeren klikker, kjøres en `event listener`. Koden undersøker først om menyen allerede er åpen. Deretter legger den til eller fjerner CSS-klassen `active`. Koden oppdaterer også `aria-expanded` til `true` eller `false`, slik at menyens tilstand blir tydeligere for hjelpemidler.

Jeg har også sett hvordan menyen kan lukkes med Escape-tasten, med klikk utenfor og ved valg av en lenke. Når vinduet blir bredt, lukkes mobilmenyen automatisk.

**Hvorfor denne løsningen?** På mindre skjermer er det ikke plass til alle lenkene. En menyknapp gjør det lettere å bruke nettstedet.

**Slik kan jeg kontrollere:** Jeg åpner nettsiden i mobilvisning, trykker på knappen, lukker den med Escape og prøver å navigere videre.

**Dette vil jeg øve mer på:** Å forstå samspillet mellom HTML-elementer, CSS-klasser og hendelser i JavaScript.

## 5.2 Filtrering av innhold

**Kode:** [`examples/library-filter.js`](../examples/library-filter.js)

I biblioteket kan brukeren velge hvilken type innhold som skal vises. JavaScript finner alle kortene og leser informasjonen som er lagret i HTML med `data-`-attributter.

For hvert kort sammenligner en betingelse (`if`-lignende uttrykk) valgt type og tema med kortets verdier. Hvis et kort ikke passer, får det egenskapen `hidden = true`. En løkke (`for ... of`) undersøker alle kortene. Deretter oppdateres antallet synlige kort på siden.

Når brukeren trykker på en filterknapp eller endrer tema, kjøres funksjonen `render()` på nytt. Innholdet oppdateres uten at nettleseren må laste inn hele siden på nytt.

**Hvorfor denne løsningen?** Det blir enklere å finne riktig innhold når det finnes mange kort på samme side.

**Slik kan jeg kontrollere:** Jeg velger ulike filtre og ser om de riktige kortene og antallet resultater vises. Jeg kontrollerer også hva som skjer hvis det ikke finnes treff.

**Dette vil jeg øve mer på:** `dataset`, løkker, betingelser og hvordan funksjoner kan brukes flere ganger.

## 5.3 Tilgjengelighet og redusert bevegelse

**Kode:** [`examples/reduced-motion.js`](../examples/reduced-motion.js)

På forsiden finnes en dekorativ video. Noen brukere ønsker mindre bevegelse på skjermen. JavaScript bruker `matchMedia('(prefers-reduced-motion: reduce)')` for å lese denne innstillingen.

Hvis brukeren ønsker mindre bevegelse, stoppes videoen med `pause()`. Hvis det er tillatt, kan koden prøve å spille videoen av igjen. Den følger også med på om innstillingen endres.

**Hvorfor denne løsningen?** En nettside bør ta hensyn til forskjellige brukere, ikke bare hvordan designet ser ut.

**Slik kan jeg kontrollere:** Jeg slår på redusert bevegelse i systemet eller i utviklerverktøyet og undersøker om videoen stopper.

**Dette vil jeg øve mer på:** Tilgjengelighet, systeminnstillinger og hva som skjer når nettleseren ikke tillater automatisk videoavspilling.

## 5.4 Responsivt design med CSS

**Kode:** [`examples/responsive-cards.css`](../examples/responsive-cards.css)

Tjenestekortene bruker CSS Grid. `grid-template-columns: repeat(3, minmax(0, 1fr))` lager tre kolonner på større skjermer. `gap: 22px` bestemmer mellomrommet mellom kortene.

Med `@media (max-width: 970px)` endres oppsettet til én kolonne når skjermen blir mindre. På ekstra smale skjermer blir også avstanden inni kortene redusert.

**Hvorfor denne løsningen?** Et oppsett med tre kolonner kan bli for trangt på mobil. Én kolonne gir bedre plass til tekst og knapper.

**Slik kan jeg kontrollere:** Jeg bruker mobilvisning i nettleserens utviklerverktøy og endrer skjermbredden.

**Dette vil jeg øve mer på:** CSS Grid, media queries og hvordan ulike skjermstørrelser påvirker layout.

## 5.5 Språkvalg i HTML

**Kode:** [`examples/language-switcher.html`](../examples/language-switcher.html)

Intuitive Flow finnes på norsk, engelsk og nederlandsk. I eksempelet bruker jeg `<a>` for å lage lenker mellom språkversjonene. `href` bestemmer hvilken fil lenken peker til, og `lang` angir språket. På den norske siden er norsk markert som aktivt med `aria-current="page"`.

**Hvorfor denne løsningen?** Besøkende skal enkelt kunne finne en språkversjon de forstår. Egne mapper gjør det også mulig å organisere innholdet etter språk.

**Slik kan jeg kontrollere:** Jeg åpner den norske forsiden og trykker på NO, EN og NL for å se om de riktige sidene åpnes.

**Dette vil jeg øve mer på:** Å holde lenker og navigasjon oppdatert når samme nettsted finnes på flere språk.

## 5.6 Viktige begreper

| Begrep | Hva betyr det? | Eksempel i prosjektet |
|---|---|---|
| DOM | Nettleserens struktur av HTML-elementer. | JavaScript finner menyknappen med `querySelector`. |
| Event listener | Kode som reagerer når noe skjer. | Menyen reagerer på et klikk. |
| `dataset` | Gir tilgang til HTML-verdier fra `data-`-attributter. | Biblioteket leser type og tema fra kortene. |
| CSS Grid | Måte å plassere elementer i rader og kolonner. | Tjenestekort på forsiden. |
| Media query | CSS-regel som gjelder ved bestemte forhold. | Kortene vises i én kolonne på mobil. |
| ARIA | Informasjon som hjelper hjelpemidler å forstå elementer. | `aria-expanded` viser om menyen er åpen. |

## 5.7 Hva jeg har lært

Gjennom prosjektet har jeg blitt tryggere på HTML og CSS. Jeg forstår bedre hvordan jeg kan bygge en side, bruke klasser og tilpasse designet til ulike skjermstørrelser.

JavaScript har vært mer utfordrende. Jeg kan følge koden og forstå mer når jeg får forklart hva en funksjon gjør, men jeg trenger fortsatt øvelse for å skrive slike funksjoner helt selvstendig. Jeg vil spesielt lære mer om variabler, hendelser, løkker og feilsøking.

Jeg har også lært at små kodeendringer bør kontrolleres i nettleseren. Det er viktig å vite **hva** koden gjør, men også **hvorfor** den er brukt, og hvordan jeg kan finne ut om den fungerer riktig.

## Oppsummering

Disse eksemplene viser hvordan HTML, CSS og JavaScript samarbeider i Intuitive Flow. De viser ikke hele nettstedet, men utvalgte funksjoner som jeg kan åpne, lese og forklare i forbindelse med vurderingen i utvikling.
