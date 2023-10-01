
// board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

// snake head 
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

// Create the velocity
var velocityX = 0;
var velocityY = 0;

// make the snake longer
var snakeBody = [];

// loose the game
var gameOver = false;

// win the game
var winGame = false;
var scoreToWin = 10;
var displayScoreToWin = document.getElementById("score-to-win")
displayScoreToWin.innerText = scoreToWin;

// bite
var biteX;
var biteY;

// change score
var takeScore = document.getElementById("score");
var score = 0

// take the game section and the maine section
var gameSection = document.getElementById("game-section");
var mainSection = document.getElementById("main-page");

// reload the page
var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function() {
    location.reload();
})
// variables for skip button
var ballSkip = document.querySelector(".ball-skip")
var skipButton = document.getElementById("skip-button2");

// Skip button action
skipButton.addEventListener("click", function() {
    gameSection.style.display = 'none';
    mainSection.style.filter = "blur(0px)";
    ballSkip.style.display = "none";
    resetButton.innerText = "Play Again!"
})

// Select the dificulty
var getDificulty = document.getElementById("game-dificulty");
var dificulty;
var dificultyEasy = 1000/5
var dificultyMedium = 1000/8;
var dificultyHard = 1000/12
var dificultyPro = 1000/16
var isEasy = true;
let intervalId

// Game over text
var text = "You lost, hit reset button to play again.";
var x = 40  // X-coordinate of the text
var y = 250  // Y-coordinate of the text

// Points (1 point - 2 points) detail
var pointsModifier = document.getElementById("points-detail");



// Main function 
var playTheGame = function() {
    board = document.getElementById("board");
    console.log(board);
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    console.log(skipButton[0]);
    
    placeFood()
    
    document.addEventListener("keyup", changeDirection) 

    if (isEasy) {
        clearInterval()
        dificulty = dificultyEasy
        intervalId = setInterval(update, dificulty)
        isEasy = false
        console.log(dificulty);
        console.log(isEasy);
    }
    getDificulty.addEventListener("change", () => {
        clearInterval(intervalId);
    if(getDificulty.value == "easy" ){
        dificulty = dificultyEasy
        intervalId = setInterval(update, dificulty);
        console.log(dificulty);
    }
    else if(getDificulty.value == "medium") {
        debugger
        dificulty = dificultyMedium
        intervalId = setInterval(update, dificulty);
        console.log(dificulty);
    }
    else if(getDificulty.value == "hard") {
        dificulty = dificultyHard
        intervalId = setInterval(update, dificulty);
    }
    else if(getDificulty.value == "pro") {
        dificulty = dificultyPro
        intervalId = setInterval(update, dificulty);
    }
    })

}

// Function that updates the canva board
function update() {
    if(gameOver){
        return;
    }
    else if (winGame) {
        return;
    }
    context.fillStyle = "white";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "black";
    context.fillRect(biteX, biteY, blockSize, blockSize);

    if (snakeX == biteX && snakeY == biteY) {
        snakeBody.push([biteX, biteY])
        score += 1;
        takeScore.innerText = score
        if(score === 1) {
            pointsModifier.innerText = "point"
        }
        else {
            pointsModifier.innerText = "points"
        }

        placeFood()
    }
    // Making the third cell of the body and so on ..
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1]
        console.log(snakeBody[i]);
    }

    // Update the value of Snake Body position with the last position
    if(snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
        // console.log(snakeBody[0]);
        // console.log(snakeBody);
    }

    
    // Drawing the movement of the head
    context.fillStyle = "red";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize; 
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    // up here


    // Drawing the second block after the head and so on
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    // win the game condition
    if (score == scoreToWin) {
        winGame = true;
        gameSection.style.display = 'none';
        mainSection.style.filter = "blur(0px)";
        resetButton.innerText = "Play Again!"
        ballSkip.style.display = "none"


    }


    // game over conditions
    if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
        gameOver = true;
        context.font = "25px Arial"; // Set the font size and family
        context.fillStyle = "black"; // Set the color of the text
        context.fillText(text, x, y); // Draw the text
    }

    for(let i = 0; i < snakeBody.length; i++) {
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            context.font = "25px Arial"; // Set the font size and family
            context.fillStyle = "black"; // Set the color of the text
            context.fillText(text, x, y); // Draw the text
        }
    }
}

// Function that change the direction of the snake based on keyboard
function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
    console.log(e);
}

// Function that place the food in a random way
function placeFood() {
    biteX = Math.floor(Math.random() * cols) * blockSize;
    // console.log(biteX);
    biteY = Math.floor(Math.random() * cols) * blockSize;
}

playTheGame()