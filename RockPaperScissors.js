//users choice
const getUserChoice = userInput => {

    if( 
        userInput === 'rock' ||
        userInput === "paper" ||
        userInput === "scissors"){
            console.log("USERS CHOICE:",userInput.toLowerCase());
            return userInput;
    }else{
        alert("Please type either rock, paper or scissors!")
}
};
//Computers Choice
const getCpuChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber === 1){
        console.log("COMPUTERS CHOICE: rock");
        return "rock";
    }else if (randomNumber === 2){
        console.log("COMPUTERS CHOICE: paper");
        return "paper";
    }else if (randomNumber === 3){
        console.log("COMPUTERS CHOICE: scissors");
        return "scissors";
}
}

//Compare or Vs
const determineWinner = (userInput, computerChoice) => {
    if(userInput === computerChoice){
        return "TIE";
    }else if( userInput === "rock" && computerChoice === "scissors" || userInput === "paper" && computerChoice === "rock" || userInput === "scissors" && computerChoice === "paper"){
        return "WIN";
    }else if( userInput === "rock" && computerChoice === "paper" || userInput === "paper" && computerChoice === "scissors" || userInput === "scissors" && computerChoice === "rock"){
        return "LOSE";
}
}

const playGame = () => {
    const userChoice = getUserChoice("rock");
    const computerChoice = getCpuChoice()
    return determineWinner(userChoice,computerChoice)
}
playGame()
console.log("RESULTS:",determineWinner());
//start the program