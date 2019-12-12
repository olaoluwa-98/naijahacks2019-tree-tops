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
    return [
      "name",
      "code",
      "unit",
      "preference_business_weight",
      "preference_humanities_weight",
      "preference_science_weight",
      "preference_engineering_weight"
    ];
  }

  /**
   * List of user table fields that should be mass editable.
   */
  static get updateableFields() {
    return [
      "name",
      "code",
      "unit",
      "preference_business_weight",
      "preference_humanities_weight",
      "preference_science_weight",
      "preference_engineering_weight"
    ];
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
