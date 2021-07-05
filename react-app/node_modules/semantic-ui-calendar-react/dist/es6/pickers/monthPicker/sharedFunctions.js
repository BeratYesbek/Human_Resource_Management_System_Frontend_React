import range from 'lodash/range';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';
import isArray from 'lodash/isArray';
import uniq from 'lodash/uniq';
import some from 'lodash/some';
import moment from 'moment';
import { MONTHS_IN_YEAR } from './const';
var buildCalendarValues = function (localization) {
    /*
      Return array of months (strings) like ['Aug', 'Sep', ...]
      that used to populate calendar's page.
    */
    var localLocale = localization ? moment.localeData(localization) : undefined;
    return localLocale ? localLocale.monthsShort() : moment.monthsShort();
};
var getInitialDatePosition = function (selectable, currentDate) {
    if (selectable.indexOf(currentDate.month()) < 0) {
        return selectable[0];
    }
    return currentDate.month();
};
var getDisabledPositions = function (enable, disable, maxDate, minDate, currentDate) {
    /*
      Return position numbers of months that should be displayed as disabled
      (position in array returned by `this.buildCalendarValues`).
    */
    var disabled = [];
    if (isArray(enable)) {
        var enabledMonthPositions_1 = enable
            .filter(function (monthMoment) { return monthMoment.isSame(currentDate, 'year'); })
            .map(function (monthMoment) { return monthMoment.month(); });
        disabled = disabled.concat(range(0, MONTHS_IN_YEAR)
            .filter(function (monthPosition) { return !includes(enabledMonthPositions_1, monthPosition); }));
    }
    if (isArray(disable)) {
        disabled = disabled.concat(disable
            .filter(function (monthMoment) { return monthMoment.year() === currentDate.year(); })
            .map(function (monthMoment) { return monthMoment.month(); }));
    }
    if (!isNil(maxDate)) {
        if (maxDate.year() === currentDate.year()) {
            disabled = disabled.concat(range(maxDate.month() + 1, MONTHS_IN_YEAR));
        }
        if (maxDate.year() < currentDate.year()) {
            disabled = range(0, MONTHS_IN_YEAR);
        }
    }
    if (!isNil(minDate)) {
        if (minDate.year() === currentDate.year()) {
            disabled = disabled.concat(range(0, minDate.month()));
        }
        if (minDate.year() > currentDate.year()) {
            disabled = range(0, MONTHS_IN_YEAR);
        }
    }
    if (disabled.length > 0) {
        return uniq(disabled);
    }
};
var isNextPageAvailable = function (maxDate, enable, currentDate) {
    if (isArray(enable)) {
        return some(enable, function (enabledMonth) { return enabledMonth.isAfter(currentDate, 'year'); });
    }
    if (isNil(maxDate)) {
        return true;
    }
    return currentDate.year() < maxDate.year();
};
var isPrevPageAvailable = function (minDate, enable, currentDate) {
    if (isArray(enable)) {
        return some(enable, function (enabledMonth) { return enabledMonth.isBefore(currentDate, 'year'); });
    }
    if (isNil(minDate)) {
        return true;
    }
    return currentDate.year() > minDate.year();
};
export { buildCalendarValues, getInitialDatePosition, getDisabledPositions, isNextPageAvailable, isPrevPageAvailable, };
