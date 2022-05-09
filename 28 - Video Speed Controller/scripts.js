const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function barMove(e) {
    const cursorY = e.pageY - this.offsetTop;
    //offsetTop is necessary in case of margin/padding
    const descendingPercent = cursorY / this.offsetHeight;
    //calculates the % of height between cursor and top of element
    const playbackRateMax = 4.0;
    const playbackRateMin = 0.4;
    const filledHeight = Math.round((descendingPercent * 100)) + '%';
    const playbackRate = descendingPercent
        * (playbackRateMax - playbackRateMin) + playbackRateMin;
    bar.style.height = filledHeight;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleBarMove);