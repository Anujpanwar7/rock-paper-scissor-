let buttons = document.querySelectorAll(".buttons");
let startBtn = document.querySelector("#startBtn");
let result = document.querySelector(".result");
let player1 = prompt("enter your name");
let userScore = 0;
let computerScore = 0;


const computerChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    let computer = Math.floor(Math.random() * 3);
    return options[computer]
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("id");
        startGame(userChoice)
    })
});

const startGame = (userChoice) => {
    let comChoice = computerChoice();
    let winner = gameWinner(comChoice, userChoice)
    displayresult(winner, comChoice)
    score(winner);

}


const gameWinner = (computer, user) => {
    if (computer === user) {
        return "its a tie "
    }
    else if ((user === "Rock" && computer === "Paper")
        || (user === "Paper" && computer === "Scissor")
        || (user === "Scissor" && computer === "Rock")) {
        return `Computer wins`
    }
    else {
        return `${player1} wins`
    }
}

const displayresult = (winner, comChoice) => {
    result.innerHTML = `${winner} computer choice: ${comChoice}, `
}

const score = (winner) => {
    if (winner === "Computer wins") {
        computerScore += 1;
    }

    else if (winner === `${player1} wins`) {
        userScore += 1;
    }
    displaScore();
}

const displaScore = () => {
    document.querySelector(".userScore").textContent = `user score : ${userScore}`;
    document.querySelector(".computerScore").textContent = ` computer score: ${computerScore}`
}