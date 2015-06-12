---
layout: post
title: Why Open Source helps you to become a better developer
excerpt: "Most of developers haven't tried creating an Open Source component before. Since I apply it to every of my projects I feel the results and development process has improved a lot. In this article I will describe why it's so important"
modified: 2014-10-13
tags: [opensource, carthage, cocoapods]
comments: true
image:
  feature: headers/earpods.jpg
  credit: Pedro Piñera
sitemap   :
  priority : 1.0
  isfeatured : 0
---

For those who are not conscious about that, Open Source is the reason of the existence of many development communities. Would you imagine nowadays the iOS/OSX development without CocoaPods? And what about Ruby without its Gems? A lot of developers around the world put their efforts to simplify your work publishing their work in an Open Source way through these dependency managers (for them because otherwise it would be impossible to resolve many dependencies conflicts of our projects). Open Source a project doesn't mean just `git push origin` of your projects and making them public. It has some extra implications that will help you as a developer and with your future projects. Have you ever done it before? Would you like to know how it helped to me? Let's see.

### Why I started Open Sourcing some libraries?

When I started developing app some years ago I didn't know about what the term Open Source meant. I started with iOS, by that time there wasn't a dependency manager like CocoaPods and I integrated the libraries manually. There was though, reference websites like Cocoa controls where I could check the last libraries that other developers had published and were offering to the community. 

I've always been a curious person and I wonder every day how the things work. I like to say that I can't be happy without knowing what there's inside the magic boxes around us. I wanted to know how these libraries worked, and why developers were spending their time developing libraries instead of working on their projects.

I found the answer, and liked the philosophy behind that. What makes a language very important is not only how good it is and what it offers that others don’t but the community that there’s supporting the language with new tools/libraries/tutorials, …. And Objective-C was building a great community thanks to the mobile apps development and tools like CocoaPods, or libraries like AFNetworking that you sure know about. **People, packaging, code logic, to simplify others stuff and support the community with great tools**. I liked it! I wanted to support the community as well and started giving my first steps sharing some code.

I remember having some friends who started developing apps for iOS as well and that saw (and still see) dependency managers as “tools for those developers that don’t know how to integrate libraries manually” or that think that “those who use libraries are not good developers, they have to use code from others”. **Sorry, but I totally disagree with that**. The point is that you have bundled something you have to code and that would make you save a lot of time. *Why not using it and extending in case you need extra features not supported?*. Those developers tend to see their code as Gollum saw the ring:

- This code is mine and only mine.
- Sharing means, others get advantage of the time I spent coding.
- But yes… I take code from others. And take part passively in the community. Resources rain over me.

Since then I’ve developed different tools in languages like Objective-C, Swift, Ruby, Python,… and trying to offer them well formatted including tests, documentation, …
It’s something really worth to try if you’re a Developer and you haven’t done it before.

### Why contribute with Open Source projects helps you as a developer?
I said that it helps as a developers but some of you might be thinking why. I will give you some reasons why I think it’s something helpful for developers:

- **Think about code structure**: Most of the times we’re constrained by defined patterns that come from the project itself, or maybe the language. **We code for a product** and forget about the code structure. The important fact there is coding a feature, or add a fix there that helps to solve this other bug. If you work in a team this might be a little bit different but if you work as a Freelance it’s something common. When you work on a library others developer are going to use it. The interface has to be clear, the code has to be well structured, otherwise they won’t be able to use “your product”. Before starting coding you’ll analyze your library requirements, how you would use that library if you were a developer and then design the core structure. I feel tempted to not follow these steps when I work for a project which is not a library. **In my last projects I’ve bundled the core business logic in modules, for example for 8fit, I called it EFKit, or EFWatchKit for the Apple Watch code** It helps me to think on these code as a module that my main project depends on.
- **Tests are important**: When you have an open source library published on Git developers will start contributing with it. They might not know about all the library and they want to just add an extra functionality. Do you know how easy it’s to introduce a regression there? Having everything tested ensures that nothing is broken and the project keeps stable.
- **Versioning is also very important**: When you’ve others developers depending on your library you have to reflect the library changes through the versioning. I **recommend you to follow the [Semantic versioning][1]**. That way you can reflect big important changes in the library interface through major updates and use minor updates with small fixes.

# MORE?
# more?
## 
#### 
-
- 
- 
[][2]a asdgasgsa 

### Things you have to keep in mind when you do it
Have I convinced you? 
- Documentation: 
- Tests
- Wiki page
- Code structure
- Code feedback


### Compromise (implement a library that you use in your projects)

### Recommendation
- Started post



[1]:	http://semver.org/ "Semanting Versioning"
[2]:	asdgas "asga"