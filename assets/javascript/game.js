var wins = 0

// variables that hold references to HTML
var score = document.getElementById("win-text")
var currentWord = document.getElementById("currentWord-text")
var wrongGuesses = document.getElementById("guesses")
var allowedGuesses = document.getElementById("lettersRemaining-text")
var guessedWord = document.getElementById("guessedWord"); 
var win = 0
var numberOfWins = document.getElementById("numberOfWins");
var maxTries = 10
// array to hold answers 
var options = ["Omen", "Sixth Sense", "Silence of the Lambs", "Scream", "Hocus Pocus", "Carrie", "Beetlejuice"]
var choice = Math.floor(Math.random()*7);
var answer = (options[choice]).toLowerCase(); 
var wordLength = answer.length; 
var targetDiv = document.getElementById("currentWord-text")
var wrongLettersText = document.getElementById("wrongLettersText")
var guessesRemaining = document.getElementById("guessesRemaining")
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

    guessesRemaining.textContent = maxTries; 
    wrongGuesses.appendChild(guessesRemaining);


    
// function to play game
wrongLetterArray = []
var userAnswer = []

function restartGame () {
    if (win === -1) {
        document.getElementById("guessesRemaining").innerHTML = 10
        document.getElementById("wrongLettersText").innerHTML = []
        document.getElementById("guessedWord").innerHTML = guessedLetters; 
    }
}

 function start (letter) {
    
    for ( var i in answer) {
        if (answer [i] === letter) {
           guessedLetters[i] = letter;
           userAnswer = letter 
           console.log(userAnswer)
           document.getElementById("guessedWord").innerHTML = guessedLetters.join(""); 
            
            }
        }   
        var wrong = (answer.indexOf(letter)) 
        if (wrong === -1) {
            wrongLetterArray.push(letter); 
            wrongLettersText.textContent = wrongLetterArray
            allowedGuesses.appendChild(wrongLettersText);
            maxTries --
            document.getElementById("guessesRemaining").innerHTML = maxTries;
            ; 
            }
        if (maxTries === 0) {
            document.getElementById("gameOver").innerHTML = "Game Over"
        }
        win = (guessedLetters.indexOf("_"))
        if (win === -1) {
            document.getElementById("gameOver").innerHTML = answer
            wins ++
            document.getElementById("numberOfWins").innerHTML = wins; 

        }

        restartGame()

        
    }

function restartGame () {
    if (win === -1) {
        document.getElementById("guessesRemaining").innerHTML = 10
        document.getElementById("wrongLettersText").innerHTML = []
    }
}


document.onkeydown = function(event) {
    var userGuessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
    start(userGuessedLetter)
}


