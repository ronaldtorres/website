---
layout: page
title: About me
tags: [about, me, profile, skills, ppinera]
modified: 2014-10-11T20:53:07.573882-04:00
comments: true
image:
  feature: headers/examples/sample-image-2.jpg
  credit: Pedro P.
  creditlink: http://wegraphics.net/downloads/free-ultimate-blurred-background-pack/
---
I'm Pedro Piñera Buendía, Electronic & Communication Engineer and Mobile Developer currently working at SoundCloud. I've been working with mobile technologies from 2010 when I started developing apps for iOS, since then I've relesed applications such as **Solare** to help people to protect them from the sun, **yonkiPOPS**, an app that offers film recommendations to the users, **Movi time** to let you know about the cinemas in your area and their schedules, ...

The summer of 2013 I joined **Redbooth** as iOS Developer and I improved my skills there focusing in aspects like API interactions, integrations, data persistence or view management amongst other. I've been helping the Redbooth **Android** team too and I learnt then the fundamentals of Android development. Moreover learnt about **Ruby** implementing some libraries and controllers with it.

I joined **8fit** in September 2014 as a Mobile Developer. I contributed with native features in Java/Objective-C/Swift and since then we've been moving the project to native (the project base is based on web technologies). I'm currently leading the Mobile team and coordinating the migration to native and the integration with QA and release cycles. I'm also improving my leadership skills.

In November 2015 I start a new adventure with **SoundCloud** as a Mobile Engineer

All these years as a developer I've also created Open Source projects in different languages. All of them are published in Github with their respective documentation, tests, an support through issues.

## Trello Growth Board

