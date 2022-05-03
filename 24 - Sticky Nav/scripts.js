const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNavToTop() {
    /* recall that when fixing an element in css, it no longer takes space in the doc - it's essentially floating there.
    Therefore, we must adjust the css to account for that.
    */
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav'); //added to the body, which is what we want in view the whole time
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
    //console.log(topOfNav, window.scrollY);
}

window.addEventListener('scroll', fixNavToTop);