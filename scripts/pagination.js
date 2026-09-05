import fetchFlowers from './utils/fetchFlowers.mjs';
import displayFollowers from './utils/displayFollowers.mjs';
import paginate from './utils/paginate.mjs';
import displayButtons from './utils/displayButtons.mjs';
const title = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');
let index = 0;
let pages = [];
/** Handles setup ui. */
const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};
/** Handles init. */
const init = async () => {
  const followers = await fetchFlowers();
  title.textContent = 'pagination';
  pages = paginate(followers);
  console.log(pages);
  setupUI();
};
btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-container')) {
    return;
  }
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});
window.addEventListener('load', init);
