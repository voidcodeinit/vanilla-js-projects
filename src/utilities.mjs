//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://course-api.com/javascript-store-products';
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product';
/** Handles get element. */
const getElement = (selection) => {
  const el = document.querySelector(selection);
  console.log(el);
  if (el) {
    return el;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};
/** Handles format price. */
const formatPrice = (price) => {
  //Read About It!
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price/100).toFixed(2));
  console.log(formattedPrice);
  return formattedPrice;
};
/** Handles get storage item. */
const getStorageItem =item=>{
    let storageItem =localStorage.getItem(item);
    console.log(storageItem);
    if (storageItem) {
        storageItem=JSON.parse(localStorage.getItem(item));
    } else {
        storageItem=[];
    }
    return storageItem;
};
/** Handles set storage item. */
const setStorageItem = (name, item) =>{
    localStorage.setItem(name,JSON.stringify(item));
};
//Read About This!
export{
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem
}
