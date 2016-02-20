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


function swap(a, i, j) {
  if (a && Array.isArray(a)) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
}



module.exports = {
  /**
   * It selects the index of the smallest element of the given array
   * from the given start index to the given end index.
   *
   * @param {Object} a is the array of elements to be compared
   * @param {Number} start is the start index (0 by default)
   * @param {Number} end is the end index ((array.length - 1) by default)
   * @returns {Number} the index of the smallest element of the given array
   */
  indexOfMinimum: function (a, start, end) {
    if (a && Array.isArray(a) && a.length > 0) {
      var min = start || 0,
          start = start || 0,
          end = end || a.length;
      for (var i = start + 1; i < end; i++) {
        if (compare(a[i], a[min]) === -1) {
          min = i;
        }
      }
      return min;
    }
  },

  /**
   * It sorts the given array as side effect, executing the selection sort algorithm.
   *
   * @param {Object} a the array being sorted
   * @see https://en.wikipedia.org/wiki/Selection_sort
   */
  selectionSort: function(a) {
    if (a && Array.isArray(a)) {
      // TODO var cloned = clone(array);
      var min,
          start = 0;
      for (; start < a.length; start++) {
        min = this.indexOfMinimum(a, start);
        if (compare(a[start], a[min]) == 1) {
          swap(a, start, min);
        }
      }
    }
  },


  /**
   * It sorts the given array as side effect, executing the insertion sort algorithm.
   *
   * @param {Object} a the array being sorted
   * @see https://en.wikipedia.org/wiki/Insertion_sort
   */
  insertionSort: function(a) {
    if (a && Array.isArray(a)) {
      var j,
          i = 1;
      for (; i < a.length; i++) {
        // in iteration i swap a[i] with each larger entry to its left
        j = i - 1;
        while (j >= 0 && a[i] < a[j]) {
          swap(a, i, j);
          j = j - 1;
          i = i - 1;
        }
      }
    }
  }
};




