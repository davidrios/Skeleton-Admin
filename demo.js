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

  // MENU ITEMS
  var menuListItems = menuElement.querySelectorAll('ul > li');

  function handleMenuItemClick(ev) {
    for (var i = 0; i < menuListItems.length; i++) {
      var li = menuListItems[i];
      var link = li.children[0];
      if (ev.target === link) {
        li.classList.add('active');
      }
      else {
        li.classList.remove('active');
      }
    }
  }

  var location = window.location.toString();
  var activeIdx = null;
  for (var i = 0; i < menuListItems.length; i++) {
    var li = menuListItems[i];
    var link = li.children[0];

    if (activeIdx === null) {
      activeIdx = i;
    }

    if (li.classList.contains('active') || link.href === location) {
      activeIdx = i;
    }

    link.dataset.position = i;
    link.addEventListener('click', handleMenuItemClick);
  }

  var activeLink = menuListItems[activeIdx].children[0];
  handleMenuItemClick({target: activeLink});
  if (location !== activeLink.href) {
    window.location = activeLink.href;
  }
  // END MENU ITEMS

  // CONTENT
  function handleHashChange(ev) {
    var hash = ev.newURL.substr(ev.newURL.indexOf('#'));
    var sections = document.querySelectorAll('body > section');
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      if (section.dataset.link === hash) {
        section.classList.add('active');
      }
      else {
        section.classList.remove('active');
      }
    }
  }

  window.addEventListener('hashchange', handleHashChange);
  handleHashChange({newURL: window.location.toString(), oldURL: null});
  // END CONTENT
}();