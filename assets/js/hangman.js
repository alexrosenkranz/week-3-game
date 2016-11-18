 

 // DECLARE VARIABLES NEEDED FOR GAME
    var wordsArray = ['kaytranada','hotelier','american football','restorations', 'a tribe called quest', 'rufus du sol'];
    var word;
    var wins = 0;
    var lettersGuessed;
    var goesLeft;
    var placeholder;
    var input;
    var wordLength;
    var wordSubstring;
    var currentWord;
    var key;

    // CREATE FUNCTION TO INITIALIZE NEW GAME
    function newGame() {
      placeholder = "";
      goesLeft = 10;
      lettersGuessed = [];
      word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    
      // REMOVE BEFORE FINALIZING
      console.log(word);
      wordLength = word.length;
      wordSubstring = word.substring;
    
    for (var i = 0; i < word.length; i++) {
      if (word.substring(i, i + 1) === " "){
        placeholder =  placeholder + " ";
      };
      placeholder = placeholder + "_";
      
     
    }
    // WORKING ON AUTOMATIC SPACEBAR PRESS
    // key = String.fromCharCode(32);

      document.querySelector("#placeholder").innerHTML = placeholder;
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
    }

  // INITIALIZE GAME
  newGame();
 
  // LOG KEYSTROKE TO BEGIN LOGIC CHECK
  document.onkeyup = function(event){
    key = event.key;
    var correct = 0;

    for (var i = 0; i < wordLength; i++) {
      if (key == word.substring(i, i + 1)) {
        correct++;
        placeholder = placeholder.substring(0, i) + key + placeholder.substring(i + 1, placeholder.length + 1);
        document.querySelector("#placeholder").innerHTML = placeholder;
      }
    }

    if (correct == 0) {
      goesLeft--;
      lettersGuessed.push(key);
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
    }

    if (placeholder == word) {
      alert("You guessed the word correctly. You win!");
      wins++;
      newGame();
    }

    if (goesLeft == 0) {
      alert("You lose");
      newGame();
    }

  }

  document.querySelector("#button").addEventListener("click", newGame);
