function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const ignoredArticles = ['the', 'a', 'an'];
const bands = ['The Plot in You', 'The Devil Wears Prada',
    'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
    'The Midway State', 'We Came as Romans', 'Counterparts',
    'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

const ulBands = document.querySelector('#bands');
ulBands.innerHTML = bands.map(band => `<li>${band}</li>`).join('');
