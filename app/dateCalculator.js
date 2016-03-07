var getNumberOfFullDaysBetweenDates = function (startDate, endDate) {
    startDate = startDate.split("/");
    endDate = endDate.split("/");
    var startDay = parseInt(startDate[0]);
    var startMonth = parseInt(startDate[1]);
    var startYear = parseInt(startDate[2]);
    var endDay = parseInt(endDate[0]);
    var endMonth = parseInt(endDate[1]);
    var endYear = parseInt(endDate[2]);
    var yearDiff = endYear - startYear;
    var monthDiff = (endMonth - startMonth) + 12 * yearDiff;
    var dayDiff = endDay - startDay;
    var remainingDaysInStartMonth = 0;
    if(yearDiff === 0) {
        if(monthDiff === 0) {
            if(dayDiff < 2) {
                return 0;
            } else {
                return dayDiff - 1;
            }
        } else {
            var numDaysInStartDate = months[startMonth -1];
            remainingDaysInStartMonth = (numDaysInStartDate - startDay);
            var daysInStartAndEndMonths = remainingDaysInStartMonth + (endDay - 1);
            if (monthDiff === 1) {
                return daysInStartAndEndMonths;
            } else {
                for (var i = (startMonth + 1); i < endMonth; i++) {
                    daysInStartAndEndMonths += months[i -1];
                }
                return daysInStartAndEndMonths;
            }
        }
    } else {
        var fullYears = yearDiff === 0 || yearDiff === 1 ? 0 : yearDiff - 1;
        var daysInMonthsPlusLooseDays = 0;
        var numberOfMonthsDifference = 0;
        if(endMonth < startMonth) {
            numberOfMonthsDifference = 12 - (startMonth - endMonth);
            remainingDaysInStartMonth = (months[startMonth -1] - startDay - 1);
            daysInMonthsPlusLooseDays = remainingDaysInStartMonth + (endDay - 1);
        } else {
            numberOfMonthsDifference = (endMonth - startMonth) + (12 * yearDiff);
            remainingDaysInStartMonth = (months[startMonth -1] - startDay - 1);
            daysInMonthsPlusLooseDays = remainingDaysInStartMonth + (endDay - 1);
        }
        if (monthDiff === 1) {
            return daysInMonthsPlusLooseDays;
        } else {
            var firstFullMonth = (startMonth + 1);
            for (var k = firstFullMonth; k < (firstFullMonth + numberOfMonthsDifference -1); k++) {
                var monthIndex = k;
                var yearIndex = startYear;
                if (k > 11) {
                    monthIndex -= 12;
                    yearIndex += 1;
                }
                daysInMonthsPlusLooseDays += months[monthIndex];
                if (monthIndex === 1 && isLeapYear(yearIndex)) { daysInMonthsPlusLooseDays++ }
            }
            var firstFullYear = (startYear + 1);
            if (yearDiff != 1) {
                for (var l = firstFullYear; l < (firstFullYear + fullYears); l++){
                    if (isLeapYear(l)) {
                        daysInMonthsPlusLooseDays++
                    }
                }
            }
            return (fullYears * 365) + daysInMonthsPlusLooseDays;
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

