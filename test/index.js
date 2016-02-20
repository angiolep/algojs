var algojs = require('../index');
var expect = require('chai').expect;

module.exports = {
  'algojs':{
    '#selectMinimum()': {
      'should return undefined when bad input': function() {
        expect(algojs.indexOfMinimum()).to.be.undefined;
        expect(algojs.indexOfMinimum(null)).to.be.undefined;
        expect(algojs.indexOfMinimum('')).to.be.undefined;
        expect(algojs.indexOfMinimum([])).to.be.undefined;
      },
      'should return the index of the minimum element of the given array': function () {
        expect(algojs.indexOfMinimum([9, 5, 12, 8, 15, 6, 20])).to.equal(1);
      },
      'should return the index of the minimum element of the given array from the given start index': function () {
        expect(algojs.indexOfMinimum([9, 5, 12, 8, 15, 6, 20], 2)).to.equal(5);
      }
    },
    '#selectionSort()': {
      'should do nothing when empty array is given': function() {
        var array = [];
        algojs.selectionSort(array);
        expect(array).to.deep.equal([]);
      },
      'should sort the given array as side effect': function() {
        var array = [6,5,3,1,8,7,2,4];
        algojs.selectionSort(array);
        expect(array).to.deep.equal([1,2,3,4,5,6,7,8]);
      }
    },
    '#insertionSort': {
      'should do nothing when empty array is given': function() {
        var array = [];
        algojs.insertionSort(array);
        expect(array).to.deep.equal([]);
      },
      'should sort the given array as side effect': function() {
        var array = [6,5,3,1,8,7,2,4];
        algojs.insertionSort(array);
        expect(array).to.deep.equal([1,2,3,4,5,6,7,8]);
      }
    }
    //
  }
};
