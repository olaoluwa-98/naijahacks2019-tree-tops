"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SubjectsSchema extends Schema {
  up() {
    this.create("subjects", table => {
      table.increments();
      table.string("code", 10).notNullable();
      table.string("name", 500);
      table.float("unit").notNullable();
      table
        .integer("course_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("courses")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("subjects");
  }
}

module.exports = SubjectsSchema;
