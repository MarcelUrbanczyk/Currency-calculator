{
  const selectedOption = document.querySelector(".form__select");
  const customCurrency = document.getElementById("js-customCurrency");


  const inputPopup = () =>{
    if (selectedOption.value === "Custom currency") {
      customCurrency.classList.remove("form__input--display");
    } else {
      customCurrency.classList.add("form__input--display");
    }
  }



const formSubmit = () =>{
  const amount = document.getElementById("js-amount").value;
  let result= calculateResult(amount)
  resultPopup(result);

}

const resultPopup = (result) =>{
  const resultOutput = document.getElementById("js-result");
  if (result > 0) {
    resultOutput.innerHTML =
      "Amount is: " + result.toFixed(2) + " " + selectedOption.value;
  } else {
    resultOutput.innerHTML = "Invalid data";
  }

}

 const calculateResult = (amount) =>{
  const rateUSD=4.25
  const rateEUR=4.63
  const rateGBP=5.24
  switch (selectedOption.value) {
    case "USD":
      return amount / rateUSD;

    case "EUR":
      return amount / rateEUR;

    case "GBP":
      return amount / rateGBP;

    case "Custom currency":
      return amount * customCurrency.value;
  }
  
 }

 const init=()=>{
  const submitButton = document.getElementById("js-submit");
  selectedOption.addEventListener("change",inputPopup)
  submitButton.addEventListener("click",formSubmit)

 }
init();
}