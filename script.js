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

const sections = document.querySelectorAll('.section__wrapper');

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        if (!entry.target.classList.contains('visible')) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    })
}, {});

sections.forEach(s => observer.observe(s));

console.log("%cMade by Ivan",
    "color: #fcb929;" +
    "background-color: #f9ea8f;" +
    "background-image: linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%);" +
    "padding: 10pt;" +
    "font-size: 18pt");
