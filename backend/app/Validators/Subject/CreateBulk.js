"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

class SubjectCreateBulk extends BaseValidator {
  get rules() {
    return {
      subjects: "required|array|min:1",
      "subjects.*.code": "required|string|min:2|max:10",
      "subjects.*.name": "required|string|min:3|max:500",
      "subjects.*.unit": "required|number|above:0"
    };
  }

  get sanitizationRules() {
    return {
      code: "uppercase"
    };
  }
}

module.exports = SubjectCreateBulk;
