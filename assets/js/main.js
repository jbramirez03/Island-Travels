const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');


const btnOpenVideo = document.querySelectorAll('.islands__video-content');
const islandsPopup = document.getElementById('popup');

function poPup() {
    islandsPopup.classList.add('show-popup');
}

btnOpenVideo.forEach(b => b.addEventListener('click', poPup));

const btnCloseVideo = document.getElementById('popup-close');

btnCloseVideo.addEventListener('click', () => {
    islandsPopup.classList.remove('show-popup');
});