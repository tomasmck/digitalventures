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
        });

        it('should return 29 days between the 7th October and 7th November of the same year', function() {
            expect(dateCalculator.getNumberOfFullDaysBetweenDates("07/10/1972", "07/11/1972")).to.equal(29);
        });

        it('should return 363 days when the start and end date are exactly one year apart', function() {
            expect(dateCalculator.getNumberOfFullDaysBetweenDates("07/10/1972", "07/10/1973")).to.equal(363);
        });

        it('should return 364 days when the start and end date are exactly one year apart including a leap year', function() {
            expect(dateCalculator.getNumberOfFullDaysBetweenDates("07/10/2015", "07/10/2016")).to.equal(364);
        });

        it('should return 19 days between the 2nd and 22nd of June 1983', function() {
            expect(dateCalculator.getNumberOfFullDaysBetweenDates("02/06/1983", "22/06/1983")).to.equal(19);
        });

        it('should return 173 days between 4th July and Christmas 1984', function() {
            expect(dateCalculator.getNumberOfFullDaysBetweenDates("04/07/1984", "25/12/1984")).to.equal(173);
        });

        it('should return 1979 days between 3rd Jan 1989 and 3rd August 1983', function() {
            expect(dateCalculator.getNumberOfFullDaysBetweenDates("03/01/1989", "03/08/1983")).to.equal(1979);
        })
    });

    describe('leap years', function() {

        it('should be a leap year if the year is divisible by 4', function() {
            expect(dateCalculator.isLeapYear(2012)).to.equal(true);
            expect(dateCalculator.isLeapYear(2016)).to.equal(true);
            expect(dateCalculator.isLeapYear(2020)).to.equal(true);
        });

        it('should NOT be a leap year if the year is divisible by 4 but also divisible by 100', function() {
            expect(dateCalculator.isLeapYear(2100)).to.equal(false);
            expect(dateCalculator.isLeapYear(2200)).to.equal(false);
            expect(dateCalculator.isLeapYear(2300)).to.equal(false);
        });

        it('should be a leap year if the year is divisible by 4, 100 and divisible by 400', function() {
            expect(dateCalculator.isLeapYear(2000)).to.equal(true);
            expect(dateCalculator.isLeapYear(2400)).to.equal(true);
            expect(dateCalculator.isLeapYear(2800)).to.equal(true);
        });
    });
});