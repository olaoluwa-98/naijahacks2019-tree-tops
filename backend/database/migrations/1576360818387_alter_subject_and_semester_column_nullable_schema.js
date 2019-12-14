"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterSubjectAndSemesterColumnNullableSchema extends Schema {
  up() {
    this.table("subjects", table => {
      table.integer("semester").notNullable();
    });
  }

  down() {
    this.table("subjects", table => {
      table.dropColumns(["semester"]);
    });
  }
}

module.exports = AlterSubjectAndSemesterColumnNullableSchema;
