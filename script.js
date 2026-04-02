let options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let playerScoreElement = document.getElementById('player-score');
let computerScoreElement = document.getElementById('computer-score');
let roundResultsMsg = document.getElementById('results-msg');
// we will use this buttons to test the function showResults()
let rockBtn = document.getElementById('rock-btn');
let paperBtn = document.getElementById('paper-btn');
let scissorsBtn = document.getElementById('scissors-btn');
let winnerMsg = document.getElementById('winner-msg');
let optionsContainer = document.getElementById('options-container');
let resetGameBtn = document.getElementById('reset-game-btn');
 
// generate a random choice for the computer
function getRandomComputerResult(){
    let randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
}

// determining if the player won the round
function hasPlayerWonTheRound(playerChoice, computerChoice){
  if(playerChoice === computerChoice){
    return false;
  } else if(playerChoice === "Rock" && computerChoice === "Scissors" || 
            playerChoice === "Scissors" && computerChoice === "Paper" ||
            playerChoice === "Paper" && computerChoice === "Rock"
  ){
    return true;
  } else {
    return false;
  }
}

// determinig the results of the round
function getRoundResults(userOption){
    const computerResult = getRandomComputerResult();
    if(userOption === computerResult){
        return "it's a tie both chose: " + userOption;
    }
    else if(hasPlayerWonTheRound(userOption, computerResult)){
        playerScore++;
        return "the player wins: " + userOption + " beats " + computerResult;
    } else {
        computerScore++;
        return "computer wins: " + computerResult + " beats " + userOption;
    }
}

// create a functinality that will show the results
function showResults(userOption){
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreElement.innerText = playerScore;
  computerScoreElement.innerText = computerScore;  
  if(playerScore === 3){
    winnerMsg.innerText = "Player has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";

  } else if(computerScore === 3){
    winnerMsg.innerText = "computer has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
  
}

rockBtn.addEventListener('click', function(){
  showResults("Rock");
});
paperBtn.addEventListener('click', function(){
  showResults("Paper");
});
scissorsBtn.addEventListener('click', function(){
  showResults("Scissors");
});

resetGameBtn.addEventListener('click', resetGame);

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.innerText = playerScore;
  computerScoreElement.innerText = computerScore;
  resetGameBtn.style.display = 'none';
  optionsContainer.style.display = 'block';
  winnerMsg.innerText = "";
  roundResultsMsg.innerText = "";
}
