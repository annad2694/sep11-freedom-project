# Entry 3
##### 2/9/26

### Content
<p>Since the winter break I have been working on putting together the pieces of my Simon Says game. I still haven’t fully coded the game at this point in time, but have been playing around with key elements to see how they fit together. Also I used AI to look at new options  not to copy or cheat but to put forth different ideas and to see what I may be missing.</p>

When I tried this out of the by myself, I saw that the red rectangle was producing the console message which in turn gave me an idea as to how the clickable buttons worked. I had found the idea that `area()` from the Kaboom.js documentation
 under “Area / Collisions,” was a key component in my game as it enables each colored button to react to the player’s clicks. I also found out from AI that I could use `anchor("center")` for better looking positioning and `colorize()` to change the button’s color at will. I put that into practice and my attempt at the code came out much more clean and easier to read, which made it more pleasent to comment.
 ```js
 const redButton = add([
    rect(100, 100), //rectangle made
    colorize(255, 0, 0), //button's color
    area(), // makes the button clickable
]);

redButton.onClick(() => { // when the user clicks action will preform
    console.log("red button clicked");
});
```

I tried out a sequence of button flashes with `async/await`, that I learned from the Web Dev Simplified’s Simon Game tutorial.

In the video it is said that use of an `async` function is a big part in game development as it allows the program to pause between actions. Also he goes over the `playPattern()` function and a simple `for` loop which in turn display the buttons one at a time in the right order. He also brought up a method which uses callbacks for the alternative but he reports that `async/await` does better for larger sequences. I tried out a more basic version:.

```js
async function thePattern(sequence) {
    for (let i = 0; i < sequence.length; i++) {
        console.log("Flash:", sequence[i]); // show the current color
        await wait(0.5); // pauses for 0.5 sec before rerun loop
    }
}

thePattern(["green", "yellow", "blue"]);
```

From what I could tell the `for` loop goes through each item in the sequence and the `await` makes each `button` “flash” happen in order instead of at the same time. Although I didn’t implement the actual flashing yet, I can see how this will play out when I integrate it with my clickable buttons using `area()`.

To be sure I didn't miss anything else I put out there, I went to AI for input suggestions on what features I may have left out which it did suggest to use `lifespan()` for which is to put in temporary messages like "Correct!" or "Wrong!" which is a nice to  have, it really adds another level of interactivity to the game. Later on, I looked over the Kaboom docs, and it mentioned how `lifespan()` removes objects after a <b>set</b> time. So, I decided to apply that to my second attemp, just a little more simpler.

```js
add([
    text("Correct", { size: 26 }),
    anchor("center"), //aligns to center
    lifespan(1) // makes text dissapear after one sec
]);
```
<p>This improved the readability of the code and I added notes that overall clearly explain what each part does which in turn will help me as I develop the MVP soon.</p>

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
