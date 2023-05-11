'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkbtn = document.querySelector('.check');
let score = 5;
let highScore = 0;

// Utility functions
const dispMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

const dispScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const styleFormatter = function (bcolor, numWidth, numText) {
  document.querySelector('body').style.backgroundColor = bcolor;
  document.querySelector('.number').style.width = numWidth;
  document.querySelector('.number').textContent = numText;
};

checkbtn.addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    dispMsg('⛔ No number!');
  } else if (guessNumber < 0 || guessNumber > 20) {
    dispMsg('❌ Please enter a number between 1 and 20');
  } else if (secretNumber === guessNumber) {
    dispMsg('🎉 Correct Answer');
    styleFormatter('#60b347', '30rem', secretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      score--;
      dispMsg(
        guessNumber < secretNumber ? '📉 Guess higher' : '📈 Guess lower'
      );
      dispScore(score);
    } else {
      dispMsg('💥 You lost the game');
      dispScore(0);
      styleFormatter('#ac2120', '30rem', secretNumber);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  dispScore(score);
  dispMsg('Start guessing...');
  styleFormatter('#222', '15rem', '?');
  document.querySelector('.guess').value = '';
});
