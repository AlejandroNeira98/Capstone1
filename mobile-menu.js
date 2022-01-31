const menubtn = document.getElementById('menu-icon');
const menu = document.getElementById('mobile-menu');
const closebtn = document.getElementById('close-btn');

menubtn.addEventListener('click', function() {
  menu.style.display = 'flex';
})

closebtn.addEventListener('click', function() {
  menu.style.display = 'none';
})