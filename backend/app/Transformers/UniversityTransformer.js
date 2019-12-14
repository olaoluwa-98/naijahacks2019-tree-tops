"use strict";

/** @type {typeof import('adonis-bumblebee/src/Bumblebee/TransformerAbstract')} */
const BumblebeeTransformer = use("Bumblebee/Transformer");

/**
 * UniversityTransformer class
 *
 * @class UniversityTransformer
 * @constructor
 */
class UniversityTransformer extends BumblebeeTransformer {
  static get availableInclude() {
    return ["gradePoints", "categories"];
  }

  /**
   * This method is used to transform the data.
   */
  transform(university) {
    const data = university.toJSON();
    if (data.gradePoints !== undefined) {
      data.grade_points = data.gradePoints;
      delete data.gradePoints;
    }

    return data;
  }

  includeGradePoints(catalog) {
    return this.collection(catalog.getRelated("gradePoints"));
  }
}

module.exports = UniversityTransformer;
