const $hamburger = document.querySelector('.nav__hamburger');
const $menuX = document.querySelector('.menu__x');

$hamburger.addEventListener('click', () => {
  $hamburger.style['background-image'] = 'none';
  const $menuWrapper = document.querySelector('.menu__wrapper');
  $menuWrapper.classList.add('active');
});

$menuX.addEventListener('click', () => {
  const $menuWrapper = document.querySelector('.menu__wrapper');
  $menuWrapper.classList.remove('active');
  $hamburger.style['background-image'] = 'url(../images/icon-hamburger.svg)';
});
