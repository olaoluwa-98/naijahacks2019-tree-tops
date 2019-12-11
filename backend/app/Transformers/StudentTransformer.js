"use strict";

const BumblebeeTransformer = use("Bumblebee/Transformer");

/**
 * StudentTransformer class
 *
 * @class StudentTransformer
 * @constructor
 */
class StudentTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform(user) {
    return user.toJSON();
  }
}

module.exports = StudentTransformer;
