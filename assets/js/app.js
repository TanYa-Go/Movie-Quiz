const welcomeScreenRef = document.getElementById('welcome-screen');
const gameScreenRef = document.getElementById('game-screen');
const startGameRef = document.getElementById('start-btn');

/* Function to show game screen and hide welcome screen on click */
startGameRef.addEventListener('click', function() {
  getQuestions().then((result) => {
    getNewQuestion();
    welcomeScreenRef.classList.add('hidden');
    gameScreenRef.classList.remove('hidden');
  });
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
console.log(answersRef);

// default easy difficulty
let difficultyLevel = 'easy';


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;


const initializeEventListeners = () => {
  // Event listeners for difficulty option
  const difficultyOptions = Array.from(document.getElementsByClassName('difficulty-option'));
  difficultyOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
      difficultyLevel = e.currentTarget.dataset.value;
      levelChoiceRef.classList.toggle("show");
    });
  });

  // Event listeners for selecting answers
  answersRef.forEach((choice) => {
    choice.addEventListener('click', (e) => {
      const answerChoice = e.currentTarget.dataset.number;
        const currentQuestion = availableQuestions[questionCounter - 1];
      if (currentQuestion.answer == answerChoice) {
        alert("correct answer!");
      }
      else {
        alert("incorrect answer!");
      }
    });
  });
}

initializeEventListeners();

// Fetch questions from API and set available questions variable
const getQuestions = () => {
  return (
    fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=" + difficultyLevel + "&type=multiple")
    .then((res) => {
      return res.json();
    })
    .then((loadedQuestions) => {
      availableQuestions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });
    })
    .catch((err) => {
        console.error(err);
    })
  );
}


const getNewQuestion = () => {
    const currentQuestion = availableQuestions[questionCounter];

    if (currentQuestion == null) {
      
    }
    else {
      questionCounter += 1;
      questionRef.innerHTML = currentQuestion.question;

      answersRef.forEach((choice) => {
          const number = choice.dataset['number'];
          choice.innerHTML = currentQuestion['choice' + number];
      });
    }
};