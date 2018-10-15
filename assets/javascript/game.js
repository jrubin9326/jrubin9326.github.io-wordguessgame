var wins = 0

// variables that hold references to HTML
var score = document.getElementById("win-text")
var currentWord = document.getElementById("currentWord-text")
var wrongGuesses = document.getElementById("guesses")
var allowedGuesses = document.getElementById("lettersRemaining-text")
var guessedWord = document.getElementById("guessedWord"); 
var word; 
var maxTries = 10
var remainingGuesses = 0
// array to hold answers 
var options = ["Omen", "Sixth Sense", "Silence of the Lambs", "Scream", "Hocus Pocus", "Carrie", "Beetlejuice"]
var choice = Math.floor(Math.random()*7);
var answer = options[choice]; 
var wordLength = answer.length; 
var targetDiv = document.getElementById("currentWord-text")

//function for how game should look when it is started / reset 


var guessedLetters = []

// sets current word to underscores
    for (let i = 0; i < wordLength; i++) {
        if (answer[i].match(/[a-zA-Z]/)) {
            guessedLetters.push("_")
        } else if (answer[i] === " ") {
            guessedLetters.push(" ")
        }
    } 
    
    //fill #guessedWord element
    guessedWord.textContent = guessedLetters.join("")
    currentWord.appendChild(guessedWord)

    


//  number of guesses remaining should be equal to maxTries
    let guessesLeft = document.createElement("div")
    guessesLeft.textContent = maxTries; 
    wrongGuesses.appendChild(guessesLeft);


    
// function to play game
wrongLetterArray = []
 function start (letter) {
    
    for ( var i in answer) {
        if (answer [i] === letter) {
           guessedLetters[i] = letter;
           document.getElementById("guessedWord").innerHTML = guessedLetters.join(""); 
           
            }
        }   
        var wrong = (answer.indexOf(letter)) 
        if (wrong === -1) {
            wrongLetterArray.push(letter); 
            let wrongArray = document.createElement("div")
            wrongArray.textContent = wrongLetterArray
            allowedGuesses.appendChild(wrongArray);
            }
    }

    
    // console.log(guessedLetters)
    // document.getElementById("guessedWord").innerHTML = guessedLetters.join(""); 
    // document.getElementById("guessesLeft").innerHTML = maxTries
    
    
//  with that letter
//  if letter === answer then game is won 
//  when game is won, update new word

//  if letter is incorrect then update wrong letters


//  if wrong letters is equal to >10 then game is over
//  when game is lose update new word 



