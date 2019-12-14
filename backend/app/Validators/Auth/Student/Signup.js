"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

/** @type {typeof import('../../../Enums/UniversityLevel')} */
const UniLevel = use("App/Enums/UniversityLevel");

class AuthStudentSignup extends BaseValidator {
  get rules() {
    const levels = UniLevel.levelsInHundreds().join(",");

    return {
      firstname: "required|string|min:3|max:200",
      lastname: "required|string|min:3|max:200",
      email: "required|email|string|min:8|unique:students,email",
      password: "required|string:min:8",
      current_level: `required|number|in:${levels}`,
      target_gpa: "required|number",
      current_gpa: "required|number",
      university_id: "required|exists:universities,id"
    };
  }

  get sanitizationRules() {
    return {
      email: "normalize_email"
    };
  }
}

module.exports = AuthStudentSignup;
