"use strict";

/** @type {typeof import('../../../Models/University')} */
const University = use("App/Models/University");

/** @type {typeof import('@adonisjs/lucid/src/Database').prototype} */
const DB = use("Database");

class UniversityController {
  /**
   * Show a list of all universities.
   * GET universities
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index({ request, response, transform }) {
    const { page = 1, size = 20 } = request.all();
    let universities = await University.query().paginate(page, size);
    universities = await transform.paginate(universities, "UniversityTransformer"); // prettier-ignore
    const msg = "Universities retrieved successfully.";
    return response.json({ msg, universities });
  }

  /**
   * Display the currently authenticated user.
   * GET me
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async profile({ auth, response, transform }) {
    const query = { id: auth.user.id };
    let profile = await University.query(query).with("gradePoints").firstOrFail(); // prettier-ignore
    profile = await transform.item(profile, "UniversityTransformer");
    return response.ok({ msg: "Profile retrieved successfully.", profile });
  }

  /**
   * Display the currently authenticated user.
   * GET me
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async updateProfile({ request, auth, response, transform }) {
    const trx = await DB.beginTransaction();
    await auth.user.update(request.only(University.editableFields), trx);
    let user = auth.user;

    const gradePoints = request.input("grade_points");
    if (!!gradePoints) {
      await auth.user.gradePoints().delete(trx);
      const points = await auth.user.gradePoints().createMany(gradePoints, trx);
      user.grade_points = points;
    }

    await trx.commit();
    user = await transform.item(user, "UniversityTransformer");
    return response.ok({ msg: "Profile updated successfully.", user });
  }
}

module.exports = UniversityController;
