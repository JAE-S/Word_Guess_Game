/*
========================================
Global Variables
========================================
*/
var guess;                            // User guess
var correctLetters = [];             // correctly guessed letters
var wrongLetters = [];              // Incorrectly guessed letters
var remainingGuesses = 5;          // Counts wrong guesses
var losses = 0;
var wins = 0;
var correctWord;                  // Randomly selected word
let gameOver = false;

var play = document.getElementById("launchedGame");  // Hides the main game page until the game is won or lost
play.style.display = "none"; 
var restartButton = document.getElementById("restart"); // Hides restart button until the game is won or lost
restartButton.style.display = "none";
console.log(restart);

/*
========================================
Sound Effects
========================================
*/
var sound1 = document.getElementById("myAudio");
var sound2 = document.getElementById("myAudio2");
var sound3 = document.getElementById("myAudio3"); 
var sound4 = document.getElementById("myAudio4");
/*
========================================
Array of Planets
========================================
*/
var wordList = ["MERCURY",
                "VENUS", 
                "EARTH", 
                "MARS", 
                "JUPITER", 
                "SATURN", 
                "URANUS", 
                "NEPTUNE"
                ]; 
/*
========================================
Launch function for Intro Page
========================================
*/
function launch(){  
    gameOver = false         
    var instructions = document.getElementById("instructions");  // Selects instructions section
    if (instructions.style.display === "none") {  // When the launch button is clicked the instructions will be hidden         
        instructions.style.display = "block";                 
      } else {
        instructions.style.display = "none";
      } 
      sound1.play();
      sound4.play();
      play.style.display = "block";  // Shows elements in the Launched game section
      word = wordList[Math.floor(Math.random() * wordList.length)]; // Randomly selects word
      correctWord = word.split("");                                 // Converts randomly selected word from an array to a string
      for (i = 0; i < word.length; i++) {
          correctLetters[i] = "_";                                 // Placeholder for guessed letters 
          console.log(word);
          document.getElementById("answer").innerHTML = correctLetters.join(" ");  // Joins guessed letters into a string
      }
}
/*
========================================
Restart Function for new games
========================================
*/
function restart(){
    if (gameOver === true){        // When game over is true -> reset the following:
    restartButton.style.display = "none";                           // Hides the reset button 
    correctLetters = [];                                           // Resets correctly guessed letters
    wrongLetters = [];
    document.getElementById("wrongGuesses").innerHTML = (" ");    // Resets incorrectly guessed letters in the html doc
    remainingGuesses = 5;     
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;  // Resets incorrectly guessed letters in the html doc
    }
    gameOver = false 
    sound4.play();                                                 // Alerts that a new game has started 
    word = wordList[Math.floor(Math.random() * wordList.length)]; // Randomly selects word
    correctWord = word.split("");                                 // Converts randomly selected word from an array to a string
      for (i = 0; i < word.length; i++) {
          correctLetters[i] = "_";                               // Placeholder for guessed letters 
          console.log(word);
          document.getElementById("answer").innerHTML = correctLetters.join(" ");  // Joins guessed letters into a string
      }
    }
/*
========================================
Check Letter function 
========================================
*/
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
                sound4.pause();
                sound2.play();
                document.getElementById("losses").innerHTML = losses;
                restartButton.style.display = "block";
                gameOver = true
                }
                console.log(correctWord.toString(), correctLetters.toString(), 'checking win state')
            // Wins
            if (correctWord.toString() === correctLetters.toString()) {
                wins++;
                sound4.pause();
                sound3.play();
                document.getElementById("wins").innerHTML = wins;
                restartButton.style.display = "block";
                console.log(correctWord);
                console.log(correctLetters);
                gameOver = true
                }
        }
    }

checkLetter();

