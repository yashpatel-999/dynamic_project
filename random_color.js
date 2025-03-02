let bgColorsArray = [
    "#e75d7c",
    "#b16cef",
    "#53cca4",
    "#efc84d",
    "#628ef0",
    "#184b73",
    "#883e7f",
    "#ed048b",
];
let bgColorEl = document.getElementById("bgContainer");

function onChangeBgColor() {
    let randomIndex = Math.floor(Math.random() * bgColorsArray.length);
    bgColorEl.style.backgroundColor = bgColorsArray[randomIndex];
}