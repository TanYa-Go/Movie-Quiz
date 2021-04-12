# **Movies Quiz**



## **Project Goals** 

Goal of this project was to create an app using HTML, CSS and JavaScript, focusing on JavaScript. 
I've deciced to create a movie quiz using an API. Idea for the project is to create a quiz that is fun 
to play and also contains interesting movie trivia so user can learn something new while playing. 
 



---
<a></a>
## Table of contents 
* [UX](#ux)
    * [User Goals](#user-goals)
    * [User Stories](#user-stories)
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
        * [Requirements](#requirements)
        * [Expectations](#expectations)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Colors](#colors)
        * [Structure](#structure)
* [Wireframes](#wireframes)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Features to be implemented](#features-to-be-implemented)
* [Technologies used](#technologies-used)
    * [Languages](#languages)
    * [Libraries and Frameworks](#libraries-and-frameworks)
    * [Tools](#tools)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)



<a name="ux"></a>
## **UX**
<a></a>
### **User Goals**

* The game has to be responsive on various devices like tablets, mobile phones and desktops
* To have the option to choose the level of difficulty the user would like to play
* Feedback when wrong answer was chosen
* To be able to track the score and see how many questions are left in the game
* To be able to see how much time is left to answer the question


[Back to Top](#table-of-contents)

<a></a>

### **User Stories**

* As a user, I want the website to be easy to use.
* As a user, I would like to know the rules before I start playing.
* As a user, I would like to be able to chose the level of difficulty.
* As a user, I would like to know which question I am on and how many questions are left.
* As a user, I would like to kow how much time I have to answer the question.
* As a user, I would like to track my score while playing. 
* As a user, I expect a variety of questions and no repeated questions.
* As a user, I would like to know the correct answer when answered incorrectly.
* As a user, I want to be able to restart the game if I don't like my answers.

<a></a>

### **Site owners Goals**

* To have an appealing website where users want to go to play 
* For the users to have fun while playing 
* For the users to learn something while playing 


[Back to Top](#table-of-contents)

<a></a>
### **User Requirements and Expectations**
<a></a>
#### Requirements

* Appealing homepage
* Easy to navigate by using only a few buttons
* Easy to pick difficulty level and start playing
* Validate the correct answer
* Keep the score of the user playing


<a></a>
#### Expectations

* When a certain level is chosen, that the correct questions appear
* Feedback to the users where in the game they are and total amount of questions
* Time is displayed so user knowes how much time they have left to answer the question
* To let the user know if their answer was correct 
* Show correct answer when answered incorrectly
* To show the final result after playing
* Show a message after completing the game - message is different depending on the results




[Back to Top](#table-of-contents)

<a></a>
### **Design Choices**

The design was guided by a vintage movies and cinema look, inspired by the hero image. 


<a></a>
#### Fonts

Font **Oswald** was chosen for the title, the movie quote and the answer choices\
Font **Bungee Inline** was chosen for the question and the buttons\
**Sans Serif** is chosen as the fallback font in case the Google fonts do not load

<a></a>
#### Colors

Color palette was generated from the hero image using [Image Color Picker](https://imagecolorpicker.com/en)

![Color Palette](/assets/images/color-palette.JPG)

![Red](/assets/images/red.JPG) #d51e13 Red color was used as a background for the question container, to contrast the light color of the hero image and also for title

![Cream](/assets/images/cream.JPG) #f2d38c Cream color was used for the questions and also for the background of the answer choices as contrast to the red


<a></a>

#### Structure


[Back to Top](#table-of-contents)

--- 
<a></a>

## **Wireframes**

Wireframes were created using the wireframing tool [Balsamiq](https://balsamiq.com/wireframes/)

### Home Page Wireframes

[Home Page](wireframes/home-page.pdf)



### Quiz Page Wireframes
[Quiz Page](wireframes/quiz-page.pdf)




[Back to Top](#table-of-contents)

---

<a></a>
## **Features**
<a></a>
### **Existing Features**

* Use of [open Trivia API](https://opentdb.com/) to populate the questions
* Ability to choose preferred level of difficulty
* Instructions for user on how to play the game
* Validation of answers
* Feedback when answer was incorrect
* Tracker for the questions and score
* Countdown timer for each question


<a></a>
### **Features to be implemented**



[Back to Top](#table-of-contents)

<a></a>

## **Technologies used**
<a></a>

### Languages

1. [HTML](https://en.wikipedia.org/wiki/HTML#:~:text=Hypertext%20Markup%20Language%20(HTML)%20is,scripting%20languages%20such%20as%20JavaScript.)

1. [CSS](https://en.wikipedia.org/wiki/CSS)

1. [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Libraries and Frameworks

1. [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    
1. [Google Fonts:](https://fonts.google.com/)
    
1. [Font Awesome:](https://fontawesome.com/)

### Tools
    
1. [Open Trivia Database](https://opentdb.com/)
   
1. [Gitpod](https://www.gitpod.io/)
   
1. [Git](https://git-scm.com/)
    
1. [GitHub:](https://github.com/)
    
1. [Balsamiq:](https://balsamiq.com/)
   
1. [TinyPNG](https://tinypng.com/)
   
1. [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
 

[Back to Top](#table-of-contents)

<a></a>

## **Testing**

### **How to play**

#### As a user, I would like to know the rules before I start playing.

* **Plan**  
If a user doesn't know how to play the game, they should be able to click a 'How to Play' button to read the instructions. 

* **Implementation**  
On the welcome screen I've added a 'How to Play' button that triggers a modal. 
When the modal opens you can see the steps on how to play the quiz. 
When you've read the instructions you can close the modal by clicking the "Got it!" button at the bottom or the "X" button at the top.
When clicking either button, the modal closes and the user can start playing the game. 

* **Test**  
I have tested the modal on various browsers and devices. 
 

* **Result**  
The modal works as planned and contributes to a better overall user experience.

* **Verdict**  
The test has passed all the criteria and works as planned.



[Back to Top](#table-of-contents)

## **Bugs**









[Back to Top](#table-of-contents)

<a></a>

## **Deployment**
### Project Creation

1. A local project was created in GitHub with a new repository called 'Movie Quiz'
1. During the creation of the project regular commits were added 
1. Commits were then pushed to the GitHub website before deployment

### Using Github Pages
1. Navigate to the GitHub [Repository](https://github.com/TanYa-Go/Movie-Quiz)
1. Click the 'Settings' Tab.
1. Scroll Down to the Git Hub Pages Heading.
1. Select 'Master Branch' as the source.
1. Click the Save button.
1. Click on the link to go to the live deployed page.

### Run Locally
1. Navigate to the GitHub [Repository](https://github.com/TanYa-Go/Movie-Quiz)
1. Click the Code drop down menu.
1. Either Download the ZIP file, unpackage locally and open with IDE (This route ends here) OR Copy Git URL from the HTTPS dialogue box.
1. Open your developement editor of choice and open a terminal window in a directory of your choice.
1. Use the 'git clone' command in terminal followed by the copied git URL.
1. A clone of the project will be created locally on your machine.


[Back to Top](#table-of-contents)

<a></a>

## **Credits**

### Images 

Hero image borrowed from [Pixabay](https://pixabay.com/illustrations/cinema-demolition-map-popcorn-3700545/)


### Code

Took inspiration from the [James Q Quick YouToube tutorial](https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

Learned more about fetch from [John Linatoc](https://medium.com/@johnwadelinatoc/manipulating-the-dom-with-fetch-7bfddf9c526b)

Borrowed idea for how to remove hover on touch devices from [Stefan Judis](https://www.stefanjudis.com/today-i-learned/the-hover-media-query-can-help-to-remove-hover-styles-on-touch/)