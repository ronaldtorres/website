---
layout: post
title: Self managing Tuist versions
excerpt: Although there are tools to install and manage tools in developers environment, none of them suited Tuist's goal, offer a convenient and straightforward experience to developers. In this blog post, I describe the approach I've taken, what motivated me to offer a built-in version management in Tuist, and how I implemented it. 
tags: [xcode, scale, swift, tuist, developer]
comments: true
comments-issue-number: 21
image:
  feature: headers/toronto.jpg
  credit: Photo by Berkay Gumustekin on Unsplash
sitemap   :
  priority : 1.0
  isfeatured : 1
---

When I was starting off with [Tuist](https://github.com/tuist), I thought about how I would distribute to distribute it to developers. If you are familiar with tools like CocoaPods or Fastlane, which are written in Ruby, they are seamlessly distributed as [Gems](https://rubygems.org) and can be pulled using [Bundler](https://bundler.io). Bundler manages different versions locally, and allows you to pin your project to one of those versions. It executes the right version when you run it using `bundle exec`. That's a convenient setup, very common on iOS and Android projects.

Tuist is written in Swift, which means that we cannot leverage Bundler. I evaluated tools that were already available in the community, like [Homebrew](https://brew.sh), or [Mint](https://github.com/yonaskolb/mint), however, and despite them being great tools, they lacked some features and convinience that I wanted Tuist to offer. 

In this blog post, I'll talk about those features and how they got implemented into Tuist. This might be useful if you plan to build your command line tool in Swift and you'd like it to be self-contained and distributable.

## A built-in version management

As a mentioned, there were several factors that motivated me to implement a custom version management built in Tuist. These were the ones that stood out:

- **Updating versions:** When there's a new version of a tool, you want to try it out right away. If you installed it a while ago, the last thing that you want is to spend time figuring out how and where the tool was installed. I took inspiration from [rbenv](https://github.com/rbenv/rbenv) and [chruby](https://github.com/postmodern/chruby) and provided an easy way to install new versions of Tuist in your system. With a single command, you get the new version ready to be used in your local environment:

{% highlight bash %}
tuist install 3.2.1
tuist update # Install the latest available version
{% endhighlight %}

- **Reproducibility:** Have you ever experienced issues because two developers were using different versions of the same tool? Unless you use something like Bundler or [Nix](https://nixos.org/nix/), it's hard to ensure that developers are running the same versions of the tools. This is something that Tuist addresses for you. You can pin your project's directory to a given version of Tuist. It will make sure the right version is executed when it's ran on that directory or any of its descendants:

{% highlight bash %}
tuist local 3.2.1
tuist help
{% endhighlight %}

- **Version bundling:**