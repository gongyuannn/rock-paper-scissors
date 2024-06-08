// Step 1. Computer choice
// Function to randomly return "rock", "paper", "scissors"
function getComputerChoice(){
// Create a variable to store the returned random number
// Randomly generate a number from 1-3 to cover 3 choices
    let number = Math.floor(Math.random()*3)+1;
// Create a variable to store the returned string
    let computerChoice;

// If the no. is 1, return "rock";
// If the no. is 2, return "paper";
// If the no. is 3, return "scissors";
    if(number===1){
        computerChoice = "rock";
    } else if (number===2){
        computerChoice = "paper";
    } else if (number===3){
        computerChoice = "scissors";
    }
    return computerChoice;
}

console.log(getComputerChoice());

// Step 2. Human Choice