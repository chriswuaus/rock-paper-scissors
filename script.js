function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      console.log("Rock");
      return "Rock";
    case 1:
      console.log("Scissors");
      return "Scissors";

    case 2:
      console.log("Paper");
      return "Paper";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection.toLowerCase()) {
    return "Draw!";
  }

  if (playerSelection === "rock") {
    return computerSelection === "Paper"
      ? "You lose! Paper beats Rock"
      : "You win! Rock beats Scissors!";
  } else if (playerSelection === "paper") {
    return computerSelection === "Scissors"
      ? "You lose! Scissors beats Paper"
      : "You win! Paper beats Rock!";
  } else if (playerSelection === "scissors") {
    return computerSelection === "Rock"
      ? "You lose! Rock beats Scissors"
      : "You win! Scissors beats Paper!";
  }
}

let playerSelection = prompt("What move would you like to play?").toLowerCase();
console.log(playRound(playerSelection, getComputerChoice()));
