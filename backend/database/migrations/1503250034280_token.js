"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TokensSchema extends Schema {
  up() {
    this.create("tokens", table => {
      table.increments();
      table
        .integer("student_id")
        .unsigned()
        .references("id")
        .inTable("students")
        .onDelete("CASCADE");
      table
        .integer("university_id")
        .unsigned()
        .references("id")
        .inTable("universities")
        .onDelete("CASCADE");
      table
        .string("token", 255)
        .notNullable()
        .unique()
        .index();
      table.string("type", 80).notNullable();
      table.boolean("is_revoked").defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("tokens");
  }
}

module.exports = TokensSchema;