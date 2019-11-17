(function () {
  const dropMenu = document.querySelector('.menu__dropdown');
  const btnMenu = document.querySelector('.menu__button');

  function toggleMenu () {
    dropMenu.classList.toggle('menu__dropdown--active');
    btnMenu.classList.toggle('menu__button--closed');
  };

  btnMenu.addEventListener('click', toggleMenu);
})();
