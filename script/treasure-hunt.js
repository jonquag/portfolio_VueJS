// Variable Declaration
(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));
let chest1 = document.getElementById("c1");
let chest2 = document.getElementById("c2");
let chest3 = document.getElementById("c3");
let chest4 = document.getElementById("c4");
let chest5 = document.getElementById("c5");
let chest6 = document.getElementById("c6");
let gameInfo = document.getElementById("game-info");
let restart = document.getElementById("restart");
let counter = document.getElementById("counter");
let highScore = document.getElementById("high-score");
const chestArray = [chest1, chest2, chest3, chest4, chest5, chest6];
const hiddenArray = ["assets/imgs/space-pod-empty.svg", "assets/imgs/space-pod-empty.svg", "assets/imgs/space-pod-empty.svg", "assets/imgs/space-pod-empty.svg", "assets/imgs/space-pod-empty.svg", "assets/imgs/space-pod-siggy.svg"];
const missArray = ["Not quite.", "Try again", "Miss, you may be close"]
console.log("chest 1 src: " + chest1.src);
let clickCounts = 0;
let unOpened = 6 - clickCounts;
let gameOn = true;
const closedChest = "assets/imgs/space-pod.svg";
const sigChest = "assets/imgs/space-pod-siggy.svg";



const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
let hiddenShuffle = shuffle(hiddenArray);

const clickFeedback = (chest) => {
    clickCounts++;
    counter.innerHTML = clickCounts;
    if (chest === sigChest) {
        gameOver('win');
        
    }
    else {
        console.log("MISS " +chest);
        let randomMiss = Math.floor(Math.random() * missArray.length)
        gameInfo.innerHTML = missArray[randomMiss];
    }
    
};
const isClicked = (chest) => {
    if (chest === closedChest) {
        return false;
    }
    else {
        return true;
    }
};

// On Click Functions

chest1.onclick = () => {
    if (gameOn && chest1.getAttribute('src') === closedChest) {
        chestArray[0].setAttribute("src", hiddenShuffle[0]);
        clickFeedback(hiddenShuffle[0]);
    }
};
chest2.onclick = () => {
    if (gameOn && chest2.getAttribute('src') === closedChest) {
        chestArray[1].setAttribute("src", hiddenShuffle[1]);
        clickFeedback(hiddenShuffle[1]);
    }
};
chest3.onclick = () => {
    if (gameOn  && chest3.getAttribute('src') === closedChest) {
        chestArray[2].setAttribute("src", hiddenShuffle[2]);
        clickFeedback(hiddenShuffle[2]);
    }
};
chest4.onclick = () => {
    if (gameOn  && chest4.getAttribute('src') === closedChest) {
        chestArray[3].setAttribute("src", hiddenShuffle[3]);
        clickFeedback(hiddenShuffle[3]);
    }
};
chest5.onclick = () => {
    if (gameOn  && chest5.getAttribute('src') === closedChest) {
        chestArray[4].setAttribute("src", hiddenShuffle[4]);
        clickFeedback(hiddenShuffle[4]);

    }
};
chest6.onclick = () => {
    if (gameOn) {
        chestArray[5].setAttribute("src", hiddenShuffle[5]);
        clickFeedback(hiddenShuffle[5]);
    }
};
restart.onclick = () => {
    console.log("Clicked restart.")
    startGame();
}
// Gameplay Control Function

const gameOver = (status) => {
    if (status === 'win') {
        console.log("WE HAVE A WINNER!!")
        gameInfo.innerHTML = "You found Siggy in " +clickCounts+ " attempts.";
    }
    else {
        console.log("Unsuccesful, try again?");
    }
    gameOn = false;
};
const resetChests = () => {
    for (let i=0; i < chestArray.length; i++) {
        chestArray[i].src = closedChest;
    }
};

const highScoreCheck = (score) => {
    let sittingHighScore = highScore.innerHTML;
    console.log("current play score: " +score)
    console.log("sitting HS: " +sittingHighScore)
    if (score < sittingHighScore && !gameOn) {
        console.log("new high score.");
        highScore.innerHTML = score;
    }
    else {
        console.log("not a new high score");
    }
};


const startGame = () => {
    gameInfo.innerHTML = "Good luck!";
    console.log("click counts: " +clickCounts)
    hiddenShuffle = shuffle(hiddenArray)
    highScoreCheck(clickCounts);
    resetChests();
    clickCounts = 0;
    counter.innerHTML = 0;
    gameOn = true;
};
