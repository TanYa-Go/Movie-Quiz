document.getElementById('score').innerText = localStorage.mostRecentScore;

const playAgainButtonRef = document.getElementById('play-again-btn');

playAgainButtonRef.addEventListener('click', (e) => {
   return window.location.assign('/index.html');

});