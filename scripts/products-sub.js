const productDOM = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';
/** Handles fetch product. */
const fetchProduct = async () => {
  productDOM.innerHTML = '<h4 class="product-loading">Loading... </h4>';
  try {
    const params = new URLSearchParams(window.location.search);
    //console.log(window.location.search);
    //console.log(params);
    const id = params.get('id');
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML =
      '<p class="error">There was a problem loading the product. Please try again later </p>';
  }
};
/** Handles display product. */
const displayProduct = (product) => {
  // company, colors, description, name:title, price, image(url:img)
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  //console.log(image);
  const { url: img } = image[0];
  document.title = title.toUpperCase();
  // colors
  const colorsList = colors
    .map((color) => {
      `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');
    productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${price / 100}</span>
          <div class="colors">
            ${colorsList}
            
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};
const start = async function() {
    const data = await fetchProduct();
    displayProduct(data);
  }();
