---
title: Shapefile 命令行工具 v1.3.1 发布
date: 2020-02-07
desc: 一个在终端窗口查看Shapefile的轻量级利器。
tag: [ map, shapefile, gis tools ]
---
Shapefile文件是美国ESRI公司发布的文件格式，因其ArcGIS软件的推广而得到了普遍的使用，是现在GIS领域使用最为广泛的矢量数据格式。官方称Shapefile是一种用于存储地理要素的几何位置和属性信息的非拓扑简单格式。

今天对应一个老项目进行了一个小升级。新增一些新功能来提升使用性，升级底层库，提升性能和准确性。

### 安装
```bash
yarn global add ginkgoch-shapefile-cli

shapefile-cli -h
```

### 更新日志 v1.3.1
* 更新了底层库，使用最新的`ginkgoch-map`版本，对于性能和准确度都有很大提升。
* 新增投影转换，生成一个新的shapefile。
* 新增服务模式，启动后脱离终端窗口，通过浏览器查看shapefile的基础信息。 
    ![shapefile-cli-serve](/post-imgs/shapefile-cli-serve.png)
* 新增创建索引文件功能，主要是为配合`ginkgoch-map`上层应用开发提高渲染和查询性能。
* 修改了一些小的bug。

### 历史更新
* 新增显示Shapefile头文件信息。
* 新增显示Shapefile配套DBase文件的列信息。
* 新增转换Shapefile为GeoJSON功能。
* 新增显示Shapefile矢量信息。

### 项目地址
[https://github.com/ginkgoch/node-shapefile-cli](https://github.com/ginkgoch/node-shapefile-cli)