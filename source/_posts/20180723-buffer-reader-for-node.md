---
title: Buffer Reader for Node.JS is Open Source
date: 2018-07-23
tag: [ node, node-io ]
---
In Node.js, when we want to read continuous number or string from a [Buffer](https://cn.nodejs.org/api/buffer.html) instance, we have to maintain a position where we are reading at. To make it easy, here is a library to help to read [Buffer](https://cn.nodejs.org/api/buffer.html) instance easier.
<!-- more --> 

![buffer in node.js](/post-imgs/20180723/buffer-in-node.jpeg)

## Install
```terminal
npm i ginkgoch-buffer-reader --save
```

## Test
```terminal
npm test
```

## Example

**Prepare for data**
```js
const buffer = Buffer.alloc(4);
buffer.writeInt8(8, 0);
buffer.writeInt16LE(16, 1);
buffer.writeUInt32LE(32, 3);
buffer.writeDoubleBE(54.8765, 7);
```

**Without `Ginkgoch Buffer Reader`**
```js
let i1 = buffer.readInt8(0);
let i2 = buffer.readInt16LE(1);
let i3 = buffer.readUInt32LE(3);
let i4 = buffer.readDoubleBE(7);
```

It is terrible to remember the length of the value type and manually accumulate the position; it is very easy to make mistake and hard to find out why. Even though we could create UT for our logic, but why not to make it easy and handle the headache to us?

**With `Ginkgoch Buffer Reader`**
It automatically manages the read position. You don't need to manually calculate the position and type length anymore.
```js
const BufferReader = require('ginkgoch-buffer-reader');
let br = new BufferReader(buffer);
let i1 = br.nextInt8();
let i2 = br.nextInt16LE();
let i3 = br.nextUInt32LE();
let i4 = br.nextDoubleBE();
```

## API List
```js
constructor(buffer: Buffer);
seek(offset: number, fromBeginning = true);
nextBuffer(length: number);
nextString(length: number, encoding = 'utf-8');
nextIn8();
nextUInt8();
nextUInt16LE();
nextUInt16BE();
nextInt16LE();
nextInt16BE();
nextUInt32LE();
nextUInt32BE();
nextInt32LE();
nextInt32BE();
nextFloatLE();
nextFloatBE();
nextDoubleLE();
nextDoubleBE();
```

## Reference
* [Ginkgoch Home Page](https://ginkgoch.com)
* [View on Github](https://github.com/ginkgoch/node-buffer-reader)
* [Report an Issue](https://github.com/ginkgoch/node-buffer-reader/issues) or [Contact Author](mailto:ginkgoch@outlook.com)