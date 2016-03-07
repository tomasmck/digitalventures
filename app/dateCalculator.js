exports.getNumberOfFullDaysBetweenDates = function (startDate, endDate) {
    return startDate - endDate;
};


exports.isLeapYear = function(year) {
    return (year % 4 === 0 && year % 100 != 0) || (year % 4 === 0) && (year % 100 === 0 && year % 400 === 0);
};