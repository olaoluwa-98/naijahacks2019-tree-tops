"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UniversitySchema extends Schema {
  up() {
    this.create("universities", table => {
      table.increments();
      table.string("name", 1000).notNullable();
      table
        .string("email", 254)
        .notNullable()
        .unique();
      table.string("password", 60).notNullable();
      table
        .integer("university_grading_point_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("university_grading_points");
      table.timestamps();
    });
  }

  down() {
    this.drop("universities");
  }
}

module.exports = UniversitySchema;
