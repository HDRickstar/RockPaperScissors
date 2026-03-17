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

//console.log(getHumanChoice());

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
    if(lowerCaseHuman == "scissors" && lowerCaseComputer == "rock" ){
        computerScore++;
    }
    if(lowerCaseHuman == "scissors" && lowerCaseComputer == "paper" ){
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
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
}

//playGame();
//start of UI Implementation

const rockMove = document.querySelector(".btn-rock");
const paperMove = document.querySelector(".btn-paper");
const scissorsMove = document.querySelector(".btn-scissors");
const results = document.querySelector(".results");
const playerWins = document.querySelector(".player-score");
const computerWins = document.querySelector(".computer-score");

const playerCurrScore = document.createElement("p");
playerWins.appendChild(playerCurrScore);

const computerCurrScore = document.createElement("p");
computerWins.appendChild(computerCurrScore);


const gameResult = document.createElement("p");
results.appendChild(gameResult);

rockMove.addEventListener("click",function(){
    let humanMove = "rock";
    let result = playRound(humanMove, getComputerChoice())
    gameResult.textContent = result;

    playerCurrScore.textContent = humanScore;
    computerCurrScore.textContent = computerScore;

});

paperMove.addEventListener("click",function(){
    let humanMove = "paper";
    let result = playRound(humanMove, getComputerChoice())

    gameResult.textContent = result;

});

scissorsMove.addEventListener("click",function(){
    let humanMove = "scissors";
    let result = playRound(humanMove, getComputerChoice())

    gameResult.textContent = result;

});

