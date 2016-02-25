# algojs

[![Build Status][travis-image]][travis-url]

It provides Javascript implementation of fundamental data types, algorithms, and data structures.

## Examples
Here there are some examples. API docs are published <a href="http://angiolep.github.io/algojs" target="_blank">here</a>.

```
npm install algojs --save
```

### Sorting
```javascript
var sort = require('algojs-sorting').insertionSort;

var array = [7,2,4,3,1,5,6,8];
sort(array);
// array is now sorted
```

### Others
```javascript
var algojs = require('algojs');

var points = [];
var convexHull = algojs.grahamScan(points);
```


[travis-image]: https://travis-ci.org/angiolep/algojs.svg?branch=master
[travis-url]: https://travis-ci.org/angiolep/algojs
