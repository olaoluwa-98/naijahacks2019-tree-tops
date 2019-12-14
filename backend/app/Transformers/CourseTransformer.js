"use strict";

/** @type {typeof import('adonis-bumblebee/src/Bumblebee/TransformerAbstract')} */
const BumblebeeTransformer = use("Bumblebee/Transformer");

/**
 * CourseTransformer class
 *
 * @class CourseTransformer
 * @constructor
 */
class CourseTransformer extends BumblebeeTransformer {
 
  /**
   * This method is used to transform the data.
   */
  transform(course) {
    return course.toJSON();
  }
}

module.exports = CourseTransformer;
