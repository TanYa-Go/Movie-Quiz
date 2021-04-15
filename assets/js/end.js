document.getElementById('score').innerText = localStorage.mostRecentScore;

const playAgainButtonRef = document.getElementById('play-again-btn');

playAgainButtonRef.addEventListener('click', (e) => {
const playAgainPath = window.location.protocol + "//" + window.location.host;
return window.location.assign(playAgainPath);

});

