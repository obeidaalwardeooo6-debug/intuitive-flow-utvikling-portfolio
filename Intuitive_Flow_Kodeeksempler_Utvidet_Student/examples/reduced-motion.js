// Kodeutdrag fra script.js i Intuitive Flow v4.2.0.
// Videoen i toppen er dekorasjon. Noen brukere ønsker mindre bevegelse.
document.addEventListener('DOMContentLoaded', () => {
  const ocean = document.querySelector('.hero-video');
  if (!ocean || !window.matchMedia) return;

  // Les brukerens systeminnstilling for redusert bevegelse.
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const adapt = () => {
    if (motion.matches) {
      // Når brukeren ønsker mindre bevegelse, stoppes videoen.
      ocean.pause();
    } else if (ocean.hasAttribute('autoplay')) {
      // Ellers kan nettleseren prøve å starte videoen.
      const request = ocean.play();
      if (request && typeof request.catch === 'function') {
        // Nettleseren kan nekte automatisk avspilling; unngå feil i konsollen.
        request.catch(() => {});
      }
    }
  };

  adapt(); // Kjør ved første sideinnlasting.

  // Reager også hvis brukeren endrer innstillingen mens siden er åpen.
  if (motion.addEventListener) motion.addEventListener('change', adapt);
  else if (motion.addListener) motion.addListener(adapt);
});
