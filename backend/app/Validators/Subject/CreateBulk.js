"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

/** @type {typeof import('../../Enums/Preference')} */
const { PREFERENCE_RATING } = use("App/Enums/Preference");

class SubjectCreateBulk extends BaseValidator {
  get rules() {
    const ratings = PREFERENCE_RATING.join(",");

    return {
      subjects: "required|array|min:1",
      "subjects.*.code": "required|string|min:2|max:10",
      "subjects.*.name": "required|string|min:3|max:500",
      "subjects.*.unit": "required|number|above:0",
      "subjects.*.semester": "required|number|above:0",
      "subjects.*.preference_business_weight": `required|number|inArray:${ratings}`, // prettier-ignore
      "subjects.*.preference_humanities_weight": `required|number|inArray:${ratings}`, // prettier-ignore
      "subjects.*.preference_science_weight": `required|number|inArray:${ratings}`, // prettier-ignore
      "subjects.*.preference_engineering_weight": `required|number|inArray:${ratings}` // prettier-ignore
    };
  }

  get sanitizationRules() {
    return {
      code: "uppercase"
    };
  }
}

module.exports = SubjectCreateBulk;
