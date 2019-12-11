"use strict";

/** @type {typeof import('../../../Models/Student')} */
const Student = use("App/Models/Student");

/** @type {typeof import('../../../Models/University')} */
const University = use("App/Models/University");

class AuthController {
  /**
   * Login a student.
   * POST auth/student/login
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Auth} ctx.auth
   */
  async loginStudent({ request, response, auth }) {
    const { email, password } = request.all();
    const token = await auth
      .authenticator("student")
      .withRefreshToken()
      .attempt(email, password);
    if (!token) response.badRequest({ msg: "Invalid email or password." });
    const student = await Student.findByOrFail("email", email);
    return response.ok({ msg: "Login successful.", token, student });
  }

  /**
   * Login a university.
   * POST auth/university/login
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Auth} ctx.auth
   */
  async loginUniversity({ request, response, auth }) {
    const { email, password } = request.all();
    const token = await auth
      .authenticator("university")
      .withRefreshToken()
      .attempt(email, password);
    if (!token) response.badRequest({ msg: "Invalid email or password." });
    const student = await University.findByOrFail("email", email);
    return response.ok({ msg: "Login successful.", token, student });
  }

  /**
   * Create/save a new student.
   * POST auth/student/signup
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Auth} ctx.auth
   */
  async signupStudent({ request, response, auth }) {
    const details = request.only(Student.editableFields);
    const student = await Student.create(details);
    const { email, password } = details;
    const token = await auth.withRefreshToken().attempt(email, password);
    const msg = "Account created succesfully.";
    return response.ok({ token, student, msg });
  }

  /**
   * Logout a student.
   * POST auth/student/logout
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Auth} ctx.auth
   */
  async logoutStudent({ response, auth }) {
    const apiToken = auth.getAuthHeader();
    await auth.authenticator("student").revokeTokens([apiToken], true);
    return response.ok({ msg: "Logout successful." });
  }

  /**
   * Logout a university.
   * POST auth/university/logout
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Auth} ctx.auth
   */
  async logoutUniversity({ response, auth }) {
    const apiToken = auth.getAuthHeader();
    await auth.authenticator("university").revokeTokens([apiToken], true);
    return response.ok({ msg: "Logout successful." });
  }
}

module.exports = AuthController;
