import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('yearsAgo function', function() {
    it("should return the difference between current year and 1976", function() {
        var expected = new Date().getFullYear() - 1976;
        assert.equal(yearsAgo(1976), expected);
    });

    it("should return the difference between current year and 2000", function() {
        var expected = new Date().getFullYear() - 2000;
        assert.equal(yearsAgo(2000), expected);
    });
});