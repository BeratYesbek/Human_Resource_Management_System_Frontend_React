import isNil from 'lodash/isNil';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import compact from 'lodash/compact';
import moment from 'moment';
export var TIME_FORMAT = {
    24: 'HH:mm',
    AMPM: 'hh:mm A',
    ampm: 'hh:mm a',
};
/** Parse string, moment, Date.
 *
 * Return unedfined on invalid input.
 */
export function parseValue(value, dateFormat, localization) {
    if (!isNil(value) && !isNil(dateFormat)) {
        var date = moment(value, dateFormat);
        if (date.isValid()) {
            date.locale(localization);
            return date;
        }
    }
}
/** Parse string, moment, Date, string[], moment[], Date[].
 *
 * Return array of moments. Returned value contains only valid moments.
 * Return undefined if none of the input values are valid.
 */
export function parseArrayOrValue(data, dateFormat, localization) {
    if (isArray(data)) {
        var parsed = compact(data.map(function (item) { return parseValue(item, dateFormat, localization); }));
        if (parsed.length > 0) {
            return parsed;
        }
    }
    var parsedValue = parseValue(data, dateFormat, localization);
    return parsedValue && [parsedValue];
}
/** Create moment.
 *
 * Creates moment using `dateParams` or `initialDate` arguments (if provided).
 * Precedense order: dateParams -> initialDate -> default value
 */
export function getInitializer(context) {
    var dateParams = context.dateParams, initialDate = context.initialDate, dateFormat = context.dateFormat, localization = context.localization;
    if (dateParams) {
        var parsedParams = localization ? moment(dateParams).locale(localization) : moment(dateParams);
        if (parsedParams.isValid()) {
            return parsedParams;
        }
    }
    var parsedInitialDate = parseValue(initialDate, dateFormat, localization);
    if (parsedInitialDate) {
        return parsedInitialDate;
    }
    return localization ? moment().locale(localization) : moment();
}
/** Creates moment instance from provided value or initialDate.
 *  Creates today by default.
 */
export function buildValue(value, initialDate, localization, dateFormat, defaultVal) {
    if (defaultVal === void 0) { defaultVal = moment(); }
    var valueParsed = parseValue(value, dateFormat, localization);
    if (valueParsed) {
        return valueParsed;
    }
    var initialDateParsed = parseValue(initialDate, dateFormat, localization);
    if (initialDateParsed) {
        return initialDateParsed;
    }
    var _defaultVal = defaultVal ? defaultVal.clone() : defaultVal;
    if (_defaultVal) {
        _defaultVal.locale(localization);
    }
    return _defaultVal;
}
export function dateValueToString(value, dateFormat, locale) {
    if (isString(value)) {
        return value;
    }
    if (moment.isMoment(value)) {
        var _value = value.clone();
        _value.locale(locale);
        return _value.format(dateFormat);
    }
    var date = moment(value, dateFormat);
    if (date.isValid()) {
        date.locale(locale);
        return date.format(dateFormat);
    }
    return '';
}
function cleanDate(inputString, dateFormat) {
    var formattedDateLength = moment().format(dateFormat).length;
    return inputString.trim().slice(0, formattedDateLength);
}
/**
 * Extract start and end dates from input string.
 * Return { start: Moment|undefined, end: Moment|undefined }
 * @param {string} inputString Row input string from user
 * @param {string} dateFormat Moment formatting string
 * @param {string} inputSeparator Separator for split inputString
 */
export function parseDatesRange(inputString, dateFormat, inputSeparator) {
    if (inputString === void 0) { inputString = ''; }
    if (dateFormat === void 0) { dateFormat = ''; }
    if (inputSeparator === void 0) { inputSeparator = ' - '; }
    var dates = inputString.split(inputSeparator)
        .map(function (date) { return cleanDate(date, dateFormat); });
    var result = {};
    var start;
    var end;
    start = moment(dates[0], dateFormat);
    if (dates.length === 2) {
        end = moment(dates[1], dateFormat);
    }
    if (start && start.isValid()) {
        result.start = start;
    }
    if (end && end.isValid()) {
        result.end = end;
    }
    return result;
}
