import get from './getEl.js';
import { hideLoading } from './toggleLoader.js';
//parameter is :{drinks} => obj{property} Also Read About this kind of parameter!
/** Handles display drinks. */
const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');
  if (!drinks) {
    hideLoading();
    title.textContent = 'sorry, no drinks matched your search';
    section.innerHTML=null;
    console.log(section);
    return;
  }
  const newDrinks = drinks.map(drink => {
    const {idDrink:id, strDrink:name, strDrinkThumb:image}=drink;
    return `<a href="./cocktail-sub.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
  }).join('');
  hideLoading();
  title.textContent = '';
  section.innerHTML =newDrinks;
  return section;
};
export default displayDrinks;