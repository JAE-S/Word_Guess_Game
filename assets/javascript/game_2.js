
// look into .split() method - takes a string and returns an array
// Could take the selected word and split it into an array of letters,
// var.copyarray with splice function 

// Global variables 
var guess;                            // User guess
var correctLetters = [];             // correctly guessed letters
var wrongLetters = [];              // Incorrectly guessed letters
var remainingGuesses = 5;          // Counts wrong guesses
var losses = 0;
var wins = 0;
var correctWord; 
let gameOver = false;

var play = document.getElementById("launchedGame");  // Hides the main game page until the game is won or lost
play.style.display = "none"; 
var restartButton = document.getElementById("restart"); // Hides restart button until the game is won or lost
restartButton.style.display = "none";
console.log(restart);


var wordList = ["MERCURY",
                "VENUS", 
                "EARTH", 
                "MARS", 
                "JUPITER", 
                "SATURN", 
                "URANUS", 
                "NEPTUNE"
                ]; 



function launch(){
    gameOver = false          // When the launch button is clicked the instructions will be hidden
    var instructions = document.getElementById("instructions");  // Selects instructions section
    if (instructions.style.display === "none") {             
        instructions.style.display = "block";                 
      } else {
        instructions.style.display = "none";
      } 
      play.style.display = "block";                
      correctLetters = [];                                           // Resets correctly guessed letters
      wrongLetters = [];                                            // Resets incorrectly guessed letters
      word = wordList[Math.floor(Math.random() * wordList.length)]; // Randomly selects word
      correctWord = word.split("");                                 // Converts randomly selected word from an array to a string
      for (i = 0; i < word.length; i++) {
          correctLetters[i] = "_";                                         // Placeholder for gguessed letters 
          console.log(word);
          document.getElementById("answer").innerHTML = correctLetters.join(" ");  // Joins guessed letters into a string
      }
}
function restart(){
    if (gameOver === true){        // When the launch button is clicked the instructions will be hidden
    restartButton.style.display = "none";                
    correctLetters = [];                                           // Resets correctly guessed letters
    // document.getElementById("answer").innerHTML = (" ");
    wrongLetters = [];
    document.getElementById("wrongGuesses").innerHTML = (" ");
    remainingGuesses = 5;     
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses; 
    }
    gameOver = false         
    word = wordList[Math.floor(Math.random() * wordList.length)]; // Randomly selects word
    correctWord = word.split("");                                 // Converts randomly selected word from an array to a string
      for (i = 0; i < word.length; i++) {
          correctLetters[i] = "_";                                         // Placeholder for gguessed letters 
          console.log(word);
          document.getElementById("answer").innerHTML = correctLetters.join(" ");  // Joins guessed letters into a string
      }
    }


// checks if guessed letter is in the correctWord
function checkLetter() {
    document.onkeyup = function(event) {
        console.log('gameOver', gameOver)
        if (gameOver) {
            return
        }
        if (!(event.which <= 90 && event.which >= 65))  // Only letters are valid guesses
        return;
        guess = event.key.toUpperCase();                // Changes all key inputs to uppercase
            for (i = 0; i < word.length; i++) {
                if (guess === word[i]) {
                    correctLetters[i] = guess;
                    document.getElementById("answer").innerHTML = correctLetters.join(" ");
                    console.log(correctLetters);
                }
            }
            
        // Forms wrongLetters string
        if (correctLetters.indexOf(guess) === -1 && wrongLetters.indexOf(guess) < 0) {
            wrongLetters.push(guess);
            document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
            remainingGuesses--;
            document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
            console.log(remainingGuesses);
        }
    
        // }  
            //Losses 
            if (remainingGuesses === 0) {
                losses++;
                document.getElementById("losses").innerHTML = losses;
                restartButton.style.display = "block";
                gameOver = true
                }
                console.log(correctWord.toString(), correctLetters.toString(), 'checking win state')
            // Wins
            if (correctWord.toString() === correctLetters.toString()) {
                wins++;
                document.getElementById("wins").innerHTML = wins;
                restartButton.style.display = "block";
                console.log(correctWord);
                console.log(correctLetters);
                gameOver = true
                }
        
        }
        
    }

checkLetter();

