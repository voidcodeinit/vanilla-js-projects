import get from './get.js';
import removeActive from './remove-acrive.js';
const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];
//console.log(document.querySelectorAll('.icon')); NodeList
//console.log(btns); Array
 /** Handles display user. */
 const displayUser = (person) => {
  img.src = person.image;
  title.textContent = `My name is`;
  value.textContent = person.name;
  removeActive(btns);
  //btns[0].classList.remove('active');
  //console.log(btns[0]);
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      title.textContent = `My ${label} is`;
      //obj[key] => person[label]
      value.textContent = person[label];
      removeActive(btns);
      btn.classList.add('active');
    });
  });
};
export default displayUser;
