const initialNumbers1 = document.getElementById("initial-numbers1");
const initialNumbers2 = document.getElementById("initial-numbers2");
const initialNumbers3 = document.getElementById("initial-numbers3");
const initialNumbers4 = document.getElementById("initial-numbers4");
const initialNumbers5 = document.getElementById("initial-numbers5");
const formWindow = document.getElementById("form-window");
const initialNumbersWindow = document.getElementById("initial-numbers-window");

const response1 = document.getElementById("response1").value;
const response2 = document.getElementById("response2").value;
const response3 = document.getElementById("response3").value;
const response4 = document.getElementById("response4").value;
const response5 = document.getElementById("response5").value;

function generateRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

const Num1 = (initialNumbers1.innerHTML = generateRandom());
const Num2 = (initialNumbers2.innerHTML = generateRandom());
const Num3 = (initialNumbers3.innerHTML = generateRandom());
const Num4 = (initialNumbers4.innerHTML = generateRandom());
const Num5 = (initialNumbers5.innerHTML = generateRandom());

yourNumbers1 = Num1;
yourNumbers2 = Num2;
yourNumbers3 = Num3;
yourNumbers4 = Num4;
yourNumbers5 = Num5;

console.log(
  yourNumbers1,
  yourNumbers2,
  yourNumbers3,
  yourNumbers4,
  yourNumbers5
);

const trentaSec = setTimeout(formAppear, 3000);

function formAppear() {
  initialNumbersWindow.classList.add("d-none");
  formWindow.classList.remove("d-none");
}

saveResponse1 = response1;
saveResponse2 = response2;
saveResponse3 = response3;
saveResponse4 = response4;
saveResponse5 = response5;

console.log(
  saveResponse1,
  saveResponse2,
  saveResponse3,
  saveResponse4,
  saveResponse5
);
