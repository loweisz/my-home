---
title: 'How to avoid race conditions with asynchronous javascript'
date: 'May 4th, 2020'
abstract: 'Have you every heard about race conditions? What are they and why are they so dangerous? Here are some real life examples using asynchronous javascript'
heroImage: 'race.jpeg'
index: 4
---

When you write code, you have probably stumbled upon the term "race conditions" at some point, and every time this word appears, you and every developer should be afraid and do everything possible to avoid having them their code base. But why is it like that? And what exactly are those race conditions?

In this article, I would like to give a brief explanation using asynchronous javascript along with some real-life examples so you don't have to be scared next time.

First, let's look at the definition in the official [wikipedia article](https://en.wikipedia.org/wiki/Race_condition):

> A race condition or race hazard is the condition of an electronics, software, or other system where the system's substantive behavior is dependent on the sequence or timing of other uncontrollable events. It becomes a bug when one or more of the possible behaviors is undesirable.

Phew, that sounds complicated.
Let's try to put it in simpler terms. Basically, it means we have a result, something like a state or an object. And this result depends on more than one uncontrolled event, like an asynchronous function or something that takes a long time and that no one can really predict.

This means that these events have taken place in different orders and produce different results. Now if at least one of the possible results is not desired or unexpected, this leads to a so-called race condition.

#### But what exactly is really dangerous about it?

Basically, the most dangerous thing is that it can be so random that it may not be reproducible, or even additional debugging can cause the symptom to go away completely by changing the flow of control.

To better understand the problem, let's try to visualize it with a real live example in javascript.

```js{5,10}
let state = null;

async function mutateA() {
  await /* asynchronous code */
  state = 'A';
}

async function mutateB() {
  await /* asynchronous code */
  state = 'B';
}
```

In this example we have one state and two functions that will both do something asynchronously like an api call or an expensive calculation.
After finishing, both function will update the same state.

### Now let the race begin

Now suppose something called `mutateA`, for example a simple click on a button.

Immediately afterwards we execute `mutateB` with another click.
Since `mutateA` takes some time before updating the state, we now called `mutateB` before `mutateA` ended and the state was updated.

Assuming now that `mutateB` is a lot faster than `mutateA`, even though we called it AFTER `mutateA`, it will be finished before and then will update the state to "B".

Now comes the weird part.

`mutateA` finishes, and sets the state back to `"A"`. So in the end we have a different oder of the state updates than we have clicked the buttons.

This behavior leads to a probably "undesirable" result. We would normally expect the state to be the last mutation we called and to be set to `"B"`.
But in this "race" `mutateB` overtook `mutateA` and in the end the state was set back to `"A"`.

### What is dangerous about that?

The dangerous thing about this situation is that you can never be sure of what will happen.
Because the time that the asynchronous part of both functions takes is most likely not 100% predictable.

Although it works 99% of the time because `mutateA` is super fast and no one will solve any problem, there is a slight chance that it won't, and as we all know we developers don't like it to be non-deterministic.

### Let's fix it the wrong way.

```js
let state = null;

async function mutateA() {
  await /* asynchronous code */
  state = 'A';
}

async function mutateB() {
  await /* asynchronous code */
  setTimeout(() => {
    state = 'B';
  }, 1000);
}
```

It looks very simple. To avoid "mutateB" overtaking "mutateA" in the race, we only put a few weights on it and delayed the state update by 1 second.

Well, this could solve another 0.5% of the cases that could occur, but even if we ignored the unnecessary 1 second delay, which is basically hell when it comes to user experience, the problem is actually not gone, it's just a little bit more minimized.

NEWSLETTER

### One way of fixing it

One very simple way of fixing this problem is introducing a simple [semaphore](<https://en.wikipedia.org/wiki/Semaphore_(programming)>). That means we add a kind of flag or guard that identifies the resource to be blocked.

Ideally, we would also have a kind of queue in which we can save the order of the stored functions. For now to keep it simple, we will only block the resource when another mutation is in progress, and for example disable all buttons that would mutate the same state.

```js
let state = null;
let blocked = false;

async function mutateA() {
  if (!blocked) {
    blocked = true;
    await /* asynchronous code */
    state = 'A';
    blocked = false;
  }
}

async function mutateB() {
  if (!blocked) {
    blocked = true;
    await /* asynchronous code */
    state = 'B';
    blocked = false;
  }
}
```

So only one `mutate` function can run at once. With that it's save that only one resource can update the state at once.

### Example with react hooks

Let's try to visualize that in a more realistic example using react hooks.

```jsx

function MyComponent() {
  const [state, setState] = useState(null)
  const [blocked, setBlocked] = useState(false)

  function mutateA() {
    if(!blocked) {
      setBlocked(true)
      await fetch('https://api.for.A');
      setState('A');
      setBlocked(false)
    }

  }

  function mutateB() {
    if(!blocked) {
      setBlocked(true)
      await fetch('https://api.for.B');
      setState('B');
      setBlocked(false)
    }

  }

  return (
    <div>
      <span>Result: {state}</span>
      <button disabled={blocked} onClick={mutateA}>Get A</button>
      <button disabled={blocked} onClick={mutateB}>Get B</button>
    </div>
  )
}
```

We have two `state`s, one is our application state and the other one is the guard blocking the buttons.

Now when someone clicks on one button the other button is disabled as long as the asynchronous function is running.
This would prevent the state to be in an unexpected mode.

Especially when working with react and having one state that gets modified from different resources you can end up having a lot of race conditions.

So understanding the flow of events withing your code is quite important to avoid those bugs or unexpected events from happening.
I hope you can now code with a little bit less fear in mind.

#### Have ever experienced something like this? If so I would love to hear how you solved the problem in your example.
