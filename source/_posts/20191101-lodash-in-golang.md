---
title: Lodash in Golang Version 
date: 2019-11-01
tag: [ golang, go, lodash, slice, array ]
---

[This project](github.com/ginkgoch/godash) is lodash in golang version. A modern Golang utility library delivering modularity, performance & extras.

## Install & Import
```bash
go get -u "github.com/ginkgoch/godash"
```

```go
import "github.com/ginkgoch/godash"
```

## Example

* Slice Example

```go
items := godash.DashSlice{"a", "b", "c", "d"}
chunked := godash.Chunk(items, 2)

// out: [[a b] [c d]]
```

* Collection Example

```go
items := godash.DashSlice{1, 2, 3, 4, 5}
result := godash.Shuffle(items)

// out: [2 5 4 3 1]
```

* More examples TBD...

## Index
This is a index of the [complete API reference](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md).
<!-- vscode-markdown-toc -->
* [func  CamelCase](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcCamelCase)
* [func  CamelCaseWithInit](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcCamelCaseWithInit)
* [func  Capitalize](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcCapitalize)
* [func  CountBy](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcCountBy)
* [func  EndsWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcEndsWith)
* [func  EndsWithFrom](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcEndsWithFrom)
* [func  Escape](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcEscape)
* [func  EscapeRegExp](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcEscapeRegExp)
* [func  Every](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcEvery)
* [func  Fill](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFill)
* [func  FillInRange](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFillInRange)
* [func  Find](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFind)
* [func  FindFrom](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFindFrom)
* [func  FindIndex](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFindIndex)
* [func  FindIndexWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFindIndexWith)
* [func  FindLast](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFindLast)
* [func  FindLastFrom](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFindLastFrom)
* [func  FindLastIndex](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFindLastIndex)
* [func  FindLastIndexWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFindLastIndexWith)
* [func  First](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFirst)
* [func  FromPairs](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFromPairs)
* [func  GroupBy](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcGroupBy)
* [func  Head](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcHead)
* [func  Identity](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcIdentity)
* [func  IdentityFloat](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcIdentityFloat)
* [func  IdentityInt](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcIdentityInt)
* [func  IdentityString](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcIdentityString)
* [func  Includes](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcIncludes)
* [func  IndexOf](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcIndexOf)
* [func  Join](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcJoin)
* [func  Last](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcLast)
* [func  LastIndexOf](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcLastIndexOf)
* [func  LowerFirst](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcLowerFirst)
* [func  Nth](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcNth)
* [func  Pad](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcPad)
* [func  PadLeft](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcPadLeft)
* [func  PadLeftWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcPadLeftWith)
* [func  PadRight](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcPadRight)
* [func  PadRightWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcPadRightWith)
* [func  PadWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcPadWith)
* [func  Reduce](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcReduce)
* [func  ReduceRight](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcReduceRight)
* [func  ReduceRightWithInitial](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcReduceRightWithInitial)
* [func  ReduceWithInitial](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcReduceWithInitial)
* [func  Repeat](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcRepeat)
* [func  Replace](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcReplace)
* [func  ReplaceRegx](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcReplaceRegx)
* [func  Sample](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcSample)
* [func  Size](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcSize)
* [func  Some](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcSome)
* [func  Split](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcSplit)
* [func  SplitWithCountLimit](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcSplitWithCountLimit)
* [func  StartsWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcStartsWith)
* [func  StartsWithFrom](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcStartsWithFrom)
* [func  Ternary](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTernary)
* [func  ToLower](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcToLower)
* [func  ToUpper](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcToUpper)
* [func  Trim](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTrim)
* [func  TrimEnd](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTrimEnd)
* [func  TrimEndWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTrimEndWith)
* [func  TrimStart](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTrimStart)
* [func  TrimStartWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTrimStartWith)
* [func  TrimWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTrimWith)
* [func  Unescape](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcUnescape)
* [func  UpperFirst](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcUpperFirst)
* [type Action](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#typeAction)
* [type Comparison](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#typeComparison)
* [type DashSlice](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#typeDashSlice)
* [func  Chunk](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcChunk)
* [func  Compact](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcCompact)
* [func  Concat](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcConcat)
* [func  ConcatSlices](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcConcatSlices)
* [func  Difference](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcDifference)
* [func  DifferenceBy](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcDifferenceBy)
* [func  DifferenceWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcDifferenceWith)
* [func  Drop](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcDrop)
* [func  DropRight](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcDropRight)
* [func  DropWhile](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcDropWhile)
* [func  Each](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcEach)
* [func  EachRight](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcEachRight)
* [func  Filter](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFilter)
* [func  FlatMap](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFlatMap)
* [func  FlatMapDeep](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFlatMapDeep)
* [func  FlatMapDepth](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFlatMapDepth)
* [func  Flatten](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFlatten)
* [func  FlattenDeep](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFlattenDeep)
* [func  FlattenDepth](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcFlattenDepth)
* [func  ForEach](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcForEach)
* [func  ForEachRight](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcForEachRight)
* [func  Initial](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcInitial)
* [func  Intersection](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcIntersection)
* [func  IntersectionBy](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcIntersectionBy)
* [func  IntersectionWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcIntersectionWith)
* [func  Map](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcMap)
* [func  NewDashSlice](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcNewDashSlice)
* [func  NewDashSliceFromIntArray](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcNewDashSliceFromIntArray)
* [func  Pull](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcPull)
* [func  PullAll](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcPullAll)
* [func  PullAllWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcPullAllWith)
* [func  PullAt](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcPullAt)
* [func  Reject](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcReject)
* [func  Remove](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcRemove)
* [func  Reverse](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcReverse)
* [func  SampleSize](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcSampleSize)
* [func  Shuffle](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcShuffle)
* [func  Slice](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcSlice)
* [func  SortByFloat](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcSortByFloat)
* [func  SortByInt](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcSortByInt)
* [func  SortByString](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcSortByString)
* [func  Tail](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTail)
* [func  Take](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTake)
* [func  TakeRight](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTakeRight)
* [func  TakeRightWhile](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTakeRightWhile)
* [func  TakeWhile](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcTakeWhile)
* [func  Union](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcUnion)
* [func  UnionBy](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcUnionBy)
* [func  UnionWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcUnionWith)
* [func  Uniq](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcUniq)
* [func  UniqBy](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcUniqBy)
* [func  UniqWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcUniqWith)
* [func  Without](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcWithout)
* [func  Xor](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcXor)
* [func  Zip](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcZip)
* [func  ZipWith](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcZipWith)
* [func (DashSlice) Map](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#funcDashSliceMap)
* [type InitCamelCase](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#typeInitCamelCase)
* [type Iteratee](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#typeIteratee)
* [type IterateeToFloat](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#typeIterateeToFloat)
* [type IterateeToInt](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#typeIterateeToInt)
* [type IterateeToString](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#typeIterateeToString)
* [type Predicate](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#typePredicate)
* [type Reducer](https://github.com/ginkgoch/godash/blob/develop/REFERENCE.md#typeReducer)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->