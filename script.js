let computerScore = 0;
let playerScore = 0;
let ties = 0;
const options = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("a button is clicked");

    function game() {
      const playerSelection = button.id;
      const computerSelection = computerPlay(options);
      playRound(computerSelection, playerSelection);

      function computerPlay(options) {
        return options[Math.floor(Math.random() * options.length)];
      }

      //results
      let gameResults = document.querySelector(".results");
      gameResults.innerHTML = `
        <p>Computer Selection: ${computerSelection}</p>
        <p>Player Selection: ${playerSelection}</p>
        <p>Computer wins: ${computerScore}</p>
        <p>Player wins: ${playerScore}</p>
        <p>Ties: ${ties}</p>`;
    }

    function playRound(computerSelection, playerSelection) {
      const win = `YOU WIN ${playerSelection} beats ${computerSelection}`;
      const lose = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
      const tie = "IT'S A TIE! YOU BOTH CHOSE THE SAME THING";

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
        ++ties;
      } else {
        return "Invalid Input";
      }
    }
    game();
  });
});
