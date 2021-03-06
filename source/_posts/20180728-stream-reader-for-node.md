---
title: Stream Reader for Node.JS is Open Source
date: 2018-07-28
tag: [ node.js, open source, library ]
---
I/O APIs are very important. Node.js' file stream API is very rough for reading file stream.
<!-- more --> 

[View project in Github](https://github.com/ginkgoch/node-stream-reader)

![readable stream in node.js](/blog/post-imgs/20180728/stream-in-node.jpeg)

The fact is that, the API is hard to use, for example:
```js
var fs = require('fs');
var readStream = fs.createReadStream('myfile.txt');
readStream.on('data', chunk => console.log(chunk));
```

The pain point is that, the data is read in an closure, you cannot read a chunk buffer with an expected length (even though you can use `readable`), so it makes it difficult to code. I don't like to have too many callbacks neither. So I created a stream reader to get rid of the callback hell.

## Install
```bash
npm i --save ginkgoch-stream-reader
```

## Usage
```js
const fs = require('fs');
const stream = fs.createReadStream(filename, { encoding: 'utf-8' });
async function load(stream) {
    let sr = new StreamReader(stream);
    await sr.open();
    
    let r = undefined;
    while(r = await sr.read(16)) {
        console.log(r);
    }
}
 
load(stream);
```

See, we use `async` function, no callbacks and we can read any length of buffer as we need to.

<!-- md _reference.md -->