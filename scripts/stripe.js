import data from './stripeData.mjs';
const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');
// hide/show sideabar
toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});
// set sidebar
sidebar.innerHTML = data
  .map(value => {
    const { links, page } = value;
    return `<article >
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links
  .map(link => {
    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
  })
  .join('')}
</div>
</article>`;
  })
  .join('');
linkBtns.forEach((link) => {
  link.addEventListener('mouseover', (e) => {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    console.log(tempBtn);
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    const tempPage = data.find((subLink) => subLink.page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      // OPTIONAL
      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }
      if (links.length > 3) {
        columns = 'col-4';
      }
      submenu.innerHTML = `<section>
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map(
          (link) =>
            `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`
        )
        .join('')}
      </div>
      </section>`;
    }
  });
});
hero.addEventListener('mouseover', ()=>{
submenu.classList.remove('show');
});
nav.addEventListener('mouseover', e=>{
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});
