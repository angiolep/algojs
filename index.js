/**
 * It provides Javascript implementation of fundamental data types, algorithms, and data structures as treated in the 'Algorithms, Part I' course (see https://www.coursera.org/course/algs4partI)
 *
 * @module algojs
 */


function defaultCompare(a, b) {
  if (typeof(a) !== typeof(b)) {
    throw "elements must have same type";
  }
  if (typeof(a) === 'number') {
    return a === b ? 0 : ( a > b ? 1 : -1);
  }
  // TODO else ... other types to compare here
}



function exch(arr, i, j) {
  if (arr && Array.isArray(arr)) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}



module.exports = {
  /**
   * It selects the index of the smallest element of the given array
   * from the given start index to the given end index.
   *
   * @param {Array} arr is the array of elements to be compared
   * @param {Function} compare is the function to compare elements
   * @param {Number} start is the start index (0 by default)
   * @param {Number} end is the end index ((array.length - 1) by default)
   *
   * @returns {Number} the index of the smallest element of the given array
   */
  selectMinimumIndex: function (arr, compare, start, end) {
    if (arr && Array.isArray(arr) && arr.length > 0) {
      var min = start || 0;
      compare = compare || defaultCompare;
      start = start || 0;
      end = end || arr.length;
      for (var j = start + 1; j < end; j++) {
        if (compare(arr[j], arr[min]) < 0) {
          min = j;
        }
      }
      return min;
    }
  },

  /**
   * It sorts the given array as side effect, applying the selection sort algorithm.
   *
   * @param {Array} arr is the array being sorted
   * @param {Function} compare is the function to compare elements
   * @see https://en.wikipedia.org/wiki/Selection_sort
   */
  selectionSort: function(arr, compare) {
    if (arr && Array.isArray(arr)) {
      var min;
      for (var i = 0; i < arr.length; i++) {
        min = this.selectMinimumIndex(arr, compare, i);
        exch(arr, i, min);
      }
    }
  },


  /**
   * It sorts the given array as side effect, applying the insertion sort algorithm.
   *
   * @param {Array} arr is the array being sorted
   * @param {Function} compare is the function to compare elements
   *
   * @see https://en.wikipedia.org/wiki/Insertion_sort
   */
  insertionSort: function(arr, compare) {
    if (arr && Array.isArray(arr)) {
      compare = compare || defaultCompare;
      var j;
      for (var i = 0; i < arr.length; i++) {
        // in iteration i, swap arr[i] with each larger entry to its left
        j = i;
        while(j > 0 && compare(arr[j], arr[j-1]) < 0) {
          exch(arr, j, j - 1);
          j = j - 1;
        }
      }
    }
  },

  /**
   * It sorts the given array as side effect, applying the shell sort algorithm.
   *
   * @param {Array} arr is the array being sorted
   * @param {Function} compare is the function to compare elements
   *
   * @see https://en.wikipedia.org/wiki/Shell_sort
   */
  shellSort: function(arr, compare) {
    if (arr && Array.isArray(arr)) {
      compare = compare || defaultCompare;
      var len = arr.length, h = 1, j;

      // 1, 4, 13, 40, 121, 364, ...
      while (h < len / 3)  { h = h * 3 + 1; }

      while (h >= 1) {
        for (var i = h; i < arr.length; i++) {
          j = i;
          while (j >= h && compare(arr[j], arr[j-h]) < 0) {
            exch(arr, j, j-h);
            j = j - h;
          }
        }
        h = Math.floor(h / 3);
      }
    }
  },

  /**
   * It returns a random integer between min (included) and max (included)
   *
   * @param {Number} min the minimum (included)
   * @param {Number} max the maximum (included)
   * @return {Number} the random integer
   */
  random: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * It shuffles the given array as side effect, applying the Knuth shuffle algorithm
   *
   * @param {Array} arr is the array being shuffled
   * @see https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
   */
  knuthShuffle: function(arr) {
    if (arr && Array.isArray(arr)) {
      for (var i = 0; i < arr.length; i++) {
        // In iteration i, pick integer r between 0 and i uniformly at random
        exch(arr, i, this.random(0, i));
      }
    }
  }
};




