const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords); // returns top, right, bottom, left, width and height
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    // --- dont do this, won't  be as smooth ---
    // highlight.style.top = `${linkCoords.top}px`;
    // highlight.style.left = `${linkCoords.left}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;


}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

