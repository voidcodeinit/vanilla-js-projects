import { showLoading } from './toggleLoader.js';
//export default fetchDrinks; Cannot access before initialization!
/** Handles fetch drinks. */
const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    //console.log(error.massage);
  }
};
export default fetchDrinks;
