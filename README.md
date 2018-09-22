# Rememorizer
This application utilizes html, css, react, javascript, and jsx to allow for users to play a memory clicking game with images from some of Jim Carrey's iconic movies.

## Application Overview
![Live App](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/remem.gif)

Static-sized images populate the page initially in a fixed order. A navbar sticks to the top of the page and displays relevant info such as correct guesses, current score, and the high score.
![Onload](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rememinit.PNG)

### React
Components are used to break up the web page into it's smallest parts.

One future endeavor would be to further shrink Score into it's three separate pieces of "message", "current Score", and "High Score".

![Component View](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rememComp.PNG)

### Clicking on Images
The only way for the user to interact with the main web page is to click on the images. This causes one of two things to occur:

#### 1. Successful Guess
When an image is clicked that hasn't been clicked before, the score increments.
![Score](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rememincnh.PNG)

If the new score is the high score, that value on the page is also updated through props.

![High Score]([https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rememscore.PNG)

#### 2. Unsuccessful Guess
When an image is clicked that *has* already been clicked before, the score resets.

![Lose](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rememlose.PNG)

### Post-Click
Whether the click was successful or not, the cards of Jim Carrey on the page are then shuffled around.
![Shuffle Function](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rememshuff.PNG)