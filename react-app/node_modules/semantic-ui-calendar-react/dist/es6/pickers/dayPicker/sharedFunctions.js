import indexOf from 'lodash/indexOf';
import lastIndexOf from 'lodash/lastIndexOf';
import range from 'lodash/range';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';
import isArray from 'lodash/isArray';
import concat from 'lodash/concat';
import uniq from 'lodash/uniq';
import first from 'lodash/first';
import sortBy from 'lodash/sortBy';
import slice from 'lodash/slice';
import find from 'lodash/find';
/** Build days to fill page. */
export function buildDays(date, daysOnPage) {
    var start = date.clone().startOf('month').startOf('week');
    return getDaysArray(start.date(), getBrakepoints(date), daysOnPage).map(function (d) { return d.toString(); });
}
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
export function getDefaultEnabledDayPositions(allDays, date) {
    var dateClone = date.clone();
    var brakepoints = getBrakepoints(dateClone);
    if (brakepoints.length === 1) {
        return range(0, indexOf(allDays, brakepoints[0].toString()) + 1);
    }
    else {
        return range(indexOf(allDays, brakepoints[0].toString()) + 1, lastIndexOf(allDays, brakepoints[1].toString()) + 1);
    }
}
/** Return day positions that shoud be displayed as disabled. */
export function getDisabledDays(disable, maxDate, minDate, currentDate, daysOnPage, enable) {
    var dayPositions = range(daysOnPage);
    var daysInCurrentMonthPositions = getDefaultEnabledDayPositions(buildDays(currentDate, daysOnPage), currentDate);
    var disabledDays = dayPositions.filter(function (dayPosition) { return !includes(daysInCurrentMonthPositions, dayPosition); });
    if (isArray(enable)) {
        var enabledDaysPositions_1 = enable
            .filter(function (date) { return date.isSame(currentDate, 'month'); })
            .map(function (date) { return date.date(); })
            .map(function (date) { return daysInCurrentMonthPositions[date - 1]; });
        disabledDays = concat(disabledDays, dayPositions.filter(function (position) {
            return !includes(enabledDaysPositions_1, position);
        }));
    }
    if (isArray(disable)) {
        disabledDays = concat(disabledDays, disable
            .filter(function (date) { return date.isSame(currentDate, 'month'); })
            .map(function (date) { return date.date(); })
            .map(function (date) { return daysInCurrentMonthPositions[date - 1]; }));
    }
    if (!isNil(maxDate)) {
        if (maxDate.isBefore(currentDate, 'month')) {
            disabledDays = dayPositions;
        }
        if (maxDate.isSame(currentDate, 'month')) {
            disabledDays = concat(disabledDays, range(1, daysInCurrentMonthPositions.length + 1)
                .filter(function (date) { return date > maxDate.date(); })
                .map(function (date) { return daysInCurrentMonthPositions[date - 1]; }));
        }
    }
    if (!isNil(minDate)) {
        if (minDate.isAfter(currentDate, 'month')) {
            disabledDays = dayPositions;
        }
        if (minDate.isSame(currentDate, 'month')) {
            disabledDays = concat(disabledDays, range(1, daysInCurrentMonthPositions.length + 1)
                .filter(function (date) { return date < minDate.date(); })
                .map(function (date) { return daysInCurrentMonthPositions[date - 1]; }));
        }
    }
    return sortBy(uniq(disabledDays).filter(function (day) { return !isNil(day); }));
}
/** Return day positions that should be displayed as marked. */
export function getMarkedDays(marked, currentDate, daysOnPage) {
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
    return markedIndexes.filter(function (index) { return includes(activeDayPositions, index); });
}
export function isNextPageAvailable(date, maxDate) {
    if (isNil(maxDate)) {
        return true;
    }
    if (date.isSameOrAfter(maxDate, 'month')) {
        return false;
    }
    return true;
}
export function isPrevPageAvailable(date, minDate) {
    if (isNil(minDate)) {
        return true;
    }
    if (date.isSameOrBefore(minDate, 'month')) {
        return false;
    }
    return true;
}
// helper
function getDaysArray(start, brakepoints, length) {
    var currentDay = start;
    var days = [];
    var brakepointsLeft = brakepoints.slice();
    while (!(days.length === length)) {
        days.push(currentDay);
        var bp = first(brakepointsLeft);
        if (currentDay === bp) {
            currentDay = 1;
            brakepointsLeft = slice(brakepointsLeft, 1);
        }
        else {
            currentDay = currentDay + 1;
        }
    }
    return days;
}
export var testExport = {
    buildDays: buildDays,
    getBrakepoints: getBrakepoints,
    getDisabledDays: getDisabledDays,
    isNextPageAvailable: isNextPageAvailable,
    isPrevPageAvailable: isPrevPageAvailable,
    getDaysArray: getDaysArray,
    getDefaultEnabledDayPositions: getDefaultEnabledDayPositions,
};
export function getInitialDatePosition(initDate, values, selectablePositions) {
    var selectable = selectablePositions.reduce(function (acc, pos) {
        acc.push({ value: values[pos], position: pos });
        return acc;
    }, []);
    var res = find(selectable, function (item) { return item.value === initDate; });
    if (res) {
        return res.position;
    }
    return selectable[0].position;
}