I strongly believe in openness and the importance of sharing our learnings with the people around us. Since life is also a project and we learn along the way I decided to create a [Trello Board](https://trello.com/b/V0KvuwXq/growth) where I have a personal backlog with things I'd like to learn, watch, read, and also small life projects that I'm about to accomplish. Feel free to have a look, comment or give me some ideas :).

## Skills

**Mobile**

- Setup project with an scalable structure and connect it with a **CI environment** (like travis, jenkings, wercker)
- Interaction with **Web APIs** *(through client entities that handle remote request)*
- **Local persistence** on databases, local app storage, ... *(experience with CoreData and Realm)*
- **CocoaPods/Gradle** experience to setup different build configurations and integration with libraries/frameworks
- Experience with **Unit Testing** on both iOS *(using native Frameworks or ruby-like syntax wrappers like Kiwi, Specta, OCMock,...)*
- **Strong layout experience** using Autolayouts in case of iOS and building layouts from scratch on Android. *In favour of coding Autolayout constraints*.
- **Mobile Architectures** for scalable and modular apps. Experience architecturing Swift/Objective-C projects in multiple frameworks in order to build cross platform applications.
- **Release processes** using versioning tools *(using milestones, releases, tags and branches to keep a clear vision of the release process and have everything coordinated and perfectly integrated)*

**Other Skills**

- Experience in **Ruby**, developed small gems wich different purposes. I have also a few experience with **Rails**.
- **Javascript**: A bit of experience in Javascript, patterns and frameworks such as BackboneJS, JQuery, Underscore. Moreover I have experience using CoffeeScript as a Javascript language wrapper.

**Played With**

- Node, Gulp, Vagrant, Nginx, Jekyll, Octopress.
- Regular Expressions.
- AngularJS, Ionic Framework.
- Rails, ActiveRecord
- Android Annotations, Loopj Async HTTP, Android TV Layout building.

## Work experience

I've worked on different apps since I started as a mobile developer like Solare and Yonkipops amongst others but currently they are no longer mantained because I'm currently focused on my current project GitDo, and the company I'm working for, SoundCloud. I also maintain some Open Source libraries used by developers around the world.

### [Redbooth](https://redbooth.com/)
I started with Redbooth in 2013 and I joined the iOS team to work remotely (I was finishing the University) as a Freelance. During the that year I was working for Redbooth I improved my knowledge on areas like data persistance, API interactions, Core Data, mobile architectures, Objective-C patterns, and had the opportunity to deal with XMPP helping the company to build its own chat client integrated into the company's solution. Moreover I had the opportunity to develop for the Android team too which for me was a good chance to dive into the Android development. I've been improving my Android background since them and although it's not at the level of the iOS one it's pretty one.

### [8fit](http://8fit.com/)
Ending 2014 I left Redbooth to join 8fit, founded by Pablo Villalba, which founded the company I was working with. He had started a new project that year and I got so motivated with it that I couldn't say no. On that new job position I assumed the role of mobile lead managing both, iOS and Android projects and supporting the web-app solution to offer the best mobile experience as possible. I'm covering with 8fit things like In-App-Purchase payments, Android Expansion Packs, Mobile-Web patterns, Healthkit and GoogleFit integrations, and I'm even learning Javascript and doing some stuff on the frontend side.

### [SoundCloud](https://soundcloud.com)
I joined SoundCloud in October 2015 as iOS developer. During the time I've been working for SoundCloud so far I've learnt about the use of Reactive programming in an very consolidated codebase and improved my architectural knowledge with new patterns I hadn't used before. Moreover I learnt about the importance of testing for apps development, since we have CI pipelines defined that run Unit and Acceptance tests.

### [GitDo](http://gitdo.io)
GitDo is my spare time project. I started with a college I worked with before at Redbooth. This project taught me about team management, product design, the importance of company values, ... I was founder of the project and I had to get my head out of the coding editor. I'm very excited about all the things I'm learning with that project.


## Open Source projects

### iOS
- **PopcornTimeTV:** PopcornTime client for tvOS. [Link](https://github.com/PopcornTimeTV/PopcornTimeTV)
- **SugarRecord:** SugarRecord is a management library to make it easier work with CoreData and REALM. Thanks to SugarRecord you'll be able to start working with CoreData/REALM with just a few lines of code. [Link](https://github.com/SugarRecord/SugarRecord)
- **SoundCloudSwift:** SoundCloud API client written in Swift. [Link](https://github.com/pepibumur/SoundCloudSwift)
- **ReactiveCommander:** Command pattern with a reactive interface written in Swift using RxSwift and ReactiveCocoa. [Link](https://github.com/pepibumur/ReactiveCommander).
- **HTTPCommander:** Command pattern wrapper for HTTP requests. [Link](https://github.com/pepibumur/HTTPCommander).
- **Transloadiit:** Transloadit client for Objective-C. [Link](https://github.com/pepibumur/Transloadiit)
- **PPiAwesomeButton:** UIButton category with new methods to setup a button with text + FontAwesome Icon. Open App. [Link](https://github.com/pepibumur/PPiAwesomeButton)
- **PPiFlatSegmentedControl:** PPiFlatSegmentedControl is an UI Control developed avoiding original UISegmentedControl to get interesting features related with the flat design. For better appearance you can add Font Awesome library to your project and use their icons into the Segmented Control. [Link](https://github.com/pepibumur/PPiFlatSegmentedControl)
- **MagicMP:** I noticed that the new MultiPeer framework introduced in iOS 7 was segmented in two main components and still using delegates. The framework has an abstraction layer in viewController format to explore nearby users, or advertiser devices, but.. What if we don't want to implement the module using viewControllers? Here's where MagicMP appears, it unifies both components in an easy way, with blocks and a singleton class, use whenever you want without depending on a ViewController. [Link](https://github.com/pepibumur/MagicMP)
- **PPiShowtime-Google-iOS-Library:** Get showtimes from any City thanks to Google Showtime. I discovered there was no option to access to this information so I decided to parse the information directly from their Website. As iOS Developer I thought it would be useful to release a Objective-C class to get/parse this information for all developers. I called it PPiShowtime. [Link](https://github.com/pepibumur/PPiShowtime-Google-iOS-Library)

### Android
- **EditTextMentions:** EditText subclass with mentions detection (like Facebook or Twitter). https://github.com/pepibumur/EditTextMentions.
- **Emojize:** Emojize is a Java library to convert keyboard emojis to chearsheet. [Link](https://github.com/pepibumur/emojize)

### Python
- **Pushpy:** Pushpy is a push notification server based on Python. It's composed by a users database to store users token ( and more information that the server owner wants ), a web interface with Google Login to send notifications using a web platform. The Google emails accounts allowed to send notifications are stored in another database. [Link](https://github.com/pepibumur/PushPy)

## Applications released
- **Solare:** Solare is an application to help people to protect their skin from ultraviolet light. It alerts when the levels are higher than the expected ones, the protection level that you should use of sun protector and everything is based in your location with real time information. [Link](https://itunes.apple.com/es/app/solare/id533472988?mt=8)
- **YonkiPOPS Mobile:** yonkiPOPS is a great tool for alls movie lovers who wants to have a powerfull pocket tool. With this application you can seek information from any movie, to see the billboard of your nearest theaters and buy the tickets. All without leaving the application. [Link](https://itunes.apple.com/en/app/yonkipops-mobile/id550995249?mt=8)
- **Movi Time:** Movi is a simple tool to find theaters near your position and know instantly billboard, schedules, and practical information for the film. [Link](https://itunes.apple.com/en/app/movi/id576948547?mt=8)
- **iPremio:** Application to check if your Christmas Lottery is prized. [Link](https://itunes.apple.com/en/app/ipremio-loteria-de-navidad/id584583645?mt=8)

## Talks and posts
- **GitDo: Designing the app infrastructure** Blog post that explains the architectural decissions that we took in order to implement the GitDo current architecture [Link](http://gitdo.io/blog/2015/12/30/gitdo-app-architecture)
- **En busca de la arquitectura perfecta: VIPER (iOS):** Talk about the VIPER architecture applied to iOS application. I explain there the transition between using a monolytic architecture using MVC with elements too coupled to that new architecture where every component manages only one kind of operation.  [Link](http://2014.codemotion.es/en/agenda.html?recommended=#day2/en-busca-de-la-arquitectura-perfecta-viper-ios)
- **Hybrid mobile applications for a fast development - 8fit:** Talk about the steps we followed on 8fit to have a mobile web-app solution for our platform with a real mobile experience. [Link](https://speakerdeck.com/pepibumur/hybrid-mobile-applications-for-a-fast-development) https://www.youtube.com/watch?v=5pf_GBR0dTs
- **Swift and Objective-C playing together:** Start using Swift in your Objective-C projects. Avoid some headaches with these useful tips and advices for the communication layer between your Objective-C code base and your future Swift implementations [Link](https://speakerdeck.com/pepibumur/swift-and-objective-c-playing-together)
- **The spare time project journey. Why I started GitDo** Personal reflexion about myself and why I came up with the idea of investing my spare time working on GitDo [Link](http://www.ppinera.es/2016/02/08/bringing-the-magic-back.html)
- **States - The source of truth** Overview of states in iOS apps, how we tipically handle them, current challenges with states and how to overcome them [Link](http://www.ppinera.es/2016/01/14/states-the-source-of-truth.html)

## Books

- **Introducción a Swift** Book that introduces developers into Swift (in Spanish) [Link](https://leanpub.com/introduccionswift)
- **Reactive Programming in your Swift Apps** Book that introduces developers into Reactive Programming using Swift as a language [Link](https://leanpub.com/reactiveprogrammingswift) **IN PROGRESS**

<br><br>
<a href="{{ site.url }}/assets/others/english_cv.pdf" class="btn">Get my CV</a>

<!-- http://technicalpickles.com/posts/using-markdown-in-vim/ -->
