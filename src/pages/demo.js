!function() {
  var menuElement = document.querySelector('body > nav:first-child');
  function menuToggleClick(ev) {
    ev.preventDefault();
    menuElement.classList.toggle('show');
  }

  document
    .getElementById('menu-toggle')
    .addEventListener('click', menuToggleClick);

  document
    .getElementById('menu-close')
    .addEventListener('click', menuToggleClick);
}();