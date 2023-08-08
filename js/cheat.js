// Enable cheat when "cheat" is typed IIFE
(function enableCheat() {
  document.addEventListener('keyup', function listen(ev) {
    if (ev.key === 'c') {
      document.removeEventListener('keyup', listen);
      document.addEventListener('keyup', function listen(ev) {
        if (ev.key === 'h') {
          document.removeEventListener('keyup', listen);
          document.addEventListener('keyup', function listen(ev) {
            if (ev.key === 'e') {
              document.removeEventListener('keyup', listen);
              document.addEventListener('keyup', function listen(ev) {
                if (ev.key === 'a') {
                  document.removeEventListener('keyup', listen);
                  document.addEventListener('keyup', function listen(ev) {
                    if (ev.key === 't') {
                      document.removeEventListener('keyup', listen);
                      if (isCheat) {
                        isCheat = false;
                      } else {
                        isCheat = true;
                      };
                      printCheat();
                      enableCheat();
                    } else {
                      return;
                    };
                  });
                } else {
                  return;
                };
              });
            } else {
              return;
            };
          });
        } else {
          return;
        };
      });
    } else {
      return;
    };
  });
})();
// Print random number on screen
function printCheat() {
  if (isCheat) {
    cheatText.textContent = randNum;
    cheatText.classList.remove('hidden');
  } else {
    cheatText.classList.add('hidden');
  };
};