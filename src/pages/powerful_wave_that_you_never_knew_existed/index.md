---
title: 'Explaining https headers and example you didnt knew before'

date: 'Jul 10th, 2020'
abstract: 'There are a LOT of http headers you set, most of them are quite basic but there also some poweful headers which you probably never heard of'
heroImage: 'heads.jpg'
index: 7
---

Almost everything in the web is sent with http and even as a non developer you have the the keyword of http at least when
sending urls or links. 
Http stands for **Hypertext Transfer Protocol** and gives us the possibility to transfer hypertext between a browser and a server for example.

### What are Http headers

As a developer you also probably heard about http headers, at least the moment when heard about CORS policy.
Which is a problem you at least heard about when developing web pages. 
But what are http headers and what possibilities are there to use them? 

When a browsers requests a resource, for example a page of this blog it asks the server with a request. 
This request might look like something like this: 

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

So you can see the url or location of the resource some information about the request and also a lot headers giving 
the server some information about what the client or the browser expects or want from the server. 

When the server responds it will also set some headers in the response that will look like this: 

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

There are also some information the server wants to tell the browser what to do with the resource, for example 
if there are cookies need to be set what encoding was used etc. 

Basically in the https context the headers are used for the communication of the browser and the server extending the simple
requests for resources. 
Most of the headers have quite good defaults which you don't need to think of, but there are some headers that
can get quite important, like CORS headers as said before.

### Headers you don't know 

Don't worry this article will not be about CORS headers. It's more about http headers that are rarely used but
can be really powerful and helpful to make the communication between a server and the browser a lot better. 

Let's dig into it. Here are some headers that you can set which are super useful and handy.


###[If-Range](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/If-Range)

#### What and why?

Imagine you started downloading a large resource, e.g. a video an image etc. and stopped in between because of connection problems.
With `If-Range` you can tell the server if the representation is unchanged, to send the part(s) that are requested in Range. 
Which means only the parts that were missing and not again the whole thing.

When handling big resources together with often bad connections like on mobile devices, this can be quite helpful
since the resource can be downloaded in parts even with connection breaks in between. 

#### How to use
It can be used either with a date when the ressources was last modifed, or with an [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag), which is a key to help if the resources was invalidated


```
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

#### Example

```
If-Range: Wed, 21 Oct 2015 07:28:00 GMT 
```

##[Vary](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Vary)

`Vary` Comes from a time where the web or http was used for a looooooot of things and not only web-pages.  
It's based on the idea of using http for exchanging information in a lot different formats. 
How is it doing that? Well it tells the server in which header it will find the information how to present the information. 

Nowadays it can be really helpful, when you for example have different ressources for different clients, for example 
mobile, tablet or desktop. 
Imagine the server has three different images stored for the same ressource depending on the device.
Then you can simple tell the server with the `Vary` header to check the device and then to decide which image size to send. 

#### Example

For the example with the images depending on the device, you can simply pass the `User-Agent` to tell the server
that it should check the User-agent for the device information. 

```
Vary: User-Agent
```


#### How to use

```
Vary: <header>
```

Just pass in the header, the server needs to check before deciding which resource to send.




##[Age](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Age)



##[Content-Disposition](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Content-Disposition)

When we go back in the example of making a request to a server to load this website for example, it is clear for the browser,
that it has to display the resource of the response.
But it can also be the case that the server sends a resource which the browser should automatically download to the users machine,
like an image or pdf etc.  
A server can tell the browser with the `Content-Disposition` header what the browser should do with the attached resource.  

#### Example

With defining the `Content-disposition` to `attachment` the browser knows that this is a resource to download instead of just 
show. 

```
Content-Disposition: attachment; filename="data.pdf"
```

#### How to use

You can define the header to be `inline` or `attachment`, where `inline` is always the default. 

```
Content-Disposition: <inline | attachment>
```



##[Feature-Policy](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Feature-Policy)

This is rather new header and therefor only support by modern browsers (Sorry to all the IE users). However 
I still want to mention this because I think it can be really helpful for some use cases.  
Basically `Feature-policy` tells the browser which features or apis the browser should allow the document and its 
`iframes` for example to use. 

For example it can disallow any scripts or iframes etc within that website to allow sensitive apis like the camera or microphone.

#### How to use

```
Feature-Policy: <directive> <allowlist>
```

The `directive` is the name of the feature. You can see the full [list of features here](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Feature-Policy#Directives)
The `allowlist` defines the origins which are allowed to use the directive.
### Example

Let's say we want that our website is not allowed to use the microphone or camera. With this header the 
document or any included iframe cannot access those features.

```
Feature-Policy: microphone 'none'; camera 'none'
```

###[Upgrade-Insecure-Requests](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests)
###[Trailer](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Trailer)
###[Location](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Location)




https://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039

