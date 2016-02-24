/**
 * It provides comparison functions for different data types
 * 
 * @module algojs/compare
 */
    
var self = module.exports = {
  /**
   * Test if the give argument is an Object
   * 
   * @param {*} a is the argument being tested
   * @returns {boolean} true if the given argument is an Object
   */
  isObject: function(a) {
    return a !== null && typeof a === 'object';
  },

  /**
   * Test if the give argument is an Array
   *
   * @param {*} a is the argument being tested
   * @returns {boolean} true if the given argument is an Array
   */
  isArray: function(a) {
    return a !== null && a !== undefined && a.constructor === Array;
  },

  /**
   * Test if the give argument is a Number
   *
   * @param {*} a is the argument being tested
   * @returns {boolean} true if the given argument is an Number
   */
  isNumber: function(a) {
    return typeof a === 'number';
  },

  /**
   * Test if the give argument is a Point, 
   * that is an Object having x and y properties both of type Number
   *
   * @param {*} a is the argument being tested
   * @returns {boolean} true if the given argument is an Number
   */
  isPoint: function(a) {
    return self.isObject(a) && self.isNumber(a.x) && self.isNumber(a.y);
  },

  /**
   * It compares the given arguments according to their well known types
   * 
   * @param {*} a
   * @param {*} b
   * @returns {number}
   */
  wellKnown: function (a, b) {
    if (self.isNumber(a) && self.isNumber(b)) {
      return a === b ? 0 : ( a > b ? 1 : -1);
    }
    // TODO else if (...)
    else {
      // TODO execute a code coverage tool
      throw 'unsupported comparison';
    }
  }

};