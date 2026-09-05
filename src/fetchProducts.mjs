import { allProductsUrl } from "./utilities.mjs";
/** Handles fetch products. */
const fetchProducts = async ()=>{
    const response = await fetch(allProductsUrl).catch(error=>console.log(error));
    if (response) {
        return response.json();
        console.log("hhhhh");
    }
    return response;
};
export default fetchProducts;