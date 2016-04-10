---
layout: post
title:  "The Battleship"
photo: projects/battleship
github: //github.com/darthkipsu/Laivanupotus
excerpt: A classic battleship game against a computer AI. Whoever sinks all the opponent ships first is the winner.
date:   2014-02-16
languages: CSS HTML JavaScript jQuery
categories: Project
tags: CSS HTML JavaScript jQuery
---

A battleship game with six ships, ranging from one to five tiles long. The rules are of a typical Battleship game, you get to hit once on your turn, inside a 10×10 grid to see if you hit or miss. Whoever sinks all the opponent ships first is the winner.

Creating the ai for this game was the most fun and challeging part of it. Making a dumb ai to just randomly target the grid would have been quite simple but I wanted something better. This ai knows when it has hit a ship and it will continue to shoot the areas around it until it sinks. If it shoots two shots next to each other it will keep firing to the same direction to sink the ship as fast as possible, just like a human opponent woul do. It can even tell, if it's hit other ships while sinking one of them, to keep trying to sink them aswell. It's quite good ai for the job.

The ships can be placed on the grid both vertically or horizonally and they can only be placed inside the grid on an available space, not on top of each other for example.

The game works well with recent versions of Firefox, Chrome and Opera, from those browsers I tested it with, but doesn't function with IE.

**Comments:**

This was an extremely usefull project for me. Unlike the Ghost Story game, I had to go through the language documentary to find out how I could archieve the more complex actions. I liked the project a lot!

**What I could have done better:**

I still have some repetition with the code that might have been avoided. Sometimes I use unnessessary complicated formulas to get some of the info I need out of the gamegrid or the ships. This is also one reason why the functions are getting really long and hard to read. I did learn to access node list in the end of the project that would have been usefull for avoiding the unnessessary complexity in the beginning.

**Lesson learned:**

Test the application with other browsers during development, if you plan for it to work with them. Don't wait to notice it won't work on IE until after the application is completed.
