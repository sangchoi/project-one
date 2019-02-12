
window.addEventListener("DOMContentLoaded", audioInit);


//variables
var correctWords1 = [];
var correctWords2 = [];
var correctWords3 = [];
var enterButton;
var matched;
var newWord = 0;
var timer = null;
var gameLevel = 1;


// Level One words
var levelOne = ["cat", "hat", "mat", "bat", "that", "chat", "sat", "fat", "pat", "gnat"];
var levelTwo = ["hot", "not", "shot", "cot", "dot", "got", "jot", "lot", "pot", "rot"];
var levelThree = ["it", "bit", "kit", "fit", "hit", "lit", "knit", "pit", "sit", "wit"];


// DOM elements
var enterButton = document.getElementById("submitButton");
var resetButton = document.getElementById("resetButton");
var musicButton = document.getElementById("musicButton");
var currentWord = document.getElementById("word");
var inputWord = document.getElementById("input");
var form1 = document.getElementById("form1");
var form1Reset = document.getElementById("form1").reset();
var wordCollection1 = document.getElementById("wordCollection1");
var wordCollection2 = document.getElementById("wordCollection2");
var wordCollection3 = document.getElementById("wordCollection3");

function clickSound() {
    var clicked = new Audio();
    clicked.src = "sounds/399198__spiceprogram__xylophone1-basic.wav";
    clicked.volume = .1;
    clicked.play();
};


// Input correct sound
function explosion() {
    var bomb = new Audio();
    bomb.src = "sounds/Laser_Cannon-Mike_Koenig-797224747.mp3";
    bomb.volume = .1;
    bomb.play();
};

// Input incorrect sound
function incorrectSound() {
    var laser = new Audio();
    laser.src = "sounds/55836__sergenious__laser2.wav";
    laser.volume = .9;
    laser.play();
};

// Background music will play when audioInit is called
function audioInit() {
    var audio = new Audio();
    audio.src = "sounds/Realm-of-Fantasy_Looping.mp3";
    audio.volume = .1;
    audio.play();

    // Music buttom DOM element
    musicButton.addEventListener("click", playPause);

    // Play and Pause button
    function playPause() {
        if (audio.paused) {
            audio.volume = .1;
            clickSound();
            audio.play();
            musicButton.style.backgroundColor = "pink";
            musicButton.textContent = "MUSIC: PAUSE";
        } else {
            audio.volume = .1;
            clickSound();
            audio.pause();
            musicButton.style.backgroundColor = "rgb(22, 203, 206)";
            musicButton.textContent = "MUSIC: PLAY";
        }
    }   
};


// Getting Word 
function getWord(level) {
    // Get a random index number for word
    var randomNumber;
    if (level === 1) {
        randomNumber = Math.floor(Math.random() * levelOne.length)
        // Replace current word with a random word from the levelOne array
        currentWord.textContent = levelOne[randomNumber];
        // Remove current word from levelOne array once shown on screen 
        levelOne.splice(randomNumber, 1);
        // Set timer to five seconds if there are still words in the levelOne array
        if (levelOne.length > 0) {
            timer = setTimeout(() => getWord(level), 5000);
        } else {
            gameLevel = 2;
            getWord(gameLevel);
        }
    } else if (level ===2) {
        currentWord.style.color = "#5A5AFE";
        randomNumber = Math.floor(Math.random() * levelTwo.length)
        // Replace current word with a random word from the levelOne array
        currentWord.textContent = levelTwo[randomNumber];
        // Remove current word from levelOne array once shown on screen 
        levelTwo.splice(randomNumber, 1);
        // Set timer to five seconds if there are still words in the levelOne array
        if (levelTwo.length > 0) {
            timer = setTimeout(() => getWord(level), 3000);
        } else {
            gameLevel = 3;
            getWord(gameLevel);
        }
    } else {
        currentWord.style.color = "rgb(16, 123, 50)";
        randomNumber = Math.floor(Math.random() * levelThree.length)
        // Replace current word with a random word from the levelOne array
        currentWord.textContent = levelThree[randomNumber];
        // Remove current word from levelOne array once shown on screen 
        levelThree.splice(randomNumber, 1);
        // Set timer to five seconds if there are still words in the levelOne array
        if (levelThree.length > 0) {
            timer = setTimeout(() => getWord(level), 1000);
        } else {
            currentWord.textContent = "Let's try again!";
            console.log("Game Over!");
        }
    }};
    


form1.addEventListener("submit", function(e) {
    console.log(currentWord, inputWord.value);
    // console.log({currentWord, input: inputWord.value});
    e.preventDefault();
    // Check if input value equals the current word
    if (inputWord.value === currentWord.textContent) {
        if (gameLevel === 1) {
            explosion();
            // If it does, then push the word into the correctWords array
            correctWords1.push(inputWord.value);
            // The words in the array will then be collected and shown on the page
            wordCollection1.textContent = "Level One: " + correctWords1;
        } else if (gameLevel === 2) {
            explosion();
            correctWords2.push(inputWord.value);
            wordCollection2.textContent = "\xa0\xa0\xa0\xa0" + "Level Two: " + correctWords2;
        } else {
            explosion();
            correctWords3.push(inputWord.value);
            wordCollection3.textContent = "Level Three: " + correctWords3;
        }
        
        // Clears input value once entered
        inputWord.value = "";
        clearTimeout(timer);
        getWord(gameLevel);
        console.log("You have a match!")
        console.log(correctWords);
        // return true;
    } else {
        console.log("Incorrect");
        // Clears input value once entered
        inputWord.value = "";
        incorrectSound();
        // timer();
        clearTimeout(timer);
        getWord(gameLevel);
        // return false;
    }
});


getWord(gameLevel);


////////////////// secondLevel ////////////////////////

// function secondLevel() {
//     if (levelOne.length === 0 && correctWords.length >= 8) {
//         // Get a random index number for word
//         var randomNumber = Math.floor(Math.random() * levelTwo.length)
//         // Replace current word with a random word from the levelTwo array
//         currentWord.textContent = levelTwo[randomNumber];
//         currentWord.style.color = "#5A5AFE";
//         // Remove current word from levelTwo array once shown on screen 
//         levelTwo.splice(randomNumber, 1);
//         // Set timer to five seconds if there are still words in the levelTwo array
//         if (levelTwo.length > 0) {
//         timer = setTimeout(secondLevel, 3000);
//         } else {
//         currentWord.textContent = "Let's try again!";
//     }
// }
// }


// if (levelOne.length === 0 && correctWords.length >= 8) {
// form1.addEventListener("submit", function(e) {
//     console.log(currentWord, inputWord.value);
//     // console.log({currentWord, input: inputWord.value});
//     e.preventDefault();
//     // Check if input value equals the current word
//     if (inputWord.value === currentWord.textContent) {
//         kaboom = colors[randomNum];
//         // If it does, then push the word into the correctWords array
//         correctWords2.push(inputWord.value);
//         console.log("wordcollection2:", wordCollection2);
//         // The words in the array will then be collected and shown on the page
//         wordCollection2.textContent = "Level Two: " + correctWords2;
//         // Clears input value once entered
//         inputWord.value = "";
//         clearTimeout(timer);
//         secondLevel();
//         console.log("You have a match!")
//         console.log(correctWords2);
//     } else {
//         console.log("Incorrect");
//         // Clears input value once entered
//         inputWord.value = "";
//         // timer();
//         clearTimeout(timer);
//         secondLevel();
//     }
// });
// }

