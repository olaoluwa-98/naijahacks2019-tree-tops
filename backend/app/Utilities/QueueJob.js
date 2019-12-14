// TODO: Switch Queue provider from Kue to Bull.
const Kue = use("Kue");

/**
 * Dispatch a job to the default queue provider.
 * @param {String} key
 * @param {Object} data
 * @param {Object} options
 */
const dispatchJob = (key, data, options) => Kue.dispatch(key, data, options);

/**
 * Dispatch a job to the default queue provider.
 * @param {String} key
 * @param {Object} data
 * @param {Object} options
 */
const dispatch = (key, data, options = {}) => {
  if (Object.keys(options).length < 1) {
    options = {
      priority: "normal",
      attempts: 3,
      remove: true,
      jobFn: () => {}
    };
  }

  dispatchJob(key, data, options);
};

module.exports = { dispatch };
