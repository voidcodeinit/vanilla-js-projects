//export default getElement; Cannot access before initialization!
/** Handles get element. */
const getElement =selection=>{
    const el=document.querySelector(selection);
    if (el) {
       return el; 
    }
    throw new Error("no element selected");
}
export default getElement;