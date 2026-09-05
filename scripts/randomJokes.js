//Variables 
const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
//Funcs
/** Handles fetch dad joke. */
const fetchDadJoke = async ()=>{
    result.textContent='Loading...';
    try {
        const response=await fetch(url, {
            headers:{
                Accept: 'application/json',
                'User-Agent': 'learning app',
            }
        });
        if (!response.ok) {
            console.log(response);
            throw new Error('error');
            //also goes to catch again
        }
        const data=await response.json();
        result.textContent=data.joke;
    } catch (error) {
        console.log(error.message);
        result.textContent = 'There was an error...';
    }
};
//fetchDadJoke();
//Events 
btn.addEventListener("click",fetchDadJoke);