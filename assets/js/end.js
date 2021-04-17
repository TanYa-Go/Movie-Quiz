/*const lowScoreSound = new Audio("assets/music/low-score.mp3");
const highScoreSound = new Audio("assets/music/high-score.mp3");


window.addEventListener('DOMContentLoaded', (event) => {
    if (score <= 50) {
        lowScoreSound.play();
    } else {
        highScoreSound.play();
    }
  });
  */




document.getElementById('score').innerText = localStorage.mostRecentScore;

const playAgainButtonRef = document.getElementById('play-again-btn');

playAgainButtonRef.addEventListener('click', (e) => {
const playAgainPath = window.location.protocol + "//" + window.location.host;
return window.location.assign(playAgainPath);

});

