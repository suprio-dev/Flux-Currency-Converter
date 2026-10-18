# 💱 Flux — Currency Converter

### A currency converter built with JavaScript.

A clean, responsive currency converter built with HTML, Tailwind CSS, and JavaScript, powered by the Frankfurter API. Convert amounts between supported currencies, retrieve exchange rates dynamically, swap currencies instantly, and view the reference date for the returned rate.

**Live Demo:** [Flux Currency Converter](https://suprio-dev.github.io/Flux-Currency-Converter/)

---

## ✨ Features

- Convert amounts between supported currencies
- Select source and target currencies
- **Swap source and target currencies instantly**
- Automatically recalculate the conversion after swapping currencies
- Fetch exchange rates dynamically using the Frankfurter API
- Calculate converted amounts using JavaScript
- Display the exchange rate for the selected currency pair
- Show the reference date of the exchange rate
- Display full currency names alongside currency codes
- Update conversion results dynamically
- Responsive user interface
- Modern dark UI with a subtle gradient background
- Asynchronous API requests using `async/await`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| Tailwind CSS | Styling and responsive UI |
| JavaScript | Conversion logic, currency swapping, and DOM manipulation |
| Frankfurter API | Exchange rate data |
| Fetch API | Asynchronous API requests |
| DOM API | Updating conversion results and currency information |

---

## 🔄 How It Works

```text
Open Flux
    ↓
Enter Amount
    ↓
Select Source Currency
    ↓
Select Target Currency
    ↓
Request Exchange Rate
    ↓
Frankfurter API
    ↓
Receive Exchange Rate Data
    ↓
Calculate Converted Amount
    ↓
Display Result and Rate Date
```

Flux uses the selected currencies and entered amount to request the corresponding exchange rate from the Frankfurter API.

JavaScript processes the API response, calculates the converted amount, and updates the result, exchange rate, and reference date in the interface.

The swap feature allows users to reverse the selected source and target currencies with a single click. The conversion is then recalculated using the reversed currency pair.

---

## 🌐 API Integration

Flux uses the **Frankfurter API** to retrieve exchange rates without requiring an API key.

Example API request:

```js
const API_URL = "https://api.frankfurter.dev/v2/rate";

async function convertCurrency(
  amount,
  fromCurrency,
  toCurrency
) {
  const response = await fetch(
    `${API_URL}/${fromCurrency}/${toCurrency}`
  );

  const data = await response.json();

  const convertedAmount = amount * data.rate;

  console.log(convertedAmount);
  console.log(data.rate);
  console.log(data.date);
}
```

The API returns exchange rate information, including the base currency, target currency, rate, and reference date.

**Note:** Frankfurter provides reference exchange rates that are generally updated on business days. These rates should not be treated as guaranteed live transaction rates.

**API Documentation:** [Frankfurter API](https://frankfurter.dev/)

---

## 🎯 Why I Built It

This project was built to practice working with:

- DOM manipulation
- Event listeners and button interactions
- User input and basic validation
- Fetch API and asynchronous JavaScript
- `async/await`
- Working with JSON data
- REST API integration
- Dynamic calculations using API responses
- Currency swapping and updating selected currencies
- Updating DOM elements with JavaScript
- Displaying exchange rates and dates
- Responsive UI development with Tailwind CSS

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/suprio-dev/Flux-Currency-Converter.git
cd Flux-Currency-Converter
```

Open `index.html` using VS Code Live Server or another local development server.

No API key is required for the Frankfurter API.

---

## 📌 Project Status

**In Progress — v1.0**

Built as a hands-on project to strengthen my JavaScript fundamentals and explore REST API integration, asynchronous programming, dynamic calculations, currency swapping, and responsive UI development.

More features and improvements may be added in future versions.