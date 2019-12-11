"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

class CoursesUpdate extends BaseValidator {
  get rules() {
    return {
      name: "string|min:2|max:500"
    };
  }
}

module.exports = CoursesUpdate;
