# Kodeeksempler fra Intuitive Flow

## Hva viser jeg her?

Jeg har valgt ut fem korte eksempler fra Intuitive Flow versjon 4.2.0. De viser noen av løsningene jeg har jobbet med i HTML, CSS og JavaScript. Jeg har lagt til kommentarer på norsk og formatert koden slik at den er enklere å lese. Funksjonene bygger på den samme koden som finnes i prosjektet.

| Fil | Hva koden gjør | Hva jeg viser |
|---|---|---|
| [`navigation.js`](navigation.js) | Åpner og lukker mobilmenyen. | Hendelser, CSS-klasser og tilgjengelighet. |
| [`library-filter.js`](library-filter.js) | Filtrerer innhold etter type og tema. | Løkker, betingelser og `dataset`. |
| [`reduced-motion.js`](reduced-motion.js) | Tilpasser en dekorativ video til brukerens innstillinger. | `matchMedia` og håndtering av endringer. |
| [`responsive-cards.css`](responsive-cards.css) | Viser tjenestekort i tre eller én kolonne. | CSS Grid og media queries. |
| [`language-switcher.html`](language-switcher.html) | Lager lenker mellom tre språk. | HTML-lenker, relative filstier og `lang`. |

## Hvordan fungerer eksemplene?

### 1. Mobilmeny – `navigation.js`

Når siden er lastet, finner JavaScript menyknappen og menyen ved hjelp av `querySelector`. Når jeg trykker på knappen, endrer koden klassen `active`. CSS kan da vise eller skjule menyen. Koden oppdaterer også `aria-expanded` og teksten på knappen.

Menyen kan lukkes med Escape, ved klikk utenfor eller ved valg av en lenke. Dette er nyttig på små skjermer, der hele menyen ikke har plass i toppfeltet.

**Eksempel på kontroll:** Åpne siden på mobil, trykk menyknappen, lukk med Escape og prøv å velge en lenke.

### 2. Filtrering – `library-filter.js`

Kortene i biblioteket har informasjon i HTML, for eksempel `data-kind` og `data-topic`. JavaScript leser verdiene gjennom `dataset` og sammenligner dem med det brukeren har valgt. Kort som ikke passer, får `hidden = true`.

Funksjonen teller også hvor mange kort som er synlige. Hvis ingen passer, vises en egen melding. Hele siden trenger ikke å lastes på nytt.

**Eksempel på kontroll:** Velg en type og et tema. Se at kortene og antallet resultater endrer seg. Prøv et valg uten treff.

### 3. Mindre bevegelse – `reduced-motion.js`

Noen brukere har valgt at de ønsker mindre animasjon. `window.matchMedia` undersøker denne innstillingen. Hvis den er aktiv, stopper JavaScript en dekorativ video. Hvis innstillingen endres, prøver koden å tilpasse videoen på nytt.

Jeg har lært at en visuell effekt ikke alltid passer for alle. Tilgjengelighet er derfor en del av utviklingsarbeidet.

**Eksempel på kontroll:** Endre innstillingen for redusert bevegelse i systemet eller i nettleserens utviklerverktøy. Se hva som skjer med videoen.

### 4. Responsivt design – `responsive-cards.css`

CSS Grid brukes til å vise tjenestekort ved siden av hverandre. På større skjermer er det tre kolonner. Når skjermen blir 970 piksler eller smalere, brukes én kolonne.

Jeg har også tatt med regelen som gir mindre innvendig avstand på smale mobilskjermer. Dette gjør det enklere å lese innholdet.

**Eksempel på kontroll:** Endre vindusbredden i nettleseren. Sammenlign antall kolonner på PC og mobil.

### 5. Tre språk – `language-switcher.html`

HTML-lenkene lar brukeren bytte mellom norsk, engelsk og nederlandsk. `href` viser hvor lenken går. `lang` forteller hvilket språk lenken gjelder. På den norske siden er NO markert med `aria-current="page"`.

Jeg har lært at lenkene må peke til riktig mappe, og at jeg må kontrollere språkvalget når sider endres.

**Eksempel på kontroll:** Åpne den norske forsiden og prøv NO, EN og NL. Se at riktig side åpnes.

## Viktig å forstå

Dette er **kodeutdrag**, ikke en komplett nettside som kan kjøres alene. Eksemplene bruker klasser og HTML-elementer som finnes i det originale nettstedet. CSS-eksempelet bruker også fargevariabler som er definert i den større stilfilen.

Noen kommentarer og linjeskift er lagt til for å gjøre koden enklere å lese. De endrer ikke den beskrevne funksjonen. Flere detaljer finnes i [`05-tekniske-losninger.md`](../docs/05-tekniske-losninger.md).
