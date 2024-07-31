dynamicHeightToolbar()
window.addEventListener("resize", function () {
    dynamicHeightToolbar();
});

function dynamicHeightToolbar() {
    if (window.innerWidth < 1200) {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    } else {
        document.documentElement.style.removeProperty('--vh');
    }
} // calc window height without toolbar on mobile browser


const mobMenu = document.querySelector('.js-mob-menu'),
      btn = document.querySelector('.js-burger'),
      isMenuOpen = btn.getAttribute('aria-expanded') === 'true' || false;
btn.addEventListener('click', () => {

    if (mobMenu.getAttribute('aria-expanded')) {
        btn.setAttribute('aria-expanded', !isMenuOpen);
    }

    btn.classList.toggle('is-active');
    mobMenu.classList.toggle('is-open');
});
