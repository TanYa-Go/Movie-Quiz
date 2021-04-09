
const welcomeScreenRef = document.getElementById('welcome-screen');
const gameScreenRef = document.getElementById('game-screen');
const startGameRef = document.getElementById('start-btn');
const restartButtonRef = document.getElementById('restart-btn');
const questionsContainerRef = document.getElementById('questions-container');

//alert modal
const alertModalRef = document.getElementById('alert-modal');
const alertModalTextRef = document.getElementById('alert-modal-text');
const alertModalCancelRef = document.getElementById('alert-modal-cancel');


/* Function to show game screen and hide welcome screen on click */
startGameRef.addEventListener('click', function() {
  if (difficultyLevel == null) {
    customAlert("Please select a difficulty level.");
  }
  else {
    getQuestions().then((result) => {
      getNewQuestion();
      welcomeScreenRef.classList.add('hidden');
      gameScreenRef.classList.remove('hidden');
    });
  }
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

// difficulty level has to be chosen
let difficultyLevel = null;


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;


const difficultyEventListeners = () => {
  // Event listeners for difficulty option
  const difficultyOptions = Array.from(document.getElementsByClassName('difficulty-option'));
  difficultyOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
      difficultyLevel = e.currentTarget.dataset.value;
      levelChoiceRef.classList.toggle("show");
      chooseLevelRef.innerText = difficultyLevel.toUpperCase();
    });
  });

  // Event listeners for selecting answers

  answersRef.forEach((choice) => {
    choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) {
      return false;
    }

    // Disable accepting answers
    acceptingAnswers = false;
      const answerRef = e.currentTarget;
      const answerChoice = answerRef.dataset.number;
      const currentQuestion = availableQuestions[questionCounter - 1];
      let correctAnswerRef = null;

      if (currentQuestion.answer == answerChoice) {
        answerRef.classList.add('correct');

        // Update the score
        score += 10;
      }
      else {
        answerRef.classList.add('incorrect');
     // If the user selects the wrong answer, we want the correct answer to show as well
      correctAnswerRef = document.querySelectorAll('.btn-answer[data-number="' + currentQuestion.answer + '"]')[0]; 
      correctAnswerRef.classList.add('correct');
      }

      // Move to the next question after one second to allow the user to see if the answer was correct
      setTimeout(() => {
        // Reset the button coloring
        answerRef.classList.remove('incorrect');
        answerRef.classList.remove('correct');
        
        if (correctAnswerRef != null) {
       correctAnswerRef.classList.remove('correct');
        }
        getNewQuestion();

        // Update the question count and score on page
        document.getElementById('question-count').innerText = questionCounter + "/" + availableQuestions.length;
        document.getElementById('score').innerText = score;

         // Allow accepting answers again
      acceptingAnswers = true;
      }, 1000)
});
      // Event handling for custom alert modal
     alertModalCancelRef.addEventListener('click', (e) => {
     alertModalRef.hidden = true
  
    });
  });

    // Event handling for when "START OVER" is clicked
        restartButtonRef.addEventListener('click', (e) => {
        // Reset the score and questionCounter and get the first question again  
        score = 0;
        questionCounter = 0;
        getNewQuestion();

        // Update the display of the question and score
        document.getElementById('question-count').innerText = questionCounter + "/" + availableQuestions.length;
        document.getElementById('score').innerText = score;
    });

}
difficultyEventListeners();

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
      finishQuiz();
    }
    else {
      questionCounter += 1;
      questionRef.innerHTML = currentQuestion.question;

      questionsContainerRef.classList.remove('smaller-text');
      questionsContainerRef.classList.remove('very-small-text');
      answersRef.forEach((choice) => {
          const number = choice.dataset['number'];
          const answerString = currentQuestion['choice' + number];
          choice.innerHTML = answerString;

          if (answerString.length > 70) {
            questionsContainerRef.classList.add('very-small-text');
          }
          else if (answerString.length > 50) {
            questionsContainerRef.classList.add('smaller-text');
          }
      });
    }
};

const finishQuiz = () => {
  localStorage.setItem('mostRecentScore', score);
  // go to the end page
  return window.location.assign('/end.html');
};

const customAlert = (message) => {
  alertModalRef.hidden = false;
  alertModalTextRef.innerText = message;
}