---
title: Project generation
excerpt: Trying to add error tracking to Tuist, I realized how the process is not very straightforward. This blog post describes the process that I followed to help other Swift developers add error tracking to their CLI tools.
tags: [tuist, swift, xcode, ios]
---

A few days ago I published a [thread](https://twitter.com/pedropbuendia/status/1153252000685072384) on Twitter in which I shared what I think is the value of generated Xcode projects.
I've been a huge advocate of generated Xcode projects since I worked at SoundCloud, 
where I realized the maintenance cost that modular Xcode projects bring.

In this blog post, 
I'd like to extend each of the advantages that were mentioned in the thread,
and relate them with the features that we are building into [Tuist](https://tuist.io).

## 1 - Focus

Large apps often resort to modularization to scale up.
Codebases are broken down into smaller modules with clear boundaries and responsibilities. 
In my experience seeing modular Xcode codebases, 
they are usually organized in multiple directories and Xcode projects.
Each them is **manually maintained**. 

The more Xcode projects you have, 
the more time you will need to spend **maintaining** them and **figuring out issues** that might arise as a result of the accidental complexity.

Tuist abstracts the low-level intricacies and handles them for you. 
For example, 
the dependencies are described semantically and not in terms of build phases or build settings:

```swift
let app = Target(name: "App", product: .application, dependencies: [
  .target("Profile")
])
let profile = Target(name: "Profile", product: .framework, dependencies: [
  .target("Utilities")
])
let utilities = Target(name: "Utilities", product: .staticLibrary, dependencies: [
  .target("Utilities")
])
```
Furthermore,
it generates Xcode projects with just the pieces that the developer needs to do their work. 
The distractions are taken away to help developers have more **focus** and bring joy scaling their project up. 

## 2 - Environment

*How often have you tried to compile an app,
and after some time,
it fails because a necessary certificate is not present in your Keychain?*
The more dependencies the project has with the environment,
the more likely that scenario is to happen.
Using [SwiftGen](https://github.com/SwiftGen/SwiftGen) to generate code from our resources, 
or [Carthage](https://github.com/Carthage/Carthage) to embed dynamic frameworks,
is an implicit dependency.
If they don't exist,
the compilation might fails.

Teams overcome this problem by including in the project `README.md` a list of steps that they need to execute before opening the project in Xcode. There are two caveats with this approach: it's hard to ensure that developer environments are configured consistently *(e.g. the same version of  a tool)* and notify them when one of the dependencies requires an update *(e.g. a new certificate to be installed in the Keychain)*.

Tuist provides a command, 
`tuist up`,
to verify and configure the environment. 
Teams just need to describe the configuration in a `Setup.swift` file:


```swift
import ProjectDescription

let setup = Setup([
    .homebrew(packages: ["swiftlint", "SwiftGen", "Carthage"]),
    .carthage(platforms: [.iOS])
])
```

Moreover, 
and this is not implemented yet, 
it'll provide an interface to describe the signing.
It'll use that description to install the right certificates in the Keychain, 
place the provisioning profiles in the right directory, 
and configure the Xcode during the project generation.

Tuist is more strict than Xcode with the validation of the projects and the environment.
**If it knows that the project won't compile, it fails immediately.** Developers time is precious and shouldn't be wasted. 

## 3 - Miconfigurations