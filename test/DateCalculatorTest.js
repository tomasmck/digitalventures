var expect = require("chai").expect;
var dateCalculator = require("../app/dateCalculator");


describe('Date calculator', function() {

    describe('calculating the number of days between two dates', function() {
        it('should return 0 when the start and end date are the same', function() {
            expect(dateCalculator.getNumberOfFullDaysBetweenDates("07/11/1972", "07/11/1972")).to.equal(0);
        });
        it('should return 0 when the end date is the day after the start date', function() {
            expect(dateCalculator.getNumberOfFullDaysBetweenDates("07/11/1972", "08/11/1972")).to.equal(0);
        });
        it('should return 1 when the end date is two days after the start date', function() {
            expect(dateCalculator.getNumberOfFullDaysBetweenDates("07/11/1972", "09/11/1972")).to.equal(1);
        })
    });
});