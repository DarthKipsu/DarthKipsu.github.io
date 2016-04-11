---
layout: post
title:  "Baana Predictions"
photo: projects/baana
github: //github.com/darthkipsu/baana-predictions
link: //baana-predictions.herokuapp.com/
excerpt: Practical machine learning project, with an aim to predict the number of cyclists using Baana cyclist route daily.
date:   2016-03-14
languages: [Python, HTML, CSS]
categories: Project
tags: Python HTML CSS
---

The project was built for a Project in Practical Machine Learning course. The course was all about learning to use open source data available for creating some sort of machine learning system. Data needed to be cleaned and transformed into usable form and the system needed to be set online somewhere to display results continuously. This is what Baana Predictions service is all about.

The system uses data from the i[Finnish Meteorological Institution open data service](//en.ilmatieteenlaitos.fi/open-data) to get weather forecasts, which it will then use together with cyclist counts (saved by the program) from last week to predict how many cyclists there will be using the route tomorrow. The same service provided the needed information about past weather to use as a training material.

The system is a supervised machine learning system. Baana cyclist track has a counter that counts daily cyclist amounts. This data is displayed online in real time at the [manufacturers site](//www1.infracontrol.com/cykla/barometer/barometer_fi.asp?system=helsinki&mode=day). Previous cyclist counts are also available at a Finnish open data service [Avoin Data](//www.avoindata.fi/data/fi/dataset/helsingin-pyorailijamaarat), but these counts are only update half yearly so the real time counter needs to be used to get correct cyclist counts in daily basis. This is done using a cronjob running each day at midnight to go and read the value from the counter.

Cyclist counts have been recorded at Baana since the beginning of 2013, so we have a bit more than three years of data to base our predictions against. All new data collected during predictions is also saved to be used for future predictions, so the predictions should get more precise in the future. Below is a plot with three years of weather data and cyclist counts plotted on top of each other to display how it looks like there is a correlation with weather and cyclist counts:

![weather and cyclists](/images/projects/baana2.jpg)

To make the predictions, I used a linear classifier and features for the final version contained predicted average weather, rain amount, snow cover and the number of cyclist last week at the same day of week. Separate classifiers were made for working days and weekends as they seem to behave differently, most likely due to significantly smaller amount of commuters on weekends.

A plot displaying how well 10% of randomly chosen days from within the training data as testing data does when training with the other 90% of data:

![test error](/images/projects/baana3.jpg)

With 0 error, all the dots would align to the dashed line. Root-mean-square deviation for the cyclist predictions is 377 cyclist with the final version of the classifier.

A more comprehensive explanation of the work done during the project and also some statistical calculations to prove the significancy of the results gotten from the study are available [as a PDF documentation](/assets/ppml.pdf).

**Comments:**

The project was an interesting course work. Creating the machine learning part was such a small part of the project and everything else needed around it took most of the time. I think this is quite realistic for real machine learning projects as well. Still, most of what I learned was most likely about creating scientific articles and prooving your work.

**What I could have done better:**

I should have recorded the weather forecasts I collected daily from FMI. This would have allowed me to reproduce old predictions with the different version of the classifier to see how they affected the results.

It would also have been better to store the cleaned data as CSV format instead of plain text. The system is built on the assumption that we have data for each day and each days data is stored on new line within the plain text file. After finishing the project I had a few days of blockage at the server used to collect daily data and as a result of that, some days were skipped from the middle of the data files. This results in the classifier thinking it's actually another day of week than what it really is and the predictions are calculated using incorrect days.

**Lesson learned:**

You need to be really careful when managing the data you have to make sure no disrubtions can happen. You need to consider more carefully about everything that could go wrong and plan ahead on how to fall back to the safest way to get around the problem.
