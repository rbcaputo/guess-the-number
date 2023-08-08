// Settings menu button
// Show/hide menu window on "settings" button click event
menuBtn.addEventListener('click', function () {
  menuDiv.style.transition = '0.5s ease';
  warnDiv.style.transition = '0.5s ease';
  if (isActive) {
    if (isSetNums && isSetValidNums) {
      menuIcon.style.animation = 'spin-ccw 0.5s linear forwards';
      menuDiv.classList.remove('cont_menu-active');
      warnDiv.classList.remove('cont_warn-active');
      setTimeout(function () {
        isActive = false;
      }, 500);
    } else {
      printSetWarns();
    };
  } else {
    menuIcon.style.animation = 'spin-cw 0.5s linear forwards';
    menuDiv.classList.add('cont_menu-active');
    warnDiv.classList.add('cont_warn-active');
    setTimeout(function () {
      isActive = true;
    }, 500);
  };
});
// Show/hide menu window on "esc" keypress event
document.addEventListener('keyup', function (ev) {
  if (ev.key === 'Escape') {
    menuBtn.click();
  } else {
    return;
  };
});
// Hide menu window when clicking outside it
document.addEventListener('click', function (ev) {
  if (isActive && !ev.target.classList.contains('lock')) {
    menuBtn.click();
  } else {
    return;
  };
});
// Guess button
// Submit guess sequence
function submitGuess(currGuess) {
  setLang();
  checkGssFill(currGuess);
  if (isGssFill) {
    checkGssNum(Number(currGuess));
    if (isGssNum) {
      checkGssValidNum(Number(currGuess));
      if (isGssValidNum) {
        handleGuess(Number(currGuess));
        printValues(lang);
      } else {
        printGssWarns(lang);
      };
    } else {
      printGssWarns(lang);
    };
  } else {
    printGssWarns(lang);
  };
  swapBtns();
  printScore();
};
// Submit guess on "guess" button click event
guessBtn.addEventListener('click', function () {
  if (isActive) {
    return;
  } else {
    currGuess = guessInput.value;
    submitGuess(currGuess);
    // Clear and refocus input field
    guessInput.value = '';
    guessInput.focus();
  };
});
// Fire buttons functionality on "enter" keypress event
document.addEventListener('keyup', function (ev) {
  if (isActive && ev.key === 'Enter') {
    applyBtn.click();
  } else if (!isActive && ev.key === 'Enter') {
    if (isGameOver) {
      restartBtn.click();
    } else {
      guessBtn.click();
    };
  } else {
    return;
  };
});
// Swap "guess" and "restart" buttons
function swapBtns() {
  if (isGameOver) {
    guessBtn.disabled = true;
    guessBtn.classList.add('hidden');
    restartBtn.disabled = false;
    restartBtn.classList.remove('hidden');
    guessInput.disabled = true;
  } else {
    guessBtn.disabled = false;
    guessBtn.classList.remove('hidden');
    restartBtn.disabled = true;
    restartBtn.classList.add('hidden');
    guessInput.disabled = false;
  };
};
// Restart button
// Reset game on "restart" button click event
restartBtn.addEventListener('click', function () {
  isGameOver = false;
  swapBtns();
  init();
  printNewGame();
});