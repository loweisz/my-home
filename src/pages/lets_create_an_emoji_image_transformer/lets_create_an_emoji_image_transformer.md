---
title: 'Emoji Image Transformer'
date: 'April 1st, 2020'
abstract: 'Why not create a transformer that transforms every image in a shade representation of emojis?'
---

## The idea

Lately I was reading and playing around with image data in javascript and to get a better understanding I had an idea. Basically every image is build with pixels. So every pixel has a color code usually represented in `rgb` so a `RED`, `GREEN` and `BLUE` value, each from 0 to 255. so the color black is `rgb(0,0,0)` and white `rgb(255,255,255)`. There is a way to calculate with this three values an average grey scale value from 0 to 1. This was basically the information I had, when I had the idea.

So there are skin color emojis with 5 different skin colors. So wouldn't it be possible or at least funny to calculate for every pixel which skin color fits the most and rebuild the image with emojis? I would say yes this is possible. So let's do it ✊

## Get the data

How do we get the data from an image? Ideally we get an image somewhere, where? Somewhere we need an user to enter or give us the image. For now let's do it with a simple `input` element.
With the image we first transform that image to an universal bitmap.

```js{}
// get the fileReader
const fileReader = e.target.elements.file.files[0];
// generate array buffer
const buffer = await new Response(fileReader).arrayBuffer();
const type = fileReader.name.endsWith('.png') ? 'png' : 'jpeg';
// create blob from buffer
const blob = new Blob([buffer], { type: `image/${type}` });
// transform to bitmap
const bitmap = await createImageBitmap(blob);
```

To get the pixel data we will take advantage of the `canvas` element. This will draw the image to a canvas and the canvas allows us to get the data from the image in an array format

```js{}
// create canvas
const c = document.createElement('canvas');
c.width = config.size;
c.height = config.size;
const ctx = c.getContext('2d');
// draw the image into the canvas
ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, config.size, config.size);
// read the data from the canvas
return ctx.getImageData(0, 0, config.size, config.size);
```

Nice! Now we have our image broken down to a simple array of pixel data. Which will look something like this:

```js{}
[32,221,34,233,111,34,2,3,123, ... , 23, 243, 231]

```

But what does that mean? And what can do with it? Basically every three values represent the 3 rgb values of one pixel. So it could be broken down this:

```js{}
[
  32,221,34,   // first pixel
  233,111,34,  // second pixel
  2,3,123,     // third pixel
   ... ,
  23, 243, 231 // last pixel
]

```

But we want them to be in a greyscale format. So we need to sum up every pixel to a value between 0 and 1 representing the greyscale value.
There are hundreds of examples how to do it so I won't explain you that one.
So ideally we have now an array where every entry is the greyscale representation of a pixel in our image.

## Calculate the array

Basically what we have now is a very long one dimensional array of all pixels in that image in the size defined in the beginning.
But now we want to downscale that image to a smaller size, because we want to see the emojis right?
So now it gets tricky, because we need to iterate over that one dimensional array representing an 2 dimensional image and calculate the average of specific blocks. Maybe lets illustrate that to make that a bit more clear:

![Image grey scale demonstration](./GreyArrayFirst.png)

So a little spoiler, this is how it works for me. There is probably a better and more efficient solution out there and I would be happy to hear it from you. Feel free to write me a message if you have found something more efficient.

```js{}
const indexArr = [];
let pointer = 0;
let xLinePosition = 0;
const blockLineCount = size * elementSize;
```

Let's go over it step by step. We need two iterators and a pre calculated constant.The constant `blockLineCount` is telling me how many emojis we want in one line.

The value `pointer` is representing the current position on which emoji we are currently at as a sum of pixels, so starting at position `0`.

The `xLinePosition` is representing the index of the horizontal line also starting by `0`.

The `indexArr` is the bucket where we store all our averages that we have calculated.

