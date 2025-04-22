let searchInputEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let resultCountriesEl = document.getElementById("resultCountries");

let searchInputVal = "";
let countriesList = [];

function createAndAppendCountry(country) {
    let countryEl = document.createElement("div");
    countryEl.className =
        "w-[100%] m-auto flex bg-[#ebf2fc] rounded-[24px] mt-[15px] mb-[15px] p-[15px]";
    resultCountriesEl.appendChild(countryEl);

    let countryFlagEl = document.createElement("img");
    countryFlagEl.src = country.flag;
    countryFlagEl.className = "w-[70px] h-[70px] my-auto";
    countryEl.appendChild(countryFlagEl);

    let countryInfoEl = document.createElement("div");
    countryInfoEl.className = "flex flex-col ml-[16px]";
    countryEl.appendChild(countryInfoEl);

    let countryNameEl = document.createElement("p");
    countryNameEl.textContent = country.name;
    countryNameEl.className =
        "text-[#183b56] font-['Roboto'] text-[22px] font-bold mb-[8px]";
    countryInfoEl.appendChild(countryNameEl);

    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.textContent = country.population;
    countryPopulationEl.className = "font-['Roboto'] text-[14px] font-light";
    countryInfoEl.appendChild(countryPopulationEl);
}

function displaySearchResults() {
    resultCountriesEl.textContent = "";
    for (let country of countriesList) {
        let countryName = country.name;
        if (countryName.includes(searchInputVal)) {
            createAndAppendCountry(country);
        }
    }
}

function getCountries() {
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET",
    };

    spinnerEl.classList.remove("hidden");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("hidden");
            countriesList = jsonData;
            displaySearchResults();
        });
}

function onChangeSearchInput(event) {
    searchInputVal = event.target.value;
    displaySearchResults();
}

getCountries();
searchInputEl.addEventListener("keyup", onChangeSearchInput);