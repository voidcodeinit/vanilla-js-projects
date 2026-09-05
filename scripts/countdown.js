const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
//Variables
const giveaway = document.querySelector('.giveaway');
// const deadline = document.querySelector('.deadline');
const deadline = giveaway.nextElementSibling.nextElementSibling;
//console.log(deadline);
const items = document.querySelectorAll('.deadline-format h4');
//Get a date
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();
//Create a date
// months are ZERO index based;
//if the time was - is cuz of the formoula 10,11,30,0
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
//console.log(futureDate); like:Fri Jun 16 2023 11:30:00 GMT+0330 (Iran Standard Time)
// let futureDate = new Date(2020, 3, 24, 11, 30, 0);
//Get Future Dates needed options
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
//console.log(date); like:16
//start tracing to the DOM
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}AM`;
//end tracing to the DOM
const futureTime = futureDate.getTime();
let countdown = setInterval(getRemaindingTime, 1000);
/** Handles get remainding time. */
function getRemaindingTime() {
  const todayTime = new Date().getTime();
  const time = futureTime - todayTime;
  //console.log(time);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);
  // set values array
  const values = [days, hours, minutes, seconds];
  /** Handles format. */
  function format(item) {
    //like for days under 10 is like 01 days and for greater than 10 we have the same(days)
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
    //console.log(item);
  });
  //expire
  if (time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
