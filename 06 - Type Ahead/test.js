
function findCityStateMatches(string, array) {
    matches = array.filter(element_object => {
        const regex = new RegExp(string, 'gi'); /*global (test against all possible matches) and i (case insensitve) flags */
        return element_object.city.match(regex) || element_object.state.match(regex);
    })
    console.log(matches);
    return matches;
}

async function loadJSONdata() {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const response = await fetch(endpoint);
    const cities = [];
    await response.json()
        .then(data => cities.push(...data));
    findCityStateMatches(" ", cities);
}

loadJSONdata()
