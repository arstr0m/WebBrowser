const webview = document.getElementById('browser');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');
const goBtn = document.getElementById('search_button');
const urlInput = document.getElementById('search_input');
const weather = document.getElementById('weather');
import { API_KEY} from './consts.js';

backBtn.addEventListener('click', () => {
    webview.goBack();
});

forwardBtn.addEventListener('click', () => {
    webview.goForward();
});

document.getElementById('search_nav').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    let url = urlInput.value.trim();
    if (!/^https?:\/\//i.test(url) && /\.(com|net|org|edu|gov)$/i.test(url) ) {
        url = 'http://' + url;
    }
    if (!/\.(com|net|org|edu|gov)$/i.test(url)) {
        url = 'https://www.google.com/search?q=' + url;
    }
    else{
        url = url.replace(/\s+/g, '+')
    }
    webview.src = url;
});

webview.addEventListener('did-start-loading', () => {
    urlInput.value = webview.src;
});
async function getWeather() {
    const lat = 14.06
    const lon = 87.17
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    console.log(apiUrl);  // Solo para verificar la URL en la consola

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const weather = document.getElementById('weather');
        weather.textContent = `Current: ${data.weather[0].description}`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        const weather = document.getElementById('weather');
        weather.textContent = 'Failed to fetch weather data';
    }
}

getWeather();
