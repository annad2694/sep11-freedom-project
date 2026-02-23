# Plan

## Tool: Kaboom
## Product: Simon Says Memory Game
## Responsibilities: Anna (all responsibilities resign to me)
## Wireframes
* [Mobile]() + [Desktop]() : Four buttons that cover the screen suit to fit each wireframe. 

## Colors
* Background: #141414
* Red button: #FF4C4C
* Green button: #4CFF4C
* Blue button: #4C4CFF
* Yellow button: #FFFF4C
* Flash highlight: #FFFFFF

## Fonts
* [Roboto](https://fonts.google.com/specimen/Roboto) 
* [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)

## Timeline

#### MVP
<b>Front End (what the player sees)</b>
* Establish a dark background with a centered layout. (3/1)
* Make four colored rectangular buttons (red, blue, green, yellow). (3/5)
* User clicks buttons and that button turns white (flash) for a second, so the user knows that the computer accepted their input. (3/10)
* On screen text "Correct" or "Incorrect" after input. (3/15)

<b>Back End (Tool+JS)</b>
* After initilizing Kaboom with the background (first step), use `rect()`, `pos()`, `colorize()`, and `anchor()` to create and make the buttons look neat. (3/1)
* Code using Kaboom to detect user's input on each of the buttons. Such as `area()` and `onClick()`. (3/5)
* Use `wait()` to make it less messy to insert the time to about 1 second for the button flashes or else animations will be out of order. (3/15)
* Use an array and `choose()` to create the randomly generated pattern and to restart the round after the click. (3/20)

---

#### Beyond MVP

* Instead of one continous round, increase the sequence each round to make it more challanging.
* Make it so that when the user gets the sequence incorrect that they must redo the simulation all over again (use `scene()`) & show message when sequence is wrong.
* Maybe add a level or score system to display current winnings.
* If possible add sound effects to match the dictations of the game.








<!-- DO NOT USE THIS YET

| Name | Glows | Grows |
| -------- | ------- | ------- |
|   |   |
|   |   |
|   |   |
|   |   |
|   |   |
|   |   |

-->
