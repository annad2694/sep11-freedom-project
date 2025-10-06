# Tool Learning Log

## Tool: **Kaboom**

---

### 10/5/25:
### Basics of Kaboom
<p>At first, I had no idea what my Freedom Project was going to be about until Eva suggested that her Freedom Project would be something like a memory game. I honestly thought it was genius and wanted to do something similar. When you think of a memory game, you usually think of matching cards together, but I wanted to do something a little more complex. I wanted to do a <i>Simon Says Memory Game</i> where you have to remember the pattern and follow it only if Simon says to. Obviously, this is the general plan; I may add in a few twists, but collectively I plan to use the game engine—Kaboom—to build the game.</p>

#### Background
<p>Essentially, I have a plan for what I want to create; however, for this week I just wanted to experiment with Kaboom to see how I could set up the setting of my game. After following all the steps on the website to get it to work, the first step was to use the kaboom() function to change the background color to make the canvas look different for my game.</p>

```js
// background color
kaboom({
    background: [20, 20, 30]
});
```

<p>I customized it to be a dark grayish color because I felt it would fit nicely with my game. I also experimented and tinkered with everything on cs50.dev.</p>

### Button

<p>After I was done with the background, I went back to the Kaboom website because I knew I wanted to code a sort of button. However, I forgot how to code a circle, so the button is now rectangular. It’s basically the same as what we learned a year ago, plus what we learned a week ago about using const in JS to make sure the variable is constant. I also set the position of the button on the screen using what I remembered from my first year of coding in freshman year, and then I set the button to red. I plan to make three more buttons with different colors to better complete my game.</p>

```js
// creation of a red button
const redButton = add([
    rect(100, 100),
    pos(200, 150)
]);
redButton.color = rgb(255, 0, 0);
```
#### Text
<p>Finally, I wanted to test out text — but not just text; I wanted to see if I could make it disappear after a certain amount of time. You know how a game might say “Game Over” and then the text disappears after a moment? I wanted to experiment with that. Therefore, I tested showing text on the screen and making it disappear after a short time.</p>

```js
// message
let message = add([
    text("Simon says click!"),
    pos(200, 50)
]);

// remove after 1 second
wait(1, () => destroy(message));
```

<p>So I used the let variable — <b>which is subject to change</b> — to store a message that said something like "Simon says click!" positioned at the top of the screen. After searching online, I found out that you can remove the message using the destroy() function and wait() for one second before it disappears after a certain activity the user will enact.</p>

<p>I haven’t gotten that far yet, but this is what I have tinkered with and learned in the past few days, and I look forward to learning more.</p>

### X/X/XX:
* Text


<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
