const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  toggle.classList.remove('active');
  nav.classList.remove('active');
  overlay.classList.remove('active');
});
