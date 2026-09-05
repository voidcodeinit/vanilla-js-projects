//export default ...; Cannot access before initialization!
/** Handles set drink. */
const setDrink = section=>{
section.addEventListener('click', e=>{
    const id=e.target.parentElement.dataset.id;
    localStorage.setItem('drink',id);
});
};
//Read About export default !
export default setDrink;