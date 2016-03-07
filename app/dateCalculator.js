var getNumberOfFullDaysBetweenDates = function (startDate, endDate) {
    startDate = startDate.split("/");
    endDate = endDate.split("/");
    var yearDiff = endDate[2] - startDate[2];
    var monthDiff = (endDate[1] - startDate[1]) + 12 * yearDiff;
    var dayDiff = endDate[0] - startDate[0];
    if(yearDiff === 0) {
        if(monthDiff === 0) {
            if(dayDiff < 2) {
                return 0;
            } else {
                return dayDiff - 1;
            }
        } else {
            var numDaysInStartDate = months[parseInt(startDate[1])];
            var remainingDaysInStartMonth = (numDaysInStartDate - parseInt(startDate[0]));
            var daysInStartAndEndMonths = remainingDaysInStartMonth + (parseInt(endDate[0]) - 1);
            if (monthDiff === 1) {
                return daysInStartAndEndMonths;
            } else {
                for (var i = (parseInt(startDate[1]) + 1); i < parseInt(endDate[1]); i++) {
                    daysInStartAndEndMonths += months[i];
                }
                return daysInStartAndEndMonths;
            }
        }
    } else {
        var numberOfLeapYears = 0;
        for (var j = (parseInt(startDate[2])); j === parseInt(endDate[2]); j++) {
            numberOfLeapYears += isLeapYear(j) ? 1 : 0;
        }
        if (yearDiff === 1) {

        }
    }
};

var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var isLeapYear = function(year) {
    return (year % 4 === 0 && year % 100 != 0) || (year % 4 === 0) && (year % 100 === 0 && year % 400 === 0);
};

module.exports = {
    isLeapYear: isLeapYear,
    getNumberOfFullDaysBetweenDates: getNumberOfFullDaysBetweenDates
};

