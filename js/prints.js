// Print main text on screen
function printMainText(lang) {
  // Settings
  menuBtnText.textContent = lang.settings.menuBtn;
  menuTitle.textContent = lang.settings.title;
  labelMinNum.textContent = lang.settings.firstNum;
  labelMaxNum.textContent = lang.settings.lastNum;
  defaultBtn.textContent = lang.settings.buttons.default;
  applyBtn.textContent = lang.settings.buttons.apply;
  if (isDark) {
    modeText.textContent = lang.settings.modeBtn.dark;
  } else {
    modeText.textContent = lang.settings.modeBtn.light;
  };
  langIcon.src = lang.settings.langBtn.icon;
  langText.textContent = lang.settings.langBtn.text;
  // Main
  mainTitle.textContent = lang.main.title;
  labelGuess.textContent = lang.main.label;
  guessBtn.textContent = lang.main.buttons.guessBtn;
  restartBtn.textContent = lang.main.buttons.restartBtn;
  newGameText.textContent = lang.main.newGame;
};
function printScore() {
  if (isEn) {
    scoreTitle.innerHTML = 'Score&nbsp&nbsp||&nbsp&nbsp';
    scoreWin.innerHTML = `<img class="score-icon" src="../img/check.png" alt="Check icon" />&nbspWins: <span class="value-num">${wins}</span>&nbsp&nbsp<span class="value-num">||</span>&nbsp&nbsp`;
    scoreLoss.innerHTML = `<img class="score-icon" src="../img/x.png" alt="X icon" />&nbspLosses: <span class="value-num">${losses}</span>`;
  } else {
    scoreTitle.innerHTML = 'Placar&nbsp&nbsp||&nbsp&nbsp';
    scoreWin.innerHTML = `<img class="score-icon" src="../img/check.png" alt="Check icon" />&nbspVitórias: <span class="value-num">${wins}</span>&nbsp&nbsp||&nbsp&nbsp`;
    scoreLoss.innerHTML = `<img class="score-icon" src="../img/x.png" alt="X icon" />&nbspDerrotas: <span class="value-num">${losses}</span>`;
  };
};
function printValues() {
  if (isSetNums && isSetValidNums) {
    if (isEn) {
      mainSubtitle.innerHTML = `From <span class="value-num">${minNum}</span> to <span class="value-num">${maxNum}</span>, try to guess the number picked randomly by the CPU`;
      chancesText.innerHTML = `You have <span class="value-num">${chances}</span> chance(s) left`;
    } else {
      mainSubtitle.innerHTML = `De <span class="value-num">${minNum}</span> até <span class="value-num">${maxNum}</span>, tente adivinhar o número escolhido aleatoriamente pela CPU`;
      chancesText.innerHTML = `Você tem <span class="value-num">${chances}</span> chance(s) restante(s)`;
    };
    guessInput.placeholder = `${minNum} - ${maxNum}`;
  } else {
    if (isEn) {
      mainSubtitle.innerHTML = `From <span class="value-num">${lastMinNum}</span> to <span class="value-num">${lastMaxNum}</span>, try to guess the number picked randomly by the CPU`;
      chancesText.innerHTML = `You have <span class="value-num">${lastChances}</span> chance(s) left`;
    } else {
      mainSubtitle.innerHTML = `De <span class="value-num">${lastMinNum}</span> até <span class="value-num">${lastMaxNum}</span>, tente adivinhar o número escolhido aleatoriamente pela CPU`;
      chancesText.innerHTML = `Você tem <span class="value-num">${lastChances}</span> chance(s) restante(s)`;
    };
    guessInput.placeholder = `${lastMinNum} - ${lastMaxNum}`;
  };
};
// Print numbers settings warnings on screen
function setSetWarns(lang) {
  if (isSetFill) {
    if (isSetNums && !isSetValidNums) {
      warnText.textContent = lang.setWarns.notValid;
    } else {
      warnText.textContent = lang.setWarns.notNumber;
    };
  } else {
    warnText.textContent = lang.setWarns.notFilled;
  };
};
function printSetWarns() {
  warnDiv.style.transition = '0.5s ease';
  warnDiv.classList.add('cont_warn-active--active');
  setTimeout(function () {
  }, 500);
  setTimeout(function () {
    warnDiv.classList.remove('cont_warn-active--active');
  }, 2500);
};
// Print current guess input and warnings on screen
function printGssWarns(lang) {
  if (isGssFill) {
    if (isGssNum && !isGssValidNum) {
      output.innerHTML = lang.gssWarns.notValid;
    } else {
      output.innerHTML = lang.gssWarns.notNumber;
    };
  } else {
    output.textContent = lang.gssWarns.notFilled;
  };
  guessInput.classList.add('input-warn');
};
// Print current guess input and outcomes on screen
function printOutcomes(lang) {
  if (isRepeatNum) {
    output.innerHTML = lang.outcomes.repeatNum;
  } else if (isWinNum) {
    output.innerHTML = lang.outcomes.winNum;
  } else if (isLoseNum) {
    output.innerHTML = lang.outcomes.loseNum;
  } else if (isWrongNum) {
    output.innerHTML = lang.outcomes.wrongNum;
  } else {
    return;
  };
};