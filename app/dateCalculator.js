var getNumberOfFullDaysBetweenDates = function (startDate, endDate) {
    if (isStartDateBeforeEndDate(startDate.split("/"), endDate.split("/"))) {
        var temp = startDate;
        startDate = endDate;
        endDate = temp;
    }
    var startDay = parseInt(startDate[0])
        , startMonth = parseInt(startDate[1])
        , startYear = parseInt(startDate[2])
        , endDay = parseInt(endDate[0])
        , endMonth = parseInt(endDate[1])
        , endYear = parseInt(endDate[2])
        , yearDiff = endYear - startYear
        , monthDiff = (endMonth - startMonth) + 12 * yearDiff
        , dayDiff = endDay - startDay
        , totalDays = 0;

    if (monthDiff === 0) { totalDays = dayDiff }
    var fullYears = yearDiff === 0 || yearDiff === 1 ? 0 : yearDiff - 1;
    var fullMonths = endMonth < startMonth ? 12 - (startMonth - endMonth) : monthDiff;
    if (monthDiff > 0) {
        totalDays = (getNumberOfDaysInMonth(startMonth) - startDay) + (endDay);
        var firstFullMonth = (startMonth + 1);
        for (var k = firstFullMonth; k < (firstFullMonth + (fullMonths -1)); k++) {
            var month = k;
            var yearIndex = startYear;
            if (k > 12) {
                month -= 12;
                yearIndex += 1;
            }
            totalDays += getNumberOfDaysInMonth(month);
            if (month === 2 && isLeapYear(yearIndex)) {
                totalDays++
            }
        }
        var firstFullYear = (startYear + 1);
        if (yearDiff != 1) {
            for (var l = firstFullYear; l < (firstFullYear + fullYears); l++) {
                if (isLeapYear(l)) {
                    totalDays++
                }
            }
        }
        totalDays += (fullYears * 365);
    }
    if (totalDays != 0) { totalDays-- }
    return totalDays;
};

var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

getNumberOfDaysInMonth = function(month) {
    return months[month - 1];
};

var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 != 0) || (year % 4 === 0) && (year % 100 === 0 && year % 400 === 0);
};

var isStartDateBeforeEndDate = function (startDate, endDate) {
    return ((startDate[2] > endDate[2]) || (startDate[2] === endDate[2] && startDate[1] > endDate[1]) || (startDate[2] === endDate[2] && startDate[1] === endDate[1] && startDate[0] > endDate[0]));
};

module.exports = {
    isLeapYear: isLeapYear,
    getNumberOfFullDaysBetweenDates: getNumberOfFullDaysBetweenDates
};

