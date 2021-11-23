// Get list of weapons
const selection = document.querySelectorAll("button");

//Get random weapon for computer
function computerPlay() {
  return selection[Math.floor(Math.random() * 3)].innerText.toLowerCase();
}

let computerSelection;
let playerSelection;
let yourPoints = 0;
let computerPoints = 0;
let click = 0;
const roundResultList = document.getElementById("#round-result-list");
function playRound(playerSelection, computerSelection) {
  playerSelection = this.innerText.toLowerCase();
  computerSelection = computerPlay();
  click += 1;
  let li = document.createElement("li");
  // There are 7 cases can happen when you and computer chose your own weapon
  if (playerSelection === computerSelection) {
    li.innerHTML = `Tie! Both of you choose ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    yourPoints += 1;
    li.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoints += 1;
    li.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerPoints += 1;
    li.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    yourPoints += 1;
    li.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerPoints += 1;
    li.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    yourPoints += 1;
    li.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  if (click <= 5) {
    roundResultList.appendChild(li);
  }
  // count on rounds
  if (click === 5) {
    let annoucementText;
    if (yourPoints > computerPoints) {
      annoucementText = "Congrats! You are the champion";
    } else if (yourPoints < computerPoints) {
      annoucementText = "You lose, computer is the winner";
    } else {
      annoucementText = "Tie!";
    }
    document.querySelector(".annoucement").innerHTML =
      "<h2>" + annoucementText + " after 5 rounds </h2>";
  }

  if (click > 5) {
    click = 0;
    yourPoints = 0;
    computerPoints = 0;
    document.querySelector(".annoucement").innerHTML = "";
    roundResultList.innerHTML = "";
    window.addEventListener("click", () => {
      location.reload();
    });
  }
  document.querySelector(".yourscore").innerHTML = yourPoints;
  document.querySelector(".computerscore").innerHTML = computerPoints;
}

function game() {
  selection.forEach((btn) => btn.addEventListener("click", playRound));
}
game();
