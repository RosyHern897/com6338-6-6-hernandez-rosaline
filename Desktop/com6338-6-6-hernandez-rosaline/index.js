// index.js

const btn = document.getElementById('menuToggle');
const menu = document.getElementById('main-menu');

// Open menu
function openMenu() {
  btn.setAttribute('aria-expanded', 'true');
  btn.setAttribute('aria-label', 'Close menu');
  menu.hidden = false;
}

// Close menu
function closeMenu() {
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Open menu');
  menu.hidden = true;
}

// Toggle menu
function toggleMenu() {
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Event: click button
btn.addEventListener('click', toggleMenu);

// Event: Escape key closes menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
    btn.focus();
  }
});

// Event: click outside closes menu
document.addEventListener('click', (e) => {
  const clickedInside = btn.contains(e.target) || menu.contains(e.target);
  if (!clickedInside) {
    closeMenu();
  }
});
