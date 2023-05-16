let resultOutput = document.getElementById("js-result");
let submitButton = document.getElementById("js-submit");
let selectedOption = document.querySelector(".form__select");
let customCurrency = document.getElementById("js-customCurrency");

selectedOption.addEventListener("change", () => {
  if (selectedOption.value === "Custom currency") {
    customCurrency.classList.remove("form__input--display");
  } else {
    customCurrency.classList.add("form__input--display");
  }
});

submitButton.addEventListener("click", () => {
  let amount = document.getElementById("js-amount").value;
  let selectedOption = document.querySelector(".form__select").value;
  switch (selectedOption) {
    case "USD":
      result = amount * 4.24;
      break;

    case "EUR":
      result = amount * 4.63;
      break;

    case "GBP":
      result = amount * 5.24;
      break;

    case "Custom currency":
      result = amount * customCurrency.value;
      break;
  }

  if (result > 0) {
    resultOutput.innerHTML =
      "Amount is: " + result.toFixed(2) + "PLN";
  } else {
    resultOutput.innerHTML = "Invalid data";
  }
});
