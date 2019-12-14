"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

/** @type {typeof import('../../Enums/Preference')} */
const { PREFERENCE_RATING } = use("App/Enums/Preference");

class SubjectUpdate extends BaseValidator {
  get rules() {
    const ratings = PREFERENCE_RATING.join(",");

    return {
      code: "string|min:2|max:10",
      name: "string|min:3|max:500",
      unit: "number|above:0",
      semester: "number|above:0",
      "preference_business_weight": `number|inArray:${ratings}`, // prettier-ignore
      "preference_humanities_weight": `number|inArray:${ratings}`, // prettier-ignore
      "preference_science_weight": `number|inArray:${ratings}`, // prettier-ignore
      "preference_engineering_weight": `number|inArray:${ratings}` // prettier-ignore
    };
  }

  get sanitizationRules() {
    return {
      code: "uppercase"
    };
  }
}

module.exports = SubjectUpdate;
