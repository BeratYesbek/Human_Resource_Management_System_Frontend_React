"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var indexOf_1 = __importDefault(require("lodash/indexOf"));
var lastIndexOf_1 = __importDefault(require("lodash/lastIndexOf"));
var range_1 = __importDefault(require("lodash/range"));
var includes_1 = __importDefault(require("lodash/includes"));
var isNil_1 = __importDefault(require("lodash/isNil"));
var isArray_1 = __importDefault(require("lodash/isArray"));
var concat_1 = __importDefault(require("lodash/concat"));
var uniq_1 = __importDefault(require("lodash/uniq"));
var first_1 = __importDefault(require("lodash/first"));
var sortBy_1 = __importDefault(require("lodash/sortBy"));
var slice_1 = __importDefault(require("lodash/slice"));
var find_1 = __importDefault(require("lodash/find"));
/** Build days to fill page. */
function buildDays(date, daysOnPage) {
    var start = date.clone().startOf('month').startOf('week');
    return getDaysArray(start.date(), getBrakepoints(date), daysOnPage).map(function (d) { return d.toString(); });
}
exports.buildDays = buildDays;
/** Return dates from ends of months.
 *
 * On one datepicker's page not only days from current month are displayed
 * but also some days from adjacent months. This function returns days
 * that separate one month from other (last day in month).
 * Return array of one or two numbers.
 */
