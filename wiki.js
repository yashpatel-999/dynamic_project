let searchResultsContainer = document.getElementById("searchResults")
let searchEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");

function createAndAppend(resultItem) {
    let {
        title,
        link,
        description
    } = resultItem;
    let resultContainer = document.createElement("div")
    searchResultsContainer.appendChild(resultContainer);
    resultContainer.classList.add("mb-2");

    let titleEl = document.createElement("a");
    titleEl.textContent = title;
    titleEl.classList.add("text-blue-800", "hover:underline", "text-2xl")
    resultContainer.appendChild(titleEl);

    let breakEl = document.createElement("br");
    resultContainer.appendChild(breakEl);

    let linkEl = document.createElement("a");
    linkEl.textContent = link;
    linkEl.href = link;
    linkEl.target = "_blank";
    linkEl.classList.add("text-sm", "text-[green]");
    resultContainer.appendChild(linkEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("text-[#444444]", "mt-1")
    resultContainer.appendChild(descriptionEl)

    let hrEl = document.createElement("hr");
    resultContainer.appendChild(hrEl)
}

function displayResults(results) {
    for (let i of results) {
        createAndAppend(i);
    }
}
searchEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchResultsContainer.textContent = "";
        spinnerEl.classList.toggle("hidden");
        let searchTerm = searchEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchTerm;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                console.log(response.status);
                return response.json();
            })
            .then(function(responseData) {
                let searchResults = responseData.search_results;
                spinnerEl.classList.toggle("hidden");
                displayResults(searchResults)
            });
    }
})