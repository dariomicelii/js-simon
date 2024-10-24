const initialNumbers1 = document.getElementById("initial-numbers1");
const initialNumbers2 = document.getElementById("initial-numbers2");
const initialNumbers3 = document.getElementById("initial-numbers3");
const initialNumbers4 = document.getElementById("initial-numbers4");
const initialNumbers5 = document.getElementById("initial-numbers5");
const formWindow = document.getElementById("form-window");
const initialNumbersWindow = document.getElementById("initial-numbers-window");

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
  initialNumbersWindow.classList("d-none");
  formWindow.classList("d-block");
}
