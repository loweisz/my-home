---
title: 'Add automated code templates for react components'
date: 'June 2nd, 2020'
abstract: 'Speed up your day to day work with an easy way of creating components with plopJS'
heroImage: 'popcorn.jpeg'
index: 6
---

If you work with a component based framework or anything else that contains always the same structure for its parts, you most likely create several components and with every component you have to create more that one file with almost the same content.

Creating those files and writing always the same structure for components can be quite annoying. I will show you in this article, how you can speed up this process, create your own easy scripts and templates that will handle all of that for you.
The goals is to have one command that spits out everything you need for your component at once and will always have the same custom structure.

### Using templates from your IDE

Most likely you are already using the templates of your IDE to generate the components. This is a quite easy approach and activated by standard with the most popular IDEs.
Here is how you can do it for example with [VSCode](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

### Snippets are not enough

However there are some restrictions with this and you will still have to create separate files like your styles, your tests, your index files etc.
Also when you work with a big team with different IDEs and setups, you will need to make sure that everyone will follow the same pattern within a project, or you will end up with different approaches between all your components created by different People and IDEs.

I found this especially important when working with a component library.
In order to create a new component add to your library, you always need to create not only one but several files in a same pattern, which is not possible with the inbuilt templates from most of the IDEs.

### Plop your components

There is a pretty neat way how you can generate your components and defining the structure and chains what should happen while doing it.
Let me show you how this works.

### Introducing [PlopJS](https://github.com/plopjs/plop)

PlopJS is a scripting tool which I'm using it now on most of my projects, to generate my components or other workflows.
So what is PlopJS? Let's check the official documentation:

> Micro-generator framework that makes it easy for an entire team to create files with a level of uniformity.

This sounds pretty awesome. But how can you add that to your component library or project?

### Component structure of the library

So we want to have a generate script which should always generate all out needed files for our new component.
Before we start to clarify some things here, for the following example we are using [styled-components](https://styled-components.com/) for stylings, [storybook](https://storybook.js.org/) for displaying our components and [Jest](https://jestjs.io/) for testing.
But these are just examples and you can use whatever you want for generating your files.

With that techstack, every component in your library should have the same structure (this is also highly opinionated and you can do your own structure anyway you want):

```
MyComponent
:- MyComponent.jsx        // Main file
:- myComponent.styles.js  // Stylings
:- myComponent.story.js   // Storybook
:- MyComponent.spec.js    // Tests
:- MyComponent.docs.md    // Documentation
:- index.js               // Index for exporting
```

Also we have in our `src` folder a global `index.js` file which exports all the components from one place.

Basically to create a component our script should generate these five files and add one line to the global `index.js`, exporting this component

### Adding PlopJs to your component library

If you follow the [install process](https://plopjs.com/documentation/#getting-started) you can install it directly into your project.

```
npm install --save-dev plop
```

With that you can start ploppin'. Let's start by adding the plopscript to your `package.json`

```
"scripts": {
    ...
    "generate": "plop",
    ...
  }
```

I'm calling the script `generate`, but you can call it whatever fits you best, of course.

Now let's add a so called `plopfile.js` in the root of your project.
This is where all you scripts and commands are stored.

```js
module.exports = (plop) => {
  plop.setWelcomeMessage('Welcome to PLOP, what do you want to do?');
  plop.setGenerator('component', {
    description: 'Create a component',
    // Get info from user
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
};
```

This function will run when you run the plop script with `npm run generate`.
With `plop.setWelcomeMessage` you show a message to the user at the beginning to describe what the script is actually doing.

PlopJS can do more that one thing within this script, so we need to tell it what we want to do first, so that the user can select the expected behavior.
`plop.setGenerator` will add a new functionality to the plop-script. The first argument is the name of your action and the second an object defining what to do if the user selected that option.

In our case we add the option `"Create a component"`, since we, well want to create a new component.
But before we create this component we will need some input, the created component will need a name.

To get the name we can use the option `prompts` within the object in the second argument.
`prompts` is an array which defines all the required inputs from the user. For our example we only need a simple text inpuit containing the name of the component. (There a [lot more options](https://plopjs.com/documentation/#using-prompts) to get information from the user using prompts)
Our prompt contains three things:

- `type` is the type of the action, in our case a simple `"input"`
- `name` is the variable name to get the inserted value later on.
- `message` is a message shown in the command telling the user what to enter.

### Plop actions

The next part of the object in the generator function is the `actions` part. Here we can define out chain of actions, what the script should do.
There are [several action types](https://plopjs.com/documentation/#built-in-actions) already built-in that you can use from plopJS.

In our example we only need two different action types:

- Add -- Adding a whole new file (styles, component, tests etc.)
- Append -- Adding something to an existing file (add the export to the `index.js`)

### Adding files

Let's start by adding out main component file. For that we add a new action into the `actions` array.

```js
module.exports = (plop) => {
  plop.setWelcomeMessage('Welcome to PLOP, what do you want to do?');
  plop.setGenerator('component', {
    description: 'Create a component',
    // Get info from user
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      "------------------------------",
      "Generating a new component...",
      "------------------------------",
      {
        // Add the main file
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.ts.hbs",
      },
    ]
};
```

The object is made out of three different values.

- `type` is describing the type of the action, in our case this is `"add"` since we want to add something.
- `path` is the directory and filename we want to add or create. With those `{{` we can use the [handlebars](https://handlebarsjs.com/) syntax, giving us the option to get the previous user input stored as the value `name`. With the previous value `pascalCase` we are defining in what format we want the directory or file be called.
- `templateFile` is the directory to our template file for this action. We will come to this template file in second.

### Template files

Most of the actions will use template files to help you generate your files for your component. For our component library I created a folder in the root directory of the project called `plop-templates`.
In there I will store all the template files I'm using for generating the components. So for the main component file we will need a `Component.js.hbs` file and will be filled with:

```js
import React, {FC} from 'react';

function {{pascalCase name}}(props) {
  return (
    <div>
      {{pascalCase name}}
    </div>
  );
};

export default {{pascalCase name}};
```

As you can see the template file looks almost like a real component, except everywhere we would insert the component name we use `{{ pascalCase name}}`, this will be filled from plopJS with the inserted name from the `prompt`.

### Append the export to the index file

So far for the adding part. What about appending a new line to our global `index.js` file? For that we can use the `append` action from plopJS.

```js
  {
    // Append to the global index file
    type: "append",
    path: "src/index.ts",
    templateFile: "plop-templates/global_index.ts.hbs",
  },
};

```

It's basically the same as the adding, except we use `"append"` for the `type` value.
The `templateFile` will contain the single line that will be added to our index file.

```js
export { default as {{pascalCase name}} } from './components/{{pascalCase name}}';
```

### Adding the rest to the script

With all of that we can add the actions for all our files.

```js
module.exports = (plop) => {
  plop.setWelcomeMessage('Welcome to the PLOP-script of AroundKit, what do you want to add?');
  plop.setGenerator('component', {
    description: 'Create a component',
    // Get info from user
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      '------------------------------',
      'Generating a new component...',
      '------------------------------',
      {
        // Add the main file
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/Component.js.hbs',
      },
      {
        // Add the story file
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.story.tsx',
        templateFile: 'plop-templates/Component.story.ts.hbs',
      },
      {
        // Add the styles
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'plop-templates/Component.styles.ts.hbs',
      },
      {
        // Add the test file
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component.test.ts.hbs',
      },
      {
        // Add index file
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        // Append to the global index file
        type: 'append',
        path: 'src/index.ts',
        templateFile: 'plop-templates/global_index.ts.hbs',
      },
      '------------------------------',
      '🤲 Welcome to the world little friend 🤲',
      '------------------------------',
    ],
  });
};
```

Now when when we run `npm run generate` the script will take over all the creation of out component files:
