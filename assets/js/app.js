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
const levelChoiceRef = document.getElementById('levelChoice');

chooseLevelRef.addEventListener('click', function (){
 levelChoiceRef.classList.toggle("show");
});

const questionRef = document.getElementById('question');
const answersRef = Array.from(document.getElementsByClassName('btn-answer'));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

 
fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE NOT OK");
        }
    })
    .then(function (data) {
        console.log(data);
        displayQuestions(data);
    })
    .catch((error) => {
        console.error("FETCH ERROR:", error);
    });

// Function thay displays questions on the DOM
function displayQuestions(data) {
    const questions = data.results;
    const questionRef = document.getElementById('question');

    questions.forEach(questions => {
       const formattedQuestion = questionRef.innerHTML = questions.question
    })

}
