
console.log("We're so back");

function getComputerChoice(){
    // query random number gen
    let computerAction = Math.random();
    console.log(computerAction);
    let finalAction = "";

    //Check for cases
    //If num < 0.33 = rock
    if(computerAction < 0.33){
        finalAction = "rock";
    }
    //If num >= 33 but < 66 then Scissors
    else if(computerAction >= 0.33 && computerAction < 0.66){
        finalAction = "scissors"
    }
     //Otherwise set answer to paper.
    else{
        finalAction = "paper";
    }
    
    return finalAction;
    
}

function getHumanChoice(){
    return prompt("Pick rock, paper or scissors.");
}



function playRound(humanChoice, computerChoice){
    //lowercase human response
    let humanLower = humanChoice.toLowerCase();

    let roundWinner = 10;

    //Check human choice against computer
    switch(humanLower){
        case "rock":
            roundWinner = rockTest(computerChoice);
            break
        case "scissors":
            roundWinner = scissorTest(computerChoice);
            break
        case "paper":
            roundWinner =paperTest(computerChoice);
            break
    }
    // 0 represents tie, 1 represents playing losing, 2 represents player winning

    //display who won

    switch(roundWinner){
        case 0:
            roundMessage = `It's a tie! Player chose ${humanLower}. Computer chose ${computerChoice}.`
            break

        case 1:
            roundMessage = `You lost! Player chose ${humanLower}. Computer chose ${computerChoice}.`
            break

        case 2:
            roundMessage = `You won! Player chose ${humanLower}. Computer chose ${computerChoice}.`
            break

        case 10:
            roundWinner = `Nope you broke something. Go back.`
    }

    console.log(roundMessage);
    return roundWinner;

}


//These function assume the player selected their specific options and will return a 0,1 or 2 depending on whether they won, lost or tied against the computer
function rockTest(computer){
    switch (computer){
        case "rock":
            return 0;
        
        case "scissors":
            return 2;

        case "paper":
            return 1;
    }
}


function scissorTest(computer){
    switch (computer){
        case "rock":
            return 1;
        
        case "scissors":
            return 0;

        case "paper":
            return 2;
    }
}


function paperTest(computer){
    switch (computer){
        case "rock":
            return 2;
        
        case "scissors":
            return 1;

        case "paper":
            return 0;
    }
}




function playGame(){
    // initalize round timer to 0
    let roundTimer = 0;
    //scores are already initalized outside of scope.

    let playerScore = 0;
    let computerScore = 0;

    //start loop
    for (roundTimer; roundTimer < 5; roundTimer++){
        //display current scores
        console.log(`The current scores are (Player) ${playerScore} to ${computerScore} (Computer)`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const finalScore = playRound(humanSelection, computerSelection);

        switch(finalScore){
            case 1:
                computerScore++;

            case 2:
                playerScore++;
        }

    }
    
    console.log(`The final scores are (Player) ${playerScore} to ${computerScore} (Computer)`);
    //say that all the games are finished!
}

playGame();