// Generate random number
function genRandNum() {
  randNum = Math.round(Math.random() * maxNum);
};
// Check if guess input field is filled
function checkGssFill(currGuess) {
  if (currGuess === '') {
    isGssFill = false;
    isGssWarn = true;
  } else {
    isGssFill = true;
    isGssWarn = false;
  };
};
// Check if guess input parses to number
function checkGssNum(currGuess) {
  if (isNaN(currGuess)) {
    isGssNum = false;
    isGssWarn = true;
  } else {
    isGssNum = true;
  };
};
// Check if guess number is integer inside given interval
function checkGssValidNum(currGuess) {
  if (!Number.isInteger(currGuess) || currGuess < minNum || currGuess > maxNum) {
    isGssValidNum = false;
    isGssWarn = true;
  } else {
    isGssValidNum = true;
  };
};
// Handle guess outcomes
function handleGuess(currGuess) {
  if (guesses.includes(currGuess)) {
    isRepeatNum = true;
  } else {
    isRepeatNum = false;
    if (chances >= 1) {
      chances--;
      // Win condition
      if (currGuess === randNum) {
        isWinNum = true;
        isGameOver = true;
        wins++;
        // Lose condition
      } else if (chances === 0) {
        isLoseNum = true;
        isGameOver = true;
        losses++;
      } else {
        isWrongNum = true;
        // Update guesses array to include current attempted guess
        if (guesses.includes(currGuess)) {
          return;
        } else {
          guesses.push(currGuess);
        };
      };
    } else {
      return;
    };
  };
  printOutcomes(lang);
  guessInput.classList.remove('input-warn');
};

// Print new game message
function printNewGame() {
  newGameDiv.style.transition = '0.5s ease';
  newGameDiv.classList.add('cont_new-game--active');
  setTimeout(function () {
    newGameDiv.classList.remove('cont_new-game--active');
  }, 2500);
};
// Initialization setup sequence
function init() {
  // Clear attempted guesses array
  guesses = [];
  // Reset variables assignments
  currGuess = null;
  isRepeatNum = null;
  isWinNum = null;
  isLoseNum = null;
  isWrongNum = null;
  minNum = setMinNum.value;
  maxNum = setMaxNum.value;
  chances = setChances.value;
  //
  guessInput.classList.remove('input-warn');
  guessInput.value = '';
  guessInput.focus();
  output.textContent = '...';
  // Invoke functions
  setLang();
  printMainText(lang);
  printScore();
  printValues();
  genRandNum();
  printNewGame(lang);
  printCheat();
};
init();