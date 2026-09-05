import { getElement } from '../utilities.mjs';
import display from '../displayProducts.mjs';
/** Handles setup search. */
const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  form.addEventListener('keyup', () => {
    const value = nameInput.value;
    if (value) {
      const newStore = store.filter((item) => {
        let { name } = item;
        name = name.toLowerCase();
        //Read About This!
        if (name.startsWith(value)) {
          return item;
        }
      });
      display(newStore, getElement('.products-container'), true);
      if (newStore.length < 1) {
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">
       sorry, no products matched your search
       </h3>`;
      }
    }
    else{
        display(store, getElement('.products-container'), true);
        console.log("all prods");
    }
  });
};
export default setupSearch;
