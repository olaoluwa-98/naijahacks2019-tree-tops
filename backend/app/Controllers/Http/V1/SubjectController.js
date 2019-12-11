"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Database').prototype} */
const DB = use("Database");

/** @type {typeof import('../../../Models/Course')} */
const Course = use("App/Models/Course");

/** @type {typeof import('../../../Models/Subject')} */
const Subject = use("App/Models/Subject");

/** @type {typeof import('lodash')} */
const _ = use("lodash");

/**
 * Resourceful controller for interacting with subjects
 */
class SubjectController {
  /**
   * Show a list of all subjects.
   * GET subjects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ transform, response, params }) {
    const query = { course_id: params.course };
    let subjects = await Subject.query().where(query).fetch(); // prettier-ignore
    subjects = await transform.collection(subjects, "SubjectTransformer");
    return response.ok({ msg: "Subjects retrieved successfully.", subjects });
  }

  /**
   * Create/save a new subject.
   * POST subjects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async storeBulk({ auth, request, transform, params, response }) {
    const course = await Course.findOrFail(params.course);
    if (course.university_id !== auth.user.id) {
      return response.unauthorized({
        msg: "You are currently unauthorized to update this course."
      });
    }

    const results = { subjects: [], failed: [] };
    await request.input("subjects", []).forEach(async item => {
      const subject = _.pick(item, Subject.editableFields);
      const query = { course_id: params.course, code: subject.code };
      const result = await Subject.query().where(query).first(); // prettier-ignore
      subject.course_id = params.course;
      if (result === null) results.subjects.push(subject);
      results.failed.push(subject);
    });

    const trx = await DB.beginTransaction();
    results.subjects = await Subject.createMany(results.subjects, trx);
    await trx.commit();
    results.subjects = await transform.collection(results.subjects, "SubjectTransformer"); // prettier-ignore
    return response.ok({ msg: "Subject created successfully.", ...results });
  }

  /**
   * Display a single subject.
   * GET subjects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, transform, response }) {
    const query = { id: params.subject, course_id: params.course };
    let subject = await Subject.query().where(query).firstOrFail(); // prettier-ignore
    subject = await transform.item(subject, "SubjectTransformer");
    return response.ok({ msg: "Subject retrieved successfully.", subject });
  }

  /**
   * Update subject details.
   * PUT or PATCH subjects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ auth, params, transform, request, response }) {
    const course = await Course.findOrFail(params.course);
    if (course.university_id !== auth.user.id) {
      return response.unauthorized({
        msg: "You are currently unauthorized to update this course."
      });
    }

    const payload = request.only(Subject.editableFields);

    if (payload.code !== undefined) {
      const query = { course_id: params.course, code: payload.code };
      const result = await Subject.query().where(query).first(); // prettier-ignore
      if (result !== null) {
        return response.badRequest({
          msg: "Subject with same code already exists."
        });
      }
    }

    let subject = await Subject.findOrFail(params.subject);
    await subject.update(payload);
    subject = await transform.item(subject, "SubjectTransformer");
    return response.ok({ msg: "Subject updated successfully.", subject });
  }

  /**
   * Delete a subject with id.
   * DELETE subjects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, transform, response }) {
    const course = await Course.findOrFail(params.course);
    if (course.university_id !== auth.user.id) {
      return response.unauthorized({
        msg: "You are currently unauthorized to update this course."
      });
    }

    let subject = await Subject.findOrFail(params.subject);
    await subject.delete();
    subject = await transform.item(subject, "SubjectTransformer");
    return response.ok({ msg: "Subject deleted successfully.", subject });
  }
}

module.exports = SubjectController;
