const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
//Variables
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
//Events
//just render items
// window.addEventListener("DOMContentLoaded",() =>{
//   //breathly that i know can use foreach also.
//   let displayMenu =menu.map(item => {
//   // console.log(item);
//   return `<article class="menu-item">
//   <img src=${item.img} alt=${item.title} class="photo" />
//   <div class="item-info">
//     <header>
//       <h4>${item.title}</h4>
//       <h4 class="price">$${item.price}</h4>
//     </header>
//     <p class="item-text">
//       ${item.desc}
//     </p>
//   </div>
// </article>`;
//   });
//   //also can't use spread(...) like that in here
//   // displayMenu=displayMenu.join(``); no diffirance it's like the down command
//   displayMenu=displayMenu.join("");
//   console.log(displayMenu);
//   sectionCenter.innerHTML = displayMenu;
// });
//Functions
//Events
// Render items and filter btns when page loaded
window.addEventListener('DOMContentLoaded', () => {
  diplayMenuItems(menu);
  displayMenuButtons();
});
/** Handles diplay menu items. */
function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}
/** Handles display menu buttons. */
function displayMenuButtons() {
  //add all category in every obj
  //redus =>common for sum up pervious and also prev saved in values and other outputs also
  //["all"] is first prev value that goes in values after
  const categories = menu.reduce(
    (values, item) => {
      //if not contain all in the obj
      if (!values.includes(item.category)) {
        //ex:like category:["shakes", "all" and others]
        values.push(item.category);
      }
      //new array of obj
      return values;
    },
    ['all']
  );
  console.log(categories);
  //create btns and fill datas
  //also in categories have just values of it cuz it has just the categroy property like
  // a simple arrey
  const categoryBtns = categories.map(
    (item) => `<button type="button" class="filter-btn" data-id=${item}>
    ${item}
  </button>`
  ).join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  //console.log(filterBtns);
  //Event 
  filterBtns.forEach(btn=>{
    btn.addEventListener("click",e=>{
      const currentCategory=e.currentTarget.dataset.id;
      const menuCategory=menu.filter(menuItem =>{
        if(menuItem.category===currentCategory){
          return menuItem;
        }
      });
      // console.log(currentCategory);DUBM ASS
      if (currentCategory === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
