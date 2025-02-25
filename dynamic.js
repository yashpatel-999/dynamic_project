let titleEl = document.getElementById("titleInput");
let urReviewEl = document.getElementById("reviewTextarea");
let reviewConEl = document.getElementById("reviewsContainer");

function addReview() {
    let addTitleEl = document.createElement("h1");
    let hrEl = document.createElement("hr");
    hrEl.classList.add("self-stretch");
    addTitleEl.textContent = "Movie Title: " + titleEl.value;
    addTitleEl.classList.add("font-bold", "p-2", "text-[20px]", "text-black");
    let addParaEl = document.createElement("p");
    addParaEl.textContent = urReviewEl.value;
    addParaEl.classList.add("p-2", "text-[15px]", "text-gray");
    reviewConEl.appendChild(addTitleEl);
    reviewConEl.appendChild(addParaEl);
    reviewConEl.appendChild(hrEl)
}