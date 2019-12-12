"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {import('@adonisjs/framework/src/Config')} */
const Config = use("Config");

class AuthorizeRecommendationBuildServer {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response }, next) {
    const { token } = request.all();
    const expectedToken = Config.get("recommendation.token");
    if (token !== expectedToken) {
      return response.unauthorized({
        msg: "Invalid build server authorization token."
      });
    }

    await next();
  }
}

module.exports = AuthorizeRecommendationBuildServer;
