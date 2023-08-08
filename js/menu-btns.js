// Default button
// Reset to default numbers settings on "default" button click event
defaultBtn.addEventListener('click', function () {
  // Update numbers settings input fields values
  setMinNum.value = 1;
  setMaxNum.value = 10;
  setChances.value = 3;
});
// Apply button
// Submit apply sequence
function submitApply(settings) {
  checkSetFill(settings);
  if (isSetFill) {
    checkSetNums(settings.map(Number));
    if (isSetNums) {
      checkSetValidNums(settings.map(Number));
      if (isSetValidNums) {
        init();
        if (isActive) {
          menuBtn.click();
        } else {
          return;
        };
      } else {
        setSetWarns(lang);
        printSetWarns();
      };
    } else {
      setSetWarns(lang);
      printSetWarns();
    };
  } else {
    setSetWarns(lang);
    printSetWarns();
  };
  printInvalidSet(settings.map(Number));
};
// Apply numbers settings on "apply" button click event
applyBtn.addEventListener('click', function () {
  setLastNums();
  // Update variables assignments
  minNum = setMinNum.value;
  maxNum = setMaxNum.value;
  chances = setChances.value;
  // Update numbers settings array
  settings = [minNum, maxNum, chances];
  submitApply(settings);
});
// Screen mode button
// Set screen color scheme to dark mode
function setDarkMode(lang) {
  wrapper.classList.remove('light-mode');
  wrapper.classList.add('dark-mode');
  modeText.textContent = lang.settings.modeBtn.dark;
};
// Set screen color scheme to light mode
function setLightMode(lang) {
  wrapper.classList.remove('dark-mode');
  wrapper.classList.add('light-mode');
  modeText.textContent = lang.settings.modeBtn.light;
};
// Switch screen color scheme on "switch to" button click event
modeBtn.addEventListener('click', function () {
  menuDiv.style.transition = 'none';
  warnDiv.style.transition = 'none';
  newGameDiv.style.transition = 'none';
  if (isDark) {
    modeIcon.style.animation = 'spin-cw 0.25s linear forwards';
    setTimeout(function () {
      isDark = false;
      setLightMode(lang);
    }, 250);
  } else {
    modeIcon.style.animation = 'spin-ccw 0.25s linear forwards';
    setTimeout(function () {
      isDark = true;
      setDarkMode(lang);
    }, 250);
  };
});
// Language button
// Switch language on "switch to" button click event
langBtn.addEventListener('click', function () {
  if (isEn) {
    isEn = false;
  } else {
    isEn = true;
  };
  setLang();
  printMainText(lang);
  printScore();
  printValues();
  if (isGssWarn) {
    printGssWarns(lang);
  } else {
    return;
  };
  printOutcomes(lang);
});