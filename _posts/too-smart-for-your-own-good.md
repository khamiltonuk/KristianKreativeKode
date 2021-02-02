---
title: Too smart for your own good, converting is cheating
description: I got a challenge from my friend to solve a problem in javascript.
tag: Javascript reduce
date: 02/02/2021
---

I have a friend who is a web developer, occasionally he will ask me questions about javascript, today I got.

"quick quiz! I want to concat 2 numbers together, eg. 1 and 0 = 10."

So I gave it a go.

```js
const firstNumber = 1;
const secondNumber = 0;

function concatNumbers(firstNumber, secondNumber) {
  return Number.parseInt(`${firstNumber}${secondNumber}`, 10);
}

console.log(concatNumbers(firstNumber, secondNumber)); // 10
```

![Roll safe actor Kayode Ewumi](/roll-safe.jpg)

I asked, "Do you want the return value a number or a string?"

He said, "no! but you shouldn't convert the type.
Get the result using standard multiplication and addition."

"Why?"

"Converting is cheating, it's like using a side effect of concatenating strings to do a calculation."

I responded, "Sounds like something a back end developer would say,
type coercion in javascript behaves in a consistent way, but not a logical way.
and it's not a bad thing, if you know what you are doing."

I gave it a go...

```js
const firstNumber = 1;
const secondNumber = 0;

function concatNumbers(arr) {
  return arr.reverse().reduce((acc, item, index) => {
    return (acc += item * Math.pow(10, index));
  }, 0);
}

console.log(concatNumbers([firstNumber, secondNumber])); // 10
```

He responded "Wow!" I thought; I have clearly impressed him "Can you explain what going on here?"

This is something I often do, I can end up with complex solution to simple problems,
leaving behind me code that is hard to maintain and potentially confusing to others.

I want to write code thats easy to maintain and understand. I am very aware it's easier to write complex code than simple code.

He asked his wife, who works in finance and specialises in pure maths/excel stuff, and she came back with this

```js
const firstNumber = 1;
const secondNumber = 0;

function concatNumbers(firstNumber, secondNumber) {
  return firstNumber * 10 + secondNumber;
}

console.log(concatNumbers(firstNumber, secondNumber)); // 10
```

It made me laugh.
I was impressed by how simple the solution is.
And I prefered his wife's solution.

This is why I like TDD, his wife's solution meets the test criteria, and if there is a problem, we will need another test case.

Granted his wifes version can only handle two single digit numbers, but the function completes the initial requirements.

This also demonstrates one of the issues I have with the [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) function in javascript, it's very easy to force a problem into it and leave yourself with code that is hard to explain and maintain

### Bonus Points

- Can you think of another way to solve this problem, I would be keen to see
