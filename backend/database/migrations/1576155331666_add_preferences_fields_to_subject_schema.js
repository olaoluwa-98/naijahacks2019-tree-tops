"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddPreferencesFieldsToSubjectSchema extends Schema {
  up() {
    this.table("subjects", table => {
      table
        .integer("preference_business_weight")
        .unsigned()
        .defaultTo(0)
        .notNullable();
      table
        .integer("preference_humanities_weight")
        .unsigned()
        .defaultTo(0)
        .notNullable();
      table
        .integer("preference_science_weight")
        .unsigned()
        .defaultTo(0)
        .notNullable();
      table
        .integer("preference_engineering_weight")
        .unsigned()
        .defaultTo(0)
        .notNullable();
    });
  }

  down() {
    this.table("subjects", table => {
      table.dropColumns([
        "preference_business_weight",
        "preference_humanities_weight",
        "preference_science_weight",
        "preference_engineering_weight"
      ]);
    });
  }
}

module.exports = AddPreferencesFieldsToSubjectSchema;
