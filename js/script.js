const hamburgerButton = document.querySelector('.hamburger-icon-img');
const closeButton = document.querySelector('.close-icon-img');
const mainNav = document.querySelector('.main-nav');
const bannerH1 = document.getElementById('banner-h1');
const mediaQuery = window.matchMedia('(min-width: 1100px)');

//bannerH1.innerHTML = 'TEST';

/*function toggleMenu(ev) {
    bannerH1.innerHTML = 'IT WORKS';
    let mainNavStyle = window.getComputedStyle(mainNav);
    if(mainNavStyle.getPropertyValue('display')==='none') {
        mainNav.style.setProperty('display', 'block');
        menuButton.setAttribute('src', './images/icon-close.svg');
    } else if(mainNavStyle.getPropertyValue('display')==='block') {
        mainNav.style.setProperty('display', 'none');
        menuButton.setAttribute('src', './images/icon-hamburger.svg');
    };
};*/

function toggleMenu(ev) {
    let mainNavStyle = window.getComputedStyle(mainNav);
    if(mainNavStyle.getPropertyValue('display')==='none') {
        mainNav.style.setProperty('display', 'block');
        hamburgerButton.setAttribute('src', './images/icon-close.svg');
    } else if(mainNavStyle.getPropertyValue('display')==='block') {
        mainNav.style.setProperty('display', 'none');
        hamburgerButton.setAttribute('src', './images/icon-hamburger.svg');
    };
}

function activateMenu(ev) {
    if(ev.matches) {
        mainNav.style.display = 'block';
        console.log('ACTIVATE');
    } else {
        mainNav.style.display = 'none';
        hamburgerButton.setAttribute('src', './images/icon-hamburger.svg');
        console.log('DEACTIVATE')
    }
    
};

hamburgerButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

mediaQuery.addListener(activateMenu);