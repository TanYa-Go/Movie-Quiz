const welcomeScreenRef = document.getElementById("welcome-screen");
const gameScreenRef = document.getElementById("game-screen");
const startGameRef = document.getElementById("start-btn");
const restartLevelButtonRef = document.getElementById("restart-level-btn");
const startOverButtonRef = document.getElementById("start-over-btn");
const chooseLevelRef = document.getElementById("drop");
const levelChoiceRef = document.getElementById("levelChoice");
const questionsContainerRef = document.getElementById("questions-container");
const questionRef = document.getElementById("question");
const musicOnRef = document.getElementById("musicOn");
const alertModalRef = document.getElementById("alertModal");
const alertModalTextRef = document.getElementById("alert-modal-text");
const alertModalCancelRef = document.getElementById("alert-modal-close");
const currentTimerTextRef = document.getElementById("current-timer-text");
const errorMessageRef = document.getElementById("error-message");
const dropdownsRef = document.getElementsByClassName("dropdown-content");
const answersRef = Array.from(document.getElementsByClassName("btn-answer"));
const backgroundMusic = new Audio("assets/music/background-music.mp3");
const CORRECT_BONUS = 10;
const DEFAULT_TIMER = 15;
let currentTimer;
let endTimerFlag = false;
let timerLength = null;
let difficultyLevel = null;
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
backgroundMusic.loop = true;

/**
 * Function to show difficulty level on button click 
 */
chooseLevelRef.addEventListener("click", function () {
  levelChoiceRef.classList.toggle("show");
});

/**
 * Close the dropdown menu if the user clicks outside of it
 */
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
  
       for (let i = 0; i < dropdownsRef.length; i++) {
      let openDropdown = dropdownsRef[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


/** 
 * Modal that shows warning if difficulty level is not chosen
 */ 
const customAlert = (message) => {
  // hidden = false
  $(alertModalRef).modal("show");
  alertModalTextRef.innerText = message;
};


/**
 * Fetch questions from API and set available questions variable
 * */
 const getQuestions = () => {
  return fetch(`https://opentdb.com/api.php?amount=10&category=11&difficulty=${difficultyLevel}&type=multiple`)
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
          formattedQuestion["choice" + (index + 1)] = choice;
        });

        return formattedQuestion;
      });
    })
    .catch((err) => {
       errorMessageRef.innerHTML = `Houston, We have a problem! Please refresh the page to try again.`;
      console.error(err);
  });
    
};

/** 
 * Shows modal if preffered difficulty is not chosen
 * Hides welcome screen and shows game screen
 * Gets questions from the API
 * Plays background music
 * */ 
const startGame = () => {
  if (difficultyLevel == null) {
    customAlert("Please choose difficulty level");
  } else {
    backgroundMusic.play();
    getQuestions().then((result) => {
      getNewQuestion();
      welcomeScreenRef.classList.add("hidden");
      gameScreenRef.classList.remove("hidden");
    });
  }
};
startGameRef.addEventListener("click", startGame);


const playPauseMusic = () => {
  musicOnRef.addEventListener("click", () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      musicOnRef.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
      backgroundMusic.pause();
      musicOnRef.innerHTML = `<i class="fas fa-play"></i>`;
    }
  }
  )};

  playPauseMusic();

const difficultyEventListeners = () => {
  // Event listeners for choosing difficulty option
  const difficultyOptions = Array.from(
    document.getElementsByClassName("difficulty-option")
  );

  // Button text changes when level is chosen 
  difficultyOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      difficultyLevel = e.currentTarget.dataset.value;
      levelChoiceRef.classList.toggle("show");
      chooseLevelRef.innerText = e.currentTarget.innerText.toUpperCase();
      // Setting different available time for each level
      if (difficultyLevel === "easy") {
        timerLength = DEFAULT_TIMER + 10;
      } else if (difficultyLevel === "medium") {
        timerLength = DEFAULT_TIMER + 5;
      } else if (difficultyLevel === "hard") {
        timerLength = DEFAULT_TIMER;
      }
    });
  });
  
};

/**
 * Returns the game to welcome screen
 * */
const startOverEventListeners = () => {
   startOverButtonRef.addEventListener("click", () => {
    window.location.reload();
  });
};

