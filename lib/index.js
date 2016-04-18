"use strict";

/**
 * currentYear
 * Get the current year.
 *
 * @name currentYear
 * @function
 * @param {Boolean} str If `true`, the result will be stringified.
 * @param {Date} d An optional date to get the year from.
 * @returns {String|Number} The current year.
 */
module.exports = function currentYear (str, d) {
    if (str && str.constructor === Date) {
        d = str;
        str = false;
    }
    if (str) { return currentYear(false, d).toString(); }
    return (d || new Date()).getFullYear();
};
