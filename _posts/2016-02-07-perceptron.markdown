---
layout: post
title:  "Perceptron"
photo: articles/perceptron
excerpt: Basic binary linear classification algorithm for supervised machine learning, with multiclass classification example.
date:   2016-02-07
categories: Article
tags: MachineLearning Algorithms
---

Perceptron in it’s simplest is a great way to do supervised binary classification, with a linearly separable dataset (one that has 0 error with the best solution). With small modifications and additions to the algorithm, it can however be used for multiclass classification as well as with a dataset that is not linearly separable. In this article I will look into how I achieved this with my recent machine learning project, the rock-paper-scissors playing Lego Mindstorms robot.

In my project I used perceptron to interpret images taken with a laptop webcam, of a hand of a player playing rock-paper-scissors against my AI. In line with the game rules, there would be 3 different types of images, rocks, papers and scissors. So the algorithm would need to do better than just binary classification. Also there would be no guarantee of the dataset being linearly separable.

### Basic principle behind Perceptron.

The algorithm takes as input data points and for each data point a label +1 or -1.

The most center part of the algorithm is a weights vector w, which represents the linear boundary for classifying data points. After initiating w (could contain all zeros at this point), we start going through each of our data points, predicting a sign for it using w.

{% include centered-img.html path='articles/perceptron01' %}

If the prediction was not correct, we update w by adding label<sub>i</sub> * data<sub>i</sub> to it. This will move the boundary in such way that it moves towards datai if the label was +1 and away from it if it was -1. (The boundary does not need to be fixed in the center, I drew it that way to simplify it.)

If the prediction was correct, we do nothing, but move on to the next data point.

We repeat this, until we have gone through all the data points once and not updated the boundary. This will always happen if the dataset is linearly separable, but if not, the algorithm will never converge. This is a problem we need to solve next.

### The pocket addition

The pocket algorithm can be used with any Online algorithm, like Perceptron, to deal with non-convergence, with data that is not linearly separable.

The pocket works like a high score keeper for boundaries. It keeps track of how many correct predictions the boundary has made, before it’s changed. Once the boundary is moved, the algorithm will check how many correct predictions it made and if it did better than the previous high score, (stored in the pocket) it will save a copy of w and its record to the pocket instead.

We need to choose how many times we want to go through all the data points and once we have and the algorithm has not converged, (all rounds have involved changing w in some way) we simply return the w stored in the pocket and say that’s the best we can do.

With pocket addition, we can use Perceptron for labeling our images, because we don’t need to know if the data points will converge or not. We are almost done. Let’s see how our data looks like.

### Data for rock-paper-scissors image recognition

With the rock-paper-scissors game, I used a webcam to take images of player hand after a game. The images are processed so that they are scaled smaller (for faster processing) and only use black and white to look something like this:

{% include centered-img.html path='articles/perceptron02' %}

For Perceptron algorithm to use these images, we convert them into a vector containing the color of each pixel in bytes. The image size is 80x65 that makes 5200 pixels and 650 bytes. This size is well manageable with the algorithm and the length of our weight vector w will be 650. The paper sign above converted to bytes looks like:

{% gist DarthKipsu/91bb965839843e06b296 %}

The labels for the images are 0=rock, 1=paper, 2=scissors, so the label for the data point above is 0. Now what we want Perceptron to do is look at that data and come to that conclusion. But since Perceptron is only capable of doing binary classification and label it either +1 or -1, we need to reduce the 3 label problem. We will use one-vs-one technique to do it, described below.

### One versus one technique

One-vs-one (sometimes all-vs-all) is a technique for reducing an n-class problem into n separate binary classification problems.

{% include centered-img.html path='articles/perceptron03' %}

For example consider a case like ours above where we have 3 classes 0, 1 and 2 and we want to use a binary classifier which is a well understood method for classifying an unseen data point x. It’s impossible to draw a one line to separate the data into 3 classes, but within our problem we can only take two of the classes at a time, and suddenly the separation is possible again.

{% include centered-img.html path='articles/perceptron04' %}

Each class at a time we change the label for that class to be +1 and compare it against all the other classes at a time labeled as -1. We ignore the third class. In theory we should do this for both {0=+1, 1=-1} and {0=-1, 1=+1} cases, but the results will mirror each other so running the algorithm for each different pair is enough. Selecting which class gets +1 and which gets -1 labels then doesn’t matter.

Running Perceptron for all three cases gives us three weight vectors w<sub>0vs2</sub>, w<sub>2vs1</sub> and w<sub>1vs0</sub>. To get the class for x, we multiply it against all the weight vectors and calculate how big score each of the classes gets, for example:

{% include centered-img.html path='articles/perceptron05' %}

The first resulted in +1 so we give one vote that x belongs to the first class of 0vs2 which is 0. The second is -1 so we vote x is actually the second class of 2vs1 which is 1, similarly the third multiplication resulted in +1 voting for 1. The final votes are 2 votes for 1, 1 vote for 0 and no votes for 2 and we label the image as 1.

If we go back and wonder about the mirror classes we just decided to ignore w<sub>2vs0</sub> for example, we notice that running x against w<sub>2vs0</sub> would result in -1, giving a vote for 0. Similarly we would have gotten two more votes for 1 from the other two ignored classes. The outcome of the algorithm would still have been to label x with 1. This is why we only need to run it against one of the mirror classifiers, so reducing the problem with one-vs-one technique means if you want to solve n-class problem, you need to run the binary classifier you use n times.

### Wrap up

Now we have everything we need for recognizing the player hand signs. We have a database with images as byte arrays and their labels, the pocket modified Perceptron algorithm, and we have planned to use one-vs-one technique for tackling the multi class problem.

My database of images is quite small, as I’ve built everything myself, including the data. At the time I was writing this I had only 133 images in my database to run the Perceptron with. I took 100 of them as my training set and 33 as my test set and had an error rate of about 15%. Which I think is not that bad, considering how small data set I have and how diverse some of the images are.

The model should get more precise as I get more images and also it should start to recognize other people’s hand signs better as more people get to play the game. This was quite a good exercise for my first machine learning project, although more than about Perception, I probably learned about collecting data and how to turn it into usable format.

{% gist DarthKipsu/fb0a60b6a2865a79f18b %}
