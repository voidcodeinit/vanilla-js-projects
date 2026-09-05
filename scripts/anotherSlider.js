import data from './anotherSliderData.js';
const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let people = [...data];
//console.log(data.length);
//Senario:
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = 'none';
  prevBtn.style.display = 'none';
}
// if length is 2, add copies of slides
console.log(people);
if (data.length === 2) {
  people = [...data, ...data];
  //console.log("coppies:",people);
}
container.innerHTML = people
  .map((peson, index) => {
    const { img, name, job, text } = peson;
    let position = 'next';
    if (index === 0) {
      position = 'active';
    }
    if (index === people.length - 1) {
      position = 'last';
    }
    //can't underestand need debuging
    if (data.length <= 1) {
      position = 'active';
    }
    return `<article class="slide ${position}">
  <img src=${img} class="img" alt="${name}"/>
  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">
   ${text}
  </p>
<div class="quote-icon">
<i class="fas fa-quote-right"></i>
</div>
 </article>`;
  })
  .join('');
/** Handles start slider. */
const startSlider = (type) => {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;
  console.log(next);
  if (!next) {
    next = container.firstElementChild;
    console.log(next);
  }
  active.classList.remove('active');
  last.classList.remove('last');
  next.classList.remove('next');
  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove('next');
    next.classList.add('last');
    return
  }
  active.classList.add('last');
  last.classList.add('next');
  next.classList.add('active');
};
nextBtn.addEventListener('click', () => {
  startSlider();
});
prevBtn.addEventListener('click', () => {
  startSlider('prev');
});
