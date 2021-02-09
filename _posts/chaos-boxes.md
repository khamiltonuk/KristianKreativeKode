---
title: Chaos boxes
description: Asking for a friend
tag: p5.js javascript
date: 04/02/2021
---

Today we are going to build a collection of blocks that transition over a threshold to another background colour and simultaniously transition to the colour of the background before similar to this

!(final result)[/chaos-result.gif]

First we will start by storing the canvas size in a variable called `canvasSize`, this will be useful for later as we will do some calculations based on it

!(final result)[/ripple-start.png]

```
const canvasSize = 400

function setup() {
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(220);
}
```

Next we will be turning the canvas red background with `background("red")` inside the draw function,
We will draw a large black rectangle that will take up half the screen.
We need to create a variable called `threshold` that we will store the value of the half way point. This variable can be use later in other places or we can change this value to maybe a third, or even animate it.

```js
const canvasSize = 400;
const threshold = canvasSize / 2;

function setup() {
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background("red");
  fill(0);
  rect(threshold, 0, width, height);
}
```

!(final result)[/chaos-result.gif]
