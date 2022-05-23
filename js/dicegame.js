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

  //update score board

  //find out which players turn it is
  if (player1Turn === true) {
    //update scoreboard
    let player1 = (player1Score += randomNumber);
    playerOneScore.innerHTML = player1;
    //update dice
    player1Dice.textContent = randomNumber;
    //add and remove active classlist
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2";
  } else {
    //update player 2 scoreboard
    let player2 = (player2Score += randomNumber);
    playerTwoScore.innerHTML = player2;
    //update dice
    player2Dice.textContent = randomNumber;
    //update classlist active
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1";
  }
  //display button function
  function displayBtn() {
    resetBtn.style.display = "block";
    rollBtn.style.display = "none";
  }
  //check if a player has won the game.
  if (player1Score >= 20) {
    message.innerHTML = "Player 1 has Won!";
    displayBtn();
  } else if (player2Score >= 20) {
    message.innerHTML = "Player 2 has Won!";
    displayBtn();
  }

  //switch player back to the other player
  player1Turn = !player1Turn;
});

//event listener reset button
resetBtn.addEventListener("click", () => {
  reset();
});

//reset function
function reset() {
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
  message.innerHTML = "Player 1 Turn";
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  player1Dice.innerHTML = "-";
  player2Dice.innerHTML = "-";
  //reset variables
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  //remove classlist
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}
