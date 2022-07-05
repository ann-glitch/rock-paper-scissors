let computerScore = 0;
let playerScore = 0;
const options = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    function game() {
      const playerSelection = button.id;
      const computerSelection = computerPlay(options);
      console.log(playRound(computerSelection, playerSelection));
      console.log(`Your Score: ${playerScore}`);
      console.log(`Computer Score: ${computerScore}`);

      function computerPlay(options) {
        return options[Math.floor(Math.random() * options.length)];
      }
    }
    function playRound(computerSelection, playerSelection) {
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
    if (computerScore < 5) {
      console.log("PLAYER WINS!");
    } else if (playerScore < 5) {
      console.log("COMPUTER WINS!");
    } else {
      console.log("ENDED IN A TIE!");
    }
    game();
  });
});
