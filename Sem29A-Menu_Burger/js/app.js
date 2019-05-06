let btn = document.querySelector('.header-toggle');
let nav = document.getElementById(btn.getAttribute('aria-controls'))

let toggleNav = () => {
    if (nav.getAttribute('aria-expanded') == 'false') {
        nav.setAttribute('aria-expanded', 'true');
    } else {
        nav.setAttribute('aria-expanded', 'false');
    }
}

btn.addEventListener('click', toggleNav);

window.addEventListener('resize', () => {
    if ((
        window.matchMedia('(min-width:400px)').matches
        && (nav.getAttribute('aria-expanded') == 'false')
    ) || (
            !window.matchMedia('(min-width:400px)').matches
            && (nav.getAttribute('aria-expanded') != 'false')
        )) {
        toggleNav();
    }
});