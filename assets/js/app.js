const welcomeScreenRef = document.getElementById('welcome-screen');
const gameScreenRef = document.getElementById('game-screen');
const startGameRef = document.getElementById('start-btn');

startGameRef.addEventListener('click', function() {
  welcomeScreenRef.classList.add('hidden');
  gameScreenRef.classList.remove('hidden');
});

