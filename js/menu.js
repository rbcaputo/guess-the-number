// Numbers settings
// Check if numbers settings input fields are filled
function checkSetFill(settings) {
  if (settings.includes('')) {
    isSetFill = false;
    isSetWarn = true;
  } else {
    isSetFill = true;
    isSetWarn = false;
  };
};
// Check if numbers settings inputs parses to numbers
function checkSetNums(settings) {
  if (settings.some(el => isNaN(el))) {
    isSetNums = false;
    isSetWarn = true;
  } else {
    isSetNums = true;
    isSetWarn = false;
  };
};
// Check if numbers settings are integers inside given interval
function checkSetValidNums(settings) {
  if (settings.some(el => !Number.isInteger(el)) ||
      settings.some(el => el <= 0) ||
      settings.some(el => el > 100)) {
    isSetValidNums = false;
    isSetWarn = true;
  } else {
    isSetValidNums = true;
    isSetWarn = false;
  };
};
// Print invalid numbers settings input field
function printInvalidSet(settings) {
  checkSet = [];
  settings.forEach(function (el) {
    if (el === '' || isNaN(el) || !Number.isInteger(el) || el <= 0 || el > 100) {
      checkSet.push('invalid');
    } else {
      checkSet.push('valid');
    };
  });
  if (checkSet[0] === 'invalid') {
    setMinNum.classList.add('input-warn');
  } else {
    setMinNum.classList.remove('input-warn');
  };
  if (checkSet[1] === 'invalid') {
    setMaxNum.classList.add('input-warn');
  } else {
    setMaxNum.classList.remove('input-warn');
  };
  if (checkSet[2] === 'invalid') {
    setChances.classList.add('input-warn');
  } else {
    setChances.classList.remove('input-warn');
  };
};
// Update last numbers settings values
function setLastNums() {
  if (minNum === '' || isNaN(minNum) || !Number.isInteger(Number(minNum)) || minNum <= 0 || minNum > 100) {
    return;
  } else if (maxNum === '' || isNaN(maxNum) || !Number.isInteger(Number(maxNum)) || minNum <= 0 || minNum > 100) {
    return;
  } else if (chances === '' || isNaN(chances) || !Number.isInteger(Number(chances)) || minNum <= 0 || minNum > 100) {
    return;
  } else {
    lastMinNum = minNum;
    lastMaxNum = maxNum;
    lastChances = chances;
  };
};