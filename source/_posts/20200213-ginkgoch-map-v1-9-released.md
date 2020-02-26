---
title: Map Library for Node.js v1.9 Released
date: 2020-02-13
tag: [ node.js, open source, library, shapefile, release, map sdk ]
---
One day before valentines day, I released my `ginkgoch map library` for Node.js v1.9 with a lot of new features and improvements.
<!--more-->

> `Ginkgoch MAP Library` is a software development kit for building cross platform mapping software and service with JavaScript.

## Change Logs
* Support to set antialias
* Support to plot labels in polygon interior point - affect drawing performance currently
* Support to compress coordinates for viewport
* Support to adjust envelope based on viewport size
* Support rendering in electron
* Support multi-source feature layer
* Support fill area with pattern
* Support draw lines with line dash
* Refactor FeatureLayer inheritance
* Improve drawing quality
* Improve drawing performance by avoid unnecessary steps (projection etc.)
* Improve envelope() returns a concrete type instead of interface
* Improve spatial analyse performance.

## Getting Started with
```bash
npm i --save ginkgoch-map
```

Visit [this repo](https://github.com/ginkgoch/map-quick-started-demos) for more basic demos.

Happy Mapping 😎


## Reference
* [Ginkgoch Home Page](https://ginkgoch.com)
* [View on Github](https://github.com/ginkgoch/node-map)
* [Report an Issue](https://github.com/ginkgoch/node-map/issues) or [Contact Author](mailto:ginkgoch@outlook.com)
