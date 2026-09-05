import presentDrinks from "./utils/present-drinks.js";
//Read About it!!!
import  "./utils/search-form.js";
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
window.addEventListener("DOMContentLoaded",()=> presentDrinks(URL));