let computerScore = 0;
let playerScore = 0;
let ties = 0;

function playRound(computerSelection, playerSelection) {
  const winPara = document.createElement("p");
  const losePara = document.createElement("p");
  const tiePara = document.createElement("p");
  winPara.textContent = `YOU WIN ${playerSelection} beats ${computerSelection}`;
  losePara.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
  tiePara.textContent = "IT'S A TIE! YOU BOTH CHOSE THE SAME THING";

  if (playerSelection === computerSelection) {
    if (computerSelection === playerSelection) {
      ++ties;
      return tiePara;
    } else {
      return "an error occurred";
    }
  }

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return losePara;
    } else {
      playerScore++;
      return winPara;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      return losePara;
    } else {
      playerScore++;
      return winPara;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return losePara;
    } else {
      playerScore++;
      return winPara;
    }
  }
}

const options = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("a button is clicked");

    function game() {
      const playerSelection = button.id;
      const computerSelection = computerPlay(options);
      const gameRound = playRound(computerSelection, playerSelection);
      console.log(gameRound);

      function computerPlay(options) {
        return options[Math.floor(Math.random() * options.length)];
      }

      //game comments
      let gameComments = document.querySelector(".comments");
      gameComments.appendChild(gameRound);

      //results
      let gameResults = document.querySelector(".results");
      gameResults.innerHTML = `
        <p>Computer Selection: ${computerSelection}</p>
        <p>Player Selection: ${playerSelection}</p>
        <p>Computer score: ${computerScore}</p>
        <p>Player score: ${playerScore}</p>
        <p>Ties: ${ties}</p>`;
    }
    game();
  });
});
