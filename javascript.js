console.log("hello World");

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

