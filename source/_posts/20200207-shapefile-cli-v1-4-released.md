---
title: Shapefile CLI v1.4 Released
date: 2020-02-07
tag: [ map, shapefile, gis tools ]
---
A shapefile is a simple, nontopological format for storing the geometric location and attribute information of geographic features. Geographic features in a shapefile can be represented by points, lines, or polygons (areas). The workspace containing shapefiles may also contain dBASE tables, which can store additional attributes that can be joined to a shapefile's features.

Today, I made a new release of my old project `node-shapefile-cli` with a set of new features for better experience; upgraded the core implementation for better performance and more precise vectors.

### Installation
```bash
yarn global add ginkgoch-shapefile-cli

shapefile-cli -h
```

### Change Logs v1.4
* Upgrade the core implementation, better performance and accurate result.
* Add a new feature to re-project a shapefile to a new shapefile with a specified CRS.
* Add `serve` command to launch a server to support browse Shapefile information on browser.

    ![shapefile-cli-serve](/post-imgs/shapefile-cli-serve.png)
* Add `build-index` command to build spatial index file for a corresponding shapefile. The index files provide better query performance for upper-level application that is build around `ginkgoch-map`.
* Some minor bugs fix.

### History Change Logs
* Add `show-header` to print Shapefile with table or JSON format.
* Add `show-fields` to print Shapefile fields information with table or JSON format.
* Add `show-records` to print Shapefile records. It also provides filter to reduce the print record count.
* Add `convert-geojson` to convert shapefile to GeoJSON format.

### Project Repository
[https://github.com/ginkgoch/node-shapefile-cli](https://github.com/ginkgoch/node-shapefile-cli)