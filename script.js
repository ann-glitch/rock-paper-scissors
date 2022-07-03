//DOM
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

//helper functions
let computerScore = 0;
let playerScore = 0;
const options = ["rock", "paper", "scissors"];

// a function that randomly returns rock, paper or scissors
function computerPlay(options) {
  return options[Math.floor(Math.random() * options.length)];
}

// a function that takes a computer and player input and returns the winner of the round and increase scores too.
function game(computerSelection, playerSelection) {
  let win = `YOU WIN ${playerSelection} beats ${computerSelection}`;
  let lose = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
  let tie = "IT'S A TIE! YOU BOTH CHOSE THE SAME THING";

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

  if (
    playerSelection === computerSelection &&
    computerSelection === playerSelection
  ) {
    return tie;
  } else {
    return "Invalid Input";
  }
}

const numOfTimes = prompt("how many times do you want to play?");
let times = parseInt(numOfTimes);

//  a for loop used to play 5 rounds of the game.
for (let i = 0; i < times; i++) {
  const playerSelection = prompt("Enter your play").toLowerCase();
  const computerSelection = computerPlay(options);
  console.log(game(computerSelection, playerSelection));
  console.log(`Your Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

// an if statement to indicate who wins at the end.
if (computerScore < playerScore) {
  console.log("PLAYER WINS!");
} else if (playerScore < computerScore) {
  console.log("COMPUTER WINS!");
} else {
  console.log("ENDED IN A TIE!");
}
