---
title: 'Why and how to write useful commit messages. (5 helpful tips)'
date: 'May 11th, 2020'
abstract: 'When working with a lot of people on a big software project, it makes sense to think about your way of writing commit messages.'
heroImage: 'colors.jpg'
index: 3
---

If you have worked with other developers on a software project, you have probably used **git**, in order to have a proper version control, especially when you are working in parallel on the same code base. As most of you know git is a very powerful tool to helps people collaborate on a common project and probably used on most of the software projects all around the world, Let's be honest I cannot imagine how it was to work as a software engineer before git was invented.

**Pure. chaos.**

## Working with git

What is probably the most used workflow in git?

When you have completed a step within your task or solved a problem or at least a part of it, you are "committing" your changes and then pushing them to the remote repository.
We all probably do this, or should do it at least once a day.

Along with this you also have to write a clear and understandable commit message for every commit you are doing describing what you have done in that commit.
But what are those commit messages for and why are they so important when working with git ? Let's try to find out using a simple example.

## Using commit messages

Suppose you encountered a problem in your project and tried to find a solution. You searched and searched and ended up finding a file that was hundreds of years old and most likely the reason for your problem or error you need to solve. So what are you doing now?

Let's refactor that file and also fix your problem. Is the problem fixed? Yes? Brilliant! This might have taken you only a couple of minutes but also maybe some hours or even days. But at least it's fixed and you can mark this task as done.

So quickly commit it and push it, so that everyone can see your awesome and your noble work of refactoring. But damn it, we have to write a commit message ...
Okay, well, let's do it quickly so as not to postpone our great solution.

```bash
git commit -m 'Refactoring + problem fix'
```

**Good job!**

So far everything looks good in your commit,

Well, except this commit message.
What exactly does that commit message tells your teammates?

If you're really honest, not a lot, but you're so excited to finally fix this problem that you don't have time to think about a very good commit message, and also who will read that anyway right?

Let's face it, we all had these thoughts in mind and we are definitely not the only developers writing these commit messages. I am sure that every developer has done this at least once in their life and will do it even in the future.
To make it a bit clearer what I think these "bad" commit messages are, I would like to give you a few more examples of a bad type of commit messages:

```
- "small fix"
- "testing"
- "Removing the fetching parameters from file to find a good way of splitting the dependencies in the Fetch processor for api endpoint and also did some hacky solution of how the processor was building the query parameters of the url for accessing the endpoint in a more readable and easy way"
- "e-1432"
- "bug fix"
- "I don't know how, but it works now"
- "mmmmmmmmmmmmmmm"
- "fasdf"
```

What's the problem with them? Well none one of them is really telling me what exactly happened, right? Maybe at least that very long one. But let's be honest who wants to read all of that for every commit to get what happened here?
There is clearly a problem. So how can we write better commit messages? To do this, we first need to find out exactly what the purpose of a commit message is and why we are writing it.

## Purpose of a commit message

You probably opened a file at least once and saw something there that didn't make sense to you and your first thought was to remove it or rewrite it. If you are smart before doing that you would investigate a bit what and why that code was added.

But how?

If you're lucky, the developer who wrote it was smart enough to anticipate that this could be confusing. So she or he added a code comment and explained what's going on.
But as we all know, this is most likely not the case. So how do you find out what the hell the purpose of this is?

Maybe let's look at the commit that added this line to find out who added it.
Nice! There is the name of that person. So let's ask him/her? But most probably she or he is not working in your company or your team anymore or has even forgotten what the hell he or she did there. Now you are two people who are confused.
Fortunately, the commit message was well written and explained what the developer was doing at the time.

This is exactly the main purpose of the commit message, it is basically the diary or history of a file. So if you travel back in time, you can see the steps and any changes to this file with comments or a description. It is essentially a change log that you can use to determine the reason for each part of the overall composition of your code. And you can easily do this with appropriate commit messages that describe in a short and understandable way what exactly has changed and why.

## Improve your commit messages

Commits are important, but then how can we write the right commit messages instead of the examples above?
Here are some ideas or concepts that could help you write better commit messages:

#### 1. Use a template within a code project

There are many templates that define how you write your commit messages. You can even define the template with your Git configuration:

```
git config --get commit.template
```

If you've chosen a commit template, there's probably no real way to decide which template to use. Make sure you sit with your team and think about what suits you best.

#### 2. Agree on a maximum and a minimum character count

While this may sound annoying at first, it can really help you think about the meaning and content of your commit messages to avoid unnecessary or meaningless information.

#### 3. Make it possible to quickly identify the reason of a commit

Clarify the basic types of a commit message, such as **Troubleshoot**, **Feature**, **Refactoring**, etc., which should always be part of each commit message.
There is even an idea how this can be done in a short and elegant way with the help of [gitmojis](https://gitmoji.carloscuesta.me)

![Gitmoji example](./gitmoji.png)

#### 4. Use a tool to generate your commits

You can also simply use a tool that helps you generate your commit messages. For example [commitizen](http://commitizen.github.io/cz-cli/) asks you some simple questions and generates a generic commit message for you.

![Commitizen example](./add-commit.png)

### 5. Identify your commits

If you are working with Jira or a similar tool that identifies and manages your tasks, define the task ID or number in the commit message. This can help you later identify the task that brought this code.

## Conclusion

As a software developer, you will most likely work with other people on a single code base. It is therefore important that the cooperation works as smoothly as possible.
Working on a code base with appropriate commit messages helps you and all other developers who are currently or will be working with the code you have written.

Also, try to find a way to deal with it with your teammates, start discussions about how to structure your commit messages, or try out some tools that might help you do this.
Most importantly, use what suits you best. For example, I'm working on this blog post all by myself, so it's probably a bit useless to be really strict here. Always think of the context.
