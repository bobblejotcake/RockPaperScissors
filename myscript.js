


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



function playRound(humanChoice, computerChoice){
    //lowercase human response
    let humanLower = humanChoice.toLowerCase();
    let p = document.createElement("p");

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

    
    p.textContent = roundMessage;
    battleLog.append(p);
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

const battleLog = document.querySelector(".battle-log");

const buttons = document.querySelectorAll(".playerChoice");
buttons[0].style.backgroundColor = "red"; 


    let computerScore = 0;
    let humanScore = 0;

document.body.addEventListener("click", (e) =>{
    e.preventDefault;
    console.log(e.target.tagName);
    let selectedItem = e.target.tagName;
    let humanAnswer = e.target.textContent;
    let scoreline = document.createElement("p");
    let finishText= document.createElement("h2");


    if (selectedItem == "BUTTON"){
        console.log(humanAnswer);

        let score = playRound(humanAnswer, getComputerChoice());
        console.log(score);
        switch (score){
            case 0:
                break;
            case 1:
                computerScore++;
                break
            case 2:
                humanScore++;
                break
        }
        

        if(computerScore == 5 || humanScore == 5){
            while(battleLog.firstChild){
                battleLog.removeChild(battleLog.lastChild);
            }
            finishText.textContent = `And that's the game! Thanks for playing!
            
            \n The final score is:`;
            battleLog.append(finishText);

            //disable buttons
            buttons.forEach(button =>{
                button.disabled = true;
            })
        }
        scoreline.textContent = `Player ${humanScore} - ${computerScore} 
        Computer`;
        battleLog.append(scoreline);

        

        
    }
})






