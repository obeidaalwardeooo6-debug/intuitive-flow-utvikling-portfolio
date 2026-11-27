// Kodeutdrag fra script.js i Intuitive Flow v4.2.0.
// Mobilmenyen skal kunne åpnes, lukkes og brukes med tastatur.
document.addEventListener('DOMContentLoaded', () => {
  // Finn elementene som brukes i menyen.
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const right = document.querySelector('.header-right');

  // Teksten på menyknappen følger språket på siden.
  const closedLabel = toggle?.getAttribute('aria-label') || 'Åpne meny';
  const openLabel = document.documentElement.lang === 'en'
    ? 'Close menu'
    : (document.documentElement.lang === 'nl' ? 'Menu sluiten' : 'Lukk meny');

  if (!header) return;

  // Headeren får en CSS-klasse etter at brukeren har rullet ned.
  const updateHeader = () => header.classList.toggle(
    'scrolled', window.scrollY > 80 || !document.querySelector('.hero')
  );
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // Noen sider kan mangle en mobilmeny.
  if (!toggle || !right) return;

  function closeMenu() {
    right.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', closedLabel);
  }

  // Åpne/lukk menyen når brukeren trykker på knappen.
  toggle.addEventListener('click', () => {
    const isOpening = !right.classList.contains('active');
    right.classList.toggle('active', isOpening);
    toggle.setAttribute('aria-expanded', String(isOpening));
    toggle.setAttribute('aria-label', isOpening ? openLabel : closedLabel);
  });

  // Brukeren kan lukke menyen med Escape.
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && right.classList.contains('active')) {
      closeMenu();
      toggle.focus();
    }
  });

  // Klikk utenfor menyen, eller på en lenke, lukker den.
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  right.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', closeMenu)
  );

  // Hvis vinduet blir bredt, skal mobilmenyen ikke bli stående åpen.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) closeMenu();
  });
});
