"use strict";

const { LogicalException } = require("@adonisjs/generic-exceptions");

class GuardUnauthorizedException extends LogicalException {
  constructor(message) {
    const code = 401;
    const name = "E_GUARD_UNAUTHORIZED";

    super(message, code, name);
  }
}

module.exports = GuardUnauthorizedException;
