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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Draw, you both chose  ${humanChoice}.`);
        return;
    } else if (beats[humanChoice] == computerChoice)  {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return;
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return;
    }
}

let humanScore = 0;
let computerScore = 0;

for(let  i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
}
