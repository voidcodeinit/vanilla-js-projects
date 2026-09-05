import { getElement } from '../utilities.mjs';
import display from '../displayProducts.mjs';
/** Handles setup companies. */
const setupCompanies = (store) => {
  //Read About This!
  let companies = ['all', ...new Set(store.map((item) => item.company))];
  console.log(companies);
  const companiesDOM = getElement('.companies');
  companiesDOM.innerHTML = companies
    .map((company) => `<button class="company-btn">${company}</button>`)
    .join('');
  companiesDOM.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('company-btn')) {
      let newStore = [];
      if (element.textContent === 'all') {
        newStore = [...store];
      } else {
        newStore = store.filter(
          item => item.company === e.target.textContent
        );
      }
      display(newStore, getElement('.products-container'), true);
    }
  });
};
export default setupCompanies;
