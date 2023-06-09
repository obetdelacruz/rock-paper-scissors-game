const playerScoreLabel = document.getElementById("player-score-label");
const tieScoreLabel = document.getElementById("tie-score-label");
const computerScoreLabel = document.getElementById("ai-score-label");
const playerPick = document.getElementById("player-pick");
const computerPick = document.getElementById("computer-pick");
const weaponsButtons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;
let ties = 0;

const getComputerSelection = () => {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * weapons.length);
  return weapons[randomIndex];
};

const playRound = (playerSelection, computerSection) => {
  if (playerSelection === computerSection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSection === "scissors") ||
    (playerSelection === "paper" && computerSection === "rock") ||
    (playerSelection === "scissors" && computerSection === "paper")
  ) {
    return "You win";
  } else {
    return "You lose";
  }
};

const gameHandler = (playerSelection) => {
  const computerSelection = getComputerSelection();
  computerPick.textContent = computerSelection;
  playerPick.textContent = playerSelection;

  const result = playRound(playerSelection, computerSelection);

  if (result === "You win") {
    playerScore++;
    playerScoreLabel.textContent = playerScore;
  } else if (result === "You lose") {
    computerScore++;
    computerScoreLabel.textContent = computerScore;
  } else {
    ties++;
    tieScoreLabel.textContent = ties;
  }
};

weaponsButtons.forEach((weaponButton) => {
  weaponButton.addEventListener("click", () => gameHandler(weaponButton.id));
});

/*

const getUserSelection = () => prompt("Choose your weapon").toLowerCase();

const getComputerSelection = () => {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * weapons.length);

  return weapons[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win";
  } else {
    return "You Lose";
  }
};

const game = (rounds) => {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < rounds && computerScore < rounds) {
    const playerSelection = getUserSelection();
    const computerSelection = getComputerSelection();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Player Selection: ${playerSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);
    console.log(`Result: ${result}`);

    if (result === "You Win") {
      playerScore++;
    } else if (result === "You Lose") {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("Player won the games");
  } else {
    console.log("You lose! Try better next time");
  }
};

game(3);

*/
