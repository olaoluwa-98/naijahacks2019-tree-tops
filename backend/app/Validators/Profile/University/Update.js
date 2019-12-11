"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

class ProfileUniversityUpdate extends BaseValidator {
  get rules() {
    return {
      name: "string|min:3|max:1000",
      email: "email|unique:universities,email",
      password: "string:min:8",
      "grade_points.*.grade": "string|min:1",
      "grade_points.*.point": "number|above:-1"
    };
  }
}

module.exports = ProfileUniversityUpdate;
