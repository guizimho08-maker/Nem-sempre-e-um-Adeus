// Pequenas aparições suaves conforme a página é percorrida.
const items = document.querySelectorAll('.memory-section, .letter, .music-card, footer');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => {
    item.classList.add('reveal');
    observer.observe(item);
  });
}