const cardGroups = document.querySelectorAll('.section10-cards');

cardGroups.forEach(group => {
  const cards = group.querySelectorAll('.section10-card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Chỉ xóa 'active' trong nhóm hiện tại
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
});
