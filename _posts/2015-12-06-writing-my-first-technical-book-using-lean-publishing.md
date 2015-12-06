---
layout: post
title: Writing my first technical book using Lean Publishing: Functional Reactive Programming in Swift
excerpt: I explained how I decided to start writing my first book and the tools I decided to use to follow the lean publishing principle
modified: 2015-12-06
tags: [lean, lean publishing, leanpub, reactive, reactivecocoa]
comments: true
image:
  feature: headers/apple_watch.jpg
  credit: Pedro Piñera
sitemap   :
  priority : 0.5
  isfeatured : 0
---

A few months ago I started writing my first book, [Functional Reactive Programming in Swift](https://leanpub.com/functionalreactiveprogrammingswift). I’ve always loved teaching and sharing knowledge but never thought I would be able to write a book like this one I’m writing. When I first heard about Reactive programming I didn’t find any reason why I should start using them in my projects, but with the time, I fell in love with the programming paradigm and I was able to experiment the advantages on my own. My loved increased when [ReactiveCocoa](https://github.com/reactivecocoa/reactivecocoa) the framework I was using for Reactive released its first version with **Swift compatibility**, version 3.0. It supposed introducing a new set of concepts that used the cool features of Swift, the one I liked most was the typed Signals/SignalProducers and the fluent interface. From the data layer to the presentation one, I used ReactiveCocoa everywhere. It became my indispensable framework in every new project I started. A lot of developers were wondering about the advantages of Reactive and Functional programming in their projects and most of them didn’t see them at all. In case of Reactive Programming I noticed a lack of real examples that motivate developers to use it. It was then when I thought writing a book it could be a great idea.

## The platform: Leanpub
Before starting writing the book I had used Leanpub as a reader, I liked the range of technical books they were offering and also the option to decide how much money you wanted to pay for the book. I’ve in total 8 purchases, the most recent one is [this book](https://leanpub.com/lean) where the lean publishing ideas are explained. For those who are not familiar with lean publishing concepts:

> Lean Publishing is the act of publishing an in-progress book using lightweight tools and many iterations to get reader feedback, pivot until you have the right book and built traction once you do.

That concept might sound similar to those who have experience with startups. At the end a book is a startup, and Leanpub made the magic to have both concepts together offering **lightweight tools** for edition, like for example the use of Github or Dropbox for hosting your book and Markdown as the edition language. They also allow **many iterations** easily with their platform, you can publish as many times as you want solving the big distribution problem we had had before with printed books. Publishing early allow you to get early feedback and iterate the book according to your readers needs and what they expect from the book. It might sounds awkward publishing something that is not finished but by publishing early:

- Readers will send all the *grammar mistakes* and typos they find in your text.
- They’ll also make some suggestions so you can *improve your content* or organise it on a different way that makes more sense for their understanding.
- If the content is not very interesting enough they’ll let you know and you can then *pivot* your book and offer a content that readers would pay for.

![]({{site.url}}/images/posts/reactive-overview.png)

## Book hosting and edition language: Github and Markdown

I got used to using Markdown for text edition, I use it in my projects, repositories, for documentation, everywhere… Leanpub allows you to write your book using Markdown, in fact it’s the default markup language. You write your book like if you were editing the README.md of your project, or adding a new Wiki page to your Github repository. That’s awesome! Moreover, you can have the book in a Github repository. Leanpub will clone the repository, process the book structure and render the book automatically for you. In case of finding any problem during the rendering process, they’ll send you an email with the details.

I also added in the same repository an **example project** that links book examples with coded examples in this project. I explain in the repository how to fetch the project and have it working locally. Another useful feature that will use from Github are **issues**. I’ll use it for direct feedback from users, they can report anything they found there and I can keep a track of things that are pending to be done. The book can also be versioned, why not? Github **releases** is the perfect solution for that, every new iteration of the book can be versioned with a new release in the repository.

![]({{site.url}}/images/posts/reactive-github.png)

## Edition tool: Sublime Text

I tried multiple markdown editors that render your Markdown in real time but I ended up using Sublime Text again. The reason? All of them become very slow when they’ve to process a large Mardown page, in particular I tried [Atom Editor](https://atom.io/) and its extension for markdown, [Macdown](http://macdown.uranusjr.com/) a free open source Markdown editor for OSX, [Ulysses](http://www.ulyssesapp.com/) a very professional editor for OSX and iPad that allow you edition from an iOS device.

Sublime is perfect for me, it is fast, whenever you need a Markdown preview you can generate it with [this extension](https://github.com/revolunet/sublimetext-markdown-preview) and it colours your markdown syntax. And if you’re a programmer I’m sure you’re used to use it. Using the language you usually use for documentation and the same editor you also use for coding is perfect for programmers.

![]({{site.url}}/images/posts/reactive-sublime.png)

## Organisation: Trello

I wrote this book in my free time, which means a few time. I only could spend no more than one hour daily and more than one flight with the computer when I couldn’t sleep. When you can invest only that amount of time in something like in this case, a book, it’s very important to be very well-organised, and keep a track of the current status, pending tasks, tasks in progress, … I decided Trello was the perfect tool for that thanks to its format based on Kanban. I could have different lists that reflect different states of tasks and also make the book board public. Why public? I think transparency is key to form a great community that love your product, they can see what’s behind the book, what’s coming next, and how their money is truly invested in making the product better, listening the most important part on this, your readers.

## Try it out
The first version is already available, there’re still missing sections in the design chapter but the rest is ready, I encourage you to try it out, it’s updated to the last version of ReactiveCocoa and offer useful examples of how to use ReactiveCocoa from the data layer of your apps. I’d love to hear about your feedback, you can report it directly to me, [pepibumur@gmail.com](mailto://pepibumur@gmail.com) or use Github Issues / Trello. You’ll have an special mention in the thanks section of the book for providing feedback and contributing with the final version of Functional Reactive Programming for Swift.

[Functional Reactive Programming in Swift Link](https://leanpub.com/functionalreactiveprogrammingswift)

> If you have been thinking about publishing a book but you wasn’t clear about the platform to use, [Leanpub](http://www.leanpub.com/) is definitively a good option, specially if you’re a programmer. [@soyjavi](https://medium.com/u/d7280726168a) has also published multiple books using this platform and he didn’t find anything like Leanpub either, in terms of ease of edition and also revenue generation.

![]({{site.url}}/images/posts/reactive-footer.png)
