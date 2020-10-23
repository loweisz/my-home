---
title: 'Comparing current state management options'
date: 'September 13th, 2020'
abstract: 'tbd'
heroImage: 'controls.jpg'
index: 8
---

## Zustand
- Size: **1.5kB**
### Who is behind it:
- react-spring
### Comments:  
- Manipulate functions needs to be in state object because of set function, might make it a bit 
messy because of mixed states and manipulates
- only usable with hooks, no class component support
- No structure in your global state (everyone can access it)
- some options not covered or maybe to simple
+ no Provider need
+ handling asynchronity is as easy as it can be
+ more sugar function outside of the react scope for using like logging etc. or non render data
+ use without react
+ use the redux devtools as well :O 
Difference between jotai and zustand: https://github.com/react-spring/jotai/issues/13

## Recoil
### Who is behind it:
- facebook
- Size: **29.8kB**
### Comments:  
- only usable with hooks, no class component support
- No structure in your global state (everyone can access it)
- Provider at the beginning 
- quite sophisticated
+ a lot of options with almost every use case to cover
+ a lot of sugar function to extend your use case
+ modular and decoupled design which simplifies the development effort
+ Updating state using context involves updating the entire component tree. This can be extremely inperformant, and  should be avoided if possible
+ easier to understand compared to redux etc because the atom pattern is quite simple

## Overmind
- Size: **25.3kB**
## Jotai
- Size: **4.9kB**
## Context
- Size: **0**
