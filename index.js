/**
 * It provides Javascript implementation of fundamental data types, algorithms, and data structures as treated in the 'Algorithms, Part I' course (see https://www.coursera.org/course/algs4partI)
 *
 * @module algojs
 */


function requireSameType(a,b) {
  if (typeof(a) !== typeof(b))
    throw "elements must have same type";
}


function compare(a, b) {
  requireSameType(a,b);
  if (typeof(a) === 'number') {
    return (a < b) ? -1 : ((a === b) ? 0 : 1);
  }
  // TODO else ... other types to compare here
}


function swap(array, i, j) {
  if (array && Array.isArray(array)) {
    var tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
}



module.exports = {
  /**
   * It selects the index of the smallest element of the given array
   * from the given start index to the given end index.
   *
   * @param {Object} array is the array of elements to be compared
   * @param {Number} start is the start index (0 by default)
   * @param {Number} end is the end index ((array.length - 1) by default)
   * @returns {Number} the index of the smallest element of the given array
   */
  indexOfMinimum: function (array, start, end) {
    if (array && Array.isArray(array) && array.length > 0) {
      start = start || 0;
      end = end || array.length;
      var min = start;
      for (var i = start + 1; i < end; i++) {
        if (compare(array[i], array[min]) === -1) {
          min = i;
        }
      }
      return min;
    }
  },

  /**
   * It sorts the given array as side effect, executing the selection sort algorithm.
   *
   * @param {Object} array the array being sorted
   * @see https://en.wikipedia.org/wiki/Selection_sort
   */
  selectionSort: function(array) {
    if (array && Array.isArray(array)) {
      // TODO var cloned = clone(array);
      var min;
      for (var start = 0; start < array.length; start++) {
        min = this.indexOfMinimum(array, start);
        if (compare(array[start], array[min]) == 1) {
          swap(array, start, min);
        }
      }
    }
  }
};




