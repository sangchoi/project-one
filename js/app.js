
document.addEventListener("DOMContentLoaded", init);

//variables
var correctWords = [];
var enterButton;


// Level One words
var levelOne = ["cat", "hat", "mat", "bat", "that", "chat", "sat", "fat", "pat", "gnat"]

//DOM elements
var enterButton = document.getElementById("button");
var currentWord = document.getElementById("word");
var inputWord = document.getElementById("input");


// Initializing - Page will load with word
function init() {
    // Get a random index number
    var randomNumber = Math.floor(Math.random()*10)
    // Replace current word with a random word from the levelOne array
    currentWord.textContent = levelOne[randomNumber]
    
}


// Page will load with word
// Word will start to fade
// User will input and press enter
// Check for match if word didn't fade
// If correct, the word will go into their correctWords box
// Next word will load