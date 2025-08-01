// Simple script to toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }
});