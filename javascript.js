console.log("hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    let move = "";
    if(num == 0){
        move = "Rock";
        return move;
    } else if(num == 1){
        move = "Paper";
        return move;
    } else if(num == 2){
        move = "Scissors";
        return move;
    }
}

function getHumanChoice(){

    let input = prompt("Make your move!")
    return input;
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice){
    let lowerCaseHuman = humanChoice.toLowerCase();
    let lowerCaseComputer = computerChoice.toLowerCase();

    let currHuman = humanScore;
    let currComputer = computerScore;

    if(lowerCaseHuman == lowerCaseComputer){
        return "You both played the same hand, so you tied";
    }

    if(lowerCaseHuman == "rock" && lowerCaseComputer == "paper" ){
        computerScore++;
    }
    if(lowerCaseHuman == "rock" && lowerCaseComputer == "scissors" ){
        humanScore++;
    }
    if(lowerCaseHuman == "paper" && lowerCaseComputer == "rock" ){
        humanScore++;
    }
    if(lowerCaseHuman == "paper" && lowerCaseComputer == "scissors" ){
        computerScore++;
    }
    if(lowerCaseHuman == "rock" && lowerCaseComputer == "paper" ){
        computerScore++;
    }
    if(lowerCaseHuman == "rock" && lowerCaseComputer == "scissors" ){
        humanScore++;
    }
    
    if(humanScore > currHuman){
        return "You won! " + lowerCaseHuman +" beats " + lowerCaseComputer;
    } else{
        return "You lose! " + lowerCaseHuman + " loses to " + lowerCaseComputer;
    }
}



function playGame(){
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice(); 
        console.log(playRound(humanSelection,computerSelection));        
    }
}

playGame();