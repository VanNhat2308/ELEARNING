const cardGroups = document.querySelectorAll('.section10-cards');
const seeMore = document.querySelector('#seeMoreFea')
seeMore.addEventListener('click',(e)=>{
  e.preventDefault()
  const item = document.querySelector(".addedItem")
   item.style.display = (getComputedStyle(item).display === "none") ? "block" : "none";
})

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
