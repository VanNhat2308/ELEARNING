const options = document.querySelector('.options');
const toggleBtn = document.querySelector('.btnToggle');
const cancelBtn = document.querySelector('.cancelButton');

toggleBtn.addEventListener('click', (e) => {
  if (window.innerWidth <= 1024) {
    e.stopPropagation();
    options.style.display = 'block';
  }
});

document.addEventListener('click', (e) => {
  if (window.innerWidth <= 1024) {
    if (
      !options.contains(e.target) &&
      e.target !== toggleBtn &&
      e.target !== cancelBtn
    ) {
      options.style.display = 'none';
    }
  }
});

cancelBtn.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
        options.style.display = 'none';
    }
});
