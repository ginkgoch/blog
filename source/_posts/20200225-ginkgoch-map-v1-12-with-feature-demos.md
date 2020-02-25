---
title: Node MAP SDK v1.12 Released with Feature Demos
date: 2020-02-25
tag: [ map, shapefile, gis tools ]
---
Many feedback indicate that the [getting started sample](https://github.com/ginkgoch/map-quick-started-demos) is too simple. Yes, I agree. Here comes 20+ downloadable and executable feature demos are available. Also released with new MAP SDK version v1.12.0 with many API improvements as well as some new functions.
<!-- more --> 

## v1.12.0 Change Logs
* Add `ViewportUtils.getInitViewport` function to get a proper lng, lat, zoom from envelope
* Allow to build geometries with number arrays for easier number input. e.g. `new LineString([{x:0, y:0}, {x:10, y:10}])` becomes `LineString.fromNumbers([0, 0, 10, 10])`
* Implement query function on FeatureSource which allows to query features based on spatial relationship: `intersect`, `disjoint`, `within`, `overlap` and `touch`
* Add declare file (*.d.ts) for native register for better typescript support
* Fix a bug of a returning type is bind to another lib’s specific version, which makes typescript upstream project compile filed
* Add a strategy to auto break down values by its index position. Previously, it breaks down by value, when the maximum value is far away from the second large value, the effect is not good.
* Allow to create new delimited file with specified features.

More history change logs, please refer to [this page](https://github.com/ginkgoch/node-map/blob/develop/RELEASE.md) for detail.

## Feature Demos
Learning feature with demos will be a pretty easy way to get started. Before learning from source code, a better approach is to take a look at what it can be done with an executable application.

This feature demo application is built with `electron` that support to run on `macOS`, `Windows` and `Linux`.

![feature-demos](/post-imgs/20200225/overview.png)

![feature-demos-detail](/post-imgs/20200225/screenshot-1.png)

Go to the [release page](https://github.com/ginkgoch/map-desktop-demo/releases) for the latest update. OR download directly by the links below.

* [Feature Demos for macOS](https://ginkgoch.s3.us-east-2.amazonaws.com/desktop-demo/ginkgoch-feature-demos-for-desktop-1.0.0-mac.zip)
* [Feature Demos for Linux](https://ginkgoch.s3.us-east-2.amazonaws.com/desktop-demo/ginkgoch-feature-demos-for-desktop-1.0.0.AppImage)
* Feature Demos for Windows (I don't have a Windows machine, if you need one, please goto the [repo and follow my guide](https://github.com/ginkgoch/map-desktop-demo) to build one)

Visit more feature demo source code on https://github.com/ginkgoch/map-desktop-demo



Happy Mapping 😎

## Reference
* [Ginkgoch Home Page](https://ginkgoch.com)
* [View on Github](https://github.com/ginkgoch/node-map)
* [Report an Issue](https://github.com/ginkgoch/node-map/issues) or [Contact Author](mailto:ginkgoch@outlook.com)
