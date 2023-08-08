// Global variables declaration
// Main
let randNum = null;
let minNum = setMinNum.value = 1;
let maxNum = setMaxNum.value = 10;
let chances = setChances.value = 3;
let isGssFill = false;
let isGssNum = null;
let isGssValidNum = null;
let isGssWarn = null;
let currGuess = null;
let guesses = [];
let isGameOver = false;
// Settings menu
let isActive = false;
let isDark = true;
// Numbers settings
let isSetFill = true;
let isSetNums = true;
let isSetValidNums = true;
let isSetWarn = false;
let settings = [minNum, maxNum, chances];
let checkSet = ['valid', 'valid', 'valid'];
let lastMinNum = null;
let lastMaxNum = null;
let lastChances = null;
// Scoreboard
let wins = 0;
let losses = 0;
// Outcomes
let isRepeatNum = null;
let isWinNum = null;
let isLoseNum = null;
let isWrongNum = null;
// Language
let isEn = true;
let lang = new Lang();
// Cheat code
let isCheat = false;