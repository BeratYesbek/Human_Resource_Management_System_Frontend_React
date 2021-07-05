var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "lodash/isNil", "lodash/isArray", "lodash/isString", "lodash/compact", "moment"], function (require, exports, isNil_1, isArray_1, isString_1, compact_1, moment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    isNil_1 = __importDefault(isNil_1);
    isArray_1 = __importDefault(isArray_1);
    isString_1 = __importDefault(isString_1);
    compact_1 = __importDefault(compact_1);
    moment_1 = __importDefault(moment_1);
    exports.TIME_FORMAT = {
        24: 'HH:mm',
        AMPM: 'hh:mm A',
        ampm: 'hh:mm a',
    };
    /** Parse string, moment, Date.
     *
     * Return unedfined on invalid input.
     */
    function parseValue(value, dateFormat, localization) {
        if (!isNil_1.default(value) && !isNil_1.default(dateFormat)) {
            var date = moment_1.default(value, dateFormat);
            if (date.isValid()) {
                date.locale(localization);
                return date;
            }
        }
    }
    exports.parseValue = parseValue;
    /** Parse string, moment, Date, string[], moment[], Date[].
     *
     * Return array of moments. Returned value contains only valid moments.
     * Return undefined if none of the input values are valid.
     */
    function parseArrayOrValue(data, dateFormat, localization) {
        if (isArray_1.default(data)) {
            var parsed = compact_1.default(data.map(function (item) { return parseValue(item, dateFormat, localization); }));
            if (parsed.length > 0) {
                return parsed;
            }
        }
        var parsedValue = parseValue(data, dateFormat, localization);
        return parsedValue && [parsedValue];
    }
    exports.parseArrayOrValue = parseArrayOrValue;
    /** Create moment.
     *
     * Creates moment using `dateParams` or `initialDate` arguments (if provided).
     * Precedense order: dateParams -> initialDate -> default value
     */
    function getInitializer(context) {
        var dateParams = context.dateParams, initialDate = context.initialDate, dateFormat = context.dateFormat, localization = context.localization;
        if (dateParams) {
            var parsedParams = localization ? moment_1.default(dateParams).locale(localization) : moment_1.default(dateParams);
            if (parsedParams.isValid()) {
                return parsedParams;
            }
        }
        var parsedInitialDate = parseValue(initialDate, dateFormat, localization);
        if (parsedInitialDate) {
            return parsedInitialDate;
        }
        return localization ? moment_1.default().locale(localization) : moment_1.default();
    }
    exports.getInitializer = getInitializer;
    /** Creates moment instance from provided value or initialDate.
     *  Creates today by default.
     */
    function buildValue(value, initialDate, localization, dateFormat, defaultVal) {
        if (defaultVal === void 0) { defaultVal = moment_1.default(); }
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
    exports.buildValue = buildValue;
    function dateValueToString(value, dateFormat, locale) {
        if (isString_1.default(value)) {
            return value;
        }
        if (moment_1.default.isMoment(value)) {
            var _value = value.clone();
            _value.locale(locale);
            return _value.format(dateFormat);
        }
        var date = moment_1.default(value, dateFormat);
        if (date.isValid()) {
            date.locale(locale);
            return date.format(dateFormat);
        }
        return '';
    }
    exports.dateValueToString = dateValueToString;
    function cleanDate(inputString, dateFormat) {
        var formattedDateLength = moment_1.default().format(dateFormat).length;
        return inputString.trim().slice(0, formattedDateLength);
    }
    /**
     * Extract start and end dates from input string.
     * Return { start: Moment|undefined, end: Moment|undefined }
     * @param {string} inputString Row input string from user
     * @param {string} dateFormat Moment formatting string
     * @param {string} inputSeparator Separator for split inputString
     */
    function parseDatesRange(inputString, dateFormat, inputSeparator) {
        if (inputString === void 0) { inputString = ''; }
        if (dateFormat === void 0) { dateFormat = ''; }
        if (inputSeparator === void 0) { inputSeparator = ' - '; }
        var dates = inputString.split(inputSeparator)
            .map(function (date) { return cleanDate(date, dateFormat); });
        var result = {};
        var start;
        var end;
        start = moment_1.default(dates[0], dateFormat);
        if (dates.length === 2) {
            end = moment_1.default(dates[1], dateFormat);
        }
        if (start && start.isValid()) {
            result.start = start;
        }
        if (end && end.isValid()) {
            result.end = end;
        }
        return result;
    }
    exports.parseDatesRange = parseDatesRange;
});
