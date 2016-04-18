"use strict";

/**
 * currentYear
 * Get the current year.
 *
 * @name currentYear
 * @function
 * @param {Boolean} str If `true`, the result will be stringified.
 * @returns {String|Number} The current year.
 */
module.exports = function currentYear (str) {
    if (str) { return currentYear().toString(); }
    return new Date().getFullYear();
};
