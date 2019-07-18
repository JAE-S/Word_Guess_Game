
// look into .split() method - takes a string and returns an array
// Could take the selected word and split it into an array of letters,
// var.copyarray with splice function 
// then 

var guess;                            // User guess
var correctLetters = [];             // correctly guessed letters
var wrongLetters = [];              // Incorrectly guessed letters
var remainingGuesses = 5;          // Counts wrong guesses
var losses = 0;
var wins = 0;
var correctWord; 
var playAgain = document.getElementById("launchedGame");  // Selects instructions section
launchedGame.style.display = "none";

var wordList = ["MERCURY",
                "VENUS", 
                "EARTH", 
                "MARS", 
                "JUPITER", 
                "SATURN", 
                "URANUS", 
                "NEPTUNE"
                ]; 

// function playAgain(){   
//     playAgain.style.disply = "none"; // Selects instructions section
//     remainingGuesses = 5;  
//     correctLetters = [];                                                 // Resets correctly guessed letters
//     wrongLetters = []; 
// }

function launch(){          // When the launch button is clicked the instructions will be hidden
    var instructions = document.getElementById("instructions");  // Selects instructions section
    if (instructions.style.display === "none") {             
        instructions.style.display = "block";                 
      } else {
        instructions.style.display = "none";
      }                
      playAgain.style.display = "none"; 
      launchedGame.style.display = "block";
      correctLetters = [];                                                 // Resets correctly guessed letters
      wrongLetters = [];                                            // Resets incorrectly guessed letters
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
        if (!(event.which <= 90 && event.which >= 65))  // Only letters are valid guesses
        return;
        guess = event.key.toUpperCase();                // Changes all key inputs to uppercase
        var found = false;
            for (i = 0; i < word.length; i++) {
                if (guess === word[i]) {
                    correctLetters[i] = guess;
                    document.getElementById("answer").innerHTML = correctLetters.join(" ");
                    found = true;
                }
            }
        // Forms wrongLetters string
        if (found) 
        return;
        if (wrongLetters.indexOf(guess) < 0) {
            wrongLetters.push(guess);
            document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
            remainingGuesses--;
            document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
            console.log(remainingGuesses);
        }
        // Forms wrongLetters string
        // if (word.indexOf(guess) != -1){                   // if the character is found
        //     for (var i = 0; i < word.Length; i ++){        // loop on all characters
        //     if (word[i] === guess)                        // if this is an occurance
        //         correctWord[i] = word[i];

        //     }
        // }  
            //Losses 
            // var playAgain = document.getElementById("playAgain");  // Selects instructions section
            // if (playAgain.style.display === "none" && remainingGuesses === 0 || correctWord === correctLetters) {             
            //     playAgain.style.display = "block";  
            // } else {
            //     playAgain.style.display = "block";
            //   }               
            
            if (remainingGuesses === 0) {
                losses++;
                correctLetters[i] = "_";
                document.getElementById("losses").innerHTML = losses;
                playAgain.style.display = "block";
                playAgain()
                }

            // Wins
            else if (correctWord === correctLetters) {
                wins++;
                correctLetters[i] = "_";
                document.getElementById("wins").innerHTML = wins;
                playAgain.style.display = "block";
                playAgain()
                }
                
        }
        
    }

checkLetter();

