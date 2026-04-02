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

let userResult = document.querySelector('.user-result img');
let computerResult = document.querySelector('.computer-result img');
let chooseOption = document.querySelector('#options-container h2');
let optionImages = document.querySelectorAll('.option-image');

optionImages.forEach((image,index) => {
  image.addEventListener('click', (e) => {
    image.classList.add('active');

    optionImages.forEach((image2,index2) => {
    //if the current index (index) doesn't match the clicked index 
    // (index2) remove the (.active) class from the second option 
     index !== index2 && image2.classList.remove("active");
    });

    
    // get the src of the clicked image
    let imageSrc = e.target.querySelector("img").src;
    userResult.src = imageSrc;

    // generate a random computer choice between (rock, paper and scissor)
    let randomComputerChoice = getRandomComputerResult();
    console.log("image choice: " +randomComputerChoice);
    let ComputerIndex = options.indexOf(randomComputerChoice)
    let computerImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
    computerResult.src = computerImages[ComputerIndex];
  });
  
})

 
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
    console.log("computer choice: " +computerResult)
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
function showResults(userOption, randomComputerChoice){
  roundResultsMsg.innerText = getRoundResults(userOption, randomComputerChoice);
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