---
title: 'Inversion of Control with shareable react components'
date: 'December 28th, 2019'
abstract: 'Why the inversion of control pattern could help you to make every component in react safer and cleaner'
heroImage: 'car.jpg'
index: 1
---

There are many patterns, rules and methodologies in the world of programming and software engineering.
Sometimes many of them make no sense at first or seem to be revising things to make them more complicated than they should be.
But then, when you take a closer look or use it regularly, you often notice the real advantage of these rules and when you try to work with it you may see the real benefit what they bring to your codebase.
Let me explain to you that and how one of them, the inversion of control paradigm, can help you use shareable components in React.

## Not only object-orientated

The idea of inversion of control (IoC) not only makes sense for object-orientation, it can be transferred to a lot more such as for React or any other component-based framework with the composition of components. In this article, I want to explain how you can use the pattern not only in Java(script), but also when you want to create a shared UI-component.

But first let's find out what IoC actually means. Let's see what [wikipedia](https://en.wikipedia.org/wiki/Inversion_of_control) says about it.

> in traditional programming, the custom code that expresses the purpose of the program calls into reusable libraries to take care of generic tasks, but with inversion of control, it is the framework that calls into the custom, or task-specific, code."

So, what the heck does that mean? Basically it means that a framework, library or any external code is not called by you, rather than it calls your code from inside itself.
To understand the principle a bit better you can read Kent C. Dodds [article about inversion of control](https://kentcdodds.com/blog/inversion-of-control) explained with the filter function of javascript. After reading this the principle it made a lot more sense to me and I thought, wait a second I think this could make also a lot of sense when creating components in react.

## How does it make sense to use it in react components?

So I was looking at our component library, which is written in react and saw a pattern that could match the inversion of control paradigm.

## First, let's do it wrong and look at some code

So let's start with a component. In our case a pretty simple button component.

```js
const Button = (props) => <button class="button">{props.text}</button>;
```

Looks quite simple right? So we can pass any text we want and render it like this:

```js
const Whatever = (props) => <Button text="This is a cool button" />;
```

This works fine for this use case, but suddenly we want to have an icon AND a text on a button somewhere. Okay fine then let's add an icon to the props and make it optional.

```js
const Button = (props) => (
  <button class="button">
    {props.icon && <span class="icon">{props.icon}</span>}
    {props.text}
  </button>
);
```

Mh looks a bit weird but for this use case it's fine... I guess. Oh! now somewhere we start using a button with a subtext below the icon and the text. Okay fine let's add it.

```js
const Button = (props) => (
  <button className="button">
    <span className="upper-line">
      {props.icon && <span class="icon">{props.icon}</span>}
      {props.text}
    </span>
    {props.subText && <span class="sub-text">{props.subText}</span>}
  </button>
);
```

Phew! I think we made it... Wait what ? There is more ?

```js
const Button = (props) => (
  <button className="button">
    {props.image && props.imageIsTop && <img src={props.image} />}
    <span className="upper-line">
      {props.icon && <span class="icon">{props.icon}</span>}
      {props.text}
    </span>
    {props.subText && <span class="sub-text">{props.subText}</span>}
    {props.listOfLinks &&
      props.listOfLinks.map((link) => (
        <a key={link.url} href={link.url}>
          {link.name}
        </a>
      ))}
    {props.image && props.imageIsBottom && <img src={props.image} />}
  </button>
);
```

Okay STOP. This is definitely too much code for just one button and may still grow and gets even more complicated with even more conditions and props. We now have at least 10 optional props and conditions to cover all use cases of all buttons in our application.
Nobody will understand them all, and it can be very dangerous to change anything in the logic, and suddenly in one place for this one state, it no longer works as expected.

NEWSLETTER

## Composition of components or calling is now rendering

The principle of IoC says that we don't call the framework, the framework calls us. How does that help us improve our button?
Let us imagine the call as rendering a component. In the example above, we always render the button and pass conditions and props to render the button the way we want. But what if the button renders OUR code?

In react every component gets automatically a `prop` called `children`, this `prop` will be filled with anything you wrap with your component.

It is that easy as it sounds:

```js
const Button = (props) => <button className="button">{props.children}</button>;

const Whatever = (props) => <Button>This will be rendered as children</Button>;

const WhateverWithIcon = (props) => (
  <Button>
    {props.icon && <span class="icon">{props.icon}</span>}
    This will render with an icon
  </Button>
);
```

In this the Button component itself doesn't care what it renders. `props.children` can be EVERYTHING, a text and an icon, a text and an image. Everything you want. Because it just renders everything you wrap it with, and the button itself stays fairly small, and you don't have to change the component every time you need a different way of showing what the button should do. Basically, it has superpowers now.

## Extend the inversion

But what about the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle ? What if we would have a lot of buttons with icons ? Do we really want to write the whole icon logic again and again?
Why not extend the button to another `IconButton` component.

The `IconButton` still can wrap everything you want, but also adds an icon to it. But as the name clearly says, we don't make the icon optional. In the end every `IconButton` needs its `icon`.
With that we can extend the component how we like it and still be using the inversion of control but do not violate the DRY principle. That's something to impress at a party isn't it?

## Add some functionality to have the real Inversion of Control

Let's say our component also needs some functionality that we want to pass to the child component. How would this be possible, when the parent component has no idea about what its children will be?

Let me give you a simple example. Let's take our custom `Button` component and add a tiny little click counter to it to store internally how many times the user has clicked that button.
Quite simple, we just add the click counter functionality to the shareable `Button` component.
Now we know in that component the amount of click events fired from it.

But now we also want to give the children the information about the current count. How can we do that without knowing what the children will be?

We just change the type of `props.children` from being a static component to a more flexible function `props.children()`. You probably heard about this way of passing information as "render props". With that we can pass any information from the parent to the children.

```js
const Button = (props) => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount((oldCount) => ++oldCount);
  };

  return <button className="button">{props.children(count)}</button>;
};
```

Now when we want to use the button we simply run a render function within the body and get the information about the click count:

```js
const Whatever = (props) => <Button>{(count) => `This has been clicked ${count} times`}</Button>;
```

Brilliant! With that we shared functionality but also stylings within one component, but also made it very flexible to decide how you want to display the body of the button.

## Conclusion

The inversion of control pattern is very powerful paradigm, which can be used in quite a few places while programming and makes a lot of shared things or libraries easier to customize and safer to use.
I think especially in the world of react components having more than two or three conditions to display something or not in a component, is a point to think about inverting the control to the one using the component not the one writing it and if you are not sure what to add to the component and what do you want be handled by the use case? A rule of thumb for me is, don't use more than two optional and visual props and if you are using one of them more than two times make it a separate component.
