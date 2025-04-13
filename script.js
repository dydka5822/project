document.addEventListener('DOMContentLoaded', function () {
  // Мобільне меню
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Перевірка на наявність елементів перед додаванням події
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
    });
  }

  // Кнопка вибору мови
  const languageBtn = document.getElementById('language-btn');
  const languageMenu = document.getElementById('language-menu');

  if (languageBtn && languageMenu) {
    languageBtn.addEventListener('click', function () {
      languageMenu.classList.toggle('active');
    });
  }
});
