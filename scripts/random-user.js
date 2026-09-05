/*Note: we have export import modual problem
 and here without modual the picture won't show
 Need To Fix!!(Was Fixed)*/
// const getElement=selection=>{
//     const el=document.querySelector(selection);
//     if (el) {
//        return el; 
//     }
//     throw new Error('no element selected');
//     };
//     const URL = 'https://randomuser.me/api/';
//  const getUser = async () => {
//   const response = await fetch(URL);
//   const data = await response.json();
//   // destructure
//   //read about this destructuring!!
//   const person = data.results[0];
//   const { phone, email, dob:{age} } = person;
//   const { large: image } = person.picture;
//   const { password } = person.login;
//   const { first, last } = person.name;
//   const {street:{number,name}}=person.location;
//   return {
//     image,
//     phone,
//     email,
//     password,
//     age,
//     //craete street and name property
//     street:`${number} ${name}`,
//     name:`${first} ${last}`
//   };
// };
// function removeActive(item){
//     item.forEach(value => value.classList.remove('active'))
// }
// const img = getElement('.user-img');
// const title = getElement('.user-title');
// const value = getElement('.user-value');
// const btns = [...document.querySelectorAll('.icon')];
// console.log(document.querySelectorAll('.icon'));
// console.log(btns);
//  const displayUser = (person) => {
//   img.src = person.image;
//   title.textContent = `My name is`;
//   value.textContent = person.name;
//   removeActive(btns);
//   btns[0].classList.remove('active');
//   console.log(btns[0]);
//   btns.forEach((btn) => {
//     const label = btn.dataset.label;
//     btn.addEventListener('click', () => {
//       title.textContent = `My ${label} is`;
//       //obj[key] => person[label]
//       value.textContent = person[label];
//       removeActive(btns);
//       btn.classList.add('active');
//     });
//   });
// };
// const btn = getElement('.btn');
// window.addEventListener("DOMContentLoaded",showHandler);
// //globalThis.addEventListener("DOMContentLoaded",showHandler);
// btn.addEventListener("click",showHandler);
// async function showHandler(){
//     // get user from api
//     const person=await getUser();
//     displayUser(person);
// }
import get from './utils/get.js';
import getUser from './utils/fetch-user.js';
import displayUser from './utils/display-user.js';

const btn = get('.btn');
window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
async function showUser() {
  // get user from api
  const person = await getUser();
  displayUser(person);

  // display user
};


