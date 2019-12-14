"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CourseSchema extends Schema {
  up() {
    this.create("courses", table => {
      table.increments();
      table.string("name", 500).notNullable();
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
    this.drop("courses");
  }
}

module.exports = CourseSchema;
