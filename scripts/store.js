// global imports
import '../src/toggleSidebar.mjs';
import '../src/cart/toggleCart.mjs';
import '../src/cart/setupCart.mjs';
// specific imports
import fetchProducts from '../src/fetchProducts.mjs';
import { setupStore, store } from '../src/storage.mjs';
import display from '../src/displayProducts.mjs';
import { getElement } from '../src/utilities.mjs';
/** Handles init. */
const init = async ()=>{
    const products =await fetchProducts();
    if (products) {
        // add products to the store
        setupStore(products);
        const featured = store.filter(product=>product.featured===true);
        console.log(featured);
        display(featured, getElement('.featured-center'));
    }
};
window.addEventListener("DOMContentLoaded",init);
