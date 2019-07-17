
// look into .split() method - takes a string and returns an array
// Could take the selected word and split it into an array of letters,
// then 

var guess;                            // user guess
var letters = [];                    // correctly guessed letters
var wrongLetters = [];              // incorrectly guessed letters
var remainingGuesses = 5;          // counts wrong guesses
var losses = 0;
var wins = 0;
var correctWord; 

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
    var instructions = document.getElementById("instructions"); 
    if (instructions.style.display === "none") {
        instructions.style.display = "block";
      } else {
        instructions.style.display = "none";
      }
}

// Starts game
function start() {
    letters = [];                    //correctly guessed letters
    wrongLetters = [];              //incorrectly guessed letters
    word = wordList[Math.floor(Math.random() * wordList.length)]; //randomly selects word
    correctWord = word.split(""); 
    for (i = 0; i < word.length; i++) {
        letters[i] = "_";    
        console.log(word);
        document.getElementById("answer").innerHTML = letters.join(" ");
    }
}

// checks if letter is in the secret word
function checkLetter() {
    document.onkeyup = function(event) {
        // Only letters are valid guesses - change case to upper case 
        if (!(event.which <= 90 && event.which >= 65)) 
        return
        guess = event.key.toUpperCase();
        var found = false;
        for (i = 0; i < word.length; i++) {
        if (guess === word[i]) {
            letters[i] = guess;
            document.getElementById("answer").innerHTML = letters.join(" ");
            found = true;
        }
        }

        // Wrong Guesses Array 
        if (found) return;
        if (wrongLetters.indexOf(guess) < 0) {
        wrongLetters.push(guess);
        document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
        remainingGuesses--;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;


        console.log(remainingGuesses);

        if (word.indexOf(guess) != -1){                   // if the character is found
            for (var i = 0; i < wordLength; i ++){        // loop on all characters
            if (word[i] === guess)                        // if this is an occurance
                progressWord[i] = word[i];

            }
        }  
            //Losses 
            if (remainingGuesses === 0) {
                losses++;
                letters[i] = "_";
                document.getElementById("losses").innerHTML = losses;
                confirm("play again?"); 
                start();
            }
            // Wins
            
            else if (correctWord = letters) {
                wins++;
                letters[i] = "_";
                document.getElementById("wins").innerHTML = wins;
                // ("you won");
                confirm("play again?"); 
                start();
            // else (remainingGuesses > 0)
            }

    }
    }
}
checkLetter();

