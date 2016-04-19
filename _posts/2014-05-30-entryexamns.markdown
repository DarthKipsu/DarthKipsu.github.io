---
layout: post
title:  "University Entrance Examinations"
photo: articles/entryexamns
excerpt: A summary of my entrance examns to Univeristy of Helsinki department of computer sciences, spring 2014.
date:   2014-05-30
categories: Article
tags: Algorithms University
---

I had entrance examinations for the computer sciences department at the University of Helsinki on monday. The test composed of three sections, two in which you needed to answer.

The **first section** was about handling big data,with some four pages of text about it and questions about my knowledge of the subject. I skipped this section before even completely reading through it, because answering the logic sections coming next seemed like a more interesting (and easier) approach.

The **second section** introduced the basics behind making a suffix array and how to use it for finding specific strings. There was three examples to help gasp the idea. The original string was cut into as many suffixes as the length of the string, with each suffix containing one less letter than the previous one. Then they were reordered in alphabetical order, and the search was made based on the alphabets of the word being searched. This way you coul find a string from as big dataset as human genome (3 million letters) by compairing just maximum of 32 points in the data. Quite efficient!

We were asked to present the steps needed to find the word babaa from abbaababbababbab (suffix array for this one was given in one of the examples). The word isn't in it, so the solution was to present how many steps the search would take to come to this conclusion.

Next we were asked to produce a suffix array from a word "yhteisvalinta". An easy task with all the examples.

The third task was to create the suffix array from string aacatcgatagctagaacat and then present the steps needed to fing "cga" from it. This was king of combination of question 1 and 2.

After that we needed to create a string to match an array given, with any alphabets between a to ö. The array was like this: (i is index and S[i] is the index of the suffix)

| i | S[i] |
| :--: | :--: |
| 1 | 8 |
| 2 | 7 |
| 3 | 6 |
| 4 | 5 |
| 5 | 4 |
| 6 | 3 |
| 7 | 2 |
| 8 | 1 |

Starting from a, I filled the array by adding the next alphabet to the beginning of the word and came up with a simple solution of "hgfedcba".

The final task of this section was a similar, but more complicated array filling task. Only this time you could only use a and b to fill it. The array was like:

| i | S[i] |
| :--: | :--: |
| 1 | 16 |
| 2 | 13 |
| 3 | 3 |
| 4 | 14 |
| 5 | 11 |
| 6 | 9 |
| 7 | 4 |
| 8 | 6 |
| 9 | 15 |
| 10  | 12 |
| 11  | 2 |
| 12  | 10 |
| 13  | 8 |
| 14  | 5 |
| 15  | 1 |
| 16 |  7 |

I used a same kind of approach for this one. starting from the suffix with the smallest index, I added either a or b depending on what the array index was. everything above the 15th suffix index (ba) received an a in front of them and everything below it got a b. The resulting string was "bbaababbababaaba". It seemed to compile with all the rules, so it had to be the right answer.

The **third section** was a series of problemsolving tasks. This was the most fun part of the examn.

First you needed to solve the propability of taking two cards of the same color, when you had four cards in front of you face down, containing two red and two wblack cards. It was quite easy since I had just finished the probability studies. I coundted all the possibilities of different combinations you could take (6) and divided it with the combinations that would be favorable (red and red or black and black) to get the propability of 33,3%.

The second question was about filling a figure of eight circles connected by lines with the numbers 1 to 8. No numbers that are next to each other in the order of magnitude may be placed so that they are connected by a line. I started solving this by adding 1 and 8 to the middle, as they have the least neighbouring numbers and then adding 7 and 2 to the only possible locatoins they would be allowed to be placed. It was easy to add the rest after that. The solution looks like this:

{% include centered-img.html path='articles/entry01' %}

You were also meant to calculate the time it would take to solve this figure (on worst case scenario) if you'd go through all the possible ways to add the numbers in and the time to fill it once would take 10 seconds. I'm not sure if I got the correct answer to this one, but I calculated it by multiplying the first circles 8 choises with how many choises all the following circles had (8*7*6*5*4*3*2) and then took out the four correct answers and multiplied that number by 10 seconds. I got 403160 seconds, meaning it would take allmost 112 hours to solve it in worst case scenario. Sounds kind of a big number (and who would stay at it for so long?) so it might be I thought about this the wrong way. (Later addition: I got full score from the examn, so I guess this was a correct solution.)

The final question was about dice game, where two players would throw a 6 sided dice and the one getting a bigger number wins. The dice used are no ordinary d6 though, but they have arbitrary selected values on them. The three dice have the following values:

A: 2, 2, 2, 5, 5, 5
B: 3, 3, 3, 3, 3, 6
C: 1, 1, 1, 4, 4, 4

The first player gets to choose a dice first, after which the second player chooses from what's left. The task was to show which dice the first player should choose to get an advantage no matter what player 2 chooses. I calculated that the B dice has 7 to 12 (58,3%) chance of winning both the A and C dice. This was quite easily calculated by drawing a square with one of the dice values on the side and another one on the bottom (like the image below).

Then to even up the situation, the second player is given a chance to redesign the dice C. Player 1 will still choose first, so you were meant to design a dice where the player 2 will still have over 50% chance of winning no matter what the player 1 chooses or prove why this would be impossible. So I thought I should design a dice that can win dice B but will lose to dice A. I came up with a dice C: 1, 1, 4, 4, 4, 4. The images below will show it has a 5 to 9 (55,6%) chance of winning B but only 1 to 3 (33,3%) chance of winning A.

{% include centered-img.html path='articles/entry02' %}

I think the examns went quite well. I have more entrance examinations for other schools next week, but I think the University of Helsinki will be my number one choise if I get in.
