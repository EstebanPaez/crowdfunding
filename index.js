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

const $options = [...document.querySelectorAll('.option--select')];
const someActive = false;

$options.forEach((value) => {
  value.addEventListener('click', () => {
    const $points = document.querySelectorAll('.option__select');

    $options.forEach((value) => value.classList.remove('focus'));
    $points.forEach((value) => value.classList.remove('focus'));

    value.classList.toggle('focus');

    $points.forEach((point) => {
      if (point.parentElement.parentElement === value) {
        point.classList.toggle('focus');
      }
    });
  });
});

const $wrapper = document.querySelector('.wrapper');

const $buttonsSupport = document.querySelector('.buttons__support');
const $backSupport = document.querySelector('div.main');
$buttonsSupport.addEventListener('click', () => {
  $backSupport.classList.toggle('active');
  $wrapper.classList.toggle('active');
});

const $closeModal = document.querySelector('.modal__close');
$closeModal.addEventListener('click', () => {
  $backSupport.classList.remove('active');
  $wrapper.classList.remove('active');
});
