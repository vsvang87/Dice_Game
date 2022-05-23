let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
//grabbing all selectors
let message = document.getElementById("message");
let player1Dice = document.getElementById("player1Dice");
let player2Dice = document.getElementById("player2Dice");
let playerOneScore = document.getElementById("player1Scoreboard");
let playerTwoScore = document.getElementById("player2Scoreboard");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

//event listener roll dice
rollBtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);

  //find out which players turn it is
  if (player1Turn === true) {
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2";
  } else {
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1";
  }
  //switch player back to the other player
  player1Turn = !player1Turn;
});
