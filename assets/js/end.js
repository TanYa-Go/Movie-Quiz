
const loserScoreSound = new Audio("assets/music/loser-score.mp3");
const lowScoreSound = new Audio("assets/music/low-score.mp3");
const midScoreSound = new Audio("assets/music/mid-score.mp3");
const highScoreSound = new Audio("assets/music/high-score.mp3");
const scoreRef = document.getElementById("end-score");
const playAgainButtonRef = document.getElementById("play-again-btn");
const movieQuoteRef = document.getElementById("movie-quote-end");
const movieTitleRef = document.getElementById("movie-title");
let endScore = scoreRef.innerText = localStorage.mostRecentScore;
let quotesArray = [];


/**
 * Fectch the data from the local json file
 * 
 */
async function getData() {
   const response = await fetch("assets/data/movieQuotes.json");
      const loadedQuotes = await response.json();
      quotesArray = quotesArray.concat(loadedQuotes.movieQuotes);
}
/** 
 * Gives time for fetch to occur
 */
   window.addEventListener("DOMContentLoaded", async ()=> {
      await getData();      
      if (endScore <= 20) {
         movieQuoteRef.innerHTML = quotesArray[0].quote;
         movieTitleRef.innerHTML = quotesArray[0].movie;
         loserScoreSound.play();
      } else if (endScore <= 40) {
         movieQuoteRef.innerHTML = quotesArray[1].quote;
         movieTitleRef.innerHTML = quotesArray[1].movie;
         lowScoreSound.play();
      } else if (endScore <=70) {
         movieQuoteRef.innerHTML = quotesArray[2].quote;
         movieTitleRef.innerHTML = quotesArray[2].movie;
         midScoreSound.play();
      } else {
         movieQuoteRef.innerHTML = quotesArray[3].quote;
         movieTitleRef.innerHTML = quotesArray[3].movie;
         highScoreSound.play();
      }
   });



 /**
  * Routing to the index page by clicking Play again button
  */
   playAgainButtonRef.addEventListener("click", (e) => {
         let playAgainPath = window.location.protocol + "//" + window.location.host + window.location.pathname;
      playAgainPath = playAgainPath.replace('/end.html', '');
      return window.location.assign(playAgainPath);
   });


