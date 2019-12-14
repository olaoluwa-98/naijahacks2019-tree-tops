const Env = use("Env");
const Route = use("Route");
const UNWANTED_PREFIX = "/api/v1";
const HOST_NAME = Env.get("FRONTEND_APP_URL", "http://localhost:3000");

/**
 * Strip "/api" so frontend can use it
 */
const stripApiPrefix = url => {
  return url.split(UNWANTED_PREFIX)[1];
};

class LinkBuilder {
  /**
   * Generate email verification link.
   */
  static emailVerification({ token }) {
    return `${HOST_NAME}${stripApiPrefix(
      Route.url("v1.verify.email", { token })
    )}`;
  }

  /**
   * Generate a reset password url.
   */
  static resetPassword({ token }) {
    return `${HOST_NAME}${stripApiPrefix(
      Route.url("v1.reset.password", { token })
    )}`;
  }

  /**
   * Generate a catalog invitation url.
   */
  static catalogInvitation({ token }) {
    return `${HOST_NAME}${stripApiPrefix(
      Route.url("v1.catalog.invite", { token })
    )}`;
  }
}

module.exports = LinkBuilder;
