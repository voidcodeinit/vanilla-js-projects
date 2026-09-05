//Vriabel
const items=[...document.querySelectorAll('.number')];
//Func
/** Handles update count. */
const updateCount=el=>{
const value= parseInt(el.dataset.value);
const increment = Math.ceil(value/1000);
console.log(increment);
let initialValue = 0;
const increaseCount =setInterval(()=>{
    initialValue+=increment;
    if (initialValue>value) {
        el.textContent=`${value}+`;
        clearInterval(increaseCount);
        return;
    }
    el.textContent=`${initialValue}+`;
},1);
};
items.forEach(item=>updateCount(item));