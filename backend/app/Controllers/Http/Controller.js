"use strict";

/** @type {typeof import('../../Exceptions/GuardUnauthorizedException')} */
const UnauthorizedException = use("App/Exceptions/GuardUnauthorizedException");

class Controller {
  async authorize(guard, item, rule) {
    const result = await guard.allows(rule, item);
    const policyfailed = result.error !== undefined && result.error === "POLICY_FAILED"; // prettier-ignore

    if (policyfailed || result === false) {
      throw new UnauthorizedException(
        result.msg || "You are currently unauthorized to access this resource."
      );
    }

    return true;
  }
}

module.exports = Controller;
