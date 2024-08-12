
var playerSelection;
var pcSelection;
var round = 1;
var playerScore = 0;
var pcScore = 0;

// Select the reset button and hide it initially
const resetButton = document.querySelector("#reset-game");
resetButton.style.display = "none";

// Click button to play round
const playerButtons = document.querySelectorAll(".btn");
playerButtons.forEach((playerButton) => {
    playerButton.addEventListener("click", () => {
        // Check if scores are <5
        if(playerScore <5 && pcScore <5) {
            playerSelection = playerButton.id;
            getPcSelection();
            playRound(playerSelection, pcSelection);
            round++;
        }

        // Check if the game is over
        if(playerScore === 5 || pcScore === 5){
            result.textContent = (playerScore > pcScore)?  "You win!": "PC wins!";

            // Stop the game by disabling the buttons
            playerButtons.forEach(playerButton => playerButton.disabled = true);

            // Show the reset button
            resetButton.style.display = "block";
        
        }
    })
})

// Function to randomly return "rock", "paper", "scissors"
function getPcSelection(){
    let number = Math.floor(Math.random()*3)+1;

    if(number===1){
        pcSelection = "Rock";
    } else if (number===2){ 
        pcSelection = "Paper";
    } else if (number===3){
        pcSelection = "Scissors";
    }
    return pcSelection;
}

const result = document.querySelector("#result");
const player = document.querySelector("#player-score");
const pc = document.querySelector("#pc-score");

// Create a function to play a round
function playRound(playerSelection, pcSelection){
    if(playerSelection=="Rock" && pcSelection=="Scissors"){
        result.textContent = 
        `Round ${round}: You choose ${playerSelection}. Computer chose ${pcSelection}. You win! ${playerSelection} beats ${pcSelection}.`;
        playerScore++;
        player.textContent = `Player: ${playerScore}`;
    } else if(playerSelection=="Rock"&& pcSelection=="Paper"){
        result.textContent = 
        `Round ${round}: You choose ${playerSelection}. Computer chose ${pcSelection}. You lose! ${pcSelection} beats ${playerSelection}.`;
        pcScore++;
        pc.textContent = `PC: ${pcScore}`;
    } else if(playerSelection=="Rock"&& pcSelection=="Rock"){
        result.textContent = 
        `Round ${round}: You choose ${playerSelection}. Computer chose ${pcSelection}. It's a tie.`;
    } else if(playerSelection=="Paper"&& pcSelection=="Scissors"){
        result.textContent = 
        `Round ${round}: You choose ${playerSelection}. Computer chose ${pcSelection}. You lose! ${pcSelection} beats ${playerSelection}.`;
        pcScore++;
        pc.textContent = `PC: ${pcScore}`;
    } else if(playerSelection=="Paper"&& pcSelection=="Paper"){
        result.textContent = 
        `Round ${round}: You choose ${playerSelection}. Computer chose ${pcSelection}. It's a tie.`;
    }  else if(playerSelection=="Paper"&& pcSelection=="Rock"){
        result.textContent = 
        `Round ${round}: You choose ${playerSelection}. Computer chose ${pcSelection}. You win! ${playerSelection} beats ${pcSelection}.`;
        playerScore++;
        player.textContent = `Player: ${playerScore}`;
    } else if(playerSelection=="Scissors"&& pcSelection=="Scissors"){
        result.textContent = 
        `Round ${round}: You choose ${playerSelection}. Computer chose ${pcSelection}. It's a tie.`;
    }  else if(playerSelection=="Scissors"&& pcSelection=="Paper"){
        result.textContent = 
        `Round ${round}: You choose ${playerSelection}. Computer chose ${pcSelection}. You win! ${playerSelection} beats ${pcSelection}.`;
        playerScore++;
        player.textContent = `Player: ${playerScore}`;
    } else if(playerSelection=="Scissors"&& pcSelection=="Rock"){
        result.textContent = 
        `Round ${round}: You choose ${playerSelection}. Computer chose ${pcSelection}. You lose! ${pcSelection} beats ${playerSelection}.`;
        pcScore++;
        pc.textContent = `PC: ${pcScore}`;
    } 
}


// Reset the game

resetButton.addEventListener("click", () => {
    playerScore = 0;
    pcScore = 0;
    round = 1;
    player.textContent = `Player: ${playerScore}`;
    pc.textContent = `PC: ${pcScore}`;
    result.textContent = "Game reset.";

    // Re-enable player choices buttons
    playerButtons.forEach(playerButton => playerButton.disabled = false);

    // Hide the reset button
    resetButton.style.display = "none";

})

