//How randomly the computer will input
function getComputerResponse() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//formulate an if statements of how randomly the player will choose the above options.
const playerInput = prompt("Input rock, paper, or scissors.");
if (
  playerInput === "rock" ||
  playerInput === "paper" ||
  playerInput === "scissors"
) {
  console.log("playerInput");
} else {
  console.log("error! try again!");
}

// Declare Winner
const winner = declareWinner(playerInput, computerInput);
if (playerInput === "rock" && computerInput === "paper") {
  console.log("Talo Ka! Tinalo ng Papel ang Bato");
} else if (playerInput === "paper" && computerInput === "scissors") {
  console.log("Talo Ka! Tinalo ng Gunting ang Paper");
} else if (playerInput === "scissors" && computerInput === "rock") {
  console.log("Talo Ka! Tinalo ng Bato ang Gunting");
}
