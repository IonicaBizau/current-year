"use strict";

const currentYear = require("../lib");

console.log(currentYear());
// => 2016

console.log(currentYear(true));
// => '2016'

let past = new Date(1918, 11, 1);
console.log(currentYear(past));
// => 1918
