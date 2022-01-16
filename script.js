const btnHamburger = document.querySelector('.nav__hamburger');
const btnClose = document.querySelector('.side-panel-overlay__close');
const sidePanel = document.querySelector('.side-panel');
const sidePanelOverlay = document.querySelector('.side-panel-overlay');
const screenOverlay = document.querySelector('.screen-overlay');

btnHamburger.addEventListener('click', function () {
    sidePanel.classList.remove('closed');
    sidePanelOverlay.classList.remove('closed');
    screenOverlay.classList.add('fade-in');
    screenOverlay.classList.remove('fade-out');
    document.body.style.overflow = 'hidden';
})

btnClose.addEventListener('click', function () {
    sidePanel.classList.add('closed');
    sidePanelOverlay.classList.add('closed');
    screenOverlay.classList.add('fade-out');
    screenOverlay.classList.remove('fade-in');
    document.body.style.removeProperty('overflow');
})