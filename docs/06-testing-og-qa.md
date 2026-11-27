# 6. Testing og kvalitetssikring (QA)

## Innledning

Testing har vært en viktig del av arbeidet med Intuitive Flow.

Når jeg gjør endringer på nettsiden, må jeg kontrollere at funksjonene fortsatt fungerer. En liten endring i koden kan noen ganger påvirke andre deler av nettsiden.

I dette prosjektet har jeg jobbet med å kontrollere filer, lenker, design og forskjellige funksjoner.

## Hva er QA?

QA betyr Quality Assurance, eller kvalitetssikring på norsk.

Målet er å finne feil, rette dem og kontrollere at nettsiden fungerer som forventet.

## Kontroll av prosjektet

I prosjektversjon 4.2.0 ble det gjennomført automatiske kontroller av filene.

| Test | Resultat |
|---|---|
| Kontroll av ZIP-filen | Ingen skadede filer funnet |
| HTML-filer | 39 sider |
| Lokale filreferanser | 669 kontrollert |
| Manglende lokale filer | 0 funnet |
| Netlify-skjemaer | 6 funnet |
| JavaScript-syntaks | 2 originale filer kontrollert uten syntaksfeil |

Disse resultatene viser at filstrukturen er kontrollert. Det betyr ikke at alle funksjoner på den publiserte nettsiden er ferdig testet.

## Testing av responsivt design

Et viktig mål har vært at nettsiden skal fungere på mobil, nettbrett og PC.

Jeg har derfor jobbet med CSS og forskjellige skjermstørrelser.

En utfordring i prosjektet var plasseringen av en bookingknapp på mobil. Knappen kunne komme i veien for annet innhold.

I versjon 4.1.9 ble plasseringen forbedret slik at knappen følger innholdet på mindre skjermer.

Dette lærte meg at designet må kontrolleres på forskjellige skjermstørrelser, og ikke bare på PC.

## Testing av navigasjon og språk

Nettsiden har tre språk: norsk, engelsk og nederlandsk.

Det er viktig å kontrollere at navigasjonen og språkvalget fører til riktige sider.

Jeg har også jobbet med tilgjengelighet i navigasjonsmenyen, blant annet bruk av tastatur og Escape-tasten.

## Testing av bildegalleriet

Bildegalleriet har blitt utviklet og forbedret under prosjektet.

I versjon 4.1.4 ble galleriet testet i Chromium med simulert bildeinnlasting.

Testene omfattet blant annet:

- Visning av 19 bilder.
- Navigasjon med piler.
- Valg av miniatyrbilder.
- Åpning og lukking av bildevisning.
- Kontroll av galleriet på alle tre språk.

Testene fungerte i testmiljøet. Dette var ikke en full test av den publiserte nettsiden.

## Kontaktskjema

Jeg har brukt Netlify Forms til kontaktskjemaene på nettsiden.

I prosjektfilene er det funnet seks skjemaer som bruker Netlify.

For å kontrollere hele funksjonen må jeg også teste at en melding faktisk blir sendt og mottatt gjennom den publiserte nettsiden.

## Videre testing

Jeg ønsker å bli bedre på å teste nettsider på en systematisk måte.

Dette er noen kontroller jeg vil arbeide videre med:

- Testing på forskjellige mobiltelefoner og nettlesere.
- Kontroll av navigasjon og språkvalg.
- Testing av alle kontaktskjemaer.
- Kontroll av eksterne lenker.
- Testing av tilgjengelighet og tastaturbruk.
- Flere automatiske tester med JavaScript.

## Hva har jeg lært?

Gjennom prosjektet har jeg lært at testing er en viktig del av programmering.

Det er ikke nok at koden fungerer én gang. Jeg må også undersøke om den fungerer etter endringer, og om den fungerer på forskjellige enheter.

Jeg har fortsatt mye å lære om automatisert testing og feilsøking.

## Oppsummering

Arbeidet med Intuitive Flow har gitt meg mer erfaring med kvalitetssikring og testing av nettsider.

Jeg har lært at det er viktig å kontrollere endringer og rette feil før en ny versjon publiseres.

Dette er noe jeg ønsker å bli bedre på i videre arbeid med IT-utvikling.
