"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class StudentSchema extends Schema {
  up() {
    this.create("students", table => {
      table.increments();
      table.string("firstname", 100).notNullable();
      table.string("lastname", 100).notNullable();
      table
        .string("email", 254)
        .notNullable()
        .unique();
      table.string("password", 60).notNullable();
      table.integer("current_level").notNullable();
      table.float("target_gpa", 2);
      table.float("current_gpa", 2);
      table
        .integer("university_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("universities");
      table.timestamps();
    });
  }

  down() {
    this.drop("students");
  }
}

module.exports = StudentSchema;
