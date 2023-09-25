const playerText = document.querySelector(".playerOp");
const computerText = document.querySelector(".computerOp");
const resultText = document.querySelector(".result");
const buttons = document.querySelectorAll(".choice");

let player;
let computer;

buttons.forEach(buttons => buttons.addEventListener("click", () => { 
  player = buttons.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`
  computerText.textContent = `Computer: ${computer}`
  resultText.textContent = checkWinner();
}));

function computerTurn(){
  let computerChoice = Math.floor(Math.random() * 3 ) + 1;

  switch(computerChoice){
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
};

function checkWinner(){
  if(player == computer){
    return "Draw";
  }else if(computer == "ROCK"){
    return player == "PAPER" ? "You Win" : "You Lose";
  }else if(computer == "PAPER"){
    return player == "SCISSORS" ? "You Win" : "You Lose";
  }else if(computer == "SCISSORS"){
    return player == "ROCK" ? "You Win" : "You Lose";
  }
}