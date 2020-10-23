---
title: 'The power of https headers and 4 examples you did not know before'
date: 'Oct 23rd, 2020'
abstract: 'There are a lot of http headers, most of them are quite simple, but there are also some powerful ones you probably have never heard of.'
heroImage: 'heads.jpg'
index: 8
---

## Hello Http (headers)

Almost everything in the web is sent with **http** and even non-developers have seen it when using the internet as keyword
inside urls or links.

Http stands for **Hypertext Transfer Protocol** and gives us the ability to transfer hypertext between a browser and a server.
This is a great technology that has been around almost since the invention of the web and is constantly evolving and
.[offering more and more great features](https://en.wikipedia.org/wiki/HTTP/2)

## What are [Http headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)?

As a developer you probably heard of http headers, at least in the moment you heard about the CORS policy.
This is a problem you must have heard about when developing websites. 
But what exactly are http headers and what other ways are there to use them?

Let us first find out what they do and how you could use them. 

When a browser requests a resource, for example a page of this blog, it asks the server with a request. 
This request looks something like this: 

```js
fetch("https://www.lorenzweiss.de/race_conditions_explained/", {
  credentials: "include",
  headers: {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "accept-language": "en,en-US;q=0.9,de-DE;q=0.8,de;q=0.7",
    "cache-control": "max-age=0",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
  },
  referrerPolicy: "no-referrer-when-downgrade",
  body: null,
  method: "GET",
  mode: "cors",
});
```

So you can see the URL or location of the resource, some information about the request and also a lot of headers with some information about the request. 
This is how your browser tells the server some more information about the request. For example what kind of data type it accepts or
how the client is handling the cache.

After sending the request, the server replies, and it also sets some headers in the reply, which could look like this: 

```
:authority: www.lorenzweiss.de
:method: GET
:path: /race_conditions_explained/
:scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
accept-encoding: gzip, deflate, br
accept-language: en,en-US;q=0.9,de-DE;q=0.8,de;q=0.7
cache-control: max-age=0
cookie: _ga=GA1.2.1173972759.1584812492; _gid=GA1.2.2076192721.1594044231
sec-fetch-mode: navigate
sec-fetch-site: same-origin
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36
```

There is also some information that the server wants to tell the browser what to do with the resource, for example 
if there are cookies, it must be determined which encoding was used, etc

Basically, in the http-context the headers for the communication of the browser and the server are used to extend the simple
Requests for resources. You could see it as the sheet of paper that is added on top of a package that you oder from an online store, 
giving you more information about the context and the resource that you ordered. 
Most of the headers have quite good defaults which you don't need to think of, but there are some headers that
can get quite important, like CORS headers. But there are so much more headers that you might never heard of which are very useful 
and good to know how to use. 

## Headers you don't know 

Do not worry, this article will not deal with CORS headers. The following http headers are those that are rarely used, but
can be really powerful and helpful to significantly improve the communication between a server and the browser. 

So let's dig into it. Here are some headers that you can set and that are very useful and practical.


##[If-Range](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/If-Range)

### What and why?

Imagine you start downloading a large resource, such as a video, an image, etc., and stop in between because of connection problems.
With `If-Range` you can tell the server if the representation is unchanged, to send the part(s) that are requested in Range. 
Which means only the parts that were missing and not again the whole thing.

This can be very helpful when dealing with large resources and often bad connections as with mobile devices.
Because the resource can be downloaded in parts even if the connection is interrupted in between. 

#### How to use
It can either be used with a date when the resources were last modified, or with an [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag), which is a key to help if the resources was invalidated

```
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

#### Example

```
If-Range: Wed, 21 Oct 2015 07:28:00 GMT 
```

##[Vary](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Vary)

`Vary` Comes from a time when the web or http was used for a variety of things and not just for web pages.  
It is based on the idea of using http to exchange information in many different formats. 
How does it do that? Well, it tells the server in which header to find the information, how to present the information. 

Nowadays it can be really helpful if you have different resources for different customers, for example 
mobile, tablet or desktop.
Imagine three different images for the same resource are stored on the server, depending on the device.
Then you can simply use the `Vary` header to tell the server to check the device and then decide which image size to send. 

#### Example

For the example with the device dependent images, you can simply pass the 'user agent' to tell the server
that it should check the user-agent for device information. 

```
Vary: User-Agent
```


#### How to use

```
Vary: <header>
```

Just enter the header, the server must check before deciding which resource to send.



##[Content-Disposition](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Content-Disposition)

If we go back to the example of a request to a server, for example to load this website, it is clear to the browser,
that it must **display** the resource of the answer.
But it can also be the case that the server sends a resource that the browser should automatically download to the user's computer,
like a picture or pdf etc.
A server can tell the browser what the browser should do with the attached resource via the `Content Disposition` header.

#### Example

With defining the `Content-disposition` to `attachment` the browser knows that this is a resource to download instead of just 
show. 

```
Content-Disposition: attachment; filename="data.pdf"
```

#### How to use

You can define the header as `inline` or `attachment`, where `inline is always the default.  

```
Content-Disposition: <inline | attachment>
```



##[Feature-Policy](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Feature-Policy)

This is a fairly new header and therefore only supported by modern browsers (sorry to all IE users). However 
I want to mention this anyway because I think it can be really helpful for some use cases.  
Basically, the `feature-policy tells the browser which features or apis the browser should provide to the document and its 
`iframes` to be used. 

For example, it can ban all scripts or iframes etc. within this website to allow sensitive apis like the camera or microphone.

#### How to use

```
Feature-Policy: <directive> <allowlist>
```

The `directive` is the name of the feature. You can see the full [list of features here](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Feature-Policy#Directives)
The `allowlist` defines the origins which are allowed to use the directive.
### Example

Suppose we want our website to use neither the microphone nor the camera. With this header the 
document or a contained iframe cannot access these functions.

```
Feature-Policy: microphone 'none'; camera 'none'
```

### More Headers:

Here are some more headers that are worth mentioning: 
- [Upgrade-Insecure-Requests](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests)
- [Age](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Age)
- [Trailer](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Trailer)
- [Location](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Location)

## Conclusion

Https headers are great and also very useful! But sometimes they can be quite complex, and it's really hard to get an overview of what headers are available and what benefits they bring. 
Also when developing a website, especially in the frontend, you don't come in contact with them too often, except maybe with the CORS headers. 
But I think that this missed some possibilities. http headers represent the communication between the server and the 
customers much better, and we all know that communication is the key to a good relationship.

I hope I could shed some light on the darkness of http headers for you. In case I missed a good and helpful header,
please do not hesitate to send me a mail or contact me in any way.






