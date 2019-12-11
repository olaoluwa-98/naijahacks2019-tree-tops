"use strict";

/**
 * @type {typeof import('@adonisjs/framework/src/Exception/index')}
 */
const BaseExceptionHandler = use("BaseExceptionHandler");

/**
 * @type {typeof import('adonis-sentry')}
 */
const sentry = use("Sentry");

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class SentryHandlerException
 */
class SentryHandlerException extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, { request, response }) {
    response.status(error.status).send(error.message);
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report(error, { request }) {
    sentry.captureException(error);
  }
}

module.exports = SentryHandlerException;
