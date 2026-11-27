# 5. Tekniske løsninger og programmering

## Innledning

I dette prosjektet har jeg jobbet med HTML, CSS og JavaScript for å utvikle nettsiden Intuitive Flow.

Jeg har lært at disse teknologiene har forskjellige oppgaver, men at de må fungere sammen.

I denne delen viser jeg noen eksempler fra koden i prosjektet. Jeg forklarer hva koden gjør, og hvorfor den er brukt.

Kodeeksemplene er korte utdrag fra prosjektversjon 4.2.0.

## 5.1 HTML – Struktur og innhold

HTML brukes til å bygge opp nettsiden. Jeg har brukt HTML til overskrifter, tekst, knapper, navigasjon og forskjellige seksjoner.

Et eksempel er språkvalget på nettsiden:

```html
<a href="./index.html" lang="nb">NO</a>
<a href="../EN/index.html" lang="en">EN</a>
<a href="../NL/index.html" lang="nl">NL</a>
```

**Forklaring:**

- `<a>` lager en lenke.
- `href` bestemmer hvor lenken går.
- `lang` forteller hvilket språk lenken bruker.

Nettsiden har tre språk: norsk, engelsk og nederlandsk. Jeg har lært at det er viktig å kontrollere lenkene mellom språkversjonene.

## 5.2 CSS – Design og responsivt oppsett

CSS brukes til å bestemme hvordan nettsiden ser ut.

Jeg har jobbet med farger, tekststørrelser, avstander, knapper og oppsett.

Et eksempel fra prosjektet er hvordan kortene på nettsiden tilpasses mindre skjermer:

```css
.home-service-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

@media (max-width: 970px) {
  .home-service-cards {
    grid-template-columns: 1fr;
  }
}
```

**Forklaring:**

- `display: grid` brukes til å organisere elementer.
- `grid-template-columns` bestemmer antall kolonner.
- `gap` lager mellomrom.
- `@media` gjør det mulig å endre designet etter skjermstørrelsen.

På større skjermer kan kortene vises i tre kolonner. På mindre skjermer blir de vist i én kolonne.

Dette har hjulpet meg med å forstå hvordan responsivt design fungerer.

## 5.3 JavaScript – Navigasjonsmeny

JavaScript brukes for å gjøre nettsiden interaktiv.

Et eksempel er menyen på mobil. Den skal kunne åpnes og lukkes når brukeren trykker på menyknappen.

```javascript
const toggle = document.querySelector('.menu-toggle');
const right = document.querySelector('.header-right');

toggle.addEventListener('click', () => {
  const isOpening = !right.classList.contains('active');
  right.classList.toggle('active', isOpening);
  toggle.setAttribute('aria-expanded', String(isOpening));
});
```

**Forklaring:**

- `querySelector` finner et HTML-element.
- `addEventListener` reagerer når brukeren klikker.
- `classList.toggle` legger til eller fjerner en CSS-klasse.
- `aria-expanded` viser om menyen er åpen eller lukket.

Dette er en del av den opprinnelige menykoden. Den komplette løsningen kontrollerer også blant annet Escape-tasten og klikk utenfor menyen.

Jeg har lært mer om hvordan JavaScript kan endre HTML-elementer. Samtidig trenger jeg mer øvelse for å forstå og skrive slike funksjoner helt selvstendig.

## 5.4 JavaScript – Filtrering av innhold

På nettsiden finnes det en funksjon som filtrerer innhold i biblioteket.

JavaScript kontrollerer hva brukeren har valgt, og viser bare kortene som passer til valget.

Et utdrag fra koden:

```javascript
const matches = (kind === 'all' || card.dataset.kind === kind) &&
  (!topic || topic.value === 'all' || card.dataset.topic === topic.value);

card.hidden = !matches;
```

**Forklaring:**

- `dataset` leser informasjon fra HTML-elementer.
- `matches` kontrollerer om innholdet passer med filtreringen.
- `hidden` brukes til å skjule kort som ikke passer.

Dette gjør at innholdet kan filtreres uten at hele siden må lastes inn på nytt.

Denne delen av JavaScript er mer avansert for meg. Jeg ønsker å lære mer om betingelser, variabler og hvordan funksjoner arbeider med flere elementer.

## 5.5 HTML og Netlify Forms – Kontaktskjema

Jeg har også jobbet med kontaktskjemaer.

Et eksempel fra den norske kontaktsiden:

```html
<form
  action="/NO/takk"
  class="contact-form"
  data-netlify="true"
  method="POST"
  name="kontakt"
  netlify-honeypot="bot-field">
```

**Forklaring:**

- `<form>` brukes til å lage et skjema.
- `method="POST"` brukes når skjemaet sender informasjon.
- `data-netlify="true"` brukes av Netlify til skjemahåndtering.
- `action` angir hvor brukeren sendes etter innsending.

Jeg har lært hvordan HTML-skjemaer kan brukes sammen med en tjeneste som Netlify.

Dette gjør at jeg ikke trenger å programmere en egen server for å motta skjemaene.

## 5.6 Tilgjengelighet – Mindre animasjon

Nettsiden har også støtte for brukere som ønsker mindre bevegelse på skjermen.

I JavaScript brukes:

```javascript
const motion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);
```

Koden brukes til å undersøke brukerens innstillinger for animasjon. I prosjektet kan en dekorativ video stoppes når brukeren foretrekker mindre bevegelse.

Jeg har lært at tilgjengelighet er viktig når man lager nettsider. En nettside bør ikke bare se bra ut, men også være behagelig og enkel å bruke.

## 5.7 Hva har jeg lært av programmeringen?

Gjennom prosjektet har jeg fått mer praktisk erfaring med HTML, CSS og JavaScript.

Jeg føler meg tryggere på HTML og CSS enn på JavaScript.

JavaScript har vært mer utfordrende fordi jeg må forstå variabler, funksjoner, betingelser og hvordan forskjellige deler av koden fungerer sammen.

Når jeg møter kode jeg ikke forstår, trenger jeg ofte å lese forklaringer og prøve meg fram.

Jeg har lært at programmering krever tålmodighet, testing og mye øvelse.

## Oppsummering

Jeg har brukt flere tekniske løsninger for å bygge nettsiden Intuitive Flow.

HTML brukes til strukturen, CSS til designet og JavaScript til interaktive funksjoner.

Prosjektet har gitt meg bedre forståelse for webutvikling. Samtidig vet jeg at jeg fortsatt har mye å lære, spesielt innen JavaScript og problemløsning.
