"use strict";

const BumblebeeTransformer = use("Bumblebee/Transformer");

/**
 * SubjectTransformer class
 *
 * @class SubjectTransformer
 * @constructor
 */
class SubjectTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform(subject) {
    if (subject.toJSON === undefined) {
      return subject;
    }

    return subject.toJSON();
  }
}

module.exports = SubjectTransformer;
