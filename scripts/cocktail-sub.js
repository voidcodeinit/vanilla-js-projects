import fetchDrinks from "./utils/fetch-drinks.js";
import displayDrink from "./utils/displat-single-drink.js";
const URL="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
/** Handles present drink. */
const presentDrink =async ()=>{
    const id=localStorage.getItem('drink');
    if (!id) {
        window.location.replace("./cocktail.html");
    }
    else{
        const drink = await fetchDrinks(`${URL}${id}`);
        displayDrink(drink);
    }
};
window.addEventListener("DOMContentLoaded",presentDrink);