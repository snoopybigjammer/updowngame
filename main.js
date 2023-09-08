let randomNumber = 0;
let randomColorNumber = 0;
const userInput = document.querySelector("input");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const resultArea = document.getElementById("result-area");
const chanceArea = document.getElementById("chance-area");
let chances = 5;
let historyArray = [];
const colors = [
  "black",
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
];

function randomColorMaker() {
  randomColorNumber = Math.floor(Math.random() * colors.length);
}

function randomMaker() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

randomMaker();

function gameStart() {
  chanceArea.classList.add("blink");

  let userInputValue = userInput.value;

  if (historyArray.includes(userInputValue)) {
    resultArea.innerText = "아까 이 숫자 쓰셨잖아요..";
    return;
  }

  historyArray.push(userInputValue);

  if (userInputValue <= 0 || userInputValue > 100) {
    resultArea.innerText = "1~100 사이의 숫자를 쓰세요 선생님..";
    return;
  }

  chances--;
  chanceArea.innerText = `당신의 남은 목숨 : ${chances} 개`;
  randomColorMaker();
  chanceArea.style.color = colors[randomColorNumber];

  if (userInputValue < randomNumber) {
    resultArea.innerText = "숫자좀 더 써봐..";
  } else if (userInputValue > randomNumber) {
    resultArea.innerText = "그렇게나 크겠냐..?";
  } else {
    resultArea.innerText = "와 이걸 맞추네?";
    startBtn.disabled = true;
    return;
  }

  if (chances < 1) {
    startBtn.disabled = true;
    resultArea.innerText = `아쉽지만 정답은 ${randomNumber}입니다`;
  }
}

function gameReset() {
  randomMaker();
  chances = 5;
  chanceArea.style.color = "black";
  userInput.value = "";
  historyArray = [];
  chanceArea.innerText = "남은 목숨 : 5개";
  resultArea.innerText = "누가 이겼는지 보여줌";
  startBtn.disabled = false;
}

startBtn.addEventListener("click", gameStart);
resetBtn.addEventListener("click", gameReset);
userInput.addEventListener("focus", () => {
  userInput.value = "";
});
