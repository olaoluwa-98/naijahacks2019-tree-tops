"use strict";

const Model = require("./BaseModel");

class Course extends Model {
  /**
   * Fields to make hidden on toJSON().
   */
  static get hidden() {}

  /**
   * List of user table fields that should be mass editable.
   */
  static get editableFields() {
    return ["name"];
  }

  /**
   * List of user table fields that should be mass editable.
   */
  static get updateableFields() {
    return ["name"];
  }

  /**
   * Subjects belonging to a course.
   */
  subjects() {
    return this.hasMany("App/Models/Subjects");
  }
}

module.exports = Course;
