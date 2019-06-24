---
title: The tale of Xcode projects' complexity
excerpt: "Just an observation of a trend that I've seen in our industry: developers rushing to be the gain the label of expert in a given technology."
tags: [unhealthy-tech, stress, technology, wwdc]
---

Let's say we want to create a new project with Xcode, for example an iOS app. We open Xcode, select new project, and then Xcode dumps the following into a local directory:

What a beautiful greenfield. I click run and the simulator opens almost instantly with my app running in it. I probably don't know about many of those files that were created and the content in them but who cares? As long as I can compile it, it's all fine.

A few weeks later, the need of adding **dependencies** comes up. Someone in the team decides to introduce [CocoaPods](https://cocoapods.org). By then the project has got a bit more complex; there were a few build flags added to speed up compilation, and some build phases to customize the build process a bit. CocoaPods tries to do its best to integrate the dependencies into the project but it fails at it. We blame CocoaPods because we believe it's CocoaPods fault. We don't realize that Xcode exposes so much complexity that CocoaPods can't define a contract between the dependencies and your project. Your project became complex, it's normal, and it's not your fault. After Stackoverflowing a bit, we find out the hack that will make the CocoaPods integration work. *Awesome!* Now we have external dependencies and we can add more if we need to.

The project continues to grow, and few months later, someone sees that modularizing the project helps with having clearly defined boundaries between features and better compilation times. The modularization requires creating a few frameworks, and therefore new targets with some files to configure them. It doesn't sound that hard. A few weeks later, the project is modularized. Some features have been moved into their own framework, others remain in the main app because their code is so tangled to the foundation of the project, that is impossible to extract them. Perhaps without realizing, it we end up with **similar projects and targets (build phases & settings) that bare



- Add Carthage dependencies.
- Migrate the version of Swift
- Migrate the dependencies to Swift package manager
- Conflicts

## Downsides
- Hard to maintain
- Hard to migrate


- Default to simple configuration
- Allow reusability of project elements
- Default to simplicity but open to configuration
- Limiting build phases
- Apple leveraged this closeness to make Swift Package Manager integration look gorgeous compared to CocoaPods or Carthage.
- Beware of ho much complexity your changes are introducing. It might not be that obvious.
- Bird dropping packages


## Moraleja
Projects are complexity prone
