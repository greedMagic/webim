(function () {
  let dropMenu = document.querySelector('.menu__dropdown');
  let btnMenu = document.querySelector('.menu__button');

  toggleMenu() {
    dropMenu.classList.toggle('menu__dropdown--active');
    btnMenu.classList.toggle('menu__button--closed');
  };

  btnMenu.addEventListener('click', toggleMenu);
})();