function getBrakepoints(referenceDate) {
    var dateInCurrentMonth = referenceDate.clone();
    var currentMonth = dateInCurrentMonth.month();
    var brakepoints = [];
    var firstDateOnPage = dateInCurrentMonth.clone().startOf('month').startOf('week');
    if (firstDateOnPage.month() !== currentMonth) {
        brakepoints.push(firstDateOnPage.clone().endOf('month').date());
    }
    brakepoints.push(dateInCurrentMonth.clone().endOf('month').date());
    return brakepoints;
}
/* Return array of day positions that are not disabled by default. */
function getDefaultEnabledDayPositions(allDays, date) {
    var dateClone = date.clone();
    var brakepoints = getBrakepoints(dateClone);
    if (brakepoints.length === 1) {
        return range_1.default(0, indexOf_1.default(allDays, brakepoints[0].toString()) + 1);
    }
    else {
        return range_1.default(indexOf_1.default(allDays, brakepoints[0].toString()) + 1, lastIndexOf_1.default(allDays, brakepoints[1].toString()) + 1);
    }
}
exports.getDefaultEnabledDayPositions = getDefaultEnabledDayPositions;
/** Return day positions that shoud be displayed as disabled. */
function getDisabledDays(disable, maxDate, minDate, currentDate, daysOnPage, enable) {
    var dayPositions = range_1.default(daysOnPage);
    var daysInCurrentMonthPositions = getDefaultEnabledDayPositions(buildDays(currentDate, daysOnPage), currentDate);
    var disabledDays = dayPositions.filter(function (dayPosition) { return !includes_1.default(daysInCurrentMonthPositions, dayPosition); });
    if (isArray_1.default(enable)) {
        var enabledDaysPositions_1 = enable
            .filter(function (date) { return date.isSame(currentDate, 'month'); })
            .map(function (date) { return date.date(); })
            .map(function (date) { return daysInCurrentMonthPositions[date - 1]; });
        disabledDays = concat_1.default(disabledDays, dayPositions.filter(function (position) {
            return !includes_1.default(enabledDaysPositions_1, position);
        }));
    }
    if (isArray_1.default(disable)) {
        disabledDays = concat_1.default(disabledDays, disable
            .filter(function (date) { return date.isSame(currentDate, 'month'); })
            .map(function (date) { return date.date(); })
            .map(function (date) { return daysInCurrentMonthPositions[date - 1]; }));
    }
    if (!isNil_1.default(maxDate)) {
        if (maxDate.isBefore(currentDate, 'month')) {
            disabledDays = dayPositions;
        }
        if (maxDate.isSame(currentDate, 'month')) {
            disabledDays = concat_1.default(disabledDays, range_1.default(1, daysInCurrentMonthPositions.length + 1)
                .filter(function (date) { return date > maxDate.date(); })
                .map(function (date) { return daysInCurrentMonthPositions[date - 1]; }));
        }
    }
    if (!isNil_1.default(minDate)) {
        if (minDate.isAfter(currentDate, 'month')) {
            disabledDays = dayPositions;
        }
        if (minDate.isSame(currentDate, 'month')) {
            disabledDays = concat_1.default(disabledDays, range_1.default(1, daysInCurrentMonthPositions.length + 1)
                .filter(function (date) { return date < minDate.date(); })
                .map(function (date) { return daysInCurrentMonthPositions[date - 1]; }));
        }
    }
    return sortBy_1.default(uniq_1.default(disabledDays).filter(function (day) { return !isNil_1.default(day); }));
}
exports.getDisabledDays = getDisabledDays;
/** Return day positions that should be displayed as marked. */
function getMarkedDays(marked, currentDate, daysOnPage) {
    if (marked.length === 0) {
        return [];
    }
    var allDates = buildDays(currentDate, daysOnPage);
    var activeDayPositions = getDefaultEnabledDayPositions(allDates, currentDate);
    var allDatesNumb = allDates.map(function (date) { return parseInt(date, 10); });
    /*
     * The following will clear all dates before the 1st of the current month.
     * This is to prevent marking days before the 1st, that shouldn't be marked.
     * If the incorrect dates are marked, instead of the legitimate ones, the legitimate dates
     * will not be marked at all.
    */
    var fillTo = allDatesNumb.indexOf(1);
    for (var i = 0; i < fillTo; i++) {
        allDatesNumb[i] = 0;
    }
    var markedIndexes = marked
        .filter(function (date) { return date.isSame(currentDate, 'month'); })
        .map(function (date) { return date.date(); })
        .map(function (date) { return allDatesNumb.indexOf(date); });
    return markedIndexes.filter(function (index) { return includes_1.default(activeDayPositions, index); });
}
exports.getMarkedDays = getMarkedDays;
function isNextPageAvailable(date, maxDate) {
    if (isNil_1.default(maxDate)) {
        return true;
    }
    if (date.isSameOrAfter(maxDate, 'month')) {
        return false;
    }
    return true;
}
exports.isNextPageAvailable = isNextPageAvailable;
function isPrevPageAvailable(date, minDate) {
    if (isNil_1.default(minDate)) {
        return true;
    }
    if (date.isSameOrBefore(minDate, 'month')) {
        return false;
    }
    return true;
}
exports.isPrevPageAvailable = isPrevPageAvailable;
// helper
function getDaysArray(start, brakepoints, length) {
    var currentDay = start;
    var days = [];
    var brakepointsLeft = brakepoints.slice();
    while (!(days.length === length)) {
        days.push(currentDay);
        var bp = first_1.default(brakepointsLeft);
        if (currentDay === bp) {
            currentDay = 1;
            brakepointsLeft = slice_1.default(brakepointsLeft, 1);
        }
        else {
            currentDay = currentDay + 1;
        }
    }
    return days;
}
exports.testExport = {
    buildDays: buildDays,
    getBrakepoints: getBrakepoints,
    getDisabledDays: getDisabledDays,
    isNextPageAvailable: isNextPageAvailable,
    isPrevPageAvailable: isPrevPageAvailable,
    getDaysArray: getDaysArray,
    getDefaultEnabledDayPositions: getDefaultEnabledDayPositions,
};
function getInitialDatePosition(initDate, values, selectablePositions) {
    var selectable = selectablePositions.reduce(function (acc, pos) {
        acc.push({ value: values[pos], position: pos });
        return acc;
    }, []);
    var res = find_1.default(selectable, function (item) { return item.value === initDate; });
    if (res) {
        return res.position;
    }
    return selectable[0].position;
}
exports.getInitialDatePosition = getInitialDatePosition;
