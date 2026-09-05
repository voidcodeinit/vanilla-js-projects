import get from "./getEl.js";
import presentDrinks from "./present-drinks.js";
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name="drink"]');
form.addEventListener('keyup', e=>{
    e.preventDefault();
    const value = input.value;
    presentDrinks(`${baseURL}${value}`);
});