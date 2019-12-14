"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

class AuthUniversityLogin extends BaseValidator {
  get rules() {
    return {
      email: "required|email|exists:universities,email",
      password: "required|string|min:8"
    };
  }

  get sanitizationRules() {
    return {
      email: "normalize_email"
    };
  }
}

module.exports = AuthUniversityLogin;
