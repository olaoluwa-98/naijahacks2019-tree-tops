"use strict";

const Model = require("./BaseModel");

class Student extends Model {
  static boot() {
    super.boot();
    this.addHook("beforeSave", "StudentHook.hashPassword");
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
    return [
      "firstname",
      "lastname",
      "email",
      "password",
      "current_level",
      "target_gpa",
      "current_gpa",
      "university_id"
    ];
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
}

module.exports = Student;
