'use strict';
const moment = require('moment');

class FormatDatesToUTC {
  register(Model, customOptions = {}) {
    const defaultOptions = { format: 'YYYY-MM-DD HH:mm:ss' };
    const options = Object.assign(defaultOptions, customOptions);

    // Saves the date in UTC
    Model.formatDates = (field, value) => {
      const config = options[field];
      if (config != undefined) {
        return moment(value)
          .utc(config.keepLocalTime || false)
          .format(config.format);
      }

      return moment(value)
        .utc(true)
        .format(options.format);
    };
  }
}

module.exports = FormatDatesToUTC;
