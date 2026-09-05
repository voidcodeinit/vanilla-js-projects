import { getElement } from '../utilities.mjs';
import display from '../displayProducts.mjs';
/** Handles setup price. */
const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');
  // setup filter
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  console.log(maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  console.log(maxPrice);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`;
  priceInput.addEventListener('input', () => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((item) => item.price / 100 <= value);
    display(newStore, getElement('.products-container'), true);
    if (newStore.length < 1) {
      const products = getElement('.products-container');
      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
  });
};
export default setupPrice;
