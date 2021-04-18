
const lowScoreSound = new Audio("assets/music/low-score.mp3");
const midScoreSound = new Audio("assets/music/mid-score.mp3")
const highScoreSound = new Audio("assets/music/high-score.mp3");
const scoreRef = document.getElementById("score");
const playAgainButtonRef = document.getElementById("play-again-btn");

let endScore = scoreRef.innerText = localStorage.mostRecentScore;

window.addEventListener("DOMContentLoaded", () => {
      if (endScore <= 40) {
    lowScoreSound.play();
 } else if (endScore <=70) {
    midScoreSound.play();
 } else {
   highScoreSound.play();
}



playAgainButtonRef.addEventListener("click", (e) => {
const playAgainPath = window.location.protocol + "//" + window.location.host;
return window.location.assign(playAgainPath);


});
});