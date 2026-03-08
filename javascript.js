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

