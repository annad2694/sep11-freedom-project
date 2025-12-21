# Entry 2
##### 12/15/25

### Content

Over the past two weeks, I have been learning my tool in a lot of different ways. I actually found a <a href="https://www.youtube.com/watch?v=n_ec3eowFLQ">video</a> on YouTube demonstrating how to build exactly what I want to make using JavaScript, which I plan on incorporating a little bit of in my final Freedom Project. From the last blog, I also said that I have been experimenting with timing using both `wait()` in Kaboom and `setTimeout()`. [These can be searched up in the "Info" or "Timer" sections.](https://kaboomjs.com/) To build the relative objects needed for my game will be easy, so I wanted to test out the timing in the game first because the game needs to know when to reset and make the player choose again to play. The first time experimenting with it, I figured out how to use `setTimeout()`, but I didn’t know how to make `wait()`. Just a couple of days ago, I learned that `setTimeout()` is not specific to Kaboom, and that `wait()` is actually the one I needed to use. Because of this, I referred directly to <a href="https://kaboomjs.com/Q"> Kaboom.js </a> and incorporated it into the code I already had, completely removing `setTimeout()`. So, here is an example of the initial code, which works:
<img src="firstattempt.png" width="500" height="300">

However, I like my second attempt more, where I used Kaboom code, and it definitely has a cleaner and less complicated look to it because it does exactly what the other one did, but it waits one second. 

<img src="secondattempt.png" width="500" height="300">

The problem, which is the reason I couldn’t make it work before, is that it only repeats for about one cycle. I want my game to go on forever and keep repeating, so I started researching and found that I have to use something called `async`. I use `async/await` when I want to pause a function and run multiple lines of code in order. When I use the callback style, it is perfect for <b>single delayed actions</b>; however, if I need <b>multiple actions</b> in order, like a Simon Says game, I need to learn how to use the `async/await` style. Therefore, my plan for winter break is to learn that new style and incorporate it into my Freedom Project. Then, I will learn how to position the objects and add them into the index.html I am using to experiment with my Freedom Project, and I will test to see if it all works.


### EDP
I believe that, as of late, I am most definitely in the <b>defining the problem</b> and <b>researching the problem</b> stage of the engineering design process. I feel like I have definitely run into a problem, and I have researched what the problem I encountered was. Over the break, I plan to <b>brainstorm possible solutions</b> to manage and fix the problem so I can get my code running more efficiently by the time I get back from break for the next Freedom Monday.

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
