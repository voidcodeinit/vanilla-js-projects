const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar=toggleBtn.nextElementSibling;
const closeBtn=sidebar.firstElementChild.children[1];
// console.log(closeBtn);
//Events
toggleBtn.addEventListener("click",()=>{
sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click",()=>{
sidebar.classList.remove("show-sidebar");
});