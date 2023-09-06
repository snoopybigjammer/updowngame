let randomNumber = 0;
const userInput = document.querySelector("input");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const resultArea = document.getElementById("result-area");
const chanceArea = document.getElementById("chance-area");
let chances = 5;
let historyArray = [];

function randomMaker() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

randomMaker();

function gameStart() {
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
    resultArea.innerText = "넌 기회를 소중히 하지 않았지..";
  }
}

function gameReset() {
  randomMaker();
  chances = 5;
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
