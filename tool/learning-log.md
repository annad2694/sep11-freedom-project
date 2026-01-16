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

### 10/12/25:

### Tinkering and Tying Things Together

<p>This week, I spent most of my time just tinkering around with Kaboom and trying to really understand how each part of my code connects. I feel like I’ve built the main idea of the Simon Says Memory Game, but I wanted to go deeper into how everything actually works behind the scenes — not just copying and pasting. I started looking more closely at the JavaScript logic, especially how arrays, loops, and functions interact in my game. </p>
<p>For example, I have the <b>pattern</b> array that stores which colors the player needs to remember, and I realized that every time the player gets it right, the array grows. That made me think about how JavaScript updates data while the game is running, which is something I hadn’t really paid attention to before. I also experimented with timing. In Kaboom, you use <code>wait()</code> to delay actions, but I wanted to understand how that worked compared to using JavaScript’s <code>setTimeout()</code>. So, I tested both out to see how the game would behave. I learned that <code>wait()</code> is built into Kaboom’s system, which made it easier to sync with the visuals, while <code>setTimeout()</code> felt a bit off since it’s not part of the game loop. That helped me understand why game engines sometimes have their own built-in versions of things that already exist in JavaScript.</p>

```js
wait(1, () => showMessage("Simon says click!"));
setTimeout(() => showMessage("appear later"), 1000);
```

When I tried this out, I noticed <code>wait()</code> lined up perfectly with the flashing buttons, but <code>setTimeout()</code> sometimes ran at weird moments. Seeing that happen helped me figure out why Kaboom handles timing differently from normal JavaScript — it’s designed to match the frame updates of the game. </p>
<p>Another thing I figured out was how to make my message pop up and disappear at the right time. Before, I was just destroying the text right away, but now I learned how to control it better by using <code>if</code> statements and resetting variables. It’s honestly small stuff, but each time I mess with one piece, I understand the overall structure a little more. I think this is the fun part — when you start connecting random bits of JavaScript knowledge you’ve had for a while to something visual and interactive. I’m still far from the final version, but now it feels like I’m shaping the logic of the game, not just designing it.</p>

### 10/19/25:

### Applying some classroom knowledge...

<p>Recently in class we have been learning about <u>functions and arrays</u> and I wanted to see if I could apply them to this project. The last two week I have been setting up the basics of the game, but there are some potential errors that could run that I talked about last time -- such as timing. However, another problem I have discovered that could appear in my game is if Simon says even remembers the color order. I want my Simon says game to make the user remember a sequence and each round it gets longer so the computer will have to remember and generate a longer one each time. </p>
    <p>Now using what I learned in class I can make a quick demo:</p>

```js
const buttonColors = ["red", "blue", "green", "yellow"];
let simonPattern = [];

function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomNum];
  simonPattern.push(randomColor);
}
```
<p>Obviously I can adjust the colors or the amount of them but this is a simple demo even using Math.floor to make sure I get a whole number not a decimal. Because Math.random can be any number so when I apply Math.floor to it, it will make it a even interger that cannot be negative. So whenw e push we add a new certain step to the Simon pattern sequence so it can keep going, and then probably I can use Kaboom to recgonize when the user gets it wrong, and restart the game. </p>

### 1/16/25:
#### Button Creation & Placement

I wanted to work more on the format. My idea was I wanted a button on the four corners of my screen.. I used Kaboom's `pos()` function to place it where I want. To make it a <b>red button</b>, I used `rgb(255, 0, 0)` for the color:

```js
const redButton = add([
    rect(100, 50),        // Size 
    pos(150, 200),        // Position 
]);

redButton.color = rgb(255, 0, 0);  // red
```
I placed it at `pos(150, 200)` because I wanted it roughly centered, but I made adjustments to get the right look on my screen.

#### Text Placement

I also added text at the top of the screen with a simple message. The text is placed using pos() for positioning:

```js
let message = add([
    text("Simon says click!"),  // The message
    pos(200, 50)                // Position it near the top center
]);

wait(1, () => destroy(message));  // Destroy the message after 1 second
```
I placed the message at `pos(200, 50)` because I wanted it near the top but still visible. It disappears after <b>1</b> second using wait().

