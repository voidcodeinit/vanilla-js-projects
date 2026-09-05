// global imports
import '../toggleSidebar.mjs';
import '../cart/toggleCart.mjs';
import '../cart/setupCart.mjs';
//  filter imports
import setupSearch from '../filters/search.mjs';
import setupCompanies from '../filters/companies.mjs';
import setupPrice from '../filters/price.mjs';
// specific imports
import { store, setupStore } from '../storage.mjs';
import display from '../displayProducts.mjs';
import { getElement } from '../utilities.mjs';
// import fetch products
import fetchProducts from '../fetchProducts.mjs';
/** Handles init. */
const init = async ()=>{
    const loading = getElement('.page-loading');
    if (store.length<1) {
        const products =await fetchProducts();
        setupStore(products);
    }
    display(store, getElement('.products-container'));
    setupSearch(store);
    setupCompanies(store);
    setupPrice(store);
    loading.style.display = 'none';
};
init();
