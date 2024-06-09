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
// Check that the input is valid and case-insensitive
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
                alert("Please enter a valid input - rock, paper or scissors.");
         }
    }
}

// Step 5: Write logic to play 5 rounds
// Create a function to play 5 rounds
function playGame(){

// Step 3: Declare player score variables
// Create a variable in global scope to store human score
let humanScore = 0;
// Initialize to 0
// Create a variable in global scope to store computer score
// Initialize to 0 
let computerScore = 0;

// Step 4: Write logic to play a single round
// Create a function that takes in human and computer choices as parameters
// Compare human and computer choice and account for each scenario - update points if there is a win.
// Move playRound function to playGame function
function playRound(humanChoice, computerChoice){
    if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log("You chose rock.");
        console.log("Computer chose scissors.");
        console.log("You win! Rock beats scissors!");
        humanScore++;
    } else if(humanChoice=="rock"&& computerChoice=="paper"){
        console.log("You chose rock.");
        console.log("Computer chose paper.");
        console.log("You lose! Paper beats rock!");
        computerScore++;
    } else if(humanChoice=="rock"&& computerChoice=="rock"){
        console.log("You chose rock.");
        console.log("Computer chose rock.");
        console.log("It's a tie!");
    } else if(humanChoice=="paper"&& computerChoice=="scissors"){
        console.log("You chose paper.");
        console.log("Computer chose scissors.");
        console.log("You lose! Scissors beats paper!");
        computerScore++;
    } else if(humanChoice=="paper"&& computerChoice=="paper"){
        console.log("You chose paper.");
        console.log("Computer chose paper.");
        console.log("It's a tie!");
    }  else if(humanChoice=="paper"&& computerChoice=="rock"){
        console.log("You chose paper.");
        console.log("Computer chose rock.");
        console.log("You win! Paper beats rock!");
        humanScore++;
    } else if(humanChoice=="scissors"&& computerChoice=="scissors"){
        console.log("You chose scissors.");
        console.log("Computer chose scissors.");
        console.log("It's a tie!");
    }  else if(humanChoice=="scissors"&& computerChoice=="paper"){
        console.log("You chose scissors.");
        console.log("Computer chose paper.");
        console.log("You win! Scissors beats paper!");
        humanScore++;
    } else if(humanChoice=="scissors"&& computerChoice=="rock"){
        console.log("You chose scissors.");
        console.log("Computer chose rock.");
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    } 
}

// Call playRound function 5 times (Total score must reach 5)
while(humanScore + computerScore <5){
    playRound(getHumanChoice(), getComputerChoice());
}
// Print out scores
console.log(`Your score: ${humanScore}
Computer score: ${computerScore} `);
alert(`Press ctrl+option+J to see full log.`)
}

// Implement game
playGame();

