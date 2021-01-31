---
title: Infinite circle ripple with p5.js
description: Animating infinite circle ripples with the javascript library p5.js using es6 classes
tag: creative-coding p5.js
date: 2021-01-30
---

Today we are going to make an infinitely looping, ripple effect similar to this.

![ripple effect animation](/ripple-final.gif)

I recommend you don't copy and paste the code but try type it out, to help commit stuff to memory, but it will help with comprehension. I am aware this is a more accident prone approach but worth the effort.

### The setup

![first ripple with no fill](/ripple-start.png)

We will be use my favourite creative coding framework [p5.js](https://p5js.org/). When using P5.js I love using the [online editor](https://editor.p5js.org/) for the instant feedback. It also give us the basic setup to get going instantly, it should look like this, with grey background.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

### Draw a circle in the middle of the canvas

![circle in the middle of the screen](/ripple-circle.png)

Lets start off by drawing a static circle in the middle of the screen.
The [circle](https://p5js.org/reference/#/p5/circle) function from p5.js take three parameters, `x` position, `y` position and `radius`.
While we are inside the draw function we have a few variables available to use, `height` and `width`, these give use the height and width of the canvas respectively. We can divided these values by two, to find the middle of the canvas. It may look like a static circle, but this draw function is being called every 60 per second, knowing this, we can leverage it to create animations.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(height / 2, width / 2, 100);
}
```

### Rings as an object

![first ripple with no fill](/ripple-nofill.png)

We will need display lots of circles at once to generate this effect, we will use object oriented programming to do so.
We will define an class called `Ring` it will accept three props, the `x` position, `y` position, and the circle `radius`.
The `Ring` class will contain one method/function called `draw()` which we will call in the draw function.
I would also like you to remove the white default fill of the circle by calling the [`noFill()`](https://p5js.org/reference/#/p5/noFill) function inside the draw function. The [`noFill()`](https://p5js.org/reference/#/p5/noFill) function is a function from p5.js which will remove the fill colour from any aliment leaving only the outline.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noFill();

  const ring = new Ring(height / 2, width / 2, 100);
  ring.draw();
}

class Ring {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw() {
    circle(this.x, this.y, this.radius);
  }
}
```

### Multiple rings

To store the multiple circles we use an Array called `rings`.
Similar to `height` and `width`, there is another variable available in the draw function called [`frameCount`](https://p5js.org/reference/#/p5/frameCount). This is a number which starts at 0 when the the animation starts and increments by one every.
We will divide the `frameCount` by 60, with the [remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder), therefore when there is no remainder we can assume a second has passed.
We will loop the `rings` array, with a `forEach()` function, and call `draw()` on each ring in the array.

![ripple effect animation](/ripple-push.gif)

```js
let rings = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noFill();

  // push a new circle into the array every second
  if (frameCount % 60 === 0) {
    // use the frame count to set the radius of the circle
    rings.push(new Ring(height / 2, width / 2, frameCount));
  }

  rings.forEach((ring) => {
    ring.draw();
  });
}

class Ring {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw() {
    circle(this.x, this.y, this.radius);
  }
}
```

### Growing the rings

We now have, rings being drawn at specific sizes each second, but we want the rings to gradually grow in size as time passes.
Therefore we will create an `update()` function which will increase radius by 1 each time the it is called.

![ripple effect animation](/ripple-end.gif)

```js
let rings = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  noFill();

  // Make it look pretty
  strokeWeight(8);

  if (frameCount % 60 === 0) {
    // radius now starts at zero
    rings.push(new Ring(height / 2, width / 2, 0));
  }

  rings.forEach((ring) => {
    // Call the update function each time we draw a circle
    ring.update();
    ring.draw();
  });
}

class Ring {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  update() {
    // increase the radius of the circle by
    // one each time the update function is called
    this.radius += 1;
  }
  draw() {
    circle(this.x, this.y, this.radius);
  }
}
```

### Improve performance

Our code from above has a little problem it will put a new ring in the array every second for as long as the browser is open.
This is not performant as we will waste computing resources drawing rings off the screen.
We can prevent this by removing a ring from the array when it has grown too large to be visible on the canvas with the [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) to remove the first item from the array.

![ripple effect animation](/ripple-end.gif)

```js
let rings = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  noFill();

  // Make it look pretty
  strokeWeight(8);

  if (frameCount % 60 === 0) {
    // radius now starts at zero
    rings.push(new Ring(height / 2, width / 2, 0));
  }

  // Limit the amount of rings in the array to nine
  if (rings.length > 9) {
    rings.shift();
  }

  rings.forEach((ring) => {
    // Call the update function each time we draw a circle
    ring.update();
    ring.draw();
  });
}

class Ring {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  update() {
    // increase the radius of the circle by
    // one each time the update function is called
    this.radius += 1;
  }
  draw() {
    circle(this.x, this.y, this.radius);
  }
}
```

Well done for making it to the end, if you have any issues or comments feel free to get in touch.

### Bonus points

- Can you vary the colours of the lines?
- Can you make the rings shrink in size?
- Can you fill the circles with different colours?
- Can you speed up or the slow down the animation?
- Can you write this in a functional way without object orientation?
