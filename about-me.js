const words = ["function", "button", "array", "variable", "tag", "class", "id"];
const hints = ["Similar to a procedure — a set of statements that performs a task or calculates a value", "Clickable elements that take actions", "A single variable that is used to store elements of different data types", "A name of storage location", "Is a piece of markup language used to indicate the beginning and end of an HTML element in an HTML document.", "Are used by CSS and JavaScript to select and access specific elements(can be used to identify more than one HTML element) ", "Are used by CSS and JavaScript to select and access specific elements(is only used to identify one single element in our HTML)"]
let images = ["./hangman/1.png","./hangman/2.png","./hangman/3.png","./hangman/4.png","./hangman/5.png","./hangman/complete.png"]
let answer = ``;
const maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let indexOfImages = 0
let newImage = document.getElementById("hangman-new-pic");
let newHint = document.getElementById("hint");
let randomIndex

const photo = document.getElementById("square-photos");
let resetButton = document.getElementById("reset-button")
let section = document.getElementById("game-section")
let mainSection = document.getElementById("main-page")

let ballSkip = document.querySelector(".ball-skip")
let skipButton = document.getElementById("skip-button2");



document.getElementById("max-wrong").innerHTML = maxWrong;

function randomWord () {
    randomIndex = Math.floor(Math.random() * words.length)
    answer = words[randomIndex];
    console.log(answer);
    console.log(randomIndex);
}

function generateButtons () {
    const buttonsKeyboard = `abcdefghijklmnopqrstuvwxyz`.split('').map(letter =>
        `
            <button
                class = "btn"
                id='` +letter + `'
                onClick="handleGuess('` + letter + `')"
            >
                ` + letter + `
            </button>
            `).join('');

        document.getElementById("square-buttons").innerHTML = buttonsKeyboard
}

function guessWord() {
    wordStatus = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById("word-guess").innerHTML = wordStatus;
    showHint()
}

function showHint() {
    newHint.innerText = hints[randomIndex];
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute("disabled", true);
    // alert(answer)

    if (answer.indexOf(chosenLetter) >= 0) {
        guessWord();
        checkGameWon()
    }
    else if (answer.indexOf(chosenLetter) === -1) {
        mistakes ++;
        updateMistakes();
        checkGameLost()
        updatePicture()
    }
}

function updatePicture () {
    newImage.src = images[indexOfImages]
    newImage.style.display = "block";
    indexOfImages++;
}

function updateMistakes() {
    document.getElementById("mistakes").innerHTML = mistakes;
}

function checkGameWon() {
    if(wordStatus === answer){
        document.getElementById("square-buttons").innerHTML = "You Won!!"
        section.style.display = "none"
        mainSection.style.filter = "blur(0px)"
        resetButton.innerText = "Play Again!"
        ballSkip.style.display = "none"

    }
}
function checkGameLost() {
    if(mistakes === maxWrong){
        document.getElementById("square-buttons").innerHTML = "You Lost, press reset to play again!"
    }
}



function reset() {
    section.style.display = "flex"
    mainSection.style.filter = "blur(12px)"
    resetButton.innerText = "Reset!"
    mistakes = 0;
    guessed = [];
    newImage.style.display = "none";
    ballSkip.style.display = "flex";
    indexOfImages = 0;

    randomWord();
    guessWord()
    updateMistakes();
    generateButtons();

}


resetButton.addEventListener("click", reset )




skipButton.addEventListener("click", function() {
    section.style.display = 'none';
    mainSection.style.filter = "blur(0px)";
    ballSkip.style.display = "none";
    resetButton.innerText = "Play Again!"
})

randomWord()
generateButtons ()
guessWord()