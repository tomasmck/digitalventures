var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var getNumberOfFullDaysBetweenDates = function (startDate, endDate) {
    startDate = startDate.split("/");
    endDate = endDate.split("/");
    var totalDays;
    if (isStartDateBeforeEndDate(startDate, endDate)) {
        totalDays = calculateNumberOfFullDays(endDate, startDate);
    } else {
        totalDays = calculateNumberOfFullDays(startDate, endDate);
    }
    if (totalDays != 0) { totalDays-- }
    return totalDays;
};

function calculateNumberOfFullDays(startDate, endDate) {
    var startDay = parseInt(startDate[0])
        , startMonth = parseInt(startDate[1])
        , startYear = parseInt(startDate[2])
        , endDay = parseInt(endDate[0])
        , endMonth = parseInt(endDate[1])
        , endYear = parseInt(endDate[2])
        , yearDiff = endYear - startYear
        , monthDiff = (endMonth - startMonth) + (yearDiff * 12)
        , dayDiff = endDay - startDay
        , totalDays = 0
        , numberOfFullYears = yearDiff === 0 || yearDiff === 1 ? 0 : yearDiff - 1
        , numberOfFullMonths = endMonth < startMonth ? 12 - (startMonth - endMonth) : monthDiff;

    if (monthDiff >= 1) {
        totalDays += addPartialMonths(startMonth, startDay, endDay);
        totalDays += addFullMonths(startMonth, numberOfFullMonths, startYear);
        totalDays += addFullYears(startYear, numberOfFullYears);
    } else {
        totalDays = dayDiff
    }
    return totalDays;
}

function addPartialMonths(startMonth, startDay, endDay) {
    return (getNumberOfDaysInMonth(startMonth) - startDay) + (endDay);
}

function addFullMonths(startMonth, fullMonths, startYear) {
    var numberOfDays = 0;
    for (var i = startMonth + 1; i < (startMonth + fullMonths); i++) {
        var month = i;
        var yearIndex = startYear;
        if (i > 12) {
            month -= 12;
            yearIndex += 1;
        }
        numberOfDays += getNumberOfDaysInMonth(month);
        if (month === 2 && isLeapYear(yearIndex)) {
            numberOfDays++
        }
    }
    return numberOfDays;
}

function addFullYears(startYear, fullYears) {
    var numberOfDays = 0;
    var firstFullYear = (startYear + 1);
    if (fullYears > 0) {
        for (var l = firstFullYear; l < (firstFullYear + fullYears); l++) {
            if (isLeapYear(l)) {
                numberOfDays++
            }
        }
    }
    numberOfDays += (fullYears * 365);
    return numberOfDays;
}

function getNumberOfDaysInMonth(month) {
    return months[month - 1];
}

function isStartDateBeforeEndDate(startDate, endDate) {
    return ((startDate[2] > endDate[2]) || (startDate[2] === endDate[2] && startDate[1] > endDate[1]) || (startDate[2] === endDate[2] && startDate[1] === endDate[1] && startDate[0] > endDate[0]));
}

var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 != 0) || (year % 4 === 0) && (year % 100 === 0 && year % 400 === 0);
};

module.exports = {
    isLeapYear: isLeapYear,
    getNumberOfFullDaysBetweenDates: getNumberOfFullDaysBetweenDates
};

