
const loserScoreSound = new Audio("assets/music/loser-score.mp3");
const lowScoreSound = new Audio("assets/music/low-score.mp3");
const midScoreSound = new Audio("assets/music/mid-score.mp3");
const highScoreSound = new Audio("assets/music/high-score.mp3");
const scoreRef = document.getElementById("score");
const playAgainButtonRef = document.getElementById("play-again-btn");
const movieQuoteRef = document.getElementById("movie-quote");
const movieTitleRef = document.getElementById("movie-title");
let endScore = scoreRef.innerText = localStorage.mostRecentScore;
let quotesArray = [];



async function getData() {
   const response = await fetch("movieQuotes.json");
      //.then(res => {
      console.log(response);
      const loadedQuotes = await response.json();
      console.log(loadedQuotes);
   //}).then(loadedQuotes => {
      quotesArray = quotesArray.concat(loadedQuotes.movieQuotes);
      console.log(quotesArray[2].quote);
   //});
}
   window.addEventListener("DOMContentLoaded", async ()=> {
      await getData();      
      if (endScore <= 20) {
         console.log(quotesArray);
         movieQuoteRef.innerHTML = quotesArray[0].quote;
         movieTitleRef.innerHTML = quotesArray[0].movie;
         loserScoreSound.play();
      } else if (endScore <= 40) {
         console.log(quotesArray);
         movieQuoteRef.innerHTML = quotesArray[1].quote;
         movieTitleRef.innerHTML = quotesArray[1].movie;
         lowScoreSound.play();
      } else if (endScore <=70) {
         console.log(quotesArray);
         movieQuoteRef.innerHTML = quotesArray[2].quote;
         movieTitleRef.innerHTML = quotesArray[2].movie;
         midScoreSound.play();
      } else {
         console.log(quotesArray);
         movieQuoteRef.innerHTML = quotesArray[3].quote;
         movieTitleRef.innerHTML = quotesArray[3].movie;
         highScoreSound.play();
      }
   });


   




   playAgainButtonRef.addEventListener("click", (e) => {
         let playAgainPath = window.location.protocol + "//" + window.location.host + window.location.pathname;
      playAgainPath = playAgainPath.replace('/end.html', '');
      return window.location.assign(playAgainPath);
   });


