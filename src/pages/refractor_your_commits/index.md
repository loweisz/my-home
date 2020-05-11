---
title: 'Why and how to write useful commit messages. (some useful tips)'
date: 'May 11th, 2020'
abstract: 'Working with a lot of people on a big software project, it makes sense to think about your way of writing commit messages'
heroImage: 'colors.jpg'
---

If you have worked with other developers on a software project, you have probably used **git**, in order to have a proper version control, especially when you are working in parallel on the same code base. As most of you know git is a very powerful tool to helps people collaborate on a common project and probably used on most of the software projects all around the world, Let's be honest I cannot imagine how it was to work as a software engineer before git was invented.

Pure. chaos.

### Work with git

What is probably the most used workflow in git? Correct! When you have completed a step within your task or solved a problem or at least a part of it, you are "committing" your changes and then pushing them to the remote repository. We all probably do this, or should do it at least once a day. Along with this you also have to write a clear and understandable commit message for every commit you are doing describing what you have done in that commit. But what are those commit messages for and why are they so important when working with git ? Let's try to find out using a simple example.

Suppose you encountered a problem in your project and tried to find a solution. You searched and searched and ended up finding a file that was hundreds of years old and most likely the reason for your problem or error you need to solve. So what are you doing now? Let's refactor that file and also fix your problem. Is the problem fixed? Yes? Brilliant! This might have taken you only a couple of minutes but also maybe some hours or even days. But at least it's fixed and you can mark this task as done.
So quickly commit it and push it, so that everyone can see your awesome and your noble work of refactoring. But damn it, we have to write a commit message ...
Okay, well, let's do it quickly so as not to postpone our great solution.

```bash
git commit -m 'Refactoring + problem fix'
```

Good job ! So far everything looks good in your commit, well, except this commit message.
What exactly does that commit message tells your teammates? If you're really honest, not a lot, but you're so excited to finally fix this problem that you don't have time to think about a very good commit message, and also who will read that anyway right? Let's face it, we all had these thoughts in mind and we are definitely not the only developers writing these commit messages. I am sure that every developer has done this at least once in their life and will do it even in the future.
To make it a bit clearer what I think these "bad" commit messages are, I would like to give you a few more examples of a bad type of commit messages:

- "small fix"
- "testing"
- "Removing the fetching parameters from file to find a good way of splitting the dependencies in the Fetch processor for api endpoint and also did some hacky solution of how the processor was building the query parameters of the url for accessing the endpoint in a more readable and easy way"
- "e-1432"
- "bug fix"
- "I don't know how, but it works now"
- "mmmmmmmmmmmmmmm"
- "fasdf"

What's the problem with them? Well none one of them is really telling me what exactly happened, right? Maybe at least that very long one. But let's be honest who wants to read all of that for every commit to get what happened here?
There is clearly a problem. So how can we write better commit messages? To do this, we first need to find out exactly what the purpose of a commit message is and why we are writing it.

## Purpose of a commit message

You probably have at least once opened a file and saw something in there that didn't make any sense for you and your first thought was to remove or rewrite
it. If you are smart before doing that you should investigate a bit what and why it was added.

But how?

When you are lucky the developer who wrote it was smart enough to forsee that this might be confusing, so he was adding a code comment to it, explaining what is going on.
But mostly likely as we all know, this is not the case, so how to find out what the hell is the purpose of that?

Maybe let's look at that commit that added that line, to find out who added that.
Nice ! There is the name of that person. So let's ask him/her? But most probably he or she is not working in your company anymore or even more likely also completely forgot what the hell she or him was doing there, so now you are two people being confused.
Lucky for you, the commit message was well written, explaining what the developer was doing at that time.

Exactly this is the main purpose of the commit message, it is basically the diary or history of a file. So when you go back in time you can see the steps and every change of that file, with comments or a description, essentially it is a changelog, helping you identify the reason of every single part of the whole composition of your code. And you can easily do that with proper commit messages that describe in a short and understandable way what exactly changed and why.

So commits are important, but how can we write proper commit messages then, instead of those examples above?
Here are some ideas or concepts that might help you to write better commit messages:

#### 1. Use a template within a code project

There are a lot templates out there defining how to write your commit messages. You can even define the template withing your git config:

```
git config --get commit.template
```

If you decided to use a commit template, there is probably no real goto what template you should use, make sure you sit together with your team and think about what fits you the best. But here are some tips or ideas what might help you:

- A good starting point is always to define the _What_ and _Why_ of every commit.
- If you work with Jira or something similiar where your tasks are labeled, define the task ID or number withing the commit message, this might help you later identifiying the task which brought that piece of code.
-

#### 2. Agree on a maximum and a minimum character count

Even thought this might sound annoying at the beginning, I think this really can help to really think about the meaning and the content of your commit messages, to avoid either unnecessary or meaningless information.

#### 3. Make it possible to quickly identify the reason of a commit

Clarify the basic types of a commit message like **bug-fix**, **feature**, **refactoring** etc. which should always be part of every commit message.
There is even an idea how to this in a short and elegant way with the help of [gitmojis](https://gitmoji.carloscuesta.me)

![Gitmoji example](./gitmoji.png)

#### 4. Use a tool to generate your commits

You can also simply use a tool that helps you generate your commit messages. For example [commitizen](http://commitizen.github.io/cz-cli/) asks you some simple questions and generates a generic commit message for you.

![Commitizen example](./add-commit.png)

## Conclusion

As a software developer you will most likely work together with other people on one single codebase. This makes it essential that the collaboration works as smoothly as possible.
Working on a codebase with proper commit messages will help you and all the other developers working currently or in the future with the code you've written.
Also try to find a way how to deal with that together with your teammates, open discussions about how to structure your commit messages or try out some tools that might help you with that.
But most importantly use what fits you the best. For example I'm working on this blog post all alone, so being really strict here is probably a bit useless. Always keep the context in mind.
