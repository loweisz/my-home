---
title: 'Refractor your commits'
date: '2019-03-30'
abstract: 'Working with a lot of people on a big project, it makes sense to think about your way of writing commit messages'
---

When you have worked on a software project, you probably also worked with git to have a proper version control when working with other people on the same code base.
What is most used workflow in git? Correct! You are committing your changes and then pushing them to the remote repository. But you also have to (or should) write a commit message for every commit you are doing.

Let's say you had a problem and tried to find a solution for it. You searched and searched and found in the end a file that was hundreds of years old and is probably the reason for your problem. So what are you doing now? Refractor that file and also fix your problem. Did it fixed your problem ? Yes? Awesome !
So quickly commit it and push it, so that everyone can see your awesome and your noble work of refactoring. But we have to write a commit message...

```bash
git commit -m 'Refactoring + problem fix'
```

Nice work ! Everything looks good in your commit, well except that commit message.
What does that commit message tells me? Nothing really, but you are so excited to finally have fixed that issue that you don't have time to also think about a very good commit message and also who will read that anyway right? Let's be hones we all had those thoughts in our minds and we are definitely not the only developers writing those commit messages, I'm sure every developer has done this at least once in their life.
To make it a bit more clear what I think those "bad" commit messages are, let me give you some more examples of a bad way of writing commit messages:

- "small fix"
- "testing"
- "Removing the fetching parameters from file to find a good way of splitting the dependencies in the Fetch processor for api endpoint and also did some hacky solution of how the processor was building the query parameters of the url for accessing the endpoint in a more readable and easy way"
- "e-1432"
- "bug fix"
- "I don't know how, but it works now"

Not one of them is really telling me what exactly happened, right? Maybe at least that very long one. But let's be honest who wants to read all of that for every commit to get what happened here? So how can we write better commit messages? To to that let's first find out what exactly is the purpose of a commit message and why do we write it?

## Purpose of a commit message

You probably have at least once opened a file and saw something in there that didn't make any sense for you and your first thought was to remove or rewrite
it, if you are smart before doing that you should investigate a bit what and why it was added.

But how?

When you are lucky the developer who wrote it was smart enough to forsee that this might be confusing, so he was adding a code comment to it, explaining what is going on.
But mostly likely as we all know, this is not the case, so how to find out what the hell is the purpose of that?

Maybe let's look at that commit that added that line, to find out who added that.
Nice ! There is the name of that person. So let's ask him/her? But most probably he or she is not working in your company anymore or more likely also completely forgot what the hell she or him was doing there, so now you are two people being confused.
Lucky for you, the commit message was well written, explaining what the developer was doing at that time.

Exactly this is the main purpose of the commit message, it is basically the diary or history of a file. So when you go back in time you can see the steps of every change of that file, with a comments, which are the commit messages.
