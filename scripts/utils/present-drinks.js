import  fetchDrinks  from './fetch-drinks.js';
import  displayDrinks  from './display-drink.js';
import  setDrink  from './set-drink.js';
/** Handles show drinks. */
const showDrinks =async url=>{
    // fetch drinks
    const data=await fetchDrinks(url);
    // display drinks
    const section=await displayDrinks(data);
    if (section) {
        setDrink(section);
    }
};
export default showDrinks;