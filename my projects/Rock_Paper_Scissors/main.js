const possibleValues = ["rock", "paper", "scissors"];

// debugger

const randomIndexForComputer = Math.floor(Math.random() * possibleValues.length);
const randomIndexForUser = Math.floor(Math.random() * possibleValues.length);


const valueForComputer = possibleValues[randomIndexForComputer];
// const valueForUser = possibleValues[randomIndexForUser];
console.log(valueForComputer);
// console.log(valueForUser);

const displayText = document.getElementById("display-text")
const userValueRock = document.getElementById("rock");
const userValuePaper = document.getElementById("paper");
const userValueScissor = document.getElementById("scissor");
// console.log(userValueRock.value);
// console.log(userValuePaper.value);
// console.log(userValueScissor.value);

function playRock() {
    // debugger
    
    if (valueForComputer == possibleValues[1] && userValueRock.value == possibleValues[0]) {
        console.log(`Computer choice: ${valueForComputer}`);
        console.log(`User choice: ${userValueRock.value}`);
        console.log(`Computer wins!`);
        displayText.style.display = "block";
        displayText.innerHTML = `Computer chose"${valueForComputer}" and You chose "${userValueRock.value}", COMPUTER WINS!`;
    }
   
    else if (valueForComputer == possibleValues[2] && userValueRock.value == possibleValues[0]) {
        console.log(`Computer choice: ${valueForComputer}`);
        console.log(`User choice: ${userValueRock.value}`);
        console.log(`User wins!`);
        displayText.style.display = "block";
        displayText.innerHTML = `Computer chose"${valueForComputer}" and You chose "${userValueRock.value}", YOU WON!`;
    }
    else if(valueForComputer == userValueRock.value) {
        console.log(`Computer choice: ${valueForComputer}`);
        console.log(`User choice: ${userValueRock.value}`);
        console.log(`Nobody won! It's equal. Please refresh the page to try again.`);
        displayText.style.display = "block";
        displayText.innerHTML = `Computer chose"${valueForComputer}" and You chose "${userValueRock.value}", nobody won! It's equal. Please refresh the page to try again.`;
    }
    
    return
}

function playPaper() {

    if (valueForComputer == possibleValues[0] && userValuePaper.value == possibleValues[1]) {
        console.log(`Computer choice: ${valueForComputer}`);
        console.log(`User choice: ${userValuePaper.value}`);
        console.log(`User wins!`);
        displayText.style.display = "block";
        displayText.innerHTML = `Computer chose"${valueForComputer}" and You chose "${userValuePaper.value}", YOU WON!`;
    }

    else if (valueForComputer == possibleValues[2] && userValuePaper.value == possibleValues[1]) {
        console.log(`Computer choice: ${valueForComputer}`);
        console.log(`User choice: ${userValuePaper.value}`);
        console.log(`Computer wins!`);
        displayText.style.display = "block";
        displayText.innerHTML = `Computer chose"${valueForComputer}" and You chose "${userValuePaper.value}", COMPUTER WINS!`;
    }
    else if(valueForComputer == userValuePaper.value) {
        console.log(`Computer choice: ${valueForComputer}`);
        console.log(`User choice: ${userValuePaper.value}`);
        console.log(`Nobody won! It's equal. Please refresh the page to try again.`);
        displayText.style.display = "block";
        displayText.innerHTML = `Computer chose"${valueForComputer}" and You chose "${userValuePaper.value}", nobody won! It's equal. Please refresh the page to try again.`;
    }
    return
}

function playScissor() {

    if (valueForComputer == possibleValues[0] && userValueScissor.value == possibleValues[2]) {
        console.log(`Computer choice: ${valueForComputer}`);
        console.log(`User choice: ${userValueScissor.value}`);
        console.log(`Computer wins!`);
        displayText.style.display = "block";
        displayText.innerHTML = `Computer chose"${valueForComputer}" and You chose "${userValueScissor.value}", COMPUTER WINS!`;
    }
    else if(valueForComputer == possibleValues[1] && userValueScissor.value == possibleValues[2]){
        console.log(`Computer choice: ${valueForComputer}`);
        console.log(`User choice: ${userValueScissor.value}`);
        console.log(`User wins!`);
        displayText.style.display = "block";
        displayText.innerHTML = `Computer chose"${valueForComputer}" and You chose "${userValueScissor.value}", YOU WON!`;
    }
    else if(valueForComputer == userValueScissor.value) {
        console.log(`Computer choice: ${valueForComputer}`);
        console.log(`User choice: ${userValueScissor.value}`);
        console.log(`Nobody won! It's equal. Please refresh the page to try again.`);
        displayText.style.display = "block";
        displayText.innerHTML = `Computer chose"${valueForComputer}" and You chose "${userValueScissor.value}", nobody won! It's equal. Please refresh the page to try again.`;
    }

    return
}

// play()


// function play(computer,user) {
//     // debugger
//     if (computer == possibleValues[0] && user == possibleValues[2]) {
//         console.log(`Computer choice: ${computer}`);
//         console.log(`User choice: ${user}`);
//         console.log(`Computer wins!`);
//     }
//     else if (computer == possibleValues[0] && user == possibleValues[1]) {
//         console.log(`Computer choice: ${computer}`);
//         console.log(`User choice: ${user}`);
//         console.log(`User wins!`);
//     }
//     else if(computer == possibleValues[1] && user == possibleValues[2]){
//         console.log(`Computer choice: ${computer}`);
//         console.log(`User choice: ${user}`);
//         console.log(`User wins!`);
//     }
//     else if (computer == possibleValues[1] && user == possibleValues[0]) {
//         console.log(`Computer choice: ${computer}`);
//         console.log(`User choice: ${user}`);
//         console.log(`Computer wins!`);
//     }
//     else if (computer == possibleValues[2] && user == possibleValues[1]) {
//         console.log(`Computer choice: ${computer}`);
//         console.log(`User choice: ${user}`);
//         console.log(`Computer wins!`);
//     }
//     else if (computer == possibleValues[2] && user == possibleValues[0]) {
//         console.log(`Computer choice: ${computer}`);
//         console.log(`User choice: ${user}`);
//         console.log(`User wins!`);
//     }

//     else if(computer == user ) {
//         console.log(`Computer choice: ${computer}`);
//         console.log(`User choice: ${user}`);
//         console.log(`Nobody won! It's equal. Please refresh the page to try again.`);
//     }
//     return
// }

// play(valueForComputer, valueForUser )