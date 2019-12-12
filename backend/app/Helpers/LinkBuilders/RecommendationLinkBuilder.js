const Env = use("Env");
const Route = use("Route");
const HOST_NAME = Env.get("APP_URL", "http://localhost:3000");

class RecommendationLinkBuilder {
  /**
   * Generate update recommendation build status link.
   */
  static updateBuildStatus() {
    return `${HOST_NAME}${Route.url("v1.recommendation.build.update")}`;
  }
}

module.exports = RecommendationLinkBuilder;
