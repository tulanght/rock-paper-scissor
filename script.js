const selection = ["rock", "paper", "scissors"];
function computerPlay() {
  return selection[Math.floor(Math.random() * 3)];
}
let computerSelection;
let playerSelection;
let yourPoints = 0;
let computerPoints = 0;
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Your selection?").toLowerCase();
  computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    console.log(`Tie! Both of you choose ${playerSelection}`);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    yourPoints += 1;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoints += 1;
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerPoints += 1;
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    yourPoints += 1;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerPoints += 1;
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    yourPoints += 1;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
}
function game() {
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  if (yourPoints > computerPoints) {
    console.log(
      `You: ${yourPoints}\nComputer: ${computerPoints}.\nYou are the champion`
    );
  } else if (yourPoints < computerPoints) {
    console.log(`You: ${yourPoints}\nComputer: ${computerPoints}\nYou lose!`);
  } else {
    console.log(`You: ${yourPoints}\nComputer: ${computerPoints}\nTie!`);
  }
}
game();
