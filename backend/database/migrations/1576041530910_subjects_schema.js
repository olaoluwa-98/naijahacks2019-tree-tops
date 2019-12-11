"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SubjectsSchema extends Schema {
  up() {
    this.create("subjects", table => {
      table.string("name", 500).notNullable();
      table.float("unit", 2).notNullable();
      table
        .integer("course_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("courses");
    });
  }

  down() {
    this.drop("subjects");
  }
}

module.exports = SubjectsSchema;
