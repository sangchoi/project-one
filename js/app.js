
document.addEventListener("DOMContentLoaded", init);

//variables
var correctWords = [];
var enterButton;
var matched;
var newWord = 0;
var timer = null;


// Level One words
var levelOne = ["cat", "hat", "mat", "bat", "that", "chat", "sat", "fat", "pat", "gnat"];
var levelTwo = ["hot", "not", "shot", "cot", "dot", "got", "jot", "lot", "pot", "rot"];

// Colors
var colors = ["red", "blue", "yellow", "green", "purple", "orange"]
// var colors = [redKaboom, blueKaboom, yellowKaboom, greenKaboom, purpleKaboom, orangeKaboom]

// Kaboom color
var randomNum = Math.floor(Math.random() * colors.length);


//DOM elements
var enterButton = document.getElementById("button");
var currentWord = document.getElementById("word");
var inputWord = document.getElementById("input");
var form1 = document.getElementById("form1");
var wordCollection = document.getElementById("wordCollection");
// var kaboom = document.getElementById("kaboom").style.color;
// var redKaboom = document.getElementById("kaboom").style.color = "red";
// var blueKaboom = document.getElementById("kaboom").style.color = "blue";
// var yellowKaboom = document.getElementById("kaboom").style.color = "yellow";
// var greenKaboom = document.getElementById("kaboom").style.color = "green";
// var purpleKaboom = document.getElementById("kaboom").style.color = "purple";
// var orangeKaboom = document.getElementById("kaboom").style.color = "orange";





// Initializing - Page will load with word
function init() {
    // Get a random index number for word
    var randomNumber = Math.floor(Math.random() * levelOne.length)
    // Replace current word with a random word from the levelOne array
    currentWord.textContent = levelOne[randomNumber];
    // Remove current word from levelOne array once shown on screen 
    levelOne.splice(randomNumber, 1);
    // Set timer to five seconds if there are still words in the levelOne array
    if (levelOne.length > 0) {
        timer = setTimeout(init, 5000);
    } else {
        secondLevel();
    }
}


form1.addEventListener("submit", function(e) {
    console.log(currentWord, inputWord.value);
    // console.log({currentWord, input: inputWord.value});
    e.preventDefault();
    // Check if input value equals the current word
    if (inputWord.value === currentWord.textContent) {
        
        document.getElementById("kaboom").style.color = colors[randomNum];
        // If it does, then push the word into the correctWords array
        correctWords.push(inputWord.value);
        // The words in the array will then be collected and shown on the page
        wordCollection.textContent = correctWords;
        // Clears input value once entered
        inputWord.value = "";
        clearTimeout(timer);
        init();
        
        console.log("You have a match!")
        console.log(correctWords);
        // return true;
    } else {
        console.log("Incorrect");
        // Clears input value once entered
        inputWord.value = "";
        // timer();
        clearTimeout(timer);
        init();
        // return false;
    }
});

////////////////// secondLevel ////////////////////////

// function secondLevel() {
//     if (levelOne.length === 0 && correctWords.length >= 8) {
//         // Get a random index number for word
//         var randomNumber = Math.floor(Math.random() * levelTwo.length)
//         // Replace current word with a random word from the levelTwo array
//         currentWord.textContent = levelTwo[randomNumber];
//         // Remove current word from levelTwo array once shown on screen 
//         levelTwo.splice(randomNumber, 1);
//         // Set timer to five seconds if there are still words in the levelTwo array
//         if (levelTwo.length > 0) {
//         timer = setTimeout(secondLevel, 5000);
//     } else {
//         currentWord.textContent = "Let's try again!";
//     }
// }
// }

// form1.addEventListener("submit", function(e) {
//     console.log(currentWord, inputWord.value);
//     // console.log({currentWord, input: inputWord.value});
//     e.preventDefault();
//     // Check if input value equals the current word
//     if (inputWord.value === currentWord.textContent) {
//         document.getElementById("kaboom").style.color = colors[randomNum];
//         // If it does, then push the word into the correctWords array
//         correctWords.push(inputWord.value);
//         // The words in the array will then be collected and shown on the page
//         wordCollection.textContent = correctWords;
//         // Clears input value once entered
//         inputWord.value = "";
//         clearTimeout(timer);
//         secondLevel();
//         console.log("You have a match!")
//         console.log(correctWords);
//     } else {
//         console.log("Incorrect");
//         // Clears input value once entered
//         inputWord.value = "";
//         // timer();
//         clearTimeout(timer);
//         secondLevel();
//     }
// });


