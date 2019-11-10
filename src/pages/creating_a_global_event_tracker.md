---
title: 'How to setup a global event tracker in your App with vanillaJS'
date: '2019-10-28'
abstract: 'How to easily setup an easy and slim event tracker with plain javascript.'
---

Nowadays one of the most important parts of a highly used website is to track and collect data about the usage and behaviours of the users visiting that site. In order to get some basic data we wanted to track some of our user interactions within out react app. All of them? 
No just a few that can be easily modified and extended. So the goal is, that we can track kind of flexibel when and where made an interaction with our website.
My initial idea was to implement a hook into our redux store (yes, it's still implemented with redux...) 
and then check if the action is in our track action list and track the action.
The big problem here is that we are limited by actions that are going through our store and is adding more functionality to redux which makes it harder to replace redux with another technology at some point. 
But we also want to track actions like clicking on the sidebar which is not firing a redux action. 

So, the next idea was a bit more global. I just added a global click listener at the beginning of our app. (could be any other event listener like `scroll`, `keydown` etc. but in this specific example we just want to focus on a `click` listener)

```js{2}
// somewhere in the index.js file
document.addEventListener('click', (event) => {
  // ... do something with the event
});
```
With that we can hook in after every click of the user and handle the action. 
Big problem here, we only want to track a specific list of user interactions. So somehow we need to filter the events that are trigggered with a list of defined events and locations. 

First let's check what we can do with the event, the eventlistener gives us.
So the event can give us a lot of stuff about the position if it's clicked with shift or control and, most importantly the target element. 

This means we get from the click event the dom element that the user has clicked on.
And additionally this target element object has a lot information about itself too.

But how can we differentiate if the element is one of the elements we want to track?

#### HTML FTW!111!1!!!!

HTML and Javascript is a lovestory that goes on for centuries and one of the reasons of their 
unquestioned love is the [data-* attribute](https://www.w3schools.com/tags/att_data-.asp)
With that you can add a property to every HTML-element with a name that starts with "data-"

So, let's do it! We want to add track if the user clicks on the login button.

```js
<button data-track-id="user_login"> Login </button> 
```

I called the property `data-track-id` and gave it a unique id. In this case `user_login`
What can we do with it? 
Remember the magic event listener object and the target object? 
Let's look at it again after the `data-track-id` is applied. 

```js
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

Isn't that amazing? we now have out track id in the target object of the the click event. And it's even 
"camelcased" for us.

Now in the event listener we only need to check if the `trackId` exists and if its in a defined list of strings. 

```js{2}
// defined list of ids we want to track
const trackList = [
    "user_login",
    "user_logout",
    "user_signup"
    // ...
]

// somewhere in the index.js file
document.addEventListener('click', (event) => {
  if (trackList.includes(event.target.dataset.trackId)) {
    track(event.target.dataset.trackId);
  }
});
```

And that's it. Now we can do whatever we want with the id, send it to an api or notify the user with a toasty.
Just by adding an id to the element and to the list. It's not adding logic or functionality to the components and bundles 
the controls to one place where I can easily change or add some more stuff to it.
 





