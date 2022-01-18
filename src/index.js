const navButton = document.querySelector('button[aria-controls]');
const navList = document.querySelector('nav[aria-expanded]');

function toggleNav({ target }) {
    if (target.getAttribute('aria-controls') === "nav-list") {
        const expanded = navList.getAttribute('aria-expanded') === 'true' || false;
        navList.setAttribute('aria-expanded', !expanded);
        if (!expanded) {
            navButton.classList.add("expanded");
        } else {
            navButton.classList.remove("expanded");
        }
    }
}

navButton.addEventListener('click', toggleNav);