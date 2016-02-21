var algojs = require('../index');
var expect = require('chai').expect;

module.exports = {
  'algojs':{
    '#selectMinimum()': {
      'should return undefined when bad input': function() {
        expect(algojs.min()).to.be.undefined;
        expect(algojs.min(null)).to.be.undefined;
        expect(algojs.min('')).to.be.undefined;
        expect(algojs.min([])).to.be.undefined;
      },
      'should return the index of the minimum element of the given arr': function () {
        expect(algojs.min([9, 5, 12, 8, 15, 6, 20])).to.equal(1);
      },
      'should return the index of the minimum element of the given arr from the given start index': function () {
        expect(algojs.min([9, 5, 12, 8, 15, 6, 20], 2)).to.equal(5);
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
    }
    //
  }
};
