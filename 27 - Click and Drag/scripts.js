const slider = document.querySelector('.items');
const scrollSpeedMultiplier = 2;
let isDown = false;
let startX;
let scrollLeftStart;
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    /* slider.offsetLeft calculates any possible margin/other space between
       window left edge and the slider item  */
    scrollLeftStart = slider.scrollLeft;
    // will keep track of the initial state of where it started
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    // startX is static here!
    if (!isDown) return;
    e.preventDefault(); //prevents default events like text selection, or other default browser things
    const x = e.pageX - slider.offsetLeft; //recalculating cursor x on movement
    const deviationFromStartX = (x - startX) * scrollSpeedMultiplier;
    slider.scrollLeft = scrollLeftStart - deviationFromStartX;
    //use initial scrollLeft to slide, otherwise dealing with jumpy recalculations
});

// TIP when console.logging, use {var1, var2} to display name AND val