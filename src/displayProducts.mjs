import { formatPrice } from './utilities.mjs';
import { addToCart } from './cart/setupCart.mjs';
/** Handles display. */
const display = (products, element, filters)=>{
    // display products
    element.innerHTML=products.map(product=>{
        const {id, name, image, price}=product;
        return ` <article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="${name}" />
           
            <div class="product-icons">
              <a href="./storeProduct.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article> `;
    }).join('');
    if (filters) {
        return;
    }
    element.addEventListener('click',e=>{
        const parent = e.target.parentElement;
        if (parent.classList.contains('product-cart-btn')) {
            addToCart(parent.dataset.id);
        }
    });
};
export default display;