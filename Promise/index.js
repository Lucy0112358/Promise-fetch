let divForCountry = document.querySelector("#country");
let input = document.querySelector("input");
let button = document.querySelector("button");
function makeRequestToUnsplash() {
  const requestOne = `https://restcountries.com/v3.1/name/${input.value}`;
  fetch(requestOne)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((countryObj) => {
        console.log(countryObj);
        createCountry(countryObj);
      });
    });
}

button.addEventListener(`click`, makeRequestToUnsplash);
function createCountry(countryObj) {
  const countryDiv = document.createElement("div");
  const span = document.createElement("span");
  span.textContent = countryObj.capital;
  span.style.margin = "20px";
  span.style.width = "600px";
  span.style.height = "500px";
  span.style.border = "double 4px black";
  countryDiv.append(span);
  divForCountry.append(countryDiv);
}
