"use strict";

class Policy {
  static deny(message) {
    return {
      error: "POLICY_FAILED",
      msg: message
    };
  }
}

module.exports = Policy;
