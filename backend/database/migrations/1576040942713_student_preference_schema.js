"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class StudentPreferenceSchema extends Schema {
  up() {
    this.create("student_preferences", table => {
      table.increments();
      table.string("name", 100).notNullable();
      table.boolean("value").notNullable();
      table
        .integer("student_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("students")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("student_preferences");
  }
}

module.exports = StudentPreferenceSchema;
