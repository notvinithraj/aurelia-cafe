// ============================================
// AURELIA CAFÉ — MAIN SCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
// ---------- ELEMENTS ----------
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];

// ---------- MOBILE NAV TOGGLE ----------
if (mobileToggle && navMenu) {
// Open / close when the hamburger button is clicked
mobileToggle.addEventListener('click', () => {
const isOpen = navMenu.classList.toggle('active');
mobileToggle.classList.toggle('active', isOpen);
mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
document.body.classList.toggle('menu-open', isOpen);
});

// Close the menu when any navigation link is clicked  
navLinks.forEach((link) => {  
  link.addEventListener('click', () => {  
    closeMenu();  
  });  
});  

// Close the menu when the Escape key is pressed  
document.addEventListener('keydown', (event) => {  
  if (event.key === 'Escape' && navMenu.classList.contains('active')) {  
    closeMenu();  
    mobileToggle.focus(); // return focus for accessibility  
  }  
});

}

// ---------- HELPER ----------
function closeMenu() {
if (!mobileToggle || !navMenu) return;
navMenu.classList.remove('active');
mobileToggle.classList.remove('active');
mobileToggle.setAttribute('aria-expanded', 'false');
document.body.classList.remove('menu-open');
}
});
