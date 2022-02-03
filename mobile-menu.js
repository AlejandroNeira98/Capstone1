const menubtn = document.getElementById('menu-icon');
const menu = document.getElementById('mobile-menu');
const closebtn = document.getElementById('close-btn');

menubtn.addEventListener('click', () => {
  menu.style.display = 'flex';
});

closebtn.addEventListener('click', () => {
  menu.style.display = 'none';
});