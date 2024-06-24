// select the DOM elements for output
const full = document.querySelector("#full");
const worldfull = document.querySelector("#world-full");
const short = document.querySelector("#short");
const medium = document.querySelector("#medium");
const currentyear = document.querySelector("#currentyear");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const lastModified = document.querySelector("#lastModified");
// use the date object
const today = new Date();
full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;
worldfull.innerHTML = `UK: <span class="highlight">${new Intl.DateTimeFormat(
    "en-UK",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;
short.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "short"
    }
).format(today)}</span>`;
medium.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "medium"
    }
).format(today)}</span>`;
currentyear.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;
month.innerHTML = `getMonth(): <span class="highlight">${today.getMonth()}</span>`;
day.innerHTML = `getDate(): <span class="highlight">${today.getDate()}</span>`;
lastModified.innerHTML = `getDay(): <span class="highlight">${today.getDay()}</span>`;
