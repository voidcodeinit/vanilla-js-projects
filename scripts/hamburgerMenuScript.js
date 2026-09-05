//Variables
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
//Events
navToggle.addEventListener('click', menuHandler);
//Functions
/** Handles menu handler. */
function menuHandler() {
  navToggle.classList.toggle('nav-toggled');
  links.classList.toggle('show-links');
}
