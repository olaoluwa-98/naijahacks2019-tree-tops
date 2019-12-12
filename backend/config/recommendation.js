"use strict";

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use("Env");

module.exports = {
  token: Env.get("RECOMMENDATION_SERVICE_KEY", "")
};
