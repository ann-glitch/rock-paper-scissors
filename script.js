let computerScore = 0;
let playerScore = 0;
let ties = 0;
const restartBtn = document.querySelector(".restart");

//reloads the page for a new game.
restartBtn.addEventListener("click", () => {
  location.reload();
});

function playRound(computerSelection, playerSelection) {
  let gameComments = document.querySelector(".comments");

  if (playerScore === 5) {
    return (gameComments.textContent =
      "GAME OVER! PLAYER WINS, PRESS THE RESTART BUTTON TO PLAY AGAIN.");
  } else if (computerScore === 5) {
    return (gameComments.textContent =
      "GAME OVER! COMPUTER WINS, PRESS THE RESTART BUTTON TO PLAY AGAIN.");
  }

  if (playerSelection === computerSelection) {
    ++ties;
    return (gameComments.textContent =
      "IT'S A TIE! YOU BOTH CHOSE THE SAME THING");
  }

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return (gameComments.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}`);
    } else {
      playerScore++;
      return (gameComments.textContent = `YOU WIN ${playerSelection} beats ${computerSelection}`);
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      return (gameComments.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}`);
    } else {
      playerScore++;
      return (gameComments.textContent = `YOU WIN ${playerSelection} beats ${computerSelection}`);
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return (gameComments.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}`);
    } else {
      playerScore++;
      return (gameComments.textContent = `YOU WIN ${playerSelection} beats ${computerSelection}`);
    }
  }
}

//a function where the computer randomly selects rock, paper or scissors.
const options = ["rock", "paper", "scissors"];
function computerPlay(options) {
  return options[Math.floor(Math.random() * options.length)];
}

//player uses buttons to select its option.
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("a button is clicked");

    function game() {
      const playerSelection = button.id;
      const computerSelection = computerPlay(options);

      //displaying the results
      let gameResults = document.querySelector(".results");
      gameResults.innerHTML = `
        <p>Computer Selection: ${computerSelection}</p>
        <p>Player Selection: ${playerSelection}</p>
        <p>Computer score: ${computerScore}</p>
        <p>Player score: ${playerScore}</p>
        <p>Ties: ${ties}</p>`;

      playRound(computerSelection, playerSelection);
    }
    game();
  });
});

