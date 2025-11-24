document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav__toggle');
  const panel = document.querySelector('.nav__panel');
  const overlay = document.querySelector('.overlay'); // исправлено

  if (!toggle || !panel || !overlay) return;

  function closeMenu() {
    panel.classList.remove('nav__panel--visible');
    overlay.classList.remove('overlay--visible'); // исправлено
    toggle.classList.remove('nav__toggle--opened');
    toggle.setAttribute('aria-expanded', false);
    document.body.classList.remove('nav-open');
  }

  toggle.addEventListener('click', () => {
    const isOpened = panel.classList.toggle('nav__panel--visible');
    toggle.classList.toggle('nav__toggle--opened');
    toggle.setAttribute('aria-expanded', isOpened);
    overlay.classList.toggle('overlay--visible', isOpened); // исправлено

    document.body.classList.toggle('nav-open', isOpened);
  });

  overlay.addEventListener('click', closeMenu);
});
