console.log("Hello world!");

document.addEventListener("DOMContentLoaded", () => {
  const resultElement = document.getElementById("result");
  const inputElement = document.getElementById("input");
  let currentInput = "";
  let currentResult = 0;
  let currentOperator = null;
  let number1;
  let number2;
  let number1Filled = false;
  let op;
  let number3;

  document.querySelectorAll(".digit").forEach((button) => {
    button.addEventListener("click", () => {
      /*  currentInput += button.textContent.trim();
            inputElement.textContent = currentInput;*/
      if (number1Filled == false) {
        number1 = button.innerText;
        inputElement.innerText = number1;
        number1Filled = true;

      } 
      else if (resultElement.innerText==='') {
        number2 = button.innerText;
        inputElement.innerText += number2;
        }
        else {
          number1 = resultElement.innerText
          number2 = button.innerText
          inputElement.innerText += number2;
      }
    });
  });

  document.querySelector(".badd").addEventListener("click", () => {
   op = "+";
    inputElement.innerText += op;
  });
  document.querySelector(".bsub").addEventListener("click", () => {
    op = "-";
    inputElement.innerText += op;
  });
  document.querySelector(".bequal").addEventListener("click", () => {
    let numb1 = parseInt(number1);
    let numb2 = parseInt(number2);
    let numb3 = parseInt(number3)
    if (op === "+") {
      let result = numb1 + numb2;
      resultElement.innerText = result;
    }
  });

  document.querySelector(".bclear").addEventListener("click", () => {
    inputElement.innerText = "";
    resultElement.innerText = "";
    number1Filled=false
    /* number1 = "";
    number2 = "";
    op = ""; */
  });
});
