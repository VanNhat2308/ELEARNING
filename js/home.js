const cards = document.querySelectorAll('.section10-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove active from all
    cards.forEach(c => c.classList.remove('active'));
    // Add active to clicked
    card.classList.add('active');
  });
});
