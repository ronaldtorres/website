---
layout: post
title: Paginated API requests with Reactive programming
excerpt: "Reactive is magic, transform your API responses into streams of data and you'll se how easy is to build for example paginated API requests"
modified: 2014-10-29
tags: [reactive, objective-c, swift, reactive cocoa]
comments: true
image:
  feature: headers/messydesk.jpg
  credit: Pedro Piñera
sitemap   :
  priority : 0.5
  isfeatured : 0
---

I’ve been playing the days with Reactive Cocoa. I’ve started falling in love with that programming paradigm. I had heard about it before but hadn’t stopped to play a little bit with it.
Although it might be scary at first, and most of the concepts are difficult to understand when you first take a look at them. The more you get familiarised with it the more you think in term of streams.

In order to practice a little bit with reactive programming I decided to add the reactive feature to a library I’m working on for the video/photo/audio service called *Transloadit*. All the public methods offered by the library are in two version, the classic version using block *(withCompletion…)* and the reactive version which returns a **Signal** that can be listened to know about the status of the request *(objects returned, error, completion)*.

Build a signal that returns the status an asynchronous request is something easy when you build an RACSignal *(talking about Objective-C)* you have e a block with a **subscriber** object like the one shown below:

{% highlight objective-c %}
- (RACSignal*)rac_getTemplateDetailWithId:(NSString*)identifier
{
    @weakify(self);
    return [RACSignal createSignal:^RACDisposable *(id<RACSubscriber> subscriber) {
        @strongify(self);
        [self.client GET:[NSString stringWithFormat:kTransloaditTemplatesDetailPath, identifier] parameters:nil success:^(AFHTTPRequestOperation *operation, id responseObject) {
            if ([responseObject[@"ok"] isEqualToString:@"TEMPLATE_FOUND"]) {
                [subscriber sendNext:[[TLTemplate alloc] initWithDictionary:responseObject]];
                [subscriber sendCompleted];
            }
            else {
                [subscriber sendError:[NSError errorWithDomain:@"transloadit.error" code:-1 userInfo:responseObject]];
            }
        } failure:^(AFHTTPRequestOperation *operation, NSError *error) {
            [subscriber sendError:error];
        }];
        return nil;
    }];
}
{% endhighlight %}

I use internally a client of AFNetworking to execute the requests and once I receive the response I notify the subscriber sending it error messages or sending the parsed NSDictionary object into a PONSO object. It’s not difficult! Once you have the stream with data you can operate with these streams applying operations such as filtering, mapping, reducing, … 

We could use the previous signal to update a view or notify a failed response the following way:

{% highlight objective-c %}
@weakify(self);
[[self rac_getTemplateDetailWithId:@"xxxxx"] subscribeNext:^(TLTemplate *template) {
   @strongify(self);
   [self updateViewWithTemplate:template];
} error:^(NSError *error) {
   @strongify(self);
   [self.view showError];
}];
{% endhighlight %}


### Building a signal to work with paginated APIs

Most of APIs offer its results paginated. It means that if you want to get all results from the API you have to execute more than one request (depending on the API limit) to get all the results. Depending on the API some of them give you information about the next page in each request but there're some other that doesn't and you have to know if you've reached your limit comparing the returned results with the page limit.

The algorithm mixes reactive and recursive concepts. Rembmer the recursivity implies an initial value which is going to start the recursivity and conditions to keep the recursivitiy alive, otherwise the execution would be infinite - TODO RACE CONDITION -.

In our case the initial condition is going to be the *current page, 0* and the condition to execute the next step is to have a **number of results equals to the page limit**.

{% highlight objective-c %}
- (RACSignal*)getTemplatesFromPage:(int)page pageLimit:(int)pageLimit
{
    __block int currentPage = page;
    RACSignal* (^nextSignal)() = ^RACSignal*() {
        RACSignal *signal = [self rac_getTemplatesSortedBy:nil order:TLOrderAscendent page:currentPage pageSize:pageLimit fromDate:nil toDate:nil];
        currentPage++;
        return signal;
    };
    void (^ subscribeNext)(id<RACSubscriber>);
    subscribeNext = ^void(id<RACSubscriber> subscriber) {
        [nextSignal() subscribeNext:^(NSArray* templates) {
            [subscriber sendNext:templates];
            if (templates.count < pageLimit) {
                [subscriber sendCompleted];
            }
            else {
                subscribeNext(subscriber);
            }
        } error:^(NSError *error) {
            [subscriber sendError:error];
        }];
    };
    return [[RACSignal createSignal:^RACDisposable *(id<RACSubscriber> subscriber) {
        subscribeNext(subscriber);
        return nil;
    }] combinePreviousWithStart:[NSMutableArray new] reduce:^NSMutableArray*(NSMutableArray *previous, NSArray *templates) {
        [previous addObjectsFromArray:templates];
        return previous;
    }];
}
{% endhighlight %}

Decomposing it in steps:

- **Signal generator**: We need a block that generates signal to get the next request. We've already defined a function that convert that API request into a signal. That request needs as parameters the current page and the page limit. *Notice that with every call to that block, the current page is increased by 1*

- **Subscriber**: The way we introduce the recursivity is propagating the source subscriber accross each signal. Depending on that signal results we notify the subscriber about a completion/error or we just pass that request results and send that subscriber to the next request sinal. It's simple, isn't it?


- **Sinal**: We have to return a signal that encapsulates the previous step recursivity and that reduces the arrays of each request into an unique array. What that signal does is just fire the first signal (responsible to start the recursivity). Moreover we execute the method `combinePreviousWithStart` to combine all arrays into only one.

