const API_URL = "https://api.frankfurter.dev/v2/rate";

let fromAmount = document.querySelector("#fromAmount");
let convertBtn = document.querySelector("#convertBtn");
let fromCurrency = document.querySelector("#fromCurrency");
let toCurrency = document.querySelector("#toCurrency");
let toAmount = document.querySelector("#toAmount");
let rateText = document.querySelector("#rateText");
let rateDate = document.querySelector("#rateDate");
let fromCurrencyName = document.querySelector("#fromCurrencyName");
let toCurrencyName = document.querySelector("#toCurrencyName");
let swapBtn = document.querySelector("#swapBtn");
let convertedAmount;
let moneyInput;
let fromCurrencyInput;
let toCurrencyInput;

convertBtn.addEventListener('click', (e) => {
  moneyInput = fromAmount.value.trim();
  fromCurrencyInput = fromCurrency.value;
  fromName(fromCurrencyInput);

  toCurrencyInput = toCurrency.value;
  toName(toCurrencyInput);

  if (!moneyInput)
    return;
  convertCurrency(moneyInput, fromCurrencyInput, toCurrencyInput);
});


async function convertCurrency(moneyInput, fromCurrencyInput, toCurrencyInput) {
  let response = await fetch(`${API_URL}/${fromCurrencyInput}/${toCurrencyInput}`);
  let data = await response.json();
  console.log(data);
  convertedAmount = moneyInput * data.rate;
  displayAmount(convertedAmount);
  rateText.textContent = `1 ${fromCurrency.value} = ${data.rate} ${toCurrency.value}`;
  rateDate.textContent = `${data.date}`;
}

function displayAmount(convertedAmount) {
  toAmount.textContent = `${convertedAmount}`;
}

// swapBtn.addEventListener('click', (e) => {
//   moneyInput = convertedAmount;
//   let t = fromCurrencyInput;
//   fromCurrencyInput = toCurrencyInput;
//   toCurrencyInput = t;
//   convertCurrency(moneyInput, fromCurrencyInput, toCurrencyInput);
//   fromName(fromCurrencyInput);
//   toName(toCurrencyInput);
// })



function fromName(fromCurrencyInput) {
  if (fromCurrencyInput === "USD") fromCurrencyName.textContent = "US Dollar";
  if (fromCurrencyInput === "INR") fromCurrencyName.textContent = "Indian Rupee";
  if (fromCurrencyInput === "EUR") fromCurrencyName.textContent = "Euro";
  if (fromCurrencyInput === "GBP") fromCurrencyName.textContent = "British Pound";
  if (fromCurrencyInput === "JPY") fromCurrencyName.textContent = "Japanese Yen";
  if (fromCurrencyInput === "CAD") fromCurrencyName.textContent = "Canadian Dollar";
  if (fromCurrencyInput === "AUD") fromCurrencyName.textContent = "Australian Dollar";
  if (fromCurrencyInput === "BDT") fromCurrencyName.textContent = "Bangladeshi Taka";
  if (fromCurrencyInput === "SGD") fromCurrencyName.textContent = "Singapore Dollar";
  if (fromCurrencyInput === "CHF") fromCurrencyName.textContent = "Swiss Franc";
}


function toName(toCurrencyInput) {
  if (toCurrencyInput === "USD") toCurrencyName.textContent = "US Dollar";
  if (toCurrencyInput === "INR") toCurrencyName.textContent = "Indian Rupee";
  if (toCurrencyInput === "EUR") toCurrencyName.textContent = "Euro";
  if (toCurrencyInput === "GBP") toCurrencyName.textContent = "British Pound";
  if (toCurrencyInput === "JPY") toCurrencyName.textContent = "Japanese Yen";
  if (toCurrencyInput === "CAD") toCurrencyName.textContent = "Canadian Dollar";
  if (toCurrencyInput === "AUD") toCurrencyName.textContent = "Australian Dollar";
  if (toCurrencyInput === "BDT") toCurrencyName.textContent = "Bangladeshi Taka";
  if (toCurrencyInput === "SGD") toCurrencyName.textContent = "Singapore Dollar";
  if (toCurrencyInput === "CHF") toCurrencyName.textContent = "Swiss Franc";
}