const choice = ["Rock", "Paper", "Scissors"];
const randomItem = choice[Math.floor(Math.random() * choice.length)];

let playerChoice, winCount, tieCount, loseCount;

let computerPlay = () => randomItem.toLowerCase();
let playerSelection = () =>
  (playerChoice = prompt(
    'Please choose either "Rock", "Paper" or "Scissors"!'
  ).toLowerCase());

function playRound(playerSelection, computerSelection) {
  const win = `You win! ${playerSelection} beats ${computerSelection}`;
  const lose = `You lose! ${computerSelection} beats ${playerSelection}`;
  const tie = `Tie game! ${playerSelection} and ${computerSelection}`;

  if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      win++;
      return `${win}`;
    } else if (playerSelection == computerSelection) {
      tie++;
      return `${tie}`;
    } else {
      lose++;
      return `${lose}`;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      win++;
      return `${win}`;
    } else if (playerSelection == computerSelection) {
      tie++;
      return `${tie}`;
    } else {
      lose++;
      return `${lose}`;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return `${win}`;
    } else if (playerSelection == computerSelection) {
      return `${tie}`;
    } else {
      return `${lose}`;
    }
  }
}

console.log(playRound(playerSelection(), computerPlay()));
