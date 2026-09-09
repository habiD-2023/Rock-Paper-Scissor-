let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
  console.log("Draw! Try another Move");
  msg.innerText = "Draw! Try another Move";
  msg.style.backgroundColor = "orange";
  msg.style.color = "white";
};

const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    console.log("You Wins!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Wins ! Your ${userChoice}, beats computer's ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    console.log("Computer Wins!");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `Computer Wins ! Computer's ${compChoice}, beats Your's  ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const playGame = (userChoice) => {
  console.log("User Choice", userChoice);
  const compChoice = genCompChoice();
  console.log("Comp Choice", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
