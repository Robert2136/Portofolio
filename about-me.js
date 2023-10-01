// CREATING VARIABLES FOR THE GAME
const words = ["function", "button", "array", "variable", "tag", "class", "id"];
const hints = ["Similar to a procedure — a set of statements that performs a task or calculates a value", "Clickable elements that take actions", "A single variable that is used to store elements of different data types", "A name of storage location", "Is a piece of markup language used to indicate the beginning and end of an HTML element in an HTML document.", "Are used by CSS and JavaScript to select and access specific elements(can be used to identify more than one HTML element) ", "Are used by CSS and JavaScript to select and access specific elements(is only used to identify one single element in our HTML)"]
let images = ["./hangman/1.png", "./hangman/2.png", "./hangman/3.png", "./hangman/4.png", "./hangman/5.png", "./hangman/complete.png"]
let answer = ``;
const maxWrong = 7;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
document.getElementById("max-wrong").innerHTML = maxWrong;

// CREATING VARIABLES FOR PHOTOS
let indexOfImages = 0
let newImage = document.getElementById("hangman-new-pic");
let newHint = document.getElementById("hint");
let randomIndex
const photo = document.getElementById("square-photos");

// CREATING VARIABLES FOR BUTTONS
let resetButton = document.getElementById("reset-button")
let ballSkip = document.querySelector(".ball-skip")
let skipButton = document.getElementById("skip-button2");

// CREATING VARIABLES FOR SECTIONS
let section = document.getElementById("game-section")
let mainSection = document.getElementById("main-page")



// GENERATING THE RANDOM WORD
function randomWord() {
    randomIndex = Math.floor(Math.random() * words.length)
    answer = words[randomIndex];

    console.log(answer);
    // console.log(randomIndex);
}

// FUNCTION FOR GENERATING THE KEYBOARD
function generateButtons() {
    const buttonsKeyboard = `abcdefghijklmnopqrstuvwxyz`.split('').map(letter =>
        `
            <button
                class = "btn"
                id='` + letter + `'
                onClick="handleGuess('` + letter + `')"
            >
                ` + letter + `
            </button>
            `).join('');

    document.getElementById("square-buttons").innerHTML = buttonsKeyboard
    // console.log(buttonsKeyboard);
}

// FUNCTION THAT CHECK IF YOU GUESS A WORD AND ALSO DISPLAY THE _
function guessWord() {
    wordStatus = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById("word-guess").innerHTML = wordStatus;
    showHint()
}

function showHint() {
    newHint.innerText = hints[randomIndex];
}

// FUNCTION THAT MAKES THE MAIN LOGIC OF THE GAME
function handleGuess(chosenLetter) {
    // SET IF THE !!!!LETTER!!!! IS ALREADY GUESSED
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute("disabled", true);
    console.log(guessed);

    // CHECK IF THE WORD IS GUESSED
    if (answer.indexOf(chosenLetter) >= 0) {
        guessWord();
        checkGameWon()
    }
    // // CHECK IF THE WORD IS NOT GUESSED
    else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        checkGameLost()
        updatePicture()
    }
}

// FUNCTION THAT WILL UPDATE THE PICTURE BASED ON MISTAKES
function updatePicture() {
    newImage.src = images[indexOfImages]
    newImage.style.display = "block";
    indexOfImages++;
}

// FUNCTION THAT WILL DISPLAY THE MISTAKES
function updateMistakes() {
    document.getElementById("mistakes").innerHTML = mistakes;
}

function checkGameWon() {
    if (wordStatus === answer) {
        document.getElementById("square-buttons").innerHTML = "You Won!!"
        section.style.display = "none"
        mainSection.style.filter = "blur(0px)"
        resetButton.innerText = "Play Again!"
        ballSkip.style.display = "none"

    }
}

function checkGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById("square-buttons").innerHTML = "You Lost, press reset to play again!"
    }
}


// FUNCTION FOR RESET BUTTON
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
resetButton.addEventListener("click", reset)



// SKIP THE GAME
skipButton.addEventListener("click", function () {
    section.style.display = 'none';
    mainSection.style.filter = "blur(0px)";
    ballSkip.style.display = "none";
    resetButton.innerText = "Play Again!"
})

randomWord()
generateButtons()
guessWord()