---
title: '5 common mistakes writing react components (with hooks) in 2020'
date: 'May 23rd, 2020'
abstract: 'The most common mistakes I found writing react components and how to avoid or fix them.'
heroImage: 'fish.jpg'
index: 5
---

## React as a framework

React has been out in the world of web development for quite some time now and it's position as a tool for agile web development has steadily strengthened in recent years. Especially after the announcment and release of the [new hook api/concept](https://reactjs.org/docs/hooks-state.html#hooks-and-function-components), writing components has never been easier. 

Although the team behind react and the huge community have tried to train and explain the concepts of the framework in an impressive way, I still see some pitfalls and common mistakes that were made while working with it.
I kept a list of all the mistakes I saw over the last years related to react especially with using hooks. In this article I want to show you the most common ones and I will also try to explain in detail, why I think they are mistakes and a suggestion for doing it in a cleaner way.

### Disclaimer 

Before we start with the list, I have to say that most of the following things are not fundamental mistakes or don't look wrong at first glance, and also most of them are unlikely to affect the performance or apperance of the  application.
Probably nobody would notice, except for the developers working on the product, that something is wrong here, but I still believe that good quality code can lead to a better developer experience and thus to a better product.

As with any software framework or library, there are millions of different opinions about it. Everything you see here is based on my personal opinion and should not be considered a general rule.
If you have a different opinion about her, I would love to hear it :) 


## 1. Using useState when no rerender is needed

One of the core concepts of react is dealing with the state. You can control your entire data flow and rendering through the state. Each time the tree is rendered again, it is most likely tied to a change in state.

With the `useState` hook you can now also define your state in function components, which is a really neat and easy way how to handle states in react. But it can also be misused as we see in the following example.

For the next example we need a bit of explanation, suppose we have two buttons, one button is a counter and the other button sends a request or triggers an action with the curent count. However, the current number is never displayed within the component. It is only required for the request when you click the second button.

### This is dangerous ❌
```jsx
function ClickButton(props) {
  const [count, setCount] = useState(0)

  const onClickCount = () => {
    setCount(c => x + 1)
  }

  const onClickRequest = () => {
    apiCall(count)
  }

  return (
    <div>
      <button onClick={onClickCount}>
        Counter
      </button>
      <button onClick={onClickRequest}>
        Submit
      </button>
    </div>
  );
}
```

### The problem ⚡

At the first sight, you might ask what is exactly the problem with that? Isn't what what the state was made for? 
Sure you are right, this will work just fine and probably there will be never a problem with that, however in react every state change will force a rerender for that component and most likely its children, but in the above example since we never use that state in our render part, this will end up being an unneccassary render every time we set the counter, which can impact the performance or could have unexpected side effects. 

### The solution ✅

If you want to use a variable inside your component which should keep its value between rendering but also don't force a rerender, you can use the `useRef` hook. It will keep the value, but doesn't force the component to rerender. 

```jsx
function ClickButton(props) {
  const count = useRef(0)

  const onClickCount = () => {
    count.current++
  }

  const onClickRequest = () => {
    apiCall(count)
  }

  return (
    <div>
      <button onClick={onClickCount}>
        Counter
      </button>
      <button onClick={onClickRequest}>
        Submit
      </button>
    </div>
  );
}
```


## 2. Using router.push instead of a link

This might be a very easy and obvious one and not really related to react itself, but I still see it quite a lot when people writing react components.

Let's say you will write a button and with clicking the button the user should be redirected to another page. Since its a [SPA](https://en.wikipedia.org/wiki/Single-page_application) this will need a clientside routing mechanism so you will need somekind of library for it. In react for example the most popular one is [react-router](https://reacttraining.com/react-router/). 
So adding a click listener that will redirect the user to the desired page would solve the problem:

### This is dangerous ❌
```jsx
function ClickButton(props) {
  const history = useHistory()

  const onClick = () => {
    history.push("/next-page");
  }

  return (
    <button onClick={onClick}>
      Go to next page
    </button>
  );
}
```

### The problem ⚡

Even though this would work just fine for most of the users, there is huge problem when it comes to accessibility with that. The button will not be marked as linking to another page at all, which makes it nearly impossible to be identified by screen readers.
Also could you open that in a new tab or window? Most likely not. 

### The solution ✅

Linking to other pages with any user interaction should as far as possible be handled by a link or a normal `<a>` tag. 

```jsx
function ClickButton(props) {
  return (
    <a href="/next-page">
      <button onClick={onClick}>
        Go to next page
      </button>
    </a>
  );
}
```

Bonus points, it also makes the code a lot more readable and shorter! 

## 3. Handling actions via useEffect 

One of the best and most well thought hooks introduced by react is the `useEffect` hook. It allows to handle actions related to `prop` or `state` change. 
Unfortunatly being a really helpful feature, it is also often used in places, where it actually might not be needed.

