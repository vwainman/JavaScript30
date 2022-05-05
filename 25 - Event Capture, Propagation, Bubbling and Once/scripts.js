const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropogation();
    // prevents event from propagating to other groups, i.e. stop bubbling (click div 3, fire only div 3 click event)
    // if capture is true, it'll only fire an event on the outer most layer when clicking the deepest layer
}

// divs.forEach(div => div.addEventListener('click', logText, {
//     capture: true // runs the function on the way down vs on the way up, defaults false!
//     // displays one two three
// })); // click .three === one /n two /n three /n (fires events on groups outside in)
// click .two   === one /n two /n
// click .one   === one /n

//divs.forEach(div => div.addEventListener('click', logText));
// click .three === three /n two /n one /n (fire events on groups inside out)
// click .two   === two /n one /n
// click .one   === one /n

divs.forEach(div => div.addEventListener('click', logText, {
    capture: true,
    once: true // only fires event propegation once (i.e. nothing happens on second click)
    // equivalent to removeEventListener after event fires!!!
})); // ex: click .three === "", click again... nothing

// ESPECIALLY useful DURING STORE CHECKOUTS!!! where you'd want to unbind the user from being able to multiclick



