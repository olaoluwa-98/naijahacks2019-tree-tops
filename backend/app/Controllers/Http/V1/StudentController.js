"use strict";

/** @type {typeof import('../../../Models/Student')} */
const Student = use("App/Models/Student");

class StudentController {
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
    const user = await transform.item(auth.user, "StudentTransformer");
    return response.ok({ msg: "Profile retrieved successfully.", user });
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
  async updateProfile({ auth, request, response, transform }) {
    await auth.user.update(request.only(Student.editableFields));
    const user = await transform.item(auth.user, "StudentTransformer");
    return response.ok({ msg: "Profile updated successfully.", user });
  }
}

module.exports = StudentController;
