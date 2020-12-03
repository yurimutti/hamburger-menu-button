const btnMenu = document.querySelector('.btn-menu');
const menuLinks = document.querySelector('.menu-links');

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('btn-menu-opened');
  menuLinks.classList.toggle('btn-menu-opened');
});
