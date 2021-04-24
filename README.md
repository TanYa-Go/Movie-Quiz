# **Movie Trivia Extravaganza**

![Mock Up Image](wireframes/mock-up.jpg)


## **Project Goals** 

The goal of this project was to create an app using HTML, CSS and JavaScript with a focus on JavaScript. 
I've decided to create a movie quiz using the questions from an API. The idea was to create a game that is fun to play and that  contains interesting movie trivia so user can learn something new while playing. 
<br></br>
 
Follow the link [Movie Trivia Extravaganza](https://tanya-go.github.io/Movie-Quiz/) to view the live project 


---

## Table of contents 
* [User Experience Design](#user-experience-design)
     * [The Strategy Plane](#the-strategy-plane)
         * [User Stories](#user-stories)
    * [The Scope Plane](#the-scope-plane)
         * [Existing Features](#existing-features)
        * [Features to be implemented](#features-to-be-implemented)
    * [The Structure Plane](#the-structure-plane)
    * [The Skeleton Plane](#the-skeleton-plane)
       * [Wireframes](#wireframes)
    * [The Surface Plane](#the-surface-plane)
      * [Design Choices](#design-choices)
          * [Typography](#typography)
          * [Colors](#colors)
* [Technologies used](#technologies-used)
    * [Languages](#languages)
    * [Libraries and Frameworks](#libraries-and-frameworks)
    * [Tools](#tools)
* [Testing](#testing)   
  * [Responsiveness](#responsiveness)
  * [Features Testing](#features-testing)
  * [Code Validation](#code-validation)
  * [User Stories Testing](#user-stories-testing)
  * [Bugs](#bugs)
* [Deployment](#deployment)
* [Credits](#credits)
* [Acknowledgments](#acknowledgments)




# **User Experience Design**

## **The Strategy Plane**
<a></a>

### **Site owners Goals**

* To have an appealing website where users want to go and play the game 
* For the users to have fun while playing 
* For the users to learn something new while playing 

### **User Goals**

* To understand the game easily and to have fun playing
* To be able to play the game on various devices, tablets, mobile phones and desktops
* To have the option to choose the level of difficulty 
* To find out the correct answer if they answer incorrectly
* To be able to track the score and see how many questions are left in the game
* To be able to see how much time I have to answer the question


<a></a>

### **User Stories**

* As a user, I want the website to be easy to use
* As a user, I want to be able to play the game on various devices
* As a user, I would like to know the rules before I start playing
* As a user, I would like to be able to choose the level of difficulty
* As a user, I would like to know which question I am on and how many questions are left
* As a user, I would like to know how much time I have to answer the question
* As a user, I would like to track my score while playing 
* As a user, I expect a variety of questions and no repeated questions
* As a user, I would like to know the correct answer when answered incorrectly
* As a user, I want to be able to restart the game if Im'm not happy with my answers

<a></a>

[Back to Top](#table-of-contents)

## **The Scope Plane**
## **Features**
<a></a>

### **User Requirements and Expectations**
<a></a>
#### Requirements

* Appealing homepage
* Easy to navigate by using only a few buttons
* Easy to select a difficulty level and start playing
* Validate the correct answer
* Keep the score while playing


<a></a>
#### Expectations

* When a certain difficutly level is chosen, that the correct questions appear
* Feedback given to the users what stage in the game they are and the total amount of questions
* Time is displayed so the user knows how much time they have to answer the question
* To let the user know if their answer was correct 
* To show correct answer when answered incorrectly
* To show the final result when game finishes

### **Existing Features**

* Use of [open Trivia API](https://opentdb.com/) to populate the questions
* Ability to choose preferred level of difficulty
* Instructions for the user on how to play the game
* Validation of answers
* Feedback when the answer was incorrect
* Tracker for the questions and score
* Countdown timer for each question


<a></a>
### **Features to be implemented**

* In the future releases I'd like to add an option so user can input their name and be displayed on the best players list 
* Future releases would have more questions per difficulty level and points will be deducted for the incorrect answer
* Contact form so user can submit their feedback and report possible bugs or suggest different solutions and ideas

[Back to Top](#table-of-contents)

<a></a>
## **The Structure Plane**
<a></a>

* **User Story**    
  >As a user, I want the website to be easy to use.

* **Description:**<br>
The website will contain clear instructions and will be intuitive for the user. There will be a title describing the game and the 
heading inviting the user to play. The buttons will have descriptive names so that the user can easily navigate the site even if 
visiting for the first time.


* **User Story**
  >As a user, I would like to know the rules before I start playing.

* **Description:**<br>
On the welcome screen there will be a button called **Rules** that will display the rules of the game when user clicks on it.

* **User Story**
  >As a user, I would like to be able to choose the level of difficulty.

* **Description:**<br>
On the welcome screen there will be a button that the user can click to choose their preffered difficulty level before they start playing.

* **User Story**
  > As a user, I would like to know which question I am on and how many questions are left.

* **Description:**<br>
  By reading the rules the user has already seen the information that each level has 10 questions. In case they did not read the rules,
  when the game starts, the current question number will be displayed on the screen, along with the maximum number of questions, 
  in the 1/10 format. This will update on each following question until they reach the end/score page.  

* **User Story**
  >As a user, I would like to know how much time I have to answer the question.

* **Description:**<br> 
Each level will have different amount of time available to select your answer. The **Easy** level will have 15 seconds, 
the **Normal** level will have 20 seconds and the **Hard** level will have 25 seconds. Timer will be clearly dispalyed on the screen so user can 
easily see how much time is left until the timer runs out.


* **User Story**
  >As a user, I would like to track my score while playing.
* **Description:**<br>
The score will be clearly displayed on the screen on each question so user can track their progress. When the game finishes the user will 
see their final score out of maximum 100 points. 


* **User Story**

  >As a user, I expect a variety of questions and no repeated questions.

* **Description:**<br>
Questions will be populated from an API that has lots of different questions available, so there won't be any repeat questions.


* **User Story**
  >As a user, I would like to know the correct answer when answered incorrectly.

* **Description:**<br>
When the user selects their answer, if the answer is correct, it will flash green. In case the answer is incorrect, it will flash red
 and the correct answer will flash green so the user will be able to see which answer was correct.   

* **User Story**
  >As a user, I want to be able to restart the game if I'm not happy with my answers.

* **Description:**<br>
There will be a button added on the screen under the questions, with an option to restart the game. The user can choose different 
diffculty level if they wish. There will also be an option for the user to restart the level they are on from the beggining,
 if they dont like their answers. 


[Back to Top](#table-of-contents)

# **The Skeleton Plane**

<a></a>

## **Wireframes**

Wireframes were created using [Balsamiq](https://balsamiq.com/wireframes/)

### **Home Page Wireframes**

[Home Page Desktop](wireframes/home-desktop.png)\
[Home Page Tablet](wireframes/home-tablet.png)\
[Home Page Mobile](wireframes/home-mobile.png)

### **Quiz Page Wireframes** 
[Quiz Page Desktop](/wireframes/quiz-desktop.png)\
[Quiz Page Tablet](/wireframes/quiz-tablet.png)\
[Quiz Page Mobile](/wireframes/quiz-mobile.png)
<br></br>

[Back to Top](#table-of-contents)

<a></a>
# **The Surface Plane** 
<a></a>
### **Design Choices**

The design was guided by the vintage movies and cinema look, inspired by the hero image. 

<a></a>
### **Typography**

Font **Oswald** was chosen for the title, the movie quote and the answer choices\
Font **Bungee Inline** was chosen for the question and the buttons\
**Sans Serif** is chosen as the fallback font in case the Google fonts do not load

<a></a>
### **Color Scheme**

Color palette was generated from the hero image using [Image Color Picker](https://imagecolorpicker.com/en)

![Color Palette](assets/images/color-palette.jpg)

**Red color** ![Red](assets/images/red.jpg) #d51e13  was used as the question container background image, to contrast the light color of the hero image and also for title and score

**Cream color** ![Cream](assets/images/cream.jpg) #f2d38c  was used for the questions and also for the background of the answer choices in contrast to the red


[Back to Top](#table-of-contents)

---


# **Technologies Used**
<a></a>

### Languages

1. [HTML](https://en.wikipedia.org/wiki/HTML#:~:text=Hypertext%20Markup%20Language%20(HTML)%20is,scripting%20languages%20such%20as%20JavaScript.)

1. [CSS](https://en.wikipedia.org/wiki/CSS)

1. [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Libraries and Frameworks

1. [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    
1. [Google Fonts](https://fonts.google.com/)
    
1. [Font Awesome](https://fontawesome.com/)

### Tools
    
1. [Open Trivia Database](https://opentdb.com/)
   
1. [Gitpod](https://www.gitpod.io/)
   
1. [Git](https://git-scm.com/)
    
1. [GitHub](https://github.com/)
    
1. [Balsamiq](https://balsamiq.com/)
   
1. [TinyPNG](https://tinypng.com/)
   
1. [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)

1. [Favicon Maker](https://favicon.io/)

1. [Autoprefixer](https://autoprefixer.github.io)
 

[Back to Top](#table-of-contents)

<br></br>

# **Testing**


## **Responsiveness**

### **Devices**
  * Firstly I was testing responsiveness with Google Chrome developer tools throught the project developement  
  * I then used the app called **Responsively** to double check how the app looks on different devices. I was able to choose many different devices and see the app in lanscape and portrait mode. The app in intended to be played in the portrait mode on portable devices. Landscape mode can be used, however the user needs to scroll up and down to play which contributes to a bad user experience and its not recommended.
  * I have also tested the app on the following actual devices: 
    * iPhone 6
    * iPhone 11
    * Samsung A40
    * Samsung A51
    * A1 Alpha 20+
    * Laptop Lenovo G780 17"
    * LG Screen 23"

### **Verdict** 
The app works as intened across all tested devices. For smaller devices portrait mode is recommended to play the game for better user experience.

### **Browsers**

I have tested the app in the following browsers
  * Chrome 
  * Opera 
  * Mozilla Firefox 
  * Microsoft Edge
  * Safari was tested on mobile phones only and wokrs as intended

### **Verdict**

The app displays properly in all tested browsers, the image is not distorted and all buttons and tekst are clearly visible

## **Features Testing**

**Buttons** - I have tested all the buttons by clicking them in different browsers and on different devices. All buttons work as intended and bring the user to the designated place.

**Modals** - There are two modals - one that displays the rules when the user clicks the **Rules** button and the other displays a warning when the user clicks **Play** without choosing the preffered difficutly level. 


Both modals work as intended and open when the respective button is clicked. Both modals properly close when the **Close** or **OK** button is clicked.   
 * Image for the **Rules** modal in user stories testing - How to play section. 
* Image for warning modal :
![Warning Modal](wireframes/testing/warning-modal.jpg)

**Music** - When the user clicks **Play** and the game starts, the background music will also start playing. The user had the option to pause the music by clicking the button underneath the quiz. The user can also play the music again by clicking the same button.
I have tested the **Play/Pause** button on different devices and browsers and it works as planned.

**End Score** 
  * **Quotes** - Depending on the user's score, different movie quote should appear on the screen. 
 * **Sound Effects** - Depending on the user's score, different sound effect should play

I have tested both by playing the game on different devices and browsers. I tried to reach different score to make sure everything is displaying correctly.    
Both, the qoutes and the sound effects work as intended.

**404 Page** - I have implemented the 404 page to make sure that user comes back to the home page if they encounter a problem. I have added a movie quote to match the game theme, the explanation that this page cannot be found and the button so its easy for user to return to the home page instead of leaving the page alltoghether.  
I've tested the page by inputting the nonexisting path at the end of the url and the page does appear.   
The button works as intended and takes the user back to the home page. 

![404 Page](wireframes/testing/404.jpg)

## **Code Validation**

* [HTML validator](https://validator.w3.org/) 

  - index.html - After validating code with the W3 validator, I got the response: Document checking completed. No errors or warnings to show.
  - end.html - After validating code with the W3 validator, I got two warnings about empty headings on line 37 and 38. These headings are being populated dynamically with javascript - displaying a different movie quote depending on the final score. 
  - 404.html - After validating code with the W3 validator, I got the response: Document checking completed. No errors or warnings to show.
  
* [CSS Validator](https://jigsaw.w3.org/css-validator/) - 
Passing without errors but giving warnings about vendor extensions and about imported stylesheets for Google fonts.

* [JSHint](jshint.com)\
 I've tested both javascript files with the jshint and received warnings about missing semicolons and unused or undefined variables. I also received warnings about arrow function, about declaring let and const variables which are available in ES6.\
 Once those were dealt with I received the following reports: 

  - app.js   
  ![app.js](wireframes/testing/jshint-appjs.jpg)
  - end.js\
   I have two warnings about async functions which are available in ES8
  ![end.js](wireframes/testing/jhint-endjs.jpg)

<p>&nbsp;</p>

[Back to Top](#table-of-contents)

## **User Stories Testing** 
<p>&nbsp;</p>


### **How to play**

#### As a user, I would like to know the rules before I start playing.

* **Plan**  
If a user doesn't know how to play the game, they should be able to click a **Rules** button to read the instructions. 

* **Implementation**  
On the welcome screen, I've added a **Rules** button that triggers a modal. 
When the modal opens you can see the steps on how to play the quiz. 
When you've read the instructions you can close the modal by clicking the **Got it!** button at the bottom or the **X** button at the top.


* **Test**  
I have tested the modal on various browsers and devices. 
 
   
* **Result**  
![Rules Modal image](wireframes/testing/rules-modal.jpg)
The modal opens after the **Rules** button is clicked.\
When clicking either button inside the modal, it closes and the user can start playing the game. 


* **Verdict**  
The modal works as intended and contributes to a better overall user experience.
Test had passed all criteria.
<br></br>

[Back to Top](#table-of-contents)

### **Choosing difficulty level**

#### User story:  As a user, I would like to be able to choose the level of difficulty before playing the game.

* **Plan**  
When the page is loaded, the user should have the option to choose the difficulty level they want to play - Easy, Normal or Hard.\
The user shouldn't be able to proceed if the difficutly level is not chosen.

* **Implementation**  
I created a dropdown **Difficult** button on the welcome screen that user can click and select their option. In javascript, I set the default difficulty level to null so the user has to choose the level before proceeding to play.

* **Test**  
I have tested whether the hover is working when you hover over each option.\
I have tried selecting different levels to make sure the correct level is being chosen.\
I have checked whether the questions from the selected level are being displayed.\
I have tried clicking **Play** without choosing the difficutly level.

    

* **Result**  
If you click **Play** without choosing the difficulty level, the warning modal will open to warn the user to choose preffered level.\
When you hover over each level option, the background color changes, so the hover is working. I have disabled hover on touch devices.\
When you select the level, the button text changes to that particular level name, so user can see what they've chosen.\
When you choose your level, you get the correct questions from the chosen difficulty level.

  ![Level Button image](wireframes/testing/level-button.jpg)
* **Verdict**    
The test has passed all the criteria and works as planned.

[Back to Top](#table-of-contents)
<br></br>

### **Question Counter**

#### User story: As a user, I would like to know which question I am on, and how many questions I have left.

* **Plan**\
When user starts the quiz they can clearly see what question they are on, out of how many questions.

* **Implementation**   
I've added the question counter above the question container so it is easy for user to see it. 
It is displayed in 1/10 format so user can quickly tell how many questions are left untill the end.

* **Test**  
When user answers the first question, the next question appears and the question counter increases by one. 
Once the user has answered all 10 questions, the end screen appears. 

* **Result**  
Question counter works as planned across various devices and browsers. 

* **Verdict**   
The test has passed all the criteria and works as planned.

<br></br>
[Back to Top](#table-of-contents)
<br></br>

### **Tracking the score**

#### User story: As a user, I would like to track my score during the game. 

* **Plan**  
The plan was to implement a field above the question, displaying the current user's score which increases when the user selects correct answer. Final result should be displayed on the end screen after completing the game. 

* **Implementation**  
I've added a score field to index.html and a function in app.js to increase the score by 10 points. When the game starts, the score is set to 0 and only when the answer was correct, the function **updateScore** is being executed. I have also added a field on the end page where the total score will be displayed. 

* **Test**  
I have tested this feature with all difficulty levels and across various browers and devices. 
Score is incremented correctly when answering correct and stays the same when the answer was wrong. 
Correct total score is being displayed on the end screen.

* **Result**  
Score display and total score is working as planned across various browsers and devices and increments when answer is correct. 

* **Verdict**   
The test has passed all the criteria and works as planned.

### **Restart Game** 

#### User story: As a user, I want to be able to restart the game.

* **Plan**  
The plan was to have a button on screen during the game on which player could click to start the game again. 
 
* **Implementation**   
First I implemented a **Restart** button that allowed user to return to the home page and choose a different level.
I've added an event listener in javascript that *listens* to the users' click and then triggers the function that reloads the page and return to the welcome screen.
After some feedback from friends and family  I've decided to implement another button, the one that will restart the current level. Event listener *listens* to the users click and then returns back to the first question on the same level.  

* **Test**    
I have tested both buttons on various devices and browsers


* **Result**  
Both buttons function properly, the **Restart Level** button return the user back to the first questions         
**Restart Game** button returns user to the home page so they can select different level if they wish to do so. 

* **Verdict**   
The test has passed all the criteria and function as intended.


## **Bugs**

* **Choosing difficulty level** - 
 The game is intended to be played in the portrait mode on mobile devices. Should the user wish to play in landscape mode, it is still possible, but they will need to scroll down to choose level and then scroll back up to play the game which is not user friendly. 
 
* **Question Counter** -
 On mobile screen size question 10/10 was overflowing its container and displaying underneath the rest of the row. To avoid that I have reduced font size for the tracking container 

* **Adding quotes from a local json file** - 
I have created json file with the movie quotes I wanted to display at the end, depending on the user's score.
The function works as intended, the quotes are being loaded, however the console throws the following error: "Uncaught SyntaxError: Unexpected token ':'".
I have validated the json file with two different online validators and the result of both was that the json file is valid. Please see images. I have also asked for advice from tutors on this issue and they were not able to find a solution.\
Game works as planned despite the error. 

  ![JSON Error](wireframes/testing/json-validator.jpg)

  ![JSON Error](wireframes/testing/json-validator-b.jpg)

* **Timer** -
There is an issue with the timer - If the user waits until 1 second is left on the timer to click the right answer, even if the question was correct and points given, the timer runs out and game finishes.    
This bug will be solved in future releases.

* **Highlighting correct answer after user choses their answer** - I wanted to add functionality to highlight the correct answer when the user selected an incorrect one.
I knew I had to select based on the data attribute, however my original solution kept throwing an error.
After more researching and testing through the browser console, I realized I needed quotes surrounding the value.

  Original code:
  ```
  correctAnswerRef = document.querySelectorAll('.btn-answer[data-number=' + currentQuestion.answer + ']')[0];
  ```
  Correct code:
  ```
  correctAnswerRef = document.querySelectorAll('.btn-answer[data-number="' + currentQuestion.answer + '"]')[0];
  ```

* **End page was not displaying on the deployed version** - When the user finishes the game, the end page should appear showing the result. However the end page was not displaying. After researching I realized that I need to implement the routing to point to that specific url path, using the following code:

  ```
  window.location.protocol + "//" +  window.location.host + window.location.pathname + "/" + "end.html";
  ```
   The same issue arouse for the **Play Again** button on the end page and was corrected by adding the specific url path.
  
[Back to Top](#table-of-contents)


<br></br>

# **Deployment**
### **Project Creation**

1. A local project was created in GitHub with a new repository called 'Movie Trivia'
1. During the creation of the project regular commits were added 
1. Commits were then pushed to the GitHub website before deployment

### **Using Github Pages**
1. Navigate to the GitHub [Repository](https://github.com/TanYa-Go/Movie-Quiz)
1. Click the 'Settings' Tab.
1. Scroll Down to the Git Hub Pages Heading.
1. Select 'Master Branch' as the source.
1. Click the Save button.
1. Click on the link to go to the live deployed page.

### **Run Locally**
1. Navigate to the GitHub [Repository](https://github.com/TanYa-Go/Movie-Quiz)
1. Click the Code drop down menu.
1. Either Download the ZIP file, unpackage locally and open with IDE (This route ends here) OR Copy Git URL from the HTTPS dialogue box.
1. Open your development editor of choice and open a terminal window in a directory of your choice.
1. Use the 'git clone' command in terminal followed by the copied git URL.
1. A clone of the project will be created locally on your machine.


[Back to Top](#table-of-contents)
<br></br>


# **Credits**

### **Images**

* Hero image was taken from [Pixabay](https://pixabay.com/illustrations/cinema-demolition-map-popcorn-3700545/)
* Favicon image was taken from [Pixabay](https://pixabay.com/illustrations/popcorn-cinema-caf%C3%A9-movie-4268489/)

### **Music**

* Backround music was taken from [Zapsplat](https://www.zapsplat.com/sound-effect-category/tv-show-and-themes/page/2/
)
* Sound effects for different score sounds were taken from [YouTube](https://www.youtube.com/watch?v=7DwPU-Vs2qI)

### **Code**

* Took inspiration from the [James Q Quick YouToube tutorial](https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

* Learned a lot doing the Javascript complete guide course with [Maximillian Schwarzmuller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/)

* Learned more about fetch from [John Linatoc](https://medium.com/@johnwadelinatoc/manipulating-the-dom-with-fetch-7bfddf9c526b)

* Borrowed idea for how to remove hover on touch devices from [Stefan Judis](https://www.stefanjudis.com/today-i-learned/the-hover-media-query-can-help-to-remove-hover-styles-on-touch/)

* Learned more about timers [here](https://www.tutorialrepublic.com/javascript-tutorial/javascript-timers.php)

* Learned about routing and relative URL paths on [Stack Overflow](https://stackoverflow.com/questions/1655065/redirecting-to-a-relative-url-in-javascript)


<br></br>
[Back to Top](#table-of-contents)


# **Acknowledgements**

I'd like to thank the best mentor I could wish for [Simen Daelin](https://github.com/Eventyret) for his guidance, advice, patience, as well as jokes and laughs, but most of all the encouragement to contiune and keep pushing when I thought it was impossible. I am so lucky and grateful to have his support on my coding journey. 