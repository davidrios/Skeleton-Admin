!function() {
  var menuElement = document.querySelector('body > nav:first-child');
  function menuToggleClick(ev) {
    ev.preventDefault();
    menuElement.classList.toggle('show');
  }

  document
    .querySelector('body > header > a.menu-toggle')
    .addEventListener('click', menuToggleClick);

  document
    .querySelector('body > nav > a.menu-close')
    .addEventListener('click', menuToggleClick);
}();