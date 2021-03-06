---
layout: post
title:  "Abandon All Hope"
photo: projects/abandonallhope
github: //github.com/darthkipsu/abandon-all-hope
excerpt: A tower defence inspired zombie survival game. How many days can you survive?
date:   2014-12-12
languages: [Java]
categories: Project
tags: Java
---

Abandon All Hope is a tower defence inspired zombie survival game, where you start off with a small team of five survivors and need to build walls and traps to protect them against every day increasing hordes of zombies. The game is an desktop application, so to try it you need to download the .jar file from my Git Hub repo linked above.

The survivors can be given two types of weapons to protect themselves; fireguns for shooting the zombies and melee weapons to use when you're either out of ammo or you haven't had time to reload your ranged weapon. If any zombies ever get in a same spot with survivors, the survivors get bitten and turn into zombies themselves. The game ends when all survivors have been transformed into zombies. The survivors can also be moved around the game field and you can change their weapons whenever you wish to.

Zombies on the other hand just try their best to get to the juicy brains of your survivors. There's three cities nearby and each day the majority of the zombies come from the direction of any one of these cities. Some also appear elsewhere, as some people have turned into zombies in the countryside as well. The zombies travel towards the nearest survivor, the closer by the survivor is, te more precicely they can move towards it. They also try to avoid walking on top of other zombies, but they know nothing about traps and only notice walls when they pump into one. If they hit a wall they try to go around it by taking steps randomly to each side of the wall. Zombies aren't the most intelligent folk, so walls can stop them quite efficiently for a while.

Walls however can only hold so many zombies. If too many zombies are leaning towards them, they might fall and the horde can just walk through! Traps never break, but can only fit a fixed amount of zombies for one day and the rest will just walk through it. The best strategy for the game is to use both. There's currently two types of traps and one type of wall, but the game allows for easy implementing of more.

The traps and walls cost resources to build, which are received from killing zombies. You also receive more ammo from killed zombies. Recources from trapped zombies are collected at the end of a day. A day ends when all zombies are trapped or killed, but there's always a new day coming, with even bigger horde.

**Comments:**

The project was for a school java programming laboratory, but I liked working with it so it ended up being a lot more extensive than what was required. It was fun making it and increased my understanding of how java applications work more than anything I'd done before. It's still incompleted, there's no more than one weapon of each type for example. (If you don't count Michonne's katana that is, try typing 'michonne' sometimes during the game to see what happens!) I built the project keeping in mind that it could be expanded, so more objects could quite easily be added if I'd have time, and I'm hoping to complete the game with more walls, traps, weapons and maybe difeerent types of zombies, sometime in the (near or far) future.

**What I could have done better:**

Keeping all concerns seperated was easier at the beginning of the project than in the end. I kept expanding the game features one by one without really planning them ahead, which caused me to lose the cohesion of the project on some parts. I also should have added the extra building and weapon types soon after completing the course, so that they wouldn't have been left out because of other projects getting on my way.

**Lesson learned:**

Plan the app. At least plan the main parts of it. Don't just start coding and hope you can keep all the strings in your hands.
