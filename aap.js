let userScore = 0;
let compScore = 0;

const choice1 = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");
//console.log(choice1);

//get id atrribute and find user choice
choice1.forEach((choices) => {
    choices.addEventListener("click" , ()=>{
        const userChoice = choices.getAttribute("id");
        playGame(userChoice)
        //console.log("choice is clicked ", userChoice);
    })
})

//comp choice
const genCompChoice = ()=>{
    const option = ["ston", "paper", "scissors"]
    const randIdx =  Math.floor(Math.random()*3);
    return option[randIdx];
    }

const drawGame = ()=>{
    console.log("game was draw")
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31"
}


const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userscorePara.innerText = userScore;
        console.log("u win");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }
        else{
            compScore++;
            compscorePara.innerText = compScore;
        console.log("u loss");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

//play game choice
function playGame(userChoice) {
    console.log("user choice ", userChoice);
    const compChoice = genCompChoice();
    console.log("compchoiceic", compChoice);


//condition check
if(userChoice === compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "ston"){
        //scissors , paper
    userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        //ston, scissors
    userWin = compChoice === "ston" ?  true : false;
    }else{
        //ston, paper
    userWin = compChoice === "ston" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
}











