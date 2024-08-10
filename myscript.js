// Function to randomly return "rock", "paper", "scissors"
function getComputerChoice(){
    let number = Math.floor(Math.random()*3)+1;
    let computerChoice;

    if(number===1){
        computerChoice = "rock";
    } else if (number===2){ 
        computerChoice = "paper";
    } else if (number===3){
        computerChoice = "scissors";
    }
    return computerChoice;
}
// // Create function for Human Choice
// function getHumanChoice(){
//     while(true){
//         let humanChoice = prompt(`Enter one of the following:
//         - rock
//         - paper
//         - scissors`).toLowerCase();
//         switch(humanChoice){
//             case "rock":
//                 return humanChoice = "rock";
//                 break;
//             case "paper":
//                 return humanChoice = "paper";
//                 break;
//             case "scissors":
//                 return humanChoice = "scissors";
//                 break;
//             default:
//                 alert("Please enter a valid input - rock, paper or scissors.");
//          }
//     }
// }

// // Create a function to play a round
// function playRound(humanChoice, computerChoice){
//     if(humanChoice=="rock" && computerChoice=="scissors"){
//         console.log("You chose rock.");
//         console.log("Computer chose scissors.");
//         console.log("You win! Rock beats scissors!");
//         humanScore++;
//     } else if(humanChoice=="rock"&& computerChoice=="paper"){
//         console.log("You chose rock.");
//         console.log("Computer chose paper.");
//         console.log("You lose! Paper beats rock!");
//         computerScore++;
//     } else if(humanChoice=="rock"&& computerChoice=="rock"){
//         console.log("You chose rock.");
//         console.log("Computer chose rock.");
//         console.log("It's a tie!");
//     } else if(humanChoice=="paper"&& computerChoice=="scissors"){
//         console.log("You chose paper.");
//         console.log("Computer chose scissors.");
//         console.log("You lose! Scissors beats paper!");
//         computerScore++;
//     } else if(humanChoice=="paper"&& computerChoice=="paper"){
//         console.log("You chose paper.");
//         console.log("Computer chose paper.");
//         console.log("It's a tie!");
//     }  else if(humanChoice=="paper"&& computerChoice=="rock"){
//         console.log("You chose paper.");
//         console.log("Computer chose rock.");
//         console.log("You win! Paper beats rock!");
//         humanScore++;
//     } else if(humanChoice=="scissors"&& computerChoice=="scissors"){
//         console.log("You chose scissors.");
//         console.log("Computer chose scissors.");
//         console.log("It's a tie!");
//     }  else if(humanChoice=="scissors"&& computerChoice=="paper"){
//         console.log("You chose scissors.");
//         console.log("Computer chose paper.");
//         console.log("You win! Scissors beats paper!");
//         humanScore++;
//     } else if(humanChoice=="scissors"&& computerChoice=="rock"){
//         console.log("You chose scissors.");
//         console.log("Computer chose rock.");
//         console.log("You lose! Rock beats scissors!");
//         computerScore++;
//     } 
// }

// playRound(getHumanChoice(), getComputerChoice());

