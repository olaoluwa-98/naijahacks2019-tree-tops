class StringHelper {
  /**
   * Capitalize the first character in a string.
   * @param {String} string
   */
  static ucfirst = string => string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = StringHelper;
