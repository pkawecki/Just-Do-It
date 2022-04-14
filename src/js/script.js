// settings
const select = {
  hamburger: 'img[class=\'hamburger-image\']',
  foldable_menu: '.foldable-menu',

};

const classNames = {
  nav: {
    active: 'active',
  },

};


const app = {
  initNav: function() {
    const thisApp = this;

    thisApp.hamburgerIcon = document.querySelector(select.hamburger);
    thisApp.foldable_menu = document.querySelector(select.foldable_menu);

    console.log(thisApp.hamburgerIcon);
    console.log(thisApp.foldable_menu);

    thisApp.hamburgerIcon.addEventListener('click', function() {
      thisApp.foldable_menu.classList.toggle(classNames.nav.active);
    });
  },

  init: function() {
    const thisApp = this;

    thisApp.initNav();
  },
};

app.init();