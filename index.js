console.clear();

let plus = document.querySelector("[data-js=plus]");
let power2 = document.querySelector("[data-js=n2]");
let power3 = document.querySelector("[data-js=n3]");
let pi = document.querySelector("[data-js=pi]");
let sqr = document.querySelector("[data-js=√n]");
let divide = document.querySelector("[data-js=divide]");
let addProcent10 = document.querySelector("[data-js=addProcent10]");
let removeProcent10 = document.querySelector("[data-js=removeProcent10]");

let plus1 = document.querySelector("[data-js=plus1]");
let plus5 = document.querySelector("[data-js=plus5]");
let minus1 = document.querySelector("[data-js=minus1]");
let minus5 = document.querySelector("[data-js=minus5]");

let message = document.querySelector("[data-js=message]");
let clicksCounter = document.querySelector("[data-js=clicksCounter]");
let fineTuning = document.querySelector(".fineTuning");
let clicks = document.querySelector("[data-js=clicks]");

let inputString = document.querySelector("[data-js=input]");

inputString.addEventListener("input", () => {
  let inputValue = inputString.value;
  inputValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters

  // Ensure the input value is within the range of 1 to 5
  if (inputValue < 1) {
    inputValue = 1;
  } else if (inputValue > 5) {
    inputValue = 5;
  }

  inputString.value = inputValue;
});

let result = document.querySelector("[data-js=result]");

plus.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let add = inputValue + inputValue;

  inputString.value = add;
});

power2.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let power2 = inputValue ** 2;
  inputString.value = power2;
});

power3.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let power3 = inputValue ** 3;
  inputString.value = power3;
});

pi.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let calculatedValue = inputValue * Math.PI;
  let roundedValue = Math.round(calculatedValue);
  inputString.value = roundedValue;
});

sqr.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let squareRoot = Math.sqrt(inputValue);
  let roundedSquareRoot = Math.round(squareRoot);
  inputString.value = roundedSquareRoot;
});

divide.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let divide = inputValue / 2;
  inputString.value = divide;
});

addProcent10.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let calculatedValue = inputValue * 1.1;
  let roundedValue = Math.round(calculatedValue);
  inputString.value = roundedValue;
});

removeProcent10.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let calculatedValue = inputValue * 0.9;
  let roundedValue = Math.round(calculatedValue);
  inputString.value = roundedValue;
});

plus1.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let plus1 = inputValue + 1;
  inputString.value = plus1;
});

plus5.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let plus5 = inputValue + 5;
  inputString.value = plus5;
});
minus1.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let minus1 = inputValue - 1;
  inputString.value = minus1;
});
minus5.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let minus5 = inputValue - 5;
  inputString.value = minus5;
});

let counter = 0;
clicksCounter.addEventListener("click", () => {
  counter++;
  clicks.innerHTML = counter;
  if (counter >= 5 && counter < 7) {
    message.innerHTML =
      '<img src="./cats/support1.jpg" width="400px" height="400px">';
  } else if (counter == 3) {
    message.innerHTML =
      '<img src="./cats/support2.png" width="400px" height="400px">';
  } else if (counter == 5) {
    message.innerHTML =
      '<img src="./cats/support3.png" width="400px" height="400px">';
  } else if (counter == 7) {
    message.innerHTML =
      '<img src="./cats/support4.png" width="400px" height="400px">';
  } else if (counter == 9) {
    message.innerHTML =
      '<img src="./cats/support5-suheyl-burak-WhHc2Z9XV9k-unsplash.jpg" width="400px" height="400px">';
  }else if (counter == 11) {
    message.innerHTML =
      '<img src="./cats/support9-pexels-bruchin-noeka-6011952.jpg" width="400px" height="400px">';
  }
  else if (counter == 13) {
    message.innerHTML =
      '<img src="./cats/support7-pexels-anna-shvets-4587955.jpg" width="400px" height="400px">';
  }
  else if (counter == 15) {
    message.innerHTML =
      '<img src="./cats/support8-pexels-alina-vilchenko-3218841.jpg" width="400px" height="400px">';
  }
  else if (counter == 17) {
    message.innerHTML =
      '<img src="./cats/support6-sergey-semin-6TiFuD_1q4o-unsplash.jpg" width="400px" height="400px">';
  }
  
  if (inputString.value === "1312") {
    const successModal = document.getElementById("successModal");
    successModal.style.display = "block";
  
    const closeModalButton = document.getElementById("closeModal");
    closeModalButton.addEventListener("click", () => {
      successModal.style.display = "none";
    });
  }
});
fineTuning.addEventListener("click", () => {
  counter++;
  clicks.innerHTML = counter;
  if (counter >= 5 && counter < 7) {
    message.innerHTML =
      '<img src="./cats/support1.jpg" width="400px" height="400px">';
  } else if (counter == 3) {
    message.innerHTML =
      '<img src="./cats/support2.png" width="400px" height="400px">';
  } else if (counter == 5) {
    message.innerHTML =
      '<img src="./cats/support3.png" width="400px" height="400px">';
  } else if (counter == 7) {
    message.innerHTML =
      '<img src="./cats/support4.png" width="400px" height="400px">';
  } else if (counter == 9) {
    message.innerHTML =
      '<img src="./cats/support5-suheyl-burak-WhHc2Z9XV9k-unsplash.jpg" width="400px" height="400px">';
  }else if (counter == 11) {
    message.innerHTML =
      '<img src="./cats/support9-pexels-bruchin-noeka-6011952.jpg" width="400px" height="400px">';
  }
  else if (counter == 13) {
    message.innerHTML =
      '<img src="./cats/support7-pexels-anna-shvets-4587955.jpg" width="400px" height="400px">';
  }
  else if (counter == 15) {
    message.innerHTML =
      '<img src="./cats/support8-pexels-alina-vilchenko-3218841.jpg" width="400px" height="400px">';
  }
  else if (counter == 17) {
    message.innerHTML =
      '<img src="./cats/support6-sergey-semin-6TiFuD_1q4o-unsplash.jpg" width="400px" height="400px">';
  }

  if (inputString.value === "1312") {
    const successModal = document.getElementById("successModal");
    successModal.style.display = "block";
  
    const closeModalButton = document.getElementById("closeModal");
    closeModalButton.addEventListener("click", () => {
      successModal.style.display = "none";
    });
  }
})
