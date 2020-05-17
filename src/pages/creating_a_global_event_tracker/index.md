---
title: 'How to setup a global event tracker with vanillaJS'
date: 'October 28th, 2019'
abstract: 'How to make it easy to add event tracking to elements, when they are interacted with without any additional logic to the event handlers'
heroImage: 'train.jpg'
index: 1
---

Today, one of the most important parts of a heavily used website is the ability to track and collect data about the usage and behavior of the users who visit this page. This information helps us to improve our work and to detect and correct our mistakes.

To do just that and get some basic data, I wanted to track some of our user interactions in a basic react app. All of them? No no not all of them, I just wanted to start slowly and track only a few and extend the list of events piece by piece. So the goal is that I can flexibly track when and where a user interacts with the page.

### Let's try Redux...

My original idea was to implement a hook in our redux store (yes, it's still implemented with Redux ...) and check if the action is included in my predefined "track action list", and then well ,...track the action.

One of the big problem with that was that I would be restricted by actions that go through my Redux store. Another would be that I have to add more features to Redux, making it more difficult to replace it with another technology at some point and we all know that point is long overdue.
But I also wanted to track actions like clicking on the sidebar, which does not trigger a redux action.
Basically, Redux is and was not the best solution ...

### The power of vanillaJS

The next idea is a bit more general and solved my problem pretty well. The first idea is that the event tracker is implemented completely out of the scope of a framework or library. So I started with adding a global click listener at the top of my app. (could be any other event listener like `scroll`,`keydown` etc, but in this particular example i just want to focus on a `click` listener) and I did that with just plain good ol' javascript:

```js{2}
// somewhere in the index.js file or any other place.
document.addEventListener('click', (event) => {
  // ... do something with the event
});
```

With that, I could hook into every click of the user and handle the action. So this would be the point where I would send the click event to whatever source I want.
The big problem with that was that I just wanted to track a specific list of user interactions and not all of them. Also I somehow need to label the events to distinguish later what and where something happened. So, Somehow I have to filter the triggered events with a list of defined events and locations. But how?

### The event

First, let's check what we can do with the event, the eventlistener gives us.
The event object is [pretty big and contains a lot of information](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent), like the position if it's clicked together with a button and, most importantly the **target element**.

This means that the click event gives us the dom element that the user clicked on, and, what is pretty cool, that this target element object also contains much information about itself. So now we know not only **that** the user has clicked but also **where** he clicked.

But how can we differentiate if the element is one of the elements we want to track?

### HTML is your friend

HTML and Javascript is a lovestory that goes on for centuries. One of the many reasons of their
unquestioned love is the [data-\* attribute](https://www.w3schools.com/tags/att_data-.asp)
With that you can add a property to every HTML-element with a name that starts with "data-"

So, let's do it! Let's say I want to track if the user clicks on the following login button.

```js
<button data-track-id="user_login"> Login </button>
```

I called the property `data-track-id` and gave it a unique id. It's very important that it starts with the prefix `data-` and then something after it, in this case `user_login`.

But what can we do with it?
Remember the magic event listener object and the target object?
Let's look at it again after the `data-track-id` is applied.

```js{5}
  ...
  target: {
    ...
    dataset: {
      trackId: "user_login"
    }
    ...
  }
  ...
```

Isn't that amazing? I now have my track id in the target object of the the click event. And it's even "camelcased" for us.

Now in the event listener we only need to check if the `trackId` exists and if its in a defined list of strings.

```js{11}
// defined list of ids we want to track
const trackList = [
  'user_login',
  'user_logout',
  'user_signup',
  // ...
];

// somewhere in the index.js file
document.addEventListener('click', (event) => {
  if (trackList.includes(event.target.dataset.trackId)) {
    track(event.target.dataset.trackId);
  }
});
```

And that's it. Now I can do whatever I want with the id, send it to an api or notify the user with a toasty.
Just by adding an id to the element and to the list. It's not adding logic or functionality to the components and bundles the controls to one place where I can easily change or add some more stuff to it.
