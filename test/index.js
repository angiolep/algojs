var algojs = require('../index');
var expect = require('chai').expect;

module.exports = {
  'algojs':{
    '#selectMinIndex()': {
      'should return undefined when bad input': function() {
        expect(algojs.selectMinimumIndex()).to.be.undefined;
        expect(algojs.selectMinimumIndex(null)).to.be.undefined;
        expect(algojs.selectMinimumIndex('')).to.be.undefined;
        expect(algojs.selectMinimumIndex([])).to.be.undefined;
      },
      'should select the min index ': function () {
        expect(algojs.selectMinimumIndex([9, 5, 12, 8, 15, 6, 20])).to.equal(1);
      },
      'should select the min index applying the given comparator': function () {
        var arr = [{x:0, y:10}, {x:3, y:5}, {x:8, y:6}];
        var compare = function(a, b) {
          return a.y === b.y ? 0 : ( a.y > b.y ? 1 : -1);
        };
        var minIdx = algojs.selectMinimumIndex(arr, compare);
        expect(minIdx).to.equal(1);
      },
      'should select the min index from the given start index': function () {
        var arr = [9, 5, 12, 8, 15, 6, 20];
        expect(algojs.selectMinimumIndex(arr, null, 2)).to.equal(5);
      }
    },
    '#selectionSort()': {
      'should do nothing when empty arr is given': function() {
        var arr = [];
        algojs.selectionSort(arr);
        expect(arr).to.deep.equal([]);
      },
      'should sort the given arr as side effect': function() {
        var arr = [6,5,3,1,8,7,2,4];
        algojs.selectionSort(arr);
        expect(arr).to.deep.equal([1,2,3,4,5,6,7,8]);
      }
    },
    '#insertionSort': {
      'should do nothing when empty arr is given': function() {
        var arr = [];
        algojs.insertionSort(arr);
        expect(arr).to.deep.equal([]);
      },
      'should sort the given arr as side effect': function() {
        var arr = [6,5,3,1,8,7,2,4];
        algojs.insertionSort(arr);
        expect(arr).to.deep.equal([1,2,3,4,5,6,7,8]);
      }
    },
    '#shellSort': {
      'should do nothing when empty arr is given': function() {
        var arr = [];
        algojs.shellSort(arr);
        expect(arr).to.deep.equal([]);
      },
      'should sort the given arr as side effect': function() {
        var arr = [6,5,3,1,8,7,2,4];
        algojs.shellSort(arr);
        expect(arr).to.deep.equal([1,2,3,4,5,6,7,8]);
      }
    },
    '#knuthShuffle': {
      'should do nothing when empty arr is given': function() {
        var arr = [];
        algojs.knuthShuffle(arr);
        expect(arr).to.deep.equal([]);
      },
      'should shuffle the given arr as side effect': function() {
        var arr = [6,5,3,1,8,7,2,4];
        algojs.knuthShuffle(arr);
        expect(arr).to.have.length(8);
        expect(arr).to.include.members([1,2,3,4,5,6,7,8]);

      }
    }

    //
  }
};
