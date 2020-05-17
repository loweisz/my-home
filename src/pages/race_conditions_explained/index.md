---
title: 'Race conditions explained in javascript'
date: 'May 17th, 2020'
abstract: 'What are race conditions? When can they happen and why are they so dangerous?'
heroImage: 'race.jpeg'
index: 4
---

When writing software you probably stumbled over the phrase of "race conditions" and every time this word appears every developer should be scared and frightened.

Lets find out what race conditions actually means before starting with an example. This is the definition of the official [wikipedia article](https://en.wikipedia.org/wiki/Race_condition):

> A race condition or race hazard is the condition of an electronics, software, or other system where the system's substantive behavior is dependent on the sequence or timing of other uncontrollable events. It becomes a bug when one or more of the possible behaviors is undesirable.

Phew, that sounds complicated. Let's try to put that in more simple words. Basically it says we have a result which depends on more that one uncontrolled event, which can have happen in different order and at least one of the possible results are not wanted or unexpected.

What is really dangerous about it, that it can be so random that it might be impossible to reproduce or additional debugging can lead to completely disappearing of the symptom.

Let's try visualize that with a bit of code

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

We have one state and two functions that will both do something asynchronously like an api call and after finishing will update the state.

Now let's say we call `mutateA` for example from a button click and right after we click `mutateB`.

### Let the race begin

So we have called `mutateB` before `mutateA` was finished and had updated the state.

Now even though `mutateB` was called AFTER `mutateA` it will be finished before. So it will update the state to "B".

But now comes the weird part. Now `mutateA` finishes, so the state is set back to "A".
This looks like "undesirable" result. We would expect the state to be the last mutation we called. But in the "race" `mutateB` overtook `mutateA`.

### The dangerous side

The dangerous part about this situation is that you can never be sure what will happen. So even though it will work in 99% of the cases because `mutateA` is super fast and no one will every run in this problem, there is a slightly small chance that it won't and this something we developers call non deterministic and really don't like.

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

Well, this might solve another 0.5% of the cases that might occur, but even when we would ignore the unneccessary delay of 1 second which is hell when it comes to user experience, the problem is actually not gone, it's just a bit more minified.

### Let's fix it the right way

One way of fixing this problem is introducing a simple [semaphore](<https://en.wikipedia.org/wiki/Semaphore_(programming)>). Which means we need somekind of flag or guard that identifies the ressource to be blocked. Ideally we would also have a queue when we can store the order of the functions stored. But for now we just block the resource when another mutation is running and for example disable all buttons.

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

Especially when working with react and having one state that gets modified from different ressources you can end up with the danger of having a race condition. So for example we have two user events (button click) which can combined with a asynchronous api call run easily in a race condition.

So adding a `blocked` state which disables the buttons and the state update, fixes the issue and it will never run in a non disirable state.
