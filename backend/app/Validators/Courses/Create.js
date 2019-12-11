"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

class CoursesCreate extends BaseValidator {
  get rules() {
    return {
      name: "required|string|min:2|max:500"
    };
  }
}

module.exports = CoursesCreate;
