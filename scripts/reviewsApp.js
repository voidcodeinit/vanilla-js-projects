// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    info: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    info: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    info: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
const nextBtn = prevBtn.nextElementSibling;
// console.log(nextBtn);
const randomBtn = document.querySelector('.random-btn');
// set starting item
let currentItem = 0;
//Functions
// show person based on item
/** Handles show person. */
const showPerson=person=>{
  const item=reviews[person];
  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.info;
};
//Events
// load initial item
window.addEventListener("DOMContentLoaded",()=>{
  const item=reviews[currentItem];
  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.info;
});
nextBtn.addEventListener("click",()=>{
currentItem++;
if(currentItem>=reviews.length){
  currentItem=0;
}
showPerson(currentItem);
});
prevBtn.addEventListener("click",()=>{
  currentItem--;
  //start over index from last
  if(currentItem<0){
    currentItem=reviews.length -1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener("click",()=>{
currentItem=Math.floor(Math.random()*reviews.length);
console.log(currentItem);
showPerson(currentItem);
});