Our condition to stop the loop is when the pointer reaches the end of the array. then we have all the emojis calculated and can stop:

```js{5}
const indexArr = [];
let pointer = 0;
let xLinePosition = 0;
const blockLineCount = size * elementSize;
while (pointer < greyArr.length) {}
```

To calculate the average we need first to sum up all the values and divide them by the emoji size and push that value to our final array:

```js{6,7}
const indexArr = [];
let pointer = 0;
let xLinePosition = 0;
const blockLineCount = size * elementSize;
while (pointer < greyArr.length) {
  let sum = 0;
  indexArr.push(Math.round(sum / elementSize ** 2 / (1 / elementCount)));
}
```

But the value would always be 0. Which is kind of useless... So we need to iterate again over every pixel in one block so 2 dimensional over the size of the emoji, defined as `elementSize`.
Then we want to get the pixel at that position added to our sum. So we sum up the position of the pointer which means the position of the block we are calculating (`pointer`) plus the horizontal position inside the block (`j`) plus the vertical position times the length of one line in pixels (`size * i` for having the correct pixel in the 1 dimensional array).

```js{6,7}
for (let i = 0; i < elementSize; i++) {
  for (let j = 0; j < elementSize; j++) {
    sum += greyArr[pointer + j + size * i];
  }
}
```

Since we are using a while loop we need to do increase to pointer to not have an infinite loop here. So first we have to check if have reached the end of the horizontal line with the `xLinePosition`.
If yes we need to add a whole line of pixels to the pointer to get to the new position at the beginning and also set the `xLinePosition` back to 0.
If NOT, we just increase the pointer by one emoji so `elementSize` and set the xLinePosition one position further

```js{}
if (xLinePosition >= size / elementSize - 1) {
  pointer += blockLineCount - (size - elementSize);
  xLinePosition = 0;
} else {
  pointer += elementSize;
  xLinePosition++;
}
```

All together we have here the core of calculating our downsized image ready to drawn as emojis in the correct size:

```js{}
const indexArr = [];
let pointer = 0;
let xLinePosition = 0;
const blockLineCount = size * elementSize;
while (pointer < greyArr.length) {
  let sum = 0;
  for (let i = 0; i < elementSize; i++) {
    for (let j = 0; j < elementSize; j++) {
      sum += greyArr[pointer + j + size * i];
    }
  }
  indexArr.push(Math.round(sum / elementSize ** 2 / (1 / elementCount)));
  if (xLinePosition >= size / elementSize - 1) {
    pointer += blockLineCount - (size - elementSize);
    xLinePosition = 0;
  } else {
    pointer += elementSize;
    xLinePosition++;
  }
}
return indexArr;
```

Phew this calculation and computation looks kind of heavy isn't it? And it only gets an array and returns a very long array. Isn't this the ideal place to place that calculation into a worker? What are web workers you may ask? Read [here](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) if you haven't heard of them yet.

So this magic `render` function from far above is basically doing exactly this:

```js{}
function render(imageData, emoji) {
  // get the canvas where to draw the image
  const c = document.getElementById('screen');
  // some stylings
  c.style = {
    ...c.style,
    width: '100vmin',
    height: '100vmin',
  };
  c.width = config.size;
  c.height = config.size;
  // create a worker
  const worker = new Worker('worker.js');
  // post the array to the worker
  worker.postMessage([imageData, config]);
  // calculate the emojis
  worker.onmessage = function(e) {
    drawImage(e.data, c.getContext('2d'), emoji);
  };
}
```

All that computation and calculation you saw above is now moved to a separate web worker. So if this takes some time, which it does for quite big images it won't block the main thread and the user won't see a frozen page until the computation is done.

Nice ! So we now can show what pixel is which emoji skin color and displaying that image in emojis.

![Basic example](./example.png)

Do you want to [try it out?](https://img.loomaa.de/)
Do you want to [see the full code?](https://github.com/loweisz/emoji-img)
