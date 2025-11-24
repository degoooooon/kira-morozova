const toggle = document.querySelector('.nav__toggle');
const panel = document.querySelector('.nav__panel');
const overlay = document.querySelector('.overlay');

function closeMenu() {
  panel.classList.remove('nav__panel--visible');
  overlay.classList.remove('nav__overlay--visible');
  toggle.classList.remove('nav__toggle--opened');
  toggle.setAttribute('aria-expanded', false);
  document.body.classList.remove('nav-open');
}

toggle.addEventListener('click', () => {
  const isOpened = panel.classList.toggle('nav__panel--visible');
  toggle.classList.toggle('nav__toggle--opened');
  toggle.setAttribute('aria-expanded', isOpened);
  overlay.classList.toggle('nav__overlay--visible', isOpened);

  if (isOpened) {
    document.body.classList.add('nav-open');
  } else {
    document.body.classList.remove('nav-open');
  }
});

overlay.addEventListener('click', closeMenu);
