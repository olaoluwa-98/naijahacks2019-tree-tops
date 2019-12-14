"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('../../../Models/Course')} */
const Course = use("App/Models/Course");

/** @type {typeof import('../Controller')}*/
const BaseController = use("App/Controllers/Http/Controller");

/**
 * Resourceful controller for interacting with courses
 */
class CourseController extends BaseController {
  /**
   * Show a list of all courses.
   * GET courses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, response, transform }) {
    // TODO: if the course knowledge base for a course has been generated,
    // include it in the list of courses, else skip it.
    const query = { university_id: params.university };
    let courses = await Course.query().where(query).fetch(); // prettier-ignore
    courses = await transform.collection(courses, "CourseTransformer");
    return response.ok({ msg: "Courses retrieved successfully.", courses });
  }

  /**
   * Create/save a new course.
   * POST courses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ auth, request, response, transform }) {
    let course = request.only(Course.editableFields);
    const query = { university_id: auth.user.id, name: course.name };
    const payload = { ...query, ...course };
    course = await Course.findOrCreate(query, payload);
    course = await transform.item(course, "CourseTransformer");
    return response.ok({ msg: "Course created successfully.", course });
  }

  /**
   * Display a single course.
   * GET courses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response, transform }) {
    const query = { id: params.course, university_id: params.university };
    let course = await Course.query().where(query).firstOrFail(); // prettier-ignore
    course = await transform.item(course, "CourseTransformer");
    return response.ok({ msg: "Course retrieved successfully.", course });
  }

  /**
   * Update course details.
   * PUT or PATCH courses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ auth, params, request, transform, response }) {
    let course = await Course.findOrFail(params.course);
    if (course.university_id !== auth.user.id) {
      return response.unauthorized({
        msg: "You are currently unauthorized to update this course."
      });
    }
    await course.update(request.only(Course.updateableFields));
    course = await transform.item(course, "CourseTransformer");
    return response.ok({ msg: "Course updated successfully.", course });
  }

  /**
   * Delete a course with id.
   * DELETE courses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, transform, response }) {
    let course = await Course.findOrFail(params.course);
    if (course.university_id !== auth.user.id) {
      return response.unauthorized({
        msg: "You are currently unauthorized to update this course."
      });
    }
    await course.delete();
    course = await transform.item(course, "CourseTransformer");
    return response.ok({ msg: "Course deleted successfully.", course });
  }
}

module.exports = CourseController;
