// use the date object
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${oLastModif.toLocaleDateString()} ${oLastModif.toLocaleTimeString()}</span>`;



let temperature = 32;
let windSpeed = 10;
let noCondition = "N/A";
let conditions = "Partly Cloudy"


function calculateWindChill (temp, wind) {
   let windC = 35.74 + 0.6215 * temp - 35.75 * wind**0.16 + 0.4275 * temp * wind**0.16
    return `${windC}`;
}

if (temperature <= 50 & windSpeed > 3) {
    document.querySelector('#windChill').innerHTML = Math.round(calculateWindChill(temperature, windSpeed));
} else {
    document.querySelector('#windChill').innerHTML = noCondition;
}

document.querySelector('#temperature').innerHTML = temperature;  
document.querySelector('#wind').innerHTML = windSpeed;
document.querySelector('#conditions').innerHTML = conditions;  