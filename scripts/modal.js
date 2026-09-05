//Variables
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = modal.children[0].lastElementChild;
console.log(closeBtn);
// const closeBtn = document.querySelector(".close-btn");
//Events
modalBtn.addEventListener("click",()=>{
modal.classList.add("open-modal");
});
closeBtn.addEventListener("click",()=>{
modal.classList.remove("open-modal");
});
//Note:.open-modal(bring back the visibelity) to modal-overlay
// Note:.modal-overlay is a parent(container) for our modal not just a blue backdrop