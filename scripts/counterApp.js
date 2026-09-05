//Golobal Varibles
const Increas = 'increase';
const Decreas = 'decrease';
const Rest = 'rest';
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
//Events
btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    //get btn class list
    const styles = e.currentTarget.classList;
    if (styles.contains(Decreas)) {
        count--;
      } else if (styles.contains(Increas)) {
        count++;
      } else {
        count = 0;
      }
  
      if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
    value.textContent = count;
  })
);
//get a better way for if statetments!
