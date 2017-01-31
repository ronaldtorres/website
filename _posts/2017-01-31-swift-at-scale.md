---
layout: post
title: Swift at Scale
excerpt: Mastering apps scalability
tags: [swift, scalability, apps, xcode]
comments: true
image:
  feature: headers/wrapping2016.jpg
  credit: Photo by Maria José
sitemap   :
  priority : 0.9
  isfeatured : 1
---

![Cover of the book](/images/posts/swift-at-scale-header.png)

A few weeks ago, I started working on a new project, [Swift at Scale](https://leanpub.com/swiftatscale). *Swift at Scale* is a book that will guide you through apps design and develop principles to make sure your apps scale well when your team and your project grows. If you have had the opportunity to work on a big project, or with a large team, you might have noticed that some tools, frameworks or architectures don’t scale well. Mentioning a few examples:

- Conflicts in the shared Core Data model.
- Conflicts in a shared Interface Builder file (XIB/Storyboard)
- Slow compilation and testing times.

![Graph that represents how the productivity of the team get better when the team grows. However, if scalability issues arise, the productivity is not linear any more with the team size.](/images/posts/swift-at-scale-graph.png)

It starts affecting your team’s productivity, and it doesn’t become better with the size of the team *(more people joining doesn’t impact the performance as it did before)*. There might be a scalability issue, and you must tackle it as soon as possible. Otherwise, it could affect your team motivation, and the impact the product has on the market. A market where users are looking forward to regular new features and things to try in their apps.
Scalability is the main topic of [Facebook’s @scale conference](https://code.facebook.com/ios). Companies like [Facebook](https://facebook.com), [Uber](https://uber.com) or [SoundCloud](https://soundcloud.com) speak there about how they addressed scalability issues. Here are some inspiring talks/posts that make you think about your app’s architecture:

- [New rider app (Uber)](https://eng.uber.com/new-rider-app/).
- [Facebook’s iOS infrastructure](https://www.youtube.com/watch?v=XhXC4SKOGfQ).

Inspired by the problem that more companies and projects start suffering nowadays, and since it seems a topic not covered at all by books and articles that we find out there, I started writing Swift at Scale:

Inspired by the problem that more companies and projects start suffering nowadays, and since it seems a topic not covered at all by books and articles that we find out there, I started writing **Swift at Scale**:

[![image](/images/posts/swift-at-scale-leanpub.png)](https://leanpub.com/swiftatscale)

## Topics covered
Topics will range from UI to Data, including things such as continuous integration, project architecture, testing… Each section will start with an introduction to the scalability issue. It’ll give you some context about how we can unconsciously get there, and it’ll provide you with ideas, solutions, and tips to prevent them *(or address them if you already had them in your project).*

> Sections will include code and visual examples to help you understand the issue the section is discussing.

## A lean book
I’m writing the book using @leanpub. A platform for writing books in an iterative process *(like the lean startup methodology)*. Although the book is not completed, I can start publishing *‘in progress’* versions and get early feedback from readers and people interested in the book. Like in lean startup, where you validate your idea with MVPs that you publish very quickly, Leanpub allows you prove the idea and the structure with readers and write a book that readers out there would love to read. 

On the website, there’s a form where you can tell me if you are interested in the book. As soon as I start publishing early versions, you’ll get an email with a link to download the new version with the changes. You can go through them and report typos, grammar issues, and give feedback about the chapter and the things you’d change to make it more clear and easier to understand.

## In open
Although the book will be available to buy it online on Leanpub *(you can get it in any format: PDF, Epub, Mobi, Online)*. You have access to the repository with the book written in [Markua](https://markua.com), a modified version of Markdown to make it better for writing documentation and books. Like in any other GitHub project, you’ll be able to open issues and pull requests and check out the source and edit it locally. This is a book for you, so allowing your contribution is something crucial.

### [github.com/pepibumur/swiftatscale](https://github.com/pepibumur/swiftatscale)

---

### If you are working on an app using Swift, and you are suffering scalability problems reach out to me, [pepibumur@gmail.com](mailto://pepibumur@gmail.com) with the problem. It might be a perfect candidate to be in the book as well.

