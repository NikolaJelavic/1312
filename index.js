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

//  let input = parseInt(inputString.value);
// let input = Number(inputString.value);
// if (input>5){
//     console.log("error");
// }

let result = document.querySelector("[data-js=result]");

plus.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let add = inputValue + inputValue;

  inputString.value = add;
});
// plus.addEventListener("click", () => {
//     let inputValue = parseInt(inputString.value);
//     let add = inputValue + inputValue;

//     result.value = add;
//     inputString.value = "";

//     if (!isNaN(parseInt(result.value))) {
//         let addNew = parseInt(result.value);
//         addNew = addNew + addNew;
//         result.value = addNew;
//       }
//   });
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
  let pi = inputValue * Math.PI;
  inputString.value = pi;
});

sqr.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let sqr = Math.sqrt(inputValue);
  inputString.value = sqr;
});

divide.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let divide = inputValue / 2;
  inputString.value = divide;
});

addProcent10.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let addProcent10 = inputValue * 1.1;
  inputString.value = addProcent10;
});

removeProcent10.addEventListener("click", () => {
  let inputValue = parseInt(inputString.value);
  let removeProcent10 = inputValue * 0.9;
  inputString.value = removeProcent10;
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
      '<img src="/cats/support1.jpg" width="400px" height="400px">';
  } else if (counter == 7) {
    message.innerHTML =
      '<img src="/cats/support2.png" width="400px" height="400px">';
  } else if (counter == 9) {
    message.innerHTML =
      '<img src="/cats/support3.png" width="400px" height="400px">';
  } else if (counter == 11) {
    message.innerHTML =
      '<img src="/cats/support4.png" width="400px" height="400px">';
  }
});
fineTuning.addEventListener("click", () => {
  counter++;
  clicks.innerHTML = counter;
  if (counter >= 5 && counter < 7) {
    message.innerHTML =
      '<img src="/cats/support1.jpg" width="400px" height="400px">';
  } else if (counter == 7) {
    message.innerHTML =
      '<img src="/cats/support2.png" width="400px" height="400px">';
  } else if (counter == 9) {
    message.innerHTML =
      '<img src="/cats/support3.png" width="400px" height="400px">';
  } else if (counter == 11) {
    message.innerHTML =
      '<img src="/cats/support4.png" width="400px" height="400px">';
  }
});

// if ((inputString.value = 1312)) {
//   console.log("well done");
// }
