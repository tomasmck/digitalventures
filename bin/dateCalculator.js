#!/usr/bin/env node
var dateCalculator = require('../src/dateCalculator.js');
var startDate;
var endDate;

if(process.argv[2] !== null) {
    startDate = process.argv[2]
}

if(process.argv[3] !== null) {
    endDate = process.argv[3];
}

console.log('Total number of days: %s', dateCalculator.getNumberOfFullDaysBetweenDates(startDate, endDate));

