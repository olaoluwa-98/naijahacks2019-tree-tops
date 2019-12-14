"use strict";

/** @type {typeof import('../../../Models/Course')} */
const Course = use("App/Models/Course");

/** @type {typeof import('../Controller')}*/
const BaseController = use("App/Controllers/Http/Controller");

/** @type {typeof import('../../../Enums/RecommendationBuildStatus')}*/
const RecommendationBuildStatus = use("App/Enums/RecommendationBuildStatus");

/** @type {typeof import('../../../Helpers/LinkBuilders/RecommendationLinkBuilder')}*/
const RecommendationLinkBuilder = use(
  "App/Helpers/LinkBuilders/RecommendationLinkBuilder"
);

class RecommendationController extends BaseController {
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
    const webookUrl = RecommendationLinkBuilder.updateBuildStatus();
    // Transform the recommendation.
    return response.ok({ msg, recommedation });
  }

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
  async store({ auth, response, transform }) {
    const courseId = 3;
    const payload = { ...auth.user };
    const recommedation = {};
    const msg = "Recommendation retieved successfully.";
    const webookUrl = RecommendationLinkBuilder.updateBuildStatus();
    const gradePoints = await auth.user
      .gradePoints()
      .fetch()
      .reduce((points, next) => {
        points[next.grade] = next.point;
        return points;
      }, {});

    const course = await Course.findOrFail(courseId);
    const subjects = await course.subjects().fetch();
    const uuid = "";

    course.merge({ knowledge_base_uuid: uuid });
    await course.save();
    return response.ok({ msg, recommedation });
  }

  /**
   * Update the status of the knowledge base build.
   *
   * PUT recommendation/build/:uuid
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async updateBuildStatus({ request, params, response }) {
    const query = { knowledge_base_uuid: params.uuid };
    const course = await Course.query().where(query).firstOrFail(); // prettier-ignore
    const status = request.input("status", RecommendationBuildStatus.COMPLETED);
    course.merge({ knowledge_base_build_status: status });
    await course.save();
    return response.ok({ msg: "Build status updated successfully." });
  }
}

module.exports = RecommendationController;
