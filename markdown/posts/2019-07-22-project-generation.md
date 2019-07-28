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

## 3 - Misconfigurations

The growth of Xcode projects come with complexity,
and when things become complex,
it's easier to make mistakes.
A wrong build settings flag 
or a missing argument in a script build phase 
can be the source of compilation and App Store validation errors.

Xcode runs weak validations on projects.
It assumes the developers know what they are doing, 
and heavily relies on components like the build system or the app uploader to catch issues. There are two significant drawbacks with that approach:

* It might take some time. 
For example, if a dynamic 
framework is being copied into another framework. 
The error will show up when the app is being uploaded to the store.
* Most of the times,
the errors say nothing about the source of the error. 
For instance, 
if you try to link a iOS framework against a macOS's *(something that Xcode allows)*,
the compilation will fail with a `framework not found` error message.

Tuist is more strict in this regards and runs validations during the project generation.
If it knows something won't compile,
it'll fail and tell developers why.
We understand configuring a large project can be a hard task,
and we want developers to do it right **at any scale.**

## 4 - Consistency

Consistency is crucial to scale up apps. 
Without it,
the work across multiple projects becomes more difficult.
Jumps between projects require an extra effort to understand how projects differ from each other. Moreover, inconsistent projects are more error prone.

Although ensuring consistency is easier when all the Xcode projects are part of the same repository,
Xcode doesn't help much with it.
The only feature that helps with consistency by reusing build settings across projects are the `.xcconfig` files.

Consistency can also manifest in:
- The list of targets of each of the projects.
- The list of target build phases and their names.
- The list of project schemes and their configuration.

The way Tuist helps making the projects more consistent is by having a programmable interface where developers can leverage Swift features like functions.
The definition of a project can be the result of calling a function:

```swift
func frameworkProject(name: String) -> Project {
  // Targets
  let framework = Target(name: name, product: .framework)
  let unitTests = Target(name: "\(name)Tests", product: .unitTests)
  let uiTests = Target(name: "\(name)UITests", product: .uiTests)
  let targets = [framework, unitTests, uiTests]

  return Project(name: name, targets: targets)
}

let searchFramework = frameworkProject(name: "Search")
let coreFramework = frameworkProject(name: "Core")
```

*How beautiful is that?*
Using Swift over declarative formats like YAML makes it possible without having to re-invent the well.

## 5 - Complexities

One of the most important lessons that a developer can learn for coding is KISS *(keep it simple an stupid)*.
I believe the same applies to Xcode projects.
In this case,
the complexity is hard to avoid because it's Xcode the one exposing it.

After the creation of projects,
Xcode leaves the developers with the responsibility of maintaining and keeping them up to date.
That's proven not to be an easy job.
For instance,
with the recent introduction of support for Swift Packages in Xcode,
many developers are still [figuring out how the new Tetris piece fits their overly complex projects](https://ppinera.es/2019/06/23/the-tale-xcode-projects-complexity/),
that are perhaps already using CocoaPods or Carthage. 

Tuist has taken a stance similar to the one Rails has in the web ecosystem: 
*complex tasks are abstracted and made easier,
and only if necessary,
developers can manage intricacies by themselves.*
It defaults to simplicity and prevents the complexity of the projects' structure from growing proportionally with the number and size of the projects.

Believe me, 
seeing how easy it is to describe the structure of a large project also makes scaling apps a enjoyable task.

## 6 - Workflows