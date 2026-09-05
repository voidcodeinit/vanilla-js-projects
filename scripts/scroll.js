//Notes:
// Element.getBoundingClientRect() method returns the size of an element and its position
// relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels
// the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links(for hamburger menu aka responsive mode) ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
//Event
navToggle.addEventListener('click', () => {
  //way1:
  //linksContainer.classList.toggle("show-links");
  //way2:
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  //console.log(containerHeight);
  //console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
   console.log(linksContainer.getBoundingClientRect());
});
// ********** fixed navbar (below footer, the btn) ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
//Event 
window.addEventListener("scroll",()=>{
    const scrollHeight =window.scrollY;
    const navHeight =navbar.getBoundingClientRect().height;
    //get nav in fixed postion so it won't be lost
    if (scrollHeight>navHeight) {
      navbar.classList.add("fixed-nav");
    }
    else{
      navbar.classList.remove("fixed-nav");
    }
    // setup back to top link
    if (scrollHeight>570) {
      topLink.classList.add("show-link");
    }
    else{
      topLink.classList.remove("show-link");
    }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link=>{
  //Event
link.addEventListener("click",e=>{
  // prevent default so can't jump
  e.preventDefault();
  // navigate to specific spot
  const id = e.currentTarget.getAttribute("href").slice(1);
  //it's like #home then just home
  //console.log(id);
  const element = document.getElementById(id);
  const navHeight = navbar.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const fixedNav =navbar.classList.contains("fixed-nav");
  //this is for get first postion of it for time the navbar is fixed
  let postion=element.offsetTop-navHeight;
  //console.log(postion);
  if (!fixedNav) {
    postion-=navHeight;
   //console.log(postion);
  }
  //82 is the top for #home
  if (navHeight>82) {
    postion+=containerHeight;
    //i think is for responsive mode
    //console.log(postion);
  }
  window.scrollTo({top:postion, left:0});
  // close(rest ul height(default))
  linksContainer.style.height = 0;
});
});