Runtime!
=========

Meet Halle, the official Operation Spark robot.

![Halle](http://i.imgur.com/yUKA9EN.gif)

Halle has some cool moves, but nothing to play with. Let's build our own game using Halle!

# Step 1 - Getting Started

Install this project into your workspace by typing `opspark install` into the console and choosing `runtime`

You can then run the game by opening `index.html` and then choosing *Preview*. You should see Halle running on a blank screen and you should be able to press the approprite keys to make him jump and shoot. 

Now go back and look at the `index.html` file in Cloud9. `index.html` is an example of the kind of code you might see in a real-world project. The majority of the code is not in `index.html` itself but is loaded in as external scripts. 

```
<script src="js/util/load.js"></script>
<script src="js/util/spin.min.js"></script>
<script src="js/util/point.js"></script>
<script src="js/spritesheet.js"></script>
...
<script src="js/view/ground.js"></script>
<script src="js/player/halle.js"></script>
<script src="js/player/playerManager.js"></script>
<script src="js/opspark.js"></script>
```

The scripts are organized so that each script handles one aspect of the game. The scripts are named to describe what they do. Professional developers break code into scripts or modules so that they can keep the code the easy to understand and so that many people can work on the code at the same time.

Some of the scripts are *library* or *third-party* code. This is code that other people wrote that we can use to do cool stuff.

```html
<script src="bower_components/easeljs/lib/easeljs-0.8.1.min.js"></script>
<script src="bower_components/PreloadJS/lib/preloadjs-0.6.1.min.js"></script>
<script src="bower_components/TweenJS/lib/tweenjs-0.6.1.min.js"></script>
<script src="bower_components/SoundJS/lib/soundjs-0.6.1.min.js"></script>
<script src="bower_components/opspark-draw/draw.js"></script>
```

We will be using the [create.js](http://createjs.com/) library to draw and animate our game. 

# Step 2 - Brainstorming

Before we start coding, we have to decide what kind of game we want to build with Halle. Look at the kind of moves that Halle can make and imagine how they would fit into your game. 

You will need to decide on a general *theme* for the game. What kind of world is Halle in? Is she in space, in a factory, on the streets of New Orleans? 

What are the *game mechanics*? What are the goals and what are the challenges? What might halle encounter as the game progresses? Are there points or a score? How does the game end? You've seen what Halle can do. How does that fit into your game?

# Step 3 - HUD

Most games display *status information* like the current score or number of lives remaining overlayed with the running game at either the top or bottom of the screen. We call this a "Heads Up Display" and we've already written one for you in `src/view/hud.js`

To include it you will want to add the following script to `index.html` in the `<head>` element

    <script src="js/view/hud.js"></script>

Find this file in your project and open it. You should see that it declares a function and assigns it to `window.opspark.makeHud`. Read the documentation in the comments to see what it does, then add the example code provided to `index.html` at `TODO: 1`. Once that is done, you should see the heads-up display!

Now, add one more line of code

    window.hud = hud;

By assigning our variable to a property on the `window` object, we can play with it in the console. Open up the console in Chrome Developer Tools and type each of these code statements. What do they do?

    hud.updateScore(10);

    hud.updateOf(1000);

    hud.setIntegrity(25);

    hud.setIntegrity(100);

    hud.kill()

# Step 4 - Creating A Background

Include the script `src/view/background.js` in the same way you include `hud.js`. Find the script that is included and determine what function you need to call in order to create the background. Modify `index.html` at `TODO: 2` to call that function. You will need to supply the appropriate arguments to the function. 

    var background = // ????
    view.addChild(background);

Once this is done correctly you should see Halle on a yellow background. 

Create a different background for the game. You will want to change the code at `TODO: 3` in `src/view/background.js`.

In order to draw something you will create a *shape* using one of the following functions:

    shape = rect(width, height, color, strokeColor, strokeStyle, xOffset, yOffset);
    shape = line(fromX, fromY, toX, toY, strokeColor, strokeStyle);
    shape = circle(radius, color, strokeColor, strokeStyle, xOffset, yOffset);
    shape = polyStar(radius, sides, pointSize, angle, color, strokeColor, strokeStyle, xOffset, yOffset);

and then you can add a shape to the background by calling:

     background.addChild(shape);

See the [opspark-draw documentation](https://libraries.io/bower/opspark-draw) for more details on drawing functions you can use. 

Finally, depending on the background you've built, your heads-up-display may be hard to see or just plain ugly. Modify the colors used by `src/view/hud.js` to match your background.

# Step 5 - Background Parallax

TODO!
