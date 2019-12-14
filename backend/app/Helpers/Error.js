const { ucfirst } = require("./String");

class Error {
  /**
   * Standardize error message to application format.
   *
   * @param {Object} errorMessages
   */
  static standardize(errorMessages) {
    let errorMsg = {};
    errorMessages.map(x => {
      errorMsg[x.field] = ucfirst(x.message);
    });

    return { errors: errorMsg };
  }
}

module.exports = Error;
