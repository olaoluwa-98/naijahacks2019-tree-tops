"use strict";

class RecommendationController {
  /**
   * Return grade recommendations for currently authenticated user.
   *
   * TODO: Make request to recommedation API.
   *
   * GET recommendation
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async get({ auth, response, transform }) {
    const payload = { ...auth.user };
    const recommedation = {};
    const msg = "Recommendation retieved successfully.";
    // Transform the recommendation.
    return response.ok({ msg, recommedation });
  }
}

module.exports = RecommendationController;
