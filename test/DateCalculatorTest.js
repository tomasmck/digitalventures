QUnit.test("Date calculator returns zero when the start and end date are the same", function( assert ) {
    var startDate = "07/11/1972";
    var endDate = "07/11/1972";
    assert.equal(countNumberOfDays(startDate, endDate), 0);
});

QUnit.test("Date calculator returns zero when the end date is one day after the start date", function( assert ) {
    var startDate = "07/11/1972";
    var endDate = "08/11/1972";
    assert.equal(countNumberOfDays(startDate, endDate), 0);
});


QUnit.test("Date calculator returns 1 when the end date is two days after the start date", function( assert ) {
    var startDate = "07/11/1972";
    var endDate = "09/11/1972";
    assert.equal(countNumberOfDays(startDate, endDate), 1);
});