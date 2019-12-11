"use strict";

const Model = require("./BaseModel");

class Subject extends Model {
  /**
   * Fields to make hidden on toJSON().
   */
  static get hidden() {}

  /**
   * List of user table fields that should be mass editable.
   */
  static get editableFields() {
    return ["name", "code", "unit"];
  }

  /**
   * List of user table fields that should be mass editable.
   */
  static get updateableFields() {
    return ["name", "code", "unit"];
  }

  course() {
    return this.belongsTo("App/Models/Course");
  }

  university() {
    return this.belongsTo("App/Models/University").pivotModel(
      "App/Models/Course"
    );
  }
}

module.exports = Subject;