/**
 * Returns the game to question 1 of the same level
 * */

const restartEventListeners = () => {
   restartLevelButtonRef.addEventListener("click", (e) => {
    // Reset the score and questionCounter and get the first question again
    score = 0;
    questionCounter = 0;
    // Stop the timer
    endTimerFlag = true;

    setTimeout(function () {
      getNewQuestion();
      // Update the display of the question and score
      document.getElementById("question-count").innerText =
        questionCounter + "/" + availableQuestions.length;
      document.getElementById("score").innerText = score;
    }, 1000);
  });
};

const updateScore = () =>{
  score += CORRECT_BONUS;
};

/** Event listeners for selecting answers */
const answerChoicesEventListeners = () => {
   answersRef.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      if (!acceptingAnswers) {
        return false;
      }

      // Disable accepting answers
      acceptingAnswers = false;

      // Stop the timer
      endTimerFlag = true;
      const answerRef = e.currentTarget;
      const answerChoice = answerRef.dataset.number;
      const currentQuestion = availableQuestions[questionCounter - 1];
      let correctAnswerRef = null;
      if (currentQuestion.answer == answerChoice) {
        answerRef.classList.add("correct");
        // Update the score
        updateScore();
      } else {
        answerRef.classList.add("incorrect");
        // If the user selects the wrong answer, we want the correct answer to flash green
        correctAnswerRef = document.querySelectorAll(
          '.btn-answer[data-number="' + currentQuestion.answer + '"]'
        )[0];
        correctAnswerRef.classList.add("correct");
      }

      // Move to the next question after one second to allow the user to see if the answer was correct
      setTimeout(() => {
        // Reset the button coloring
        answerRef.classList.remove("incorrect");
        answerRef.classList.remove("correct");

        if (correctAnswerRef != null) {
          correctAnswerRef.classList.remove("correct");
        }
        getNewQuestion();

        // Update the question count and score on page
        document.getElementById("question-count").innerText =
          questionCounter + "/" + availableQuestions.length;
        document.getElementById("score").innerText = score;

        // Allow accepting answers again
        acceptingAnswers = true;
      }, 1000);
    });
    
     //Event handling for custom alert modal
        alertModalCancelRef.addEventListener("click", (e) => {
           $(alertModalRef).modal("hide");
    });
  });
};
  // Call functions to initialize event listeners
  answerChoicesEventListeners();
  difficultyEventListeners();
  restartEventListeners();
  startOverEventListeners();


const increaseQuestionCounter = () => {
  questionCounter += 1;
};

const updateQuestionText = (currentQuestion) => {
  questionRef.innerHTML = currentQuestion.question;
  // Adjust font size for the possible answers if the text it too long
  questionsContainerRef.classList.remove("smaller-text");
  questionsContainerRef.classList.remove("very-small-text");
  answersRef.forEach((choice) => {
    const number = choice.dataset.number;
    const answerString = currentQuestion["choice" + number];
    choice.innerHTML = answerString;

    if (answerString.length > 70) {
      questionsContainerRef.classList.add("very-small-text");
    } else if (answerString.length > 50) {
      questionsContainerRef.classList.add("smaller-text");
    }
  });
};
/**
 * Loads the next question from the available questions
 */ 
const getNewQuestion = () => {
  const currentQuestion = availableQuestions[questionCounter];
   // If there is no more questions, finish the quiz
  if (currentQuestion == null) {
    finishQuiz();
  } else {
    increaseQuestionCounter();
    updateQuestionText(currentQuestion);
    
  }

  restartTimer();
};


const restartTimer = () => {
  currentTimer = timerLength;
  endTimerFlag = false;
  timerCallback();
};

const timerCallback = () => {
  currentTimerTextRef.innerText = currentTimer;
  if (currentTimer == 0) {
      finishQuiz();
  } else if (endTimerFlag) {
       // The user has selected an answer and gotten to the next question
  } else {
    setTimeout(() => {
      currentTimer -= 1;
      timerCallback();
    }, 1000);
  }
};

/**
 * Finishing the quiz and going to the end page
 */
const finishQuiz = () => {
  localStorage.setItem("mostRecentScore", score);
   
  // go to the end page
  const endGamePath =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "/" +
    "end.html";
  return window.location.assign(endGamePath);
};
