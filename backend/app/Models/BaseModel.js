"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class BaseModel extends Model {
  static boot() {
    super.boot();
    this.addTrait("UpdateOrCreate");
    this.addTrait("FormatDatesToUtc");
  }

  /**
   * Update a model instance.
   * @param {Object} attributes
   * @param {*} trx
   */
  async update(attributes, trx) {
    this.merge(attributes);
    return this.save(trx);
  }
}

module.exports = BaseModel;
