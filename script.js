const options = ["rock", "paper", "scissors"];

function computerPlay(options) {
  return options[Math.floor(Math.random() * options.length)]; // a function that randomly returns rock, paper or scissors
}
computerPlay(options);

// a function that takes a computer and player input and returns the winner of the round
function playRound(computerSelection, playerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats rock";
  } else {
    return "invalid input";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay(options);
console.log(playRound(computerSelection, playerSelection));
