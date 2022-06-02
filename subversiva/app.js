// animated svg photographer
document.addEventListener('DOMContentLoaded', function () {
    window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);
});

// menu hamburger
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('area-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);