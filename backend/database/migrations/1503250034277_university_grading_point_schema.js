"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UniversityGradingPointSchema extends Schema {
  up() {
    this.create("university_grading_points", table => {
      table.increments();
      table.string("grade", "20").notNullable();
      table.integer("point").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("university_grading_points");
  }
}

module.exports = UniversityGradingPointSchema;
