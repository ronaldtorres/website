---
layout: post
title: Implementing a Collection Property for ReactiveCocoa
excerpt: "These are the steps I followed to create a Collection Property for ReactiveCocoa. Very useful if you want to get events about changes produced in a collection"
modified: 2015-10-14
tags: [reactivecocoa, reactive, cocoa, stream, signals]
comments: true
image:
  feature: headers/collection_property.jpg
  credit: By Paula Porto
sitemap   :
  priority : 0.5
  isfeatured : 0
---

I've been recently playing a lot with Reactive, especially ReactiveCocoa. Since they launched the version for Swift I can say I'm like a baby using it in my project. There's something in particular which I use a lot in a MVVM pattern which are properties.

### What's a property?

For those who don't know what a Property is in ReactiveCocoa 3/4 it's a custom generic type that encapsulates a variable internally. Why? Because this new variable exposes a `SignalProducer` that reports changes on this variable as events. That way you can know when the variable value changes and subscribe to these changes using ReactiveCocoa concepts.

Here's an example of a property:

{% highlight swift %}
import ReactiveCocoa

let myProperty: MutableProperty<String> = MutableProperty("")
myProperty.producer.startWithNext {(newValue) in print("This is my new value \(newValue)")}
myProperty.value = "yai!"

{% endhighlight%}

As you can see we in the example above the property has a producer that we can subscribe to, and it sends new values of that property when the value changes. In that case we're updating the value to `yai!` and then the subscriber is printing that value.

### Types of properties

ReactiveCocoa offers currently three types of Properties that cover most of the cases where we'll need to this pattern and all of them conform the same protocol:

{% highlight swift %}
public protocol PropertyType {
	typealias Value
	var value: Value { get }
	var producer: SignalProducer<Value, NoError> { get }
}
{% endhighlight %}

- **ConstantProperty**: Kind of property that doesn't mutate its value once it's initialized. The main advantage *(in my opinion)* on using this kind of property is the fact that you can connect it with other ReactiveCocoa components.

- **PropertyOf**: It's a kind of property that once created doesn't allow the modification of it's value externaly. You can only subscribe to the changes of this property that are sent from another Signal/SignalProducer or even another property. Consequently this kind of property can be initialized using these three components:

{% highlight swift %}
public init<P: PropertyType where P.Value == T>(_ property: P)
public init(initialValue: T, producer: SignalProducer<T, NoError>)
public init(initialValue: T, signal: Signal<T, NoError>)
{% endhighlight %}

- **MutableProperty**: Compared with the previous property in this case you can update the property value after being initialized and in the same way all these changes will be propagated to the producer subscribers.

### Properties in MVVM pattern

Properties are very useful in the MVVM pattern because it allows us to detect changes int hese properties values and then update the view according to these changes. For example, imagine the following situation:

{% highlight swift%}
class ProfileView: UIView {
	// MARK: - Attributes
	let avatarView: UIImageView = UIImageView()
	let viewModel: ProfileViewModel

	// MARK: - Constructors
	init(viewModel: ProfileViewModel) {
		self.viewModel = viewModel
		setupObservers()
	}

	// MARK: - Setup
	private func setupObservers() {
		self.viewModel.avatarImage.startWithNext { [weak self] (avatarImage) in
			self?.avatarView.image = avatarImage
		}
	}
}

class ProfileViewModel {
	// MARK: - Attributes
	let avatarImage: MutableProperty<UIImage> = MutableProperty(UIImage())
}
{% endhighlight %}

We want to update the avatar image in the ProfileView when we get the image from somewhere, no matter the source. Then we would define our Profile view ViewModel that includes that `MutableProperty` of type `UIImage`. From the view we subscribe to that property and when there's a new image we just set it to the `UIImageView`. Data source and its use in the layout is fully decouple. The view doesn't know where the data comes from, the image might come from a local cache, from a web request, from the camera... It just has to know how to set that image in the view. Great right? You can extend that to more views around the app and for more types of properties and then you can have your views *"synchronizes"* with the data source.

> There's also a great avantage when working with ReactiveCocoa properties and is the fact tat you can use Reactive concepts like for example applying functional operators and combine multiple properties in a single one.

In the example above, we could for example define a map function with the following format:

{% highlight swift %}
func addBadge(badgeConfig: BadgeConfig)(image: UIImage) -> UIImage {
	// Add badge logic
}
{% endhighlight %}

Then have a new property in the view model

{% highlight swift%}
lazy var avatarImageWithBadge: MutableProperty<UIImage> = {
	PropertyOf(avatarImage.value, producer: avatarImage.producer |> map(addBadge(myBadgeConfig)))
}()
{% endhighlight %}


### Collection property

When you work with collections in your view it's very complicated to have granularity with these properties deteting what really changed in the collection. I noticed I ended up calling `reloadData()` method in the table/collection view and forcing a relayout of all the elements in the view. Not good performance right? Components like the NSFetchedResultsController were designed to avoid this things but in this case the component is extremly coupled to CoreData, if you want to use it for example with your custom collections you have to look for a custom implementation *(I don't have any in mind right now)* that proxies collections operations and notifies different observers about these operations like insertion, deletion, update, passing the index back where these operations where executed.

> What if we had this approach based on ReactiveCocoa, using Properties? Let's try to develop a MutableCollectionProperty

*Note: I've created a repository where this new component has been implemented, [https://github.com/gitdoapp/RAC-MutableCollectionProperty](https://github.com/gitdoapp/RAC-MutableCollectionProperty). You can clone the repository and try it on your environment*