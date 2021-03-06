---
title: Shapefile Reader for Node.js is Open Source
date: 2018-08-08
tag: [ node.js, open source, library, shapefile ]
---
`ginkgoch-shapefile-reader` is a Node.js library to help to read shapefiles from your disk.
<!-- more --> 

[View project in Github](https://github.com/ginkgoch/node-shapefile-reader)

![shapefile in node.js](/blog/post-imgs/20180808/shapefile-for-node.png)

> A shapefile is a simple, nontopological format for storing the geometric location and attribute information of geographic features. Geographic features in a shapefile can be represented by points, lines, or polygons (areas). The workspace containing shapefiles may also contain dBASE tables, which can store additional attributes that can be joined to a shapefile's features.

## Install
```terminal
npm i ginkgoch-shapefile-reader
```

## Test
```terminal
npm test
```

## Sample
### Loops all records and print the vertices
```js
async function loopUSStates(callback) {
    const statesShp = await new Shapefile('./tests/data/USStates.shp').open();
    const iterator = await statesShp.iterator();
    let record = undefined;
    while ((record = await iterator.next()) && !record.done) {
        callback(record);
    }
    await statesShp.close();
}
```

### Gets specific record by id

Gets records by id with all fields.
```js
async function getRecordById(id) {
    const statesShp = await new Shapefile('./tests/data/USStates.shp').open();
    const record = await statesShp.get(0);
    await statesShp.close();
    return record;
}
```

Gets records by id with none fields. Specify the fields to fetch from DBF to ignore reading unnecessary field values.
```js
async function getRecordById(id) {
    const statesShp = await new Shapefile('./tests/data/USStates.shp').open();
    const record = await statesShp.get(0, []);
    await statesShp.close();
    return record;
}
```

### Gets matched features one time - Update v1.0.16
If you don't like to use iteractor way, here is a normal way to get all features back.
```js
async function getAllRecords() {
    const statesShp = await new Shapefile('./tests/data/USStates.shp').open();
    const record = await statesShp.records();
    await statesShp.close();

    return record;
}
```

We also provide the filters that you could control the returned value. Here is the default filter structure.

* `from` {Number} means the start index of the records. Default value is 0. e.g. { from: 20 } means the returned feature is start from position 20.
* `limit` {Number} means the features count includes in the returned features. Default value is Number.MAX_SAVE_INTEGER
* `envelope` {Envelope} means the returned features must intersect with the given envelope; default value is undefined, which means no envelope check.
* `fields` {Array.<<string>>} means the properties that returned with the features.

Let's take a look at a demo. Says I want to paging my features. My page size is 10. I want to return all the features from my second page with only properties whose names are RECID and STATE_NAME. Here is the code.

```js
async function getAllRecords() {
    const statesShp = await new Shapefile('./tests/data/USStates.shp').open();
    const record = await statesShp.records({ from: 10, limit: 10, fields: ['RECID', 'STATE_NAME'] });
    await statesShp.close();

    return record;
}
```

<!-- md _reference.md -->