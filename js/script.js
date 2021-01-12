const menuButton = document.querySelector('.hamburger-icon-img');
const mainNav = document.querySelector('.main-nav');
const bannerH1 = document.getElementById('banner-h1');

bannerH1.innerHTML = 'TEST';

function toggleMenu(ev) {
    bannerH1.innerHTML = 'IT WORKS';
    let mainNavStyle = window.getComputedStyle(mainNav);
    if(mainNavStyle.getPropertyValue('display')==='none') {
        mainNav.style.setProperty('display', 'block');
        menuButton.setAttribute('src', './images/icon-close.svg');
    } else if(mainNavStyle.getPropertyValue('display')==='block') {
        mainNav.style.setProperty('display', 'none');
        menuButton.setAttribute('src', './images/icon-hamburger.svg');
    };
};

function activateMenu(ev) {
    mainNav.style.display = 'block';
};

menuButton.addEventListener('click', toggleMenu);
window.matchMedia('only screen and (min-width: 1100px)').onchange = activateMenu;