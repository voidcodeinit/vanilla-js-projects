//Select Variables
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
// const nextBtn = document.querySelector(".nextBtn");
const nextBtn = prevBtn.nextElementSibling;
//console.log(nextBtn);
let counter = 0;

//Events
nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
});
prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});
//Functions
// left postion of each style in %
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
/** Handles carousel. */
function carousel(){
    // working with slides(we must make sure the counter max number is slides.length!
    //also i think to show pictures)
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  slides.forEach(slide => {
    // cuz we work positive in first foreach
    slide.style.transform=`translateX(-${counter * 100}%)`;
  });
  // working with buttons(we must make sure the counter max number is slides.length)
  //   cuz we set counter value 0 not 1 to write counter<=slides.length
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
}
//to not let counter goes in negative numbers
prevBtn.style.display="none";