---
layout: page
title: About
photo: main
permalink: /about/
---

I have a previous degree in environmental sciences, but begun studying programming just before Christmas in 2013 and completely fell for it! I'm still exploring the field and having fun learning new things. Seems like in programming, learning new can never stop - how fun is that! I like problem solving and math, so this is definitely *my thing*.

In my free time, when not learning about programming, I like to get outside with my dog and spouse and go walking in the forest, hiking or cycling. Nature is really important to me and I think caring for the environment and spending time in the nature is one of the best ways to keep ones mind at ease.

![me](/images/about.jpg)

<table class="no-highlight">
  <tbody>
    <tr>
      <td><strong>Name:</strong></td>
      <td>{{ site.author }}</td>
    </tr>
    <tr>
      <td><strong>Email:</strong></td>
      <td><a href="mailto:{{ site.email }}">{{ site.email }}</a></td>
    </tr>
    <tr>
      <td><strong>Phone:</strong></td>
      <td>{{ site.phone }}</td>
    </tr>
    <tr>
      <td><strong>Address:</strong></td>
      <td>{{ site.address }}</td>
    </tr>
  </tbody>
</table>

<table class="no-highlight">
  <tbody>
    <tr>
      <td><stronG>Website:</strong></td>
      <td><a href="{{ site.url }}">{{ site.title }}</a></td>
    </tr>
    <tr>
      <td><strong>GitHub:</strong></td>
      <td>{% include icon-github.html username=site.github_username %}</td>
    </tr>
    <tr>
      <td><strong>LinkedIn:</strong></td>
      <td>{% include icon-linkedin.html %}</td>
    </tr>
    <tr>
      <td><strong>Facebook:</strong></td>
      <td>{% include icon-facebook.html %}</td>
    </tr>
  </tbody>
</table>

