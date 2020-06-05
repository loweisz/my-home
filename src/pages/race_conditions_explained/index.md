---
title: 'Race conditions explained in javascript'
date: 'May 17th, 2020'
abstract: 'What are race conditions? When can they happen and why are they so dangerous?'
heroImage: 'race.jpeg'
index: 4
---

When writing software you probably stumbled at some stage over the phrase of "race conditions" and every time this word appears every developer should be scared and frightened and should do everything to avoid having them in their codebase, but why is that?.

In this article I want to give a short explanation using asynchronous javascript together with some real life examples.

Let's look at the definition in the official [wikipedia article](https://en.wikipedia.org/wiki/Race_condition):

> A race condition or race hazard is the condition of an electronics, software, or other system where the system's substantive behavior is dependent on the sequence or timing of other uncontrollable events. It becomes a bug when one or more of the possible behaviors is undesirable.

Phew, that sounds complicated.
Let's try to put that in more simple words. Basically it says we have a result and this result depends on more that one uncontrolled event, like a asynchronous function or something that just takes a long time, which no one can really forsee.

So these events can have happen in different order and if at least one of the possible results are not wanted or unexpected its leading to a so called race condition.

But what exactly is really dangerous about it?
Basically the most dangerous part about it is that it can be so random that it might be impossible to reproduce or even additional debugging can lead to completely disappearing of the symptom by changing the control flow.

To better understand the problem let's try visualize it with a real live example in javascript.

```js{5,10}
const state = null;

async function mutateA() {
  await; /* asynchronous code */
  state = 'A';
}

async function mutateB() {
  await; /* asynchronous code */
  state = 'B';
}
```

In this example we have one state and two functions that will both do something asynchronously like an api call.

After finishing both function will update the same state.

### Let the race begin

Now let's say something is calling `mutateA` for example a simple click on a button.
Right after that, we also run `mutateB` with another button click.
Since the first asynchronous call takes quite some time, we have called `mutateB` before `mutateA` was finished and had updated the state.

Assuming now that `mutateB` is a lot faster than `mutateA`, even though we called it AFTER `mutateA` it will be finished before and then will update the state to "B".

Now comes the weird part.

`mutateA` finishes, and sets the state back to `"A"`.

This behavior is probably a "undesirable" result. Normally we would expect the state to be the last mutation we called and be set to `"B"`.
But in this "race" `mutateB` overtook `mutateA` and so the state is set to `"A"`.

### What is dangerous about that?

The dangerous part about this situation is that you can never be sure what will happen.
Because the time the asynchronous part of both functions is taking is something that is not 100% predictable.

So even though it will work in 99% of the cases because `mutateA` is super fast and no one will every run in this problem, there is a slightly small chance that it won't and this something we developers call non deterministic and really don't like.

### Let's fix it the wrong way.

```js
const state = null;

async function mutateA() {
  await; /* asynchronous code */
  state = 'A';
}

async function mutateB() {
  await; /* asynchronous code */
  setTimeout(() => {
    state = 'B';
  }, 1000);
}
```

Looks quite simple. To avoid `mutateB` to overtake `mutateA` in the race we just put some weights on it with delaying the state update by 1 second.

Well, this might solve another 0.5% of the cases that might occur, but even when we would ignore the unnecessary delay of 1 second which is basically hell when it comes to user experience, the problem is actually not gone, it's just a bit more minified.

### Let's fix it the right way

One way of fixing this problem is introducing a simple [semaphore](<https://en.wikipedia.org/wiki/Semaphore_(programming)>). Which means we add somekind of flag or guard that identifies the resource to be blocked.

Ideally we would also have a queue when we can store the order of the functions stored. But for now we just block the resource when another mutation is running and with for example disabling all buttons that would mutate the same state.

```js
const state = null;
const blocked = false;

async function mutateA() {
  if (!blocked) {
    blocked = true;
    await; /* asynchronous code */
    state = 'A';
    blocked = false;
  }
}

async function mutateB() {
  if (!blocked) {
    blocked = true;
    await; /* asynchronous code */
    state = 'B';
    blocked = false;
  }
}
```

So only `mutate` function can run at once. With that it's save that we can only run one thing at once.

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
So now when someone clicks on one button the other button is disabled as long as the asynchronous function is running.

This would prevent the state to be in an unexpected mode.

Especially when working with react and having one state that gets modified from different resources you can end up having a lot of race conditions.
