const welcomeScreenRef = document.getElementById('welcome-screen');
const gameScreenRef = document.getElementById('game-screen');
const startGameRef = document.getElementById('start-btn');

/* Function to show game screen and hide welcome screen on click */
startGameRef.addEventListener('click', function() {
  welcomeScreenRef.classList.add('hidden');
  gameScreenRef.classList.remove('hidden');
});

/* Function to show difficulty level on button click */
const dropdownsRef = document.getElementsByClassName("dropdown-content");
const chooseLevelRef = document.getElementById ('drop');
const levelChoice = document.getElementById('levelChoice');

chooseLevelRef.addEventListener('click', function (){
 levelChoice.classList.toggle("show");
})