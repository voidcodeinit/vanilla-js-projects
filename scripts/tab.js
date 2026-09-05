//Variables
const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
//Event
about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  // remove selected from other buttons
  //btns.forEach((btn) => btn.classList.remove('active'));
  //e.target.classList.add('active');
  btns.forEach((btn) => {
    if (btn.dataset.id===id) {
        btn.classList.remove('active');
    }
    else{
        btn.classList.add('active');
    }
  });
  // hide other articles
  articles.forEach(function (article) {
    article.classList.remove('active');
  });
  const element = document.getElementById(id);
  element.classList.add('active');
});
