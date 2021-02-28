---
title: A book review of Total Recall: Deconstructing and spreading at the same time.
description: Not bad but not good, I will explain the difference between deconstructing and spreading within function parameters 
tag: javascript react es6 beginner
date: 22/02/2021
---

```
const Header = function({...props}) => {
    return (<>
            <menu isOpen={props.isOpen} onClick={props.handleOnClick}>
            <Navigation location={props.location}>
            <Logo isActive={props.isActive}>
        </>)
}
```

I saw this in a friend's react code and wanted to explain what's going on and how it can be improved.

### What are props?

A react component receives an object generally referred to as `props`, which can contain multiple properties that have been passed from the parent component.
These values can be accessed using the dot notation e.g. `props.isOpen`.

```jsx
// index.js
 <Header isOpen={isHeaderOpen} handleOnClick={() => setIsHeaderOpen(true)} isActive={isLogoActive} location={location}>

// header.js
const Header = function(props) => {
    return (<>
            <menu isOpen={props.isOpen} onClick={props.handleOnClick}>
            <Navigation location={props.location}>
            <Logo isActive={props.isActive}>
        </>)
}
```

### What is destructuring assignment (Object destructuring)?

To prevent the repetition of `props.` we can use [deconstruct assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) that will assign each prop to a variable which we can then use in the components.

```jsx
const Header = function(props) => {
    const {isOpen, location, isActive, handleOnClick} = props
    return (<>
            <menu isOpen={isOpen} onClick={handleOnClick}>
            <Navigation location={location}>
            <Logo isActive={isActive}>
        </>)
}
```

### What are those curly brackets in the function parameter?

We can also perform object destructuring assignment inside the function parameters, saving us a line of code.

```jsx
const Header = function({isOpen, location, isActive, handleOnClick}) => {
    return (<>
            <menu isOpen={isOpen} onClick={handleOnClick}>
            <Navigation location={location}>
            <Logo isActive={isActive}>
        </>)
}
```

### What is gathering props?

When three dots are used in function parameters, this syntax is called [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
When we use rest parameters inside the curly braces `...` we do something known as 'gathering props'.
This will assign the non-deconstructed props to a new object.
This is good for when we don't need certain props right now in the current component but want to pass them along to a child component by `spreading`.

A common coding convention is to call the gathered props `rest`, but you can call them whatever you want.

```jsx
const Header = function({isOpen, handleOnClick, ...rest }) => {
    return (<>
            <menu isOpen={isOpen} onClick={handleOnClick}>
            <Navigation {...rest}>
            <Logo {...rest}>
        </>)
}
```

The `<Navigation />` and `<Logo />` components have the `rest` object spread onto it and will receive the two props it contains `location` and `isActive`.

### Was the initial example wrong?

In the case of the initial example, it destructed the props object in the function parameter and gathered the props at the same time. It works, but is superfluous syntax and can cause confusion.

```jsx
const navigation = function({...props}) => {
    return (<>
            <menu isOpen={props.isOpen} onClick={props.handleOnClick}>
            <Navigation location={props.location}>
            <Logo isActive={isActive}>
        </>)
}
```

I hope that cleared things up, if you have further questions or suggestions please give me a tweet at [@khamiltonuk](https://twitter.com/khamiltonuk).
