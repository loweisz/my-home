---
title: 'Refractor your commits'
date: '2019-03-30'
abstract: 'Working with a lot of people on a big project, it makes sense to think about your way of writing commit messages'
heroImage: 'colors.jpg'
---

When you have worked on a software project, you probably also worked with git to have a proper version control when working with other people on the same code base. Git is a very powerful tool to help people collaborate on a common project and to be hones I cannot imagine how it was to work as a software engineer before git was invented.
What is most used workflow in git? Correct! When you finished a step within your task or solved a problem, you are "committing" your changes and then pushing them to the remote repository. We all probably doing or at least should do this at least once a day. But you also have to (or should) write a clear and understandable commit message for every commit you are doing. But what are those commit messages for and why are they so important when working with git ? Let's try to find that out with a simple example.

Let's say you had a problem and tried to find a solution for it. You searched and searched and found in the end a file that was hundreds of years old and is most likely the reason for your problem or the bug you have to solve. So what are you doing now? Let's refractor that file and also fix your problem. Did it fixed your problem ? Yes? Awesome! This might have taken you only a couple of minutes but also maybe some hours or even days. But at least it's done and we can close this, so what are doing now?
So quickly commit it and push it, so that everyone can see your awesome and your noble work of refactoring. But damn, in order to do that we also have to write a commit message...
Okay fine let's quickly do it to not postpone our great fix.

```bash
git commit -m 'Refactoring + problem fix'
```

Nice work ! Everything looks good in your commit, well except that commit message.
What exactly does that commit message tells me? If you really hones nothing really, but you are so excited to finally have fixed that issue that you don't have time to also think about a very good commit message and also who will read that anyway right? Let's be honest we all had those thoughts in our minds and we are definitely not the only developers writing those commit messages, I'm sure every developer has done this at least once in their life.
To make it a bit more clear what I think those "bad" commit messages are, let me give you some more examples of a bad way of writing commit messages:

- "small fix"
- "testing"
- "Removing the fetching parameters from file to find a good way of splitting the dependencies in the Fetch processor for api endpoint and also did some hacky solution of how the processor was building the query parameters of the url for accessing the endpoint in a more readable and easy way"
- "e-1432"
- "bug fix"
- "I don't know how, but it works now"

What is the problem with those ? Well none one of them is really telling me what exactly happened, right? Maybe at least that very long one. But let's be honest who wants to read all of that for every commit to get what happened here?
Clearly there is a problem, So how can we write better commit messages? To do that let's first find out what exactly is the purpose of a commit message and why do we write it?

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
