const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const langBtn = document.getElementById('language-btn');
const langMenu = document.getElementById('language-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

langBtn.addEventListener('click', () => {
  langMenu.classList.toggle('active');
});