
// Randomize Number with upper (limit) //

function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

// XHLHttpRequest GET request //

const xhr = new XMLHttpRequest
const url = "https://api-to-call.com/endpoint"

xhr.responseType = 'json'
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
    }
}

xhr.open('GET', url)
xhr.send()

// Fetch from API

const api_url = " ";        // place URL to API here.
async function getJson() {     // create Async function
    const response = await fetch(api_url);      // fetch from api_url
    const data = await response.json();     // get response in json format
    const {, } = data;       //  JavaScript destructuring
    // use variable here to match what you are passing into ele IDs


    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;

}

getJson();  // calls async function