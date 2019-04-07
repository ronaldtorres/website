---
name: Shell 💻
link: https://github.com/tuist/shell
language: Swift
state: Barely updated, only when necessary (e.g. Swift upgrades)
license: MIT
---

I needed to execute shell tasks from some Swift libraries and tools and most of the times I ended up wrapping up the Foundation `Process` providing a stubbable and convenient abstraction.

After copying and pasting the abstraction across several projects I thought it was a good idea to extract it into its own repository that could be distributed as a dependency through any of the popular package/dependency managers: *CocoaPods, Carthage and SwiftPM.* That's how Shell was born.

Nowadays, I use it from all my projects whenever I need some interaction with the shell. What I like the most about it is that it comes with another package, `ShellTesting` that provides some handy mocks that facilitate testing subjects that interact with the shell. 
