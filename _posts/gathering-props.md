---
title: Deconstructing and spreading props at the same time.
description: Not bad but not good, I will explain the difference between deconstructing and spreading within function parameters
tag: javascript react es6 beginner
date: 22/02/2021
---

```jsx
const Header = ({...props}) => {
    return (<div>
            <Menu isOpen={props.isOpen} onClick={props.handleOnClick} />
            <Navigation location={props.location} />
            <Logo isActive={props.isActive} />
        </div>)
}
```

I saw this in a friend's react code and wanted to explain what's going on and how it can be improved.

### What are props?

A react component receives an object generally referred to as `props` a the first argument. This object can contain multiple properties that have been passed from the parent component.
These values can be accessed using the dot notation e.g. `props.isOpen`.

```jsx
// index.js
 <Header isOpen={isHeaderOpen} handleOnClick={() => setIsHeaderOpen(true)} isActive={isLogoActive} location={location}>

// header.js
const Header = (props) => {
    return (<div>
            <Menu isOpen={props.isOpen} onClick={props.handleOnClick} />
            <Navigation location={props.location} />
            <Logo isActive={props.isActive} />
        </div>)
}
```

### What is destructuring assignment (Object destructuring)?

To prevent the repetition of `props.` we can use [deconstruct assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) that will assign each prop to a variable which we can then use in the component.

```jsx
const Header = (props) => {
    const {isOpen, location, isActive, handleOnClick} = props
    return (<div>
            <Menu isOpen={isOpen} onClick={handleOnClick} />
            <Navigation location={location} />
            <Logo isActive={isActive} />
        </div>)
}
```

### What are those curly brackets in the function parameter?

We can also perform object destructuring assignment inside the function parameters, saving us a line of code.

```jsx
const Header = ({isOpen, location, isActive, handleOnClick}) => {
    return (<div>
            <Menu isOpen={isOpen} onClick={handleOnClick} />
            <Navigation location={location} />
            <Logo isActive={isActive} />
        </div>)
}
```

### What is gathering props?

When three dots are used in function parameters, this syntax is called [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
When we use rest parameters inside the curly braces we do something known as 'gathering props'.
This will assign the non-deconstructed props to a new object.
This is good for when we don't need certain props right now in the current component but want to pass them along to a child component by [spreading](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

A common coding convention is to call the gathered props `rest`, but you can call them whatever you want.

```jsx
const Header = ({isOpen, handleOnClick, ...rest }) => {
    return (<div>
            <Menu isOpen={isOpen} onClick={handleOnClick} />
            <Navigation  />
            <Logo />
        </div>)
}
```

### Was the initial example wrong?

In the case of the initial example, it destructured the props object in the function parameter and gathered the props at the same time. When accessing the props via the dot notation, it works but is superfluous syntax and can cause confusion.

```jsx
const navigation = ({...props}) => {
    return (<div>
            <Menu isOpen={props.isOpen} onClick={props.handleOnClick} />
            <Navigation location={props.location} />
            <Logo isActive={isActive} />
        </div>)
}
```

I hope that cleared things up, if you have further questions or suggestions please give me a tweet at [@khamiltonuk](https://twitter.com/khamiltonuk).
