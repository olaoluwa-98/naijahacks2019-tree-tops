/** @type {typeof import('../Helpers/Error')} */
const { standardize } = use("App/Helpers/Error");

class BaseValidator {
  get validateAll() {
    return true;
  }

  async fails(errorMessages) {
    return this.ctx.response.badRequest(standardize(errorMessages));
  }
}

module.exports = BaseValidator;
