//Variables
const preloader = document.querySelector('.preloader');
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
//Events
// window.addEventListener("load",()=>preloader.classList.add("hide-preloader"));
// window.addEventListener('load', () => {
//   setTimeout(() => preloader.classList.add('hide-preloader'), 2000);
// });
const startPreloader=window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hide-preloader'), 2000);
  });
  clearTimeout(startPreloader);
  btn.addEventListener("click",()=>{
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }
    else{
        btn.classList.remove("slide");
        video.play();
    }
  })
