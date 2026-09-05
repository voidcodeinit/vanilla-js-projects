// //select articles
// const questions = document.querySelectorAll(".question");
// //get articles btn
// questions.forEach(question =>{
// const btn=question.querySelector(".question-btn");
// //Event
// btn.addEventListener("click",()=>{
// questions.forEach(item=>{
//     //compare articles
//     if(item!==question){
//         item.classList.remove("show-text");
//     }
//     else{
//         //we need toggle cuz it's true if we need to close the same article add won't work!
//     item.classList.toggle("show-text");
//     }
// });
// });
// });

// traversing the dom
const btns = document.querySelectorAll(".question-btn");
btns.forEach(btn=>{
//event
btn.addEventListener("click", e => {
//get the article
const question=e.currentTarget.parentElement.parentElement;
console.log(question);
//in here we can't compare so the ones that is not the same can't be auto closed 
question.classList.toggle("show-text");
});
});