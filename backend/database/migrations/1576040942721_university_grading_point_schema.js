"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UniversityGradingPointSchema extends Schema {
  up() {
    this.create("university_grade_points", table => {
      table.increments();
      table.string("grade", "20").notNullable();
      table.integer("point").notNullable();
      table
        .integer("university_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("universities")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("university_grade_points");
  }
}

module.exports = UniversityGradingPointSchema;
