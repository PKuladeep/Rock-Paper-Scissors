function playGame(myChoice) {
    let computerChoice, Result;

    computerChoice = Math.floor(Math.random() * 3) - 1;

    function getResult(myChoice, computerChoice) {
        if (myChoice == computerChoice){
            return "Tie";
        }else{
            if (myChoice == -1 && computerChoice == 0 || myChoice == 0 && computerChoice == 1 || myChoice == 1 && computerChoice == -1 ){
                return "You Lose";
            }else{
                return "You Win";
            }
        }
    }

    Result = getResult(myChoice, computerChoice);

    function CompChoice(computerChoice){
        if (computerChoice == -1){
            return "Rock";
        }else if(computerChoice == 0){
            return "Paper";
        }else{
            return "Scissors";
        }
    }

    computerChoice = CompChoice(computerChoice);

    document.getElementById(`ComputerChoice`).textContent = computerChoice;

    document.getElementById(`result`).textContent = Result;
}

