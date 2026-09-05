//Data
const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image: 'https://course-api.com/images/store/product-1.jpeg',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-2.jpeg',
    price: 79.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-3.jpeg',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-4.jpeg',

    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-5.jpeg',

    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-6.jpeg',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-7.jpeg',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-8.jpeg',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-9.jpeg',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-10.jpeg',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image: 'https://course-api.com/images/store/product-11.jpeg',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-12.jpeg',
    price: 9.99,
  },
];
//Variables
//products is from our data
let filteredProducts = [...products];
const productsContainer = document.querySelector('.products-container');
//Funcs
/** Handles display products. */
const displayProducts = () => {
  // length is 1 to somePostiveNumber
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map((item) => {
      const { id, title, image, price } = item;
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join('');
};
displayProducts();
// Text Filter

const form = document.querySelector('.input-form');
// const searchInput = document.querySelector('.search-input');
const searchInput = form.firstElementChild;
//console.log(searchInput);
//Events
form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(inputValue)
  );
  displayProducts();
});
// console.log(
//   products.filter((product) => {
//     return product.title.toLowerCase().includes('');
//   })
// );

// Filter Buttons
const companiesDOM = document.querySelector('.companies');
/** Handles display buttons. */
const displayButtons = () => {
  const btns = ['all', ...new Set(products.map((item) => item.company))];
  //output:['all', 'ikea', 'marcos', 'caressa', 'liddy']
  //const btns=['all',...products.map(item=>item.company)];
  //output:['all', 'ikea', 'marcos', 'caressa', 'caressa', 'caressa', 'liddy', 'marcos', 'liddy', 'marcos', 'liddy', 'ikea', 'liddy']
  //console.log(btns)
  companiesDOM.innerHTML = btns
    .map(
      (btnName) =>
        `<button class='company-btn' data-id="${btnName}">${btnName}</button>`
    )
    .join('');
};
displayButtons();
//Events
companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(
        (item) => item.company === el.dataset.id
      );
    }
    searchInput.value = '';
    displayProducts();
  }
});
