const welcomeScreenRef = document.getElementById('welcome-screen');
const gameScreenRef = document.getElementById('game-screen');
const startButtonRef = document.getElementById('start-btn');

startButtonRef.addEventListener('click', function() {
  welcomeScreenRef.classList.add('hidden');
  gameScreenRef.classList.remove('hidden');
});

