// Dropdown toggle (avatar)
const downButton = document.querySelector('.down');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (downButton && dropdownMenu) {
  downButton.addEventListener('click', function (e) {
    e.stopPropagation(); // tránh đóng ngay khi click
    dropdownMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', function () {
    if (!dropdownMenu.classList.contains('hidden')) {
      dropdownMenu.classList.add('hidden');
    }
  });
}

// Sidebar toggle (menu button)
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.side-bar');

if (menuButton && sidebar) {
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    sidebar.classList.add('show');
  });

  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      sidebar.classList.remove('show');
    }
  });
}
