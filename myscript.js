
var playerSelection;
var pcSelection;

// Click button to play round

const playerButtons = document.querySelectorAll("button");
playerButtons.forEach((playerButton) => {
    playerButton.addEventListener("click", () => {
        playerSelection = playerButton.id;
        getPcSelection();
        playRound(playerSelection, pcSelection);
    })
})


// Function to randomly return "rock", "paper", "scissors"
function getPcSelection(){
    let number = Math.floor(Math.random()*3)+1;

    if(number===1){
        pcSelection = "rock";
    } else if (number===2){ 
        pcSelection = "paper";
    } else if (number===3){
        pcSelection = "scissors";
    }
    return pcSelection;
}


// Create a function to play a round
// Instead of console.log, it should be DOM methods to register:
// - player Selection
// - pc Selection
// - result
// - change score (if relevant)
// - end game once score of 5 is reached
// - announce winner

function playRound(playerSelection, pcSelection){
    if(playerSelection=="rock" && pcSelection=="scissors"){
        console.log("You chose rock.");
        console.log("Computer chose scissors.");
        console.log("You win! Rock beats scissors!");
        // humanScore++;
    } else if(playerSelection=="rock"&& pcSelection=="paper"){
        console.log("You chose rock.");
        console.log("Computer chose paper.");
        console.log("You lose! Paper beats rock!");
        // computerScore++;
    } else if(playerSelection=="rock"&& pcSelection=="rock"){
        console.log("You chose rock.");
        console.log("Computer chose rock.");
        // console.log("It's a tie!");
    } else if(playerSelection=="paper"&& pcSelection=="scissors"){
        console.log("You chose paper.");
        console.log("Computer chose scissors.");
        console.log("You lose! Scissors beats paper!");
        // computerScore++;
    } else if(playerSelection=="paper"&& pcSelection=="paper"){
        console.log("You chose paper.");
        console.log("Computer chose paper.");
        console.log("It's a tie!");
    }  else if(playerSelection=="paper"&& pcSelection=="rock"){
        console.log("You chose paper.");
        console.log("Computer chose rock.");
        console.log("You win! Paper beats rock!");
        // humanScore++;
    } else if(playerSelection=="scissors"&& pcSelection=="scissors"){
        console.log("You chose scissors.");
        console.log("Computer chose scissors.");
        console.log("It's a tie!");
    }  else if(playerSelection=="scissors"&& pcSelection=="paper"){
        console.log("You chose scissors.");
        console.log("Computer chose paper.");
        console.log("You win! Scissors beats paper!");
        // humanScore++;
    } else if(playerSelection=="scissors"&& pcSelection=="rock"){
        console.log("You chose scissors.");
        console.log("Computer chose rock.");
        console.log("You lose! Rock beats scissors!");
        // computerScore++;
    } 
}
