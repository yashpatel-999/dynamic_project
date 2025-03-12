let aboutBtnEl = document.getElementById("aboutButton");
let timeToBtnEl = document.getElementById("timeToVisitButton");
let attBtnEl = document.getElementById("attractionsButton");
let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");

function reSet() {
    aboutTabEl.classList.add("hidden");
    aboutBtnEl.classList.remove("bg-white");
    timeToVisitTabEl.classList.add("hidden");
    timeToBtnEl.classList.remove("bg-white");
    attractionsTabEl.classList.add("hidden");
    attBtnEl.classList.remove("bg-white");
}

function onClickAboutTab() {
    reSet()
    aboutTabEl.classList.remove("hidden");
    aboutBtnEl.classList.add("bg-white");
}

function onClickTimeToVisitTab() {
    reSet()
    timeToVisitTabEl.classList.remove("hidden");
    timeToBtnEl.classList.add("bg-white");
}

function onClickAttractionsTab() {
    reSet()
    attractionsTabEl.classList.remove("hidden");
    attBtnEl.classList.add("bg-white");
}