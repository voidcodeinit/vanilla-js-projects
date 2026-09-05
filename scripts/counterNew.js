//Classes
class Counter {
  // here use DOM Terversing is better!
  constructor(el, value) {
    this.counterEl = el;
    //for the name is js shadowing concept
    this.value = value;

    this.valueDOM = el.querySelector('.value');
    this.valueDOM.textContent = this.value;
    this.resetBtn = el.querySelector('.reset');
    this.increaseBtn = el.querySelector('.increase');
    this.decreaseBtn = el.querySelector('.decrease');
    //Ways:
    //1:
    // this.increaseBtn.addEventListener('click', this.increase.bind(this));
    // this.decreaseBtn.addEventListener('click', this.increase.bind(this));
    // this.resetBtn.addEventListener('click', this.increase.bind(this));
    //2:
    // bind this to all function(also the name is not get shadowing i think is replacing)
    // this.increase = this.increase.bind(this);
    // this.decrease = this.decrease.bind(this);
    // this.reset = this.reset.bind(this);
    // this.increaseBtn.addEventListener('click', this.increase);
    // this.decreaseBtn.addEventListener('click', this.decrease);
    // this.resetBtn.addEventListener('click', this.reset);
    //3:
    this.increaseBtn.addEventListener('click', () => this.increase());
    this.decreaseBtn.addEventListener('click', () => this.decrease());
    this.resetBtn.addEventListener('click', () => this.reset());
    //for debug the bug here:
    // this.resetBtn.addEventListener('click',this.reset);
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    // here log it to see btn
    // console.log(this);
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}
//Functions
/** Handles get element. */
function getElement(selection) {
  const el = document.querySelector(selection);
  if (el) {
    return el;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}
//craete & call
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
//________________________________________Counter Proto Way_________________________________________________
//Constructor func
// function Counter(element, value) {
//   this.counterEl=element;
//   this.value=value;
//   this.resetBtn = element.querySelector('.reset');
//   this.increaseBtn = element.querySelector('.increase');
//   this.decreaseBtn = element.querySelector('.decrease');
//   this.valueDOM = element.querySelector('.value');
//   this.valueDOM.textContent=this.value;
//   // bind this to all function and save it on property
//   this.increase=this.increase.bind(this);
//   this.decrease=this.decrease.bind(this);
//   this.reset=this.reset.bind(this);
//   //Events 
//   this.increaseBtn.addEventListener('click',this.increase);
//   this.decreaseBtn.addEventListener('click',this.decrease);
//   this.resetBtn.addEventListener('click',this.reset);
// }
// //Counter prototype funcs
// Counter.prototype.increase=function(){
//   this.value++;
//   this.valueDOM.textContent = this.value;
// };
// Counter.prototype.decrease=function(){
//   this.value--;
//   this.valueDOM.textContent=this.value;
// };
// Counter.prototype.reset=function(){
// this.value=0;
// this.valueDOM.textContent=this.value;
// };
// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   }
//   throw new Error(
//     `Please check "${selection}" selector, no such element exists`
//   );
// }
// const firstCounter =new Counter(getElement('.first-counter'), 100);
// const secondCounter =new Counter(getElement('.second-counter'), 200);
