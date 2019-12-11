"use strict";

const Model = require("./BaseModel");

class University extends Model {
  static boot() {
    super.boot();
    this.addHook("beforeSave", "UniversityHook.hashPassword");
  }

  /**
   * Fields to make hidden on toJSON().
   */
  static get hidden() {
    return ["password"];
  }

  /**
   * List of user table fields that should be mass editable.
   */
  static get editableFields() {
    return ["name", "email", "password"];
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany("App/Models/Token");
  }

  /**
   * Course programs offered in a university.
   */
  courses() {
    return this.hasMany("App/Models/Courses");
  }

  /**
   * Get all grade points for a university.
   */
  gradePoints() {
    return this.hasMany("App/Models/UniversityGradePoint");
  }
}

module.exports = University;
