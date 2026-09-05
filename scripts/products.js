const url = 'https://course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');
/** Handles fetch products. */
const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};
/** Handles display products. */
const displayProducts = (list) => {
  const products = list
    .map((product) => {
      const { id } = product;
      //console.log(id);
      const { name: title, price } = product.fields;
     //console.log(name); The declaration was marked as deprecated here.
      const { url: img } = product.fields.image[0];
      //console.log(img);
      const formatPrice = price / 100;
      //looke here: href="./products-sub.html?id=${id}&name=john&age=25"
      return `<a class="single-product" href="./products-sub.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join('');
  productsDOM.innerHTML = ` <div class="products-container"> ${products} </div>`;
};
const start = async function(){
const data=await fetchProducts();
displayProducts(data);
}();
