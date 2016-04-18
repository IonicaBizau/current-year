const tester = require("tester")
    , year = require("..")
    ;

tester.describe("current year", t => {
    t.should("get the current year", () => {
        t.expect(year()).toBe(new Date().getFullYear());
        t.expect(year(true)).toBe(new Date().getFullYear().toString());
    });
    t.should("get the year of a date obj", () => {
        t.expect(year(false, new Date(2014, 0, 1))).toBe(2014);
        t.expect(year(true, new Date(2014, 0, 1))).toBe("2014");
        t.expect(year(new Date(2014, 0, 1))).toBe(2014);
    });
});
