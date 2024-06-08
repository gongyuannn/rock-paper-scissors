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

// Step 2. Human Choice
// Create function for Human Choice
function getHumanChoice(){
// Prompt user input
// TO FIX: Check that the input is valid - only 1("rock"), 2("paper") or 3("scissors") - Use while 'true' loop

    while(true){
        let humanChoice = prompt(`Enter one of the following:
        - rock
        - paper
        - scissors`).toLowerCase();
 // If valid, store the input into a variable
        switch(humanChoice){
            case "rock":
                return humanChoice = "rock";
                break;
            case "paper":
                return humanChoice = "paper";
                break;
            case "scissors":
                return humanChoice = "scissors";
                break;
// If invalid input, prompt user to enter the input again until valid
            default:
                alert("Please enter a valid number.");
         }
    }
}

// Step 3: Declare player score variables
// Create a variable in global scope to store human score
let humanScore = 0;
// Initialize to 0
// Create a variable in global scope to store computer score
// Initialize to 0 
let computerScore = 0;

// Step 4: Write logic to play a single round
// Create a function that takes in human and computer choices as parameters
function playRound(humanChoice, computerChoice){
    if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log("Computer chose scissors.");
        console.log("You win! Rock beats scissors!");
        humanScore++;
    } else if(humanChoice=="rock"&& computerChoice=="paper"){
        console.log("Computer chose paper.");
        console.log("You lose! Paper beats rock!");
        computerScore++;
    } else if(humanChoice=="rock"&& computerChoice=="rock"){
        console.log("Computer chose rock.");
        console.log("It's a tie! Go again");
    }

}

playRound(getHumanChoice(), getComputerChoice());

// Ensure that human choice parameter is case-insensitive
// Compare human and computer choice
// If human and computer is same, it is a tie. Go again.
// If human is rock, and computer is scissors, human wins. Add 1 to human score.
// If human is rock, and computer is paper, human loses. Add 1 to computer score.
// If human is scissors, and computer is paper, human wins. Add 1 to human score.
// If human is scissors, and computer is rock, human loses. Add 1 to computer score.
// If human is paper, and computer is rock, human wins. Add 1 to human score.
// If human is paper, and computer is scissors, human loses. Add 1 to computer score.

// Step 5: Write logic to play 5 rounds
// Create a function to play 5 rounds
// Move playRound function to playGame function
// Call playRound function 5 times
