let divForCountry = document.querySelectorAll("country")[0];
const requestOne = `https://restcountries.com/v3.1/name/peru`;
function makeRequest(requestUrl) {
  fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((countryObj) => {
        console.log(countryObj);
        createCountry(countryObj);
      });
    });
}
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
console.log(makeRequest(requestOne));
