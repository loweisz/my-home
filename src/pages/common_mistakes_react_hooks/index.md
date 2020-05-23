---
title: 'Common mistakes writing react components (with hooks) in 2020'
date: 'May 23rd, 2020'
abstract: 'The most common mistakes I found writing react components and how to avoid them.'
heroImage: 'fish.jpg'
index: 5
---

## Understanding the concept

React has been out in the world of web development for quite some time now and it's position as a tool for agile web development has steadily strengthened in recent years. Especially after announcment and release of the [new hook api/concept](https://reactjs.org/docs/hooks-state.html#hooks-and-function-components), writing components has never been easier. 

However even though the team behind react and the huge community around it tried it in an impressive way to train and explain the concepts of the framework, I still some pitfalls and common mistakes made when working with it. 
I kept a list of all the mistakes I saw over the last years related to react and most of them especially in combination with react-hooks. 

I will also try to explain in detail, why they are mistakes and also will show you the better way to do it. 

### Disclaimer 

Most of the things are not mistakes by the first sight and probably will not infect the user experience or bring any danger to and with every software framework/library there are millions of different opinions about some topics so everything you will see here is based on my personal opinion and should not be taken as a general rule. 


## 1. Using router.push instead of a link

This might be a very easy and obvious one and not really related to react itself, but I still see it quite a lot when people writing react components. 
Let's say you will write a button and with clicking the button the user should be redirected to another page. Since this a clientside routing mechanism you will somekind of library for example the most popular one for react, [react-router](https://reacttraining.com/react-router/). So adding a click listener that will redirect the user to the desired page would solve the problem:

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

Even though this would work just fine for every usual user, there is huge problem when it comes to accessibility with that. The button will not be marked as linking to another page at all. 
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

## 2. Using state when no rerender is needed

One of the core concepts of react is state, you can control your whole data flow via state and every rerender is bound to a state.
In hooks you can define your state of the component with the `useState` hook, which is really neat and easy way how to handle states in react. 

For the next example we need somekind of explanation, let's say we have two buttons, one button will be a counter and one button will send a request or fire an action with the count. However the current count will not be displayed, it is only needed for the request when clicking the second button. 

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
Sure you are right, this will work and probably there will be never a problem with that, however in react every state change will force a rerender for that component, which makes sense, but since we never use that state in our rendered part, this will be a unneccassary render every time we set the counter, which can impact the performance or could have unexpected side effects. 

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

## 3. Handling actions via useEffect 

One of the best and most well thought hooks introduced by react is the `useEffect` hook. It allows to handle actions related to `prop` or `state` change. 
Unfortunatly whcih is a really helpful feature it also often used in places, where it actually is not needed. 
Imagine a component which will fetch a list of items and then on success whill render them. Also when the request is successfull we want to call the `onSuccess` function passed as a prop to the component

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
Sure for the first call this is true. But you also loose the direct connection between the action and the function that needs to be called. Also there is no 100% guarantee that this case will only happen if the fetch action has succeeded

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

Composing component can be hard, when is it time to split up a component in multiple smaller components? How are you structuring the tree of components? All those questions will arraise on a daily basis when working with a component based framework. 
But one common mistake about designing your components is putting two use cases in one single component. 
Imagine you have header that shows either a burger button, when on mobile devices or tabs when on desktop screens. 

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

With this approach the component HeaderInner is trying to be two different things at once and we all learned from mister jackl or heyde, being more than one thing at once doesn't really make sense. 
Also it makes it even hard to reuse the component at other places.

### The solution ✅

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

Bringing the condition one level up, makes it easier to see what the components are made for and that they only have one responsibilit, being a `Header`, `Tabs` or a `BurgerButton` and not trying to be two things at once. 


## 5. Single responsibility useEffects

Another mistake I see a lot when using the `useEffect` hook, remembering the times, where we only had the `componentWillReceiveProps` or `componentDidUpdate` methods is bringing back dark memories and also happiness about the beauty of using the `useEffect` hook and even better having as much off them as you want. 

But sometimes forgetting that and ending up using one `useEffect` for multiple things is bringing back those dark memories. Imagine you have a component which fetches some data from the backend displaying it in some way and also displaying breadcrumbs depending in the location. 

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

There are two use cases, the "data-fetching" and "displaying breadcrumbs" both are updated with an `useEffect` hook. This single `useEffect` hooks will run when the `fetchData` and `updateBreadcrumbs` functions or the location changes. Basically we also call the `fetchData` function also when the location changes? 
This might be a side effect we havn't thought off. 

### The solution ✅

Splitting up the effect makes sure they only are used for one effect and the unecpected side effects are gone. 

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

There are many pitfalls writing components in react, it is really important to 100% understand the functionality of the framework to avoid mistakes, but also making mistakes is important and probably no one is 100% mistake free, so I hope I could help you with this tips or mistakes I saw or even made to prevent you from doing them as well. 
If you have questions or think wait I don't think this is a mistake feel free to write me, I would love to hear your opinion about it. 