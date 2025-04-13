document.addEventListener("DOMContentLoaded", function () {
  // Перевірка на наявність елементів, щоб уникнути помилок
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const languageBtn = document.getElementById('language-btn');
  const languageMenu = document.getElementById('language-menu');

  // Мобільне меню
  if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function () {
          mobileMenu.classList.toggle('active');
      });
  }

  // Вибір мови
  if (languageBtn && languageMenu) {
      languageBtn.addEventListener('click', function () {
          languageMenu.classList.toggle('active');
      });
  }
});