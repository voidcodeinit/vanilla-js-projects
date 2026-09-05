//Variables
//array of hexadecimal
const hexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const elSpan = document.querySelector('.color');
//Functions
//Random Indexes
/** Handles get random number. */
const getRandomNumber = () => Math.floor(Math.random() * hexes.length);
/** Handles color handler. */
const colorHandler = () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hexes[getRandomNumber()];
    // console.log(hexColor);
  }

  elSpan.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
};

//Events
btn.addEventListener('click', colorHandler);
