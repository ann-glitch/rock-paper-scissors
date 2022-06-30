//helper functions
let computerScore = 0;
let playerScore = 0;
let win = `You Win!`;
let lose = `You Lose!`;
let tie = "It's a tie!";
const options = ["rock", "paper", "scissors"];

// a function that randomly returns rock, paper or scissors
function computerPlay(options) {
  return options[Math.floor(Math.random() * options.length)];
}
computerPlay(options);

// a function that takes a computer and player input and returns the winner of the round and increase scores too.
function game(computerSelection, playerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return lose;
    } else {
      playerScore++;
      return win;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      return lose;
    } else {
      playerScore++;
      return win;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return lose;
    } else {
      playerScore++;
      return win;
    }
  }
  if (playerSelection === computerSelection) {
    return tie;
  } else {
    return "Invalid Input";
  }
}

for (let i = 0; i < 5; i++) {
  const playerSelection = prompt("Enter your play!").toLowerCase();
  const computerSelection = computerPlay(options);
  console.log(game(computerSelection, playerSelection));
  console.log(`Your Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
}
if (computerScore < 3) {
  console.log("PLAYER WINS");
} else {
  console.log("COMPUTER WINS");
}
