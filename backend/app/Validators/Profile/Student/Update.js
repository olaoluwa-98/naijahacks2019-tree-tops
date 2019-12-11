"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

/** @type {typeof import('../../../Enums/UniversityLevel')} */
const UniLevel = use("App/Enums/UniversityLevel");

class ProfileStudentUpdate extends BaseValidator {
  get rules() {
    const levels = UniLevel.levelsInHundreds().join(",");

    return {
      firstname: "required|string|min:3|max:200",
      lastname: "string|min:3|max:200",
      email: "email|string|min:8|max:14|unique:students,email",
      password: "string:min:8",
      current_level: `number|in:${levels}`,
      target_gpa: "number",
      current_gpa: "number",
      university_id: "exists:universities,id"
    };
  }
}

module.exports = ProfileStudentUpdate;
