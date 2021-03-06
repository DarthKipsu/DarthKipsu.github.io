---
layout: post
title:  "Don Quijote"
photo: projects/donquijote
github: //github.com/darthkipsu/massive-ironman
excerpt: A wind mill fighting Lego Mindstorm robot.
date:   2015-01-10
languages: [Java]
categories: Project
tags: Java
---

Don Quijote is an attacking robot, whose sole purpose in life is to fight wind mills. He's built using Lego Mindstorm (EV3) building blocks and motors.

The robot has and infra red sensor and a color sensor attatched to it's outward streching head, which he uses to find targets around him. The wind mills are of different colors and the robot will attack them based on their color as follows:

- Black: attack overthrowing the wind mill from the left
- Blue: similar attack from the right
- Green: Full assault forward, ramming the target
- Red and brown: basic attack from front, knocking the target with head
- Yellow: Robot fears them, so retreat while shivering
- White: surrendered target, leave alone
- Color unsure: Full assault stretching head and turning 360 degrees around the robot body

{% include youtube-video.html id='TdavbKa0eN8' %}

If no color can be detected, a warning beep is played and the search for new targets continues. The robot will search targets for 360 degrees around itself from the starting position and retreat to the same position allways after an attack. If it can't detect a color but sees something in front of it with the infrared sensor, it will try to reposition itself to find the color.

Most of his behaviour has been hand tested by playing the program, but I also made interfaces for the robots sensor and motor classes that enabled me to make jUnit tests that cover the logic behind finding and detecting targets.

![Don Quijote](/images/projects/donquijote2.jpg)

**Comments:**

This was made for a winter programming laboratory at University. I just had to take the course as I love lego's and had dreamed of getting a Mindstorm robot for myself one day. However, I was dissapointed with the quality (or rather lack of it) of the sensors and that because of them I couldn't fullfill my original plan for how the robot would find and attack it's targets. This was a big demotivator for me, but I think I did a good job considering the premise.

**What I could have done better:**

I should have studied more about how the motors work and how to run the robot with two simultaneus strings. This way his movements could maybe have been smoother.

**Lesson learned:**

Try not to get demotivated by things that are out of your control.
