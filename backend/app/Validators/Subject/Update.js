"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

class SubjectUpdate extends BaseValidator {
  get rules() {
    return {
      code: "string|min:2|max:10",
      name: "string|min:3|max:500",
      unit: "number|above:0"
    };
  }

  get sanitizationRules() {
    return {
      code: "uppercase"
    };
  }
}

module.exports = SubjectUpdate;
