// Kodeutdrag fra script.js i Intuitive Flow v4.2.0.
// Brukeren kan filtrere kort etter type og tema uten å laste siden på nytt.
document.addEventListener('DOMContentLoaded', () => {
  const browser = document.querySelector('.resource-browser');
  if (!browser) return;

  // Vi henter knapper, valgmeny, kort og tekstelementer fra HTML.
  const buttons = [...browser.querySelectorAll('[data-library-type]')];
  const topic = browser.querySelector('[data-library-topic]');
  const cards = [...browser.querySelectorAll('.resource-card')];
  const count = browser.querySelector('[data-library-count]');
  const empty = browser.querySelector('[data-library-empty]');

  // 'all' betyr at alle typer skal vises fra starten.
  let kind = 'all';

  function render() {
    let visible = 0;

    // Undersøk hvert kort og bestem om det skal være synlig.
    for (const card of cards) {
      const matches =
        (kind === 'all' || card.dataset.kind === kind) &&
        (!topic || topic.value === 'all' || card.dataset.topic === topic.value);

      card.hidden = !matches;
      if (matches) visible += 1;
    }

    // Vis antall treff, med riktig entall/flertall fra HTML-siden.
    if (count) {
      count.textContent = `${visible} ${visible === 1
        ? browser.dataset.singular
        : browser.dataset.plural}`;
    }

    // Vis meldingen om ingen resultater når ingenting passer.
    if (empty) empty.hidden = visible !== 0;
  }

  // Når en filterknapp trykkes, oppdateres valget og innholdet.
  buttons.forEach(button => button.addEventListener('click', () => {
    kind = button.dataset.libraryType;
    buttons.forEach(b => {
      const selected = b === button;
      b.classList.toggle('is-active', selected);
      b.setAttribute('aria-pressed', String(selected));
    });
    render();
  }));

  // Endringer i temavalg oppdaterer også resultatene.
  if (topic) topic.addEventListener('change', render);
  render(); // Vis riktig resultat når siden åpnes.
});
