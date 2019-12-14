"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

class AuthStudentLogin extends BaseValidator {
  get rules() {
    return {
      email: "required|email|string|exists:students,email",
      password: "required|string:min:8"
    };
  }

  get sanitizationRules() {
    return {
      email: "normalize_email"
    };
  }
}

module.exports = AuthStudentLogin;
