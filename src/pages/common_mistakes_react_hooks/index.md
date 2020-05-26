---
title: 'Five common mistakes writing react components (with hooks) in 2020'
date: 'May 23rd, 2020'
abstract: 'The most common mistakes I found writing react components, why they are mistakes and how to avoid or fix them.'
heroImage: 'fish.jpg'
index: 5
---

## React as a framework

React has been out in the world of web development for quite some time now and its position as a tool for agile web development has steadily strengthened in recent years. Especially after the announcement and release of the [new hook api/concept](https://reactjs.org/docs/hooks-state.html#hooks-and-function-components), writing components has never been easier.

Although the team behind react and the huge community have tried to train and explain the concepts of the framework in an impressive way, I still see some pitfalls and common mistakes that were made while working with it.
I kept a list of all the mistakes I saw over the last years related to react especially with using hooks. In this article I want to show you the most common ones and I will also try to explain in detail, why I think they are mistakes and a suggestion for doing it in a cleaner way.

### Disclaimer

Before we start with the list, I have to say that most of the following things are not fundamental mistakes or don't look wrong at first glance, and also most of them are unlikely to affect the performance or apperance of the application.
Probably nobody would notice, except for the developers working on the product, that something is wrong here, but I still believe that good quality code can lead to a better developer experience and thus to a better product.

As with any software framework or library, there are millions of different opinions about it. Everything you see here is based on my personal opinion and should not be considered a general rule.
If you have a different opinion about her, I would love to hear it 🌟

## 1. Using useState when no rerender is needed

One of the core concepts of react is dealing with state. You can control your entire data flow and rendering through the state. Each time the tree is rendered again, it is most likely tied to a change in the state.

With the `useState` hook you can now also define your state in function components, which is a really neat and easy way how to handle states in react. But it can also be misused as we see in the following example.

For the next example we need a bit of explanation, suppose we have two buttons, one button is a counter and the other button sends a request or triggers an action with the current count. However, the current number is never displayed within the component. It is only required for the request when you click the second button.

### This is dangerous ❌

```jsx
function ClickButton(props) {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount((c) => x + 1);
  };

  const onClickRequest = () => {
    apiCall(count);
  };

  return (
    <div>
      <button onClick={onClickCount}>Counter</button>
      <button onClick={onClickRequest}>Submit</button>
    </div>
  );
}
```

### The problem ⚡

At the first sight, you might ask what is exactly the problem with that? Isn't what what the state was made for?
Sure you are right, this will work just fine and probably there will be never a problem with that, however in react every state change will force a rerender for that component and most likely its children, but in the above example since we never use that state in our render part, this will end up being an unnecessary render every time we set the counter, which can impact the performance or could have unexpected side effects.

### The solution ✅

If you want to use a variable inside your component which should keep its value between rendering but also don't force a rerender, you can use the `useRef` hook. It will keep the value, but doesn't force the component to rerender.

```jsx
function ClickButton(props) {
  const count = useRef(0);

  const onClickCount = () => {
    count.current++;
  };

  const onClickRequest = () => {
    apiCall(count);
  };

  return (
    <div>
      <button onClick={onClickCount}>Counter</button>
      <button onClick={onClickRequest}>Submit</button>
    </div>
  );
}
```

## 2. Using router.push instead of a link

This might be a very easy and obvious one and not really related to react itself, but I still see it quite a lot when people writing react components.

Let's say you will write a button and with clicking the button the user should be redirected to another page. Since its a [SPA](https://en.wikipedia.org/wiki/Single-page_application), this action will be a client-side routing mechanism. So you will need some kind of library for doing that.
In react the most popular one is [react-router](https://reacttraining.com/react-router/) and the following example will use that library.

So adding a click listener will redirect the user to the desired page right?

### This is dangerous ❌

```jsx
function ClickButton(props) {
  const history = useHistory();

  const onClick = () => {
    history.push('/next-page');
  };

  return <button onClick={onClick}>Go to next page</button>;
}
```

### The problem ⚡

Even though this would work just fine for most of the users, there is huge problem when it comes to accessibility here. The button will not be marked as linking to another page at all, which makes it nearly impossible to be identified by screen readers.
Also could you open that in a new tab or window? Most likely not.

### The solution ✅

Linking to other pages with any user interaction should as far as possible be handled by the `<Link>` component or a normal `<a>` tag.

```jsx
function ClickButton(props) {
  return (
    <Link to="/next-page">
      <button>Go to next page</button>
    </Link>
  );
}
```

**Bonus points:** it also makes the code a lot more readable and shorter!

## 3. Handling actions via useEffect

One of the best and most thoughtful hooks introduced by React is the "useEffect" hook. It enables the processing of actions related to `prop` or `state` changes.
Despite its helpful functionality, it is also often used in places where it may not be needed.

Imagine a component that fetches a list of items and render them to the dom. In addition, if the request is successful, we would like to call the "onSuccess" function, which is passed on to the component as a prop

### This is dangerous ❌

```jsx{20}
function ClickButton(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    callApi()
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!loading && !error && data) {
      props.onSuccess();
    }
  }, [loading, error, data]);

  return <div>{data}</div>;
}
```

### The problem ⚡

There are two `useEffect` hooks, the first one is handling the api call on the initial render and the second one will call the `onSuccess` function, by assuming when there is no loading, no error, but data in the state, it must have been a successful call. Make sense right?

Sure for the first call this is true and probably will never fail. But you also loose the direct connection between the action and the function that needs to be called. Also there is no 100% guarantee that this case will only happen if the fetch action has succeeded and this is something we as developers really don't like.

### The solution ✅

A straight forward solution would be to set the "onSuccess" function to the actual place where the call was successful:

```jsx{12}
function ClickButton(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);

    callApi()
      .then((fetchedData) => {
        setData(fetchedData);
        props.onSuccess();
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [props.onSuccess]);

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{data}</div>;
}
```

Now it is quite clear at the first sight when the onSuccess is called, exactly in the success case of the api call.

## 4. Single responsibility components

Composing components can be hard.
When is it time to split a component into several smaller components?
How do you structure the component tree?
All of these questions arise every day when working with a component-based framework.
However, a common mistake in designing your components is to combine two use cases into a single component.
Let's take an example of a header that shows either a burger button on mobile devices or tabs on desktop screens. (The condition will be handled the the magical `isMobile` function, which is not part of this example 🧙‍)

### This is dangerous ❌

```jsx
function Header(props) {
  return (
    <header>
      <HeaderInner menuItems={menuItems} />
    </header>
  );
}

function HeaderInner({ menuItems }) {
  return isMobile() ? <BurgerButton menuItems={menuItems} /> : <Tabs tabData={menuItems} />;
}
```

### The problem ⚡

With this approach the component HeaderInner is trying to be two different things at once and we all learned from [Mr. Jekyll](https://en.wikipedia.org/wiki/Strange_Case_of_Dr_Jekyll_and_Mr_Hyde), being more than one thing at a time isn't really ideal.
Also it makes it even hard to test or to reuse the component at other places.

### The solution ✅

Bringing the condition one level up, makes it easier to see what the components are made for and that they only have one responsibility, being a `Header`, `Tabs` or a `BurgerButton` and not trying to be two things at once.

```jsx
function Header(props) {
  return (
    <header>{isMobile() ? <BurgerButton menuItems={menuItems} /> : <Tabs tabData={menuItems} />}</header>
  );
}
```

## 5. Single responsibility useEffects

Remember the times, where we only had the `componentWillReceiveProps` or `componentDidUpdate` methods to hook into the rendering process of a react component? It is bringing back dark memories and also realizing the beauty of using the `useEffect` hook and especially that you can have as much as you want of them.

But sometimes forgetting and using a "useEffect" for several things brings back those dark memories. For example, imagine you have a component that fetches some data from the backend in some way, and also displays breadcrumbs depending on the current location. (Using again [react-router](https://reacttraining.com/react-router/) for getting the current location.)

### This is dangerous ❌

```jsx
function Example(props) {
  const location = useLocation();

  const fetchData = useCallback(() => {
    /*  Calling the api */
  }, []);

  const updateBreadcrumbs = useCallback(() => {
    /* Updating the breadcrumbs*/
  }, []);

  useEffect(() => {
    fetchData();
    updateBreadcrumbs();
  }, [location.pathname, fetchData, updateBreadcrumbs]);

  return (
    <div>
      <BreadCrumbs />
    </div>
  );
}
```

### The problem ⚡

There are two use cases, the "data-fetching" and "displaying breadcrumbs". Both are updated with an `useEffect` hook. This single `useEffect` hooks will run when the `fetchData` and `updateBreadcrumbs` functions or the `location` changes. The main problem is now, we also call the `fetchData` function when the location changes.
This might be a side effect we haven't thought of.

### The solution ✅

Splitting up the effect makes sure, they only are used for one effect and the unexpected side effects are gone.

```jsx
function Example(props) {
  const location = useLocation();

  const updateBreadcrumbs = useCallback(() => {
    /* Updating the breadcrumbs*/
  }, []);

  useEffect(() => {
    updateBreadcrumbs();
  }, [location.pathname, updateBreadcrumbs]);

  const fetchData = useCallback(() => {
    /*  Calling the api */
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <BreadCrumbs />
    </div>
  );
}
```

**Bonus Points**, the use cases are now also logically sorted within the component.

## Conclusion

There are many pitfalls when writing components in react. It is never 100% possible to understand the whole mechanism and to avoid every little or even big mistake. But making mistakes is also important when learning a framework or programming language and probably nobody is 100% free of these mistakes.

I think sharing your experience with that can be very helpful for others or prevent them from making them.

If you have any questions or wait, I don't think this is a mistake, please write to me, I would love to hear your opinion.