Imagine a component which will fetch a list of items and on success it should simply render them. But also in additon to that, when the request is successfull we want to call the `onSuccess` function passed as a prop to the component

### This is dangerous ❌
```jsx{23}
function ClickButton(props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const fetchData = useCallback(() => {
    setLoading(true);

    callApi()
      .then(setData)
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    if (!loading && !error && data) {
    props.onSuccess()
    }
  }, [loading, error, data])

  return (
    <div>
      {data}
    </div>
  );
}
```

### The problem ⚡

We have two `useEffect` hooks, the first one is handling the api call on initial render and the other will call the `onSuccess` function, by asuming when there is no loading, no error, but there is data it must have been a successfull call. Make sense right?
Sure for the first call this is true and probably will never fail. But you also loose the direct connection between the action and the function that needs to be called. Also there is no 100% guarantee that this case will only happen if the fetch action has succeeded

### The solution ✅

A quite easy solution would be to put the `onSuccess` function, to the real place when the success of the call is happening: 

```jsx{12}
function ClickButton(props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const fetchData = useCallback(() => {
    setLoading(true);

    callApi()
      .then((fetchedData) => {
        setData(fetchedData);
      props.onSuccess();
      })
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [props.onSuccess])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {data}
    </div>
  );
}
```

Now it is quite clear at the first sight when the onSuccess has called, exactly in the success state of the api call. 

## 4. Single responsibility components

Composing components can be hard, when is it time to split up a component in multiple smaller components? How are you structure the tree of components? All those questions will arraise on a daily basis when working with a component based framework. 
But one common mistake about designing your components is putting two use cases in one single component. 
Think of a header that shows either a burger button, when on mobile devices or tabs when on desktop screens. (The conditon will be handled the the magical `isMobile` function, which is not part of this example 🧙‍)

### This is dangerous ❌

```jsx
function Header(props) {
  return (
    <header>
      <HeaderInner menuItems={menuItems} />
    </header>
  )
}

function HeaderInner({ menuItems }) {
  return isMobile() ? (
    <BurgerButton menuItems={menuItems} />
  ) : (
    <Tabs tabData={menuItems} />
  )
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
    <header>
      {isMobile() ? (
        <BurgerButton menuItems={menuItems} />
      ) : (
        <Tabs tabData={menuItems} />
      )}
    </header>
  )
}
```

## 5. Single responsibility useEffects

Remembering the times, where we only had the `componentWillReceiveProps` or `componentDidUpdate` methods is bringing back dark memories and also realizing the beauty of using the `useEffect` hook and even better that you can have as much as you want of them. 

But sometimes forgetting that and ending up using one `useEffect` for multiple things is bringing back those dark memories. For example, imagine you have a component which fetches some data from the backend, displaying it in some way and also displaying breadcrumbs depending in the location. 

### This is dangerous ❌

```jsx
function Example(props) {
  const location = useLocation();

  const fetchData = useCallback(() => {
    /*  Calling the api */
  }, [])

  const updateBreadcrumbs = useCallback(() => {
    /* Updating the breadcrumbs*/
  }, [])


  useEffect(() => {
    fetchData();
    updateBreadcrumbs()
  }, [location.pathname, fetchData, updateBreadcrumbs])

  return (
    <div>
      <BreadCrumbs />
    </div>
  )
}
```

### The problem ⚡

There are two use cases, the "data-fetching" and "displaying breadcrumbs". Both are updated with an `useEffect` hook. This single `useEffect` hooks will run when the `fetchData` and `updateBreadcrumbs` functions or the `location` changes. The problem is now, we also call the `fetchData` function also when the location changes.
This might be a side effect we haven't thought of. 

### The solution ✅

Spliting up the effect makes sure, they only are used for one effect and the unexpected side effects are gone. 

```jsx
function Example(props) {
  const location = useLocation();

  const updateBreadcrumbs = useCallback(() => {
    /* Updating the breadcrumbs*/
  }, [])

  useEffect(() => {
    updateBreadcrumbs()
  }, [location.pathname, updateBreadcrumbs])


  const fetchData = useCallback(() => {
    /*  Calling the api */
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <div>
      <BreadCrumbs />
    </div>
  )
}
```

Bonus Points, the use cases are now also logically sorted within the component. 

## Conclusion

There are many pitfalls writing components in react, it is really important to 100% understand the functionality of the framework to avoid mistakes, but also making mistakes is important when learning a framework or a programming language and probably no one is 100% free of those mistakes, but I think sharing your experience with those mistakes can also be really helpful and I hope could help you with this tips or mistakes I saw or even made to prevent you from doing them as well. 

If you have questions or think wait I don't think this is a mistake feel free to write me, I would love to hear your opinion about it. 