"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddRecommendationServiceRelatedFieldsToCourseSchema extends Schema {
  up() {
    this.table("courses", table => {
      table.string("knowledge_base_uuid");
      table.enu("knowledge_base_build_status", ["pending", "completed"]);
    });
  }

  down() {
    this.table("courses", table => {
      table.dropColumns(["knowledge_base_uuid", "knowledge_base_build_status"]);
    });
  }
}

module.exports = AddRecommendationServiceRelatedFieldsToCourseSchema;
