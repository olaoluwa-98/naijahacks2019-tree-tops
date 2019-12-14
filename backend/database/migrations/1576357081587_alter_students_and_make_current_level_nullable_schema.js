"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterStudentsAndMakeCurrentLevelNullableSchema extends Schema {
  up() {
    this.alter("students", table => {
      table
        .integer("current_level")
        .nullable()
        .alter();
    });
  }

  down() {
    this.alter("students", table => {
      table
        .integer("current_level")
        .notNullable()
        .alter();
    });
  }
}

module.exports = AlterStudentsAndMakeCurrentLevelNullableSchema;
