const opts = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return opts[choice];
}

function getHumanChoice() {
    let answer;
    while(answer != "rock" && answer != "paper" && answer != "scissors") {
        answer = prompt("Make a choice: ").toLowerCase();
    }
    return answer;
}

const beats = {rock: "scissors", paper: "rock", scissors: "paper"};
const cpu = document.querySelector('#cpuchoice');
const output = document.querySelector('#score')

function playRound(humanChoice, computerChoice) {
    cpu.textContent = `CPU Choice: ${computerChoice}`
    if (humanChoice == computerChoice) {

    } else if (beats[humanChoice] == computerChoice)  {
        humanScore++;
    } else {
        computerScore++;
    }
    output.innerHTML = `Player: ${humanScore}<br>CPU: ${computerScore}`
}

let humanScore = 0;
let computerScore = 0;

/*for(let  i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
}*/

const container = document.querySelector('.container');
container.addEventListener('click', (event) => {
    let  target = event.target;

    switch(target.id) {
        case 'rock':
            playRound("rock", getComputerChoice());
            break;
        case 'paper':
            playRound("paper", getComputerChoice());
            break;
        case 'scissors':
            playRound("scissors", getComputerChoice());
            break;
    }
});