const choice = ["Rock", "Paper", "Scissors"];
const randomItem = choice[Math.floor(Math.random() * choice.length)];

let playerChoice;
let playerScore = 0;
let compScore = 0;

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
      playerScore++;
      return `${win}`;
    } else if (playerSelection == computerSelection) {
      return `${tie}`;
    } else {
      compScore++;
      return `${lose}`;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      playerScore++;
      return `${win}`;
    } else if (playerSelection == computerSelection) {
      return `${tie}`;
    } else {
      compScore++;
      return `${lose}`;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore++;
      return `${win}`;
    } else if (playerSelection == computerSelection) {
      return `${tie}`;
    } else {
      compScore++;
      return `${lose}`;
    }
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    console.log(playRound(playerSelection(), computerPlay()));
    console.log(`${playerScore} - ${compScore}`);
  }
  return playerScore > compScore
    ? console.log("Congrats! You win!")
    : console.log("You lose! Try again!");
}

game();
