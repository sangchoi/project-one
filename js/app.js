
// document.addEventListener("DOMContentLoaded", getWord);

//variables
var correctWords1 = [];
var correctWords2 = [];
var enterButton;
var matched;
var newWord = 0;
var timer = null;
var gameLevel = 1;


// Level One words
var levelOne = ["cat", "hat", "mat", "bat", "that", "chat", "sat", "fat", "pat", "gnat"];
var levelTwo = ["hot", "not", "shot", "cot", "dot", "got", "jot", "lot", "pot", "rot"];


// Colors
var colors = ["red", "blue", "yellow", "green", "purple", "orange"]


// Kaboom random color
var randomNum = Math.floor(Math.random() * colors.length)


//DOM elements
var enterButton = document.getElementById("submitButton");
var resetButton = document.getElementById("resetButton");
var currentWord = document.getElementById("word");
var inputWord = document.getElementById("input");
var form1 = document.getElementById("form1");
var form1Reset = document.getElementById("form1").reset();
var wordCollection1 = document.getElementById("wordCollection1");
var wordCollection2 = document.getElementById("wordCollection2");
var kaboom = document.getElementById("kaboom");


// Getting Word 
function getWord(level) {
    // Get a random index number for word
    var randomNumber;

    if (level === 1) {
        randomNumber = Math.floor(Math.random() * levelOne.length)
        // Replace current word with a random word from the levelOne array
        currentWord.textContent = levelOne[randomNumber];
        kaboom.style.color = colors[randomNum];
        // Remove current word from levelOne array once shown on screen 
        levelOne.splice(randomNumber, 1);
        // Set timer to five seconds if there are still words in the levelOne array
        if (levelOne.length > 0) {
            timer = setTimeout(() => getWord(level), 5000);
        } else {
            gameLevel = 2;
            getWord(gameLevel);
        }
    } else {
        currentWord.style.color = "#5A5AFE";
        randomNumber = Math.floor(Math.random() * levelTwo.length)
        // Replace current word with a random word from the levelOne array
        currentWord.textContent = levelTwo[randomNumber];
        kaboom.style.color = colors[randomNum];
        // Remove current word from levelOne array once shown on screen 
        levelTwo.splice(randomNumber, 1);
        // Set timer to five seconds if there are still words in the levelOne array
        if (levelTwo.length > 0) {
            timer = setTimeout(() => getWord(level), 3000);
        } else {
            currentWord.textContent = "Woohoo~ Let's try again!"
            console.log("Game Over!");
        }
    }
}


form1.addEventListener("submit", function(e) {
    console.log(currentWord, inputWord.value);
    // console.log({currentWord, input: inputWord.value});
    e.preventDefault();
    // Check if input value equals the current word
    if (inputWord.value === currentWord.textContent) {
        // kaboom.style.color = colors[randomNum];

        if (gameLevel === 1) {
            // If it does, then push the word into the correctWords array
            correctWords1.push(inputWord.value);
            // The words in the array will then be collected and shown on the page
            wordCollection1.textContent = "Level One: " + correctWords1;
        } else {
            correctWords2.push(inputWord.value);
            wordCollection2.textContent = "Level Two: " + correctWords2;
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
        // timer();
        clearTimeout(timer);
        getWord(gameLevel);
        // return false;
    }
});

form1.addEventListener("reset", function() {
    resetButton = form1Reset;
})

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

