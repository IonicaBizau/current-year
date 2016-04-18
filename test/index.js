const tester = require("tester")
    , year = require("..")
    ;

tester.describe("current year", t => {
    t.should("get the current year", () => {
        t.expect(year()).toBe(new Date().getFullYear());
        t.expect(year(true)).toBe(new Date().getFullYear().toString());
    });
});
