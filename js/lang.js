// Language class
class Lang {
  settings = {
    menuBtn: '',
    title: '',
    firstNum: '',
    lastNum: '',
    buttons: {
      default: '',
      apply: '',
    },
    modeBtn: {
      dark: '',
      light: '',
    },
    langBtn: {
      icon: '',
      text: '',
    },
  };
  setWarns = {
    notValid: '',
    notNumber: '',
    notFilled: '',
  };
  main = {
    title: '',
    label: '',
    buttons: {
      guessBtn: '',
      restartBtn: '',
    },
    newGame: '',
  };
  gssWarns = {
    notValid: '',
    notNumber: '',
    notFilled: '',
  };
  outcomes = {
    repeatNum: '',
    winNum: '',
    loseNum: '',
    wrongNum: '',
  };
};
// Set language package
function setLang() {
  if (isEn) {
    // English language package
    // Settings
    lang.settings.menuBtn = 'Settings';
    lang.settings.title = 'Settings menu';
    lang.settings.firstNum = 'Minimum';
    lang.settings.lastNum = 'Maximum';
    lang.settings.buttons.default = 'Default';
    lang.settings.buttons.apply = 'Apply';
    lang.settings.modeBtn.dark = 'Light mode';
    lang.settings.modeBtn.light = 'Dark mode';
    lang.settings.langBtn.icon = '../img/lang_pt.png';
    lang.settings.langBtn.text = 'Switch to PT-BR';
    // Numbers settings warnings
    lang.setWarns.notValid = 'Invalid number setting';
    lang.setWarns.notNumber = 'Settings must be numbers';
    lang.setWarns.notFilled = 'Settings cannot be empty';
    // Main
    lang.main.title = 'Guess the Number';
    lang.main.label = 'My guess is';
    lang.main.buttons.guessBtn = 'Guess';
    lang.main.buttons.restartBtn = 'Restart';
    lang.main.newGame = 'New game started';
    // Guess warnings
    lang.gssWarns.notValid = `<span class="value-num">${currGuess}</span> is not a valid number.`;
    lang.gssWarns.notNumber = `"<span class="value-num">${currGuess}</span>" is not a number.`;
    lang.gssWarns.notFilled = 'Try entering a number.';
    // Outcomes
    lang.outcomes.repeatNum = `You have already tried the number <span class="value-num">${currGuess}</span>.`;
    lang.outcomes.winNum = `You guessed correctly! The number was <span class="value-num">${randNum}</span>!`;
    lang.outcomes.loseNum = `No luck, you have no more chances! The number was <span class="value-num">${randNum}</span>.`;
    lang.outcomes.wrongNum = `Try again, <span class="value-num">${currGuess}</span> is not the chosen number.`;
  } else {
    // Portuguese language package
    // Settings
    lang.settings.menuBtn = 'Opções';
    lang.settings.title = 'Menu de opções';
    lang.settings.firstNum = 'Mínimo';
    lang.settings.lastNum = 'Máximo';
    lang.settings.buttons.default = 'Padrão';
    lang.settings.buttons.apply = 'Aplicar';
    lang.settings.modeBtn.dark = 'Modo claro';
    lang.settings.modeBtn.light = 'Modo escuro';
    lang.settings.langBtn.icon = '../img/lang_en.png';
    lang.settings.langBtn.text = 'Trocar para EN-US';
    // Numbers settings warnings
    lang.setWarns.notValid = 'Número inválido';
    lang.setWarns.notNumber = 'Apenas números';
    lang.setWarns.notFilled = 'Há campos vazios';
    // Main
    lang.main.title = 'Adivinhe o Número';
    lang.main.label = 'Minha tentativa é';
    lang.main.buttons.guessBtn = 'Adivinhar';
    lang.main.buttons.restartBtn = 'Recomeçar';
    lang.main.newGame = 'Novo jogo começado';
    // Guess warnings
    lang.gssWarns.notValid = `<span class="value-num">${currGuess}</span> não é um número válido.`;
    lang.gssWarns.notNumber = `"<span class="value-num">${currGuess}</span>" não é um número.`;
    lang.gssWarns.notFilled = 'Tente digitar um número.';
    // Outcomes
    lang.outcomes.repeatNum = `Você já tentou o número <span class="value-num">${currGuess}</span>.`;
    lang.outcomes.winNum = `Você adivinhou! O número era <span class="value-num">${randNum}</span>!`;
    lang.outcomes.loseNum = `Sem sorte, você não tem mais chances! O número era <span class="value-num">${randNum}</span>.`;
    lang.outcomes.wrongNum = `Tente novamente, <span class="value-num">${currGuess}</span> não é o número escolhido.`;
  };
};