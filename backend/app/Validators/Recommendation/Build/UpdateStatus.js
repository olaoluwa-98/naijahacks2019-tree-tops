"use strict";

/** @type {typeof import('../../BaseValidator')} */
const BaseValidator = use("App/Validators/BaseValidator");

/** @type {typeof import('../../../Enums/RecommendationBuildStatus')} */
const BuildStatus = use("App/Enums/RecommendationBuildStatus");

class RecommendationBuildUpdateStatus extends BaseValidator {
  get rules() {
    const status = Object.values(BuildStatus).join(",");

    return {
      status: `required|in:${status}`
    };
  }

  get sanitizationRules() {
    return {
      status: "trim"
    };
  }
}

module.exports = RecommendationBuildUpdateStatus;
