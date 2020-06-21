---
title: 'Add automated code templates for react components'
date: 'June 2nd, 2020'
abstract: 'Speed up your day to day work with an easy way of creating components with plopJS'
heroImage: 'popcorn.jpg'
index: 6
---

### Save time creating components

Working with a component-based framework involves a lot of creative work, in which obviously many components are created, which ideally always have the same structure and can be put together to form an application.

Most likely, each component begins with the same structure, e.g. styles, tests, logic etc. and with each piece a new file is needed.

Creating these files and always writing the same structure for components can be quite annoying. In this article, you will learn how to speed up this process and create your own simple scripts and templates that do all of this for you with the magic of PlopJS.

The goal is to have one single command that spits out everything you need for your component at once and always has the same custom structure. Having this helped me a lot in my daily work creating new components and significantly accelerated my work.

### Using templates from your IDE

Most likely you are already using your IDE templates to generate the components. This is a fairly simple approach, which is activated by default with the most popular IDEs.
For example, with [VSCode](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

### Snippets are not enough

However, there are some limitations with it, and you still need to create separate files like your styles, your tests, your index files, etc.
Especially if you work with a large team with different IDEs and setups, you have to make sure that everyone follows the same pattern within a project, or you will have different approaches between all of your components, which have been created by different people and IDEs.

A good example and an important use case is working with a component library.
To create a new component that is added to your library, you always have to create not just one file, but several files in the same pattern, which is not possible with the built-in templates of most IDEs.
However, building components is required in every project, so adding this functionality increases the productivity of each project

### Plop your components

There's a pretty neat way to generate your components and define the structure and chains of what should happen.
Let's find out how this works.

## Introducing [PlopJS](https://github.com/plopjs/plop)

PlopJS is a scripting tool that I now use in most of my projects to generate my components or other workflows.
What is PlopJS? Let's check the official documentation:

> Micro-generator framework that makes it easy for an entire team to create files with a level of uniformity.

That sounds pretty great. But how can you add that to your component library or project?

### Component structure of the library

Before we start I should clarify some things here, for the following example we are using:

- [styled-components](https://styled-components.com/) for stylings
- [storybook](https://storybook.js.org/) for displaying our components
- [Jest](https://jestjs.io/) for testing.

However, these are just examples and you can use anything you want to generate your files.

With this tech stack, every component in your project should have the same structure (this is also highly opinionated and of course you can create your own structure as you like):

```
MyComponent
:- MyComponent.jsx        // Main file
:- myComponent.styles.js  // Stylings
:- myComponent.story.js   // Storybook
:- MyComponent.spec.js    // Tests
:- MyComponent.docs.md    // Documentation
:- index.js               // Index for exporting
```

In addition we have in our `src` folder a global `index.js` file which exports all the components from one place.

In the end, to create a component, our script should generate these five files and add one line to the global `index.js`, exporting this component

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

### Add generators

`plop.setGenerator` will add a new functionality to the plop-script. The first argument is the name of your action and the second an object defining what to do if the user selected that option.

In our case we add the option `"Create a component"`, since we, well... want to create a new component.
But before we create this component we will need some input, the created component will need a name.

To get the name from the user, we can use the option `prompts` within the object in the second argument.
`prompts` is an array which defines all the required inputs from the user. For our example we only need one simple text input containing the name of the component. (There a [lot more options](https://plopjs.com/documentation/#using-prompts) to get information from the user using prompts)
Our prompt contains three things:

- `type` is the type of the action, in our case a simple `"input"`
- `name` is the variable name to get the inserted value later on.
- `message` is a message shown in the command telling the user what to enter.

### Plop actions

The next part of the object in the generator function is the `actions` part. Here we can define our chain of actions, what the script should do.
There are [several action types](https://plopjs.com/documentation/#built-in-actions) already built-in that you can use from plopJS, plus if that is not enought you can also write your own.

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
