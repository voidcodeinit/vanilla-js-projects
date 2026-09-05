import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utilities.mjs';
import { openCart } from './toggleCart.mjs';
import { findProduct } from '../storage.mjs';
import addToCartDOM from './addToCartDOM.mjs';
const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');
let cart = getStorageItem('cart');
console.log(cart);
export const addToCart = (id) => {
  let item = cart.find((item) => item.id === id);
  if (!item) {
    let product = findProduct(id);
    // add item to the the
    product = { ...product, amount: 1 };
    console.log(product);
    cart = [...cart, product];
    console.log(cart);
    // add item to the DOM;
    addToCartDOM(product);
  } else {
    // update values
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  // add one to the item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();
  // set cart in local storage

  setStorageItem('cart', cart);
  //more stuff coming up
  openCart();
};
/** Handles display cart item count. */
function displayCartItemCount() {
  const amount = cart.reduce(
    (total, cartItem) => (total += cartItem.amount),
    0
  );
  cartItemCountDOM.textContent = amount;
}
/** Handles display cart total. */
function displayCartTotal() {
  let total = cart.reduce(
    (total, cartItem) => (total += cartItem.price * cartItem.amount),
    0
  );
  cartTotalDOM.textContent = `Total : ${formatPrice(total)} `;
}
/** Handles display cart items dom. */
function displayCartItemsDOM() {
  cart.forEach((item) => addToCartDOM(item));
}
/** Handles remove item. */
function removeItem(id) {
  cart.filter((item) => item.id !== id);
}
/** Handles increase amount. */
function increaseAmount(id) {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      newAmount = item.amount + 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
}
/** Handles decrease amount. */
function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      newAmount = item.amount - 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
}
/** Handles setup cart functionality. */
function setupCartFunctionality() {
  cartItemsDOM.addEventListener('click', (e) => {
    const element = e.target;
    console.log(element);
    const parent = e.target.parentElement;
    console.log(parent);
    const id = e.target.dataset.id;
    const parentID = e.target.parentElement.dataset.id;
    // remove
    if (element.classList.contains('cart-item-remove-btn')) {
      removeItem(id);
      element.parentElement.parentElement.remove();
    }
    // increase
    if (parent.classList.contains('cart-item-increase-btn')) {
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    // decrease
    if (parent.classList.contains('cart-item-decrease-btn')) {
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);
  });
}
/** Handles init. */
const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFunctionality();
};
init();
