---
title: 'Easily create components with plop JS'
date: 'June 2nd, 2020'
abstract: 'Speed up your day to day work with an easy way of creating components with plopJS'
heroImage: 'popcorn.jpeg'
index: 6
---

If you work with a component based framework like react, you most likely create several components and files. 
Creating those files and writing always the same structure for components can be quite annoying.

### Using templates from your IDE

Most likely you are using the templates of your IDE to generate the components in a nicer and faster way. This is a quite easy approach and activated by standard with the most popular IDEs.

Here is how you can do it for example with [VSCode](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

### Snippets are not enough

However there are some restrictions with this and you still have to create your style files, your tests, your index files etc. 
Also when you work with a big team, you will need to make sure that everyone will follow the same pattern, or you will end up with different approaches between all your components. 

Specially when working with a component library you will always need to create several files in a same pattern, which is not possible with the inbuild templates from most of the IDEs

### Plop your components

Lucky for you, there is a pretty neat way how you can generate your components and defining the strucutre and chains what should happen while doing it. 

### Introducing [PlopJS](https://github.com/plopjs/plop)

While setting up a component library I found PlopJs and now I'm using it on most of my projects, to generate my components or other workflows. 
So what is PlopJS? According to the documentation:

> Micro-generator framework that makes it easy for an entire team to create files with a level of uniformity.

Nice! This sounds pretty awesome. How can I add that to my component library? 

### Component structure of the library

So we want to have a generate script which should always generate all out needed files for our new component. 
Before we start, for the following example we are using [styled-components](https://styled-components.com/) for stylings and [Jest](https://jestjs.io/) for testing. 
But these are just examples and you can use whatever you want for generating your files.

With that, every component in your libary should have the same structure: 

```
MyComponent
:- MyComponent.jsx        // Main file
:- myComponent.styles.js  // Stylings
:- MyComponent.spec.js    // Tests
:- MyComponent.docs.md    // Documentation
:- index.js               // Index for exporting
```

Also we have in our `src` folder a global `index.js` file which exports all the components from one place.

So our script should generate these five files and add one line to the global `index.js

### Adding PlopJs to your component library