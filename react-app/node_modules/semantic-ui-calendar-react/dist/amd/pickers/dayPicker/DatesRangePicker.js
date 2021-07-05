var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "lodash/filter", "lodash/range", "lodash/includes", "lodash/last", "lodash/isNil", "moment", "react", "../../views/DatesRangeView", "../BasePicker", "./DayPicker", "./sharedFunctions"], function (require, exports, filter_1, range_1, includes_1, last_1, isNil_1, moment_1, React, DatesRangeView_1, BasePicker_1, DayPicker_1, sharedFunctions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    filter_1 = __importDefault(filter_1);
    range_1 = __importDefault(range_1);
    includes_1 = __importDefault(includes_1);
    last_1 = __importDefault(last_1);
    isNil_1 = __importDefault(isNil_1);
    moment_1 = __importDefault(moment_1);
    React = __importStar(React);
    DatesRangeView_1 = __importDefault(DatesRangeView_1);
    var PAGE_WIDTH = 7;
    var DatesRangePicker = /** @class */ (function (_super) {
        __extends(DatesRangePicker, _super);
        function DatesRangePicker(props) {
            var _this = _super.call(this, props) || this;
            _this.handleChange = function (e, _a) {
                var itemPosition = _a.itemPosition;
                // call `onChange` with value: { start: moment, end: moment }
                var _b = _this.props, start = _b.start, end = _b.end, localization = _b.localization, allowSameEndDate = _b.allowSameEndDate;
                var data = __assign({}, _this.props, { value: {} });
                var firstOnPage = parseInt(_this.buildCalendarValues()[0], 10);
                if (isNil_1.default(start) && isNil_1.default(end)) {
                    data.value = { start: buildMoment(_this.state.date, firstOnPage, itemPosition, localization) };
                }
                else if (!isNil_1.default(start) && isNil_1.default(end)) {
                    var selectedDate = buildMoment(_this.state.date, firstOnPage, itemPosition, localization);
                    if (selectedDate.isAfter(start, 'date') || (allowSameEndDate && selectedDate.isSame(start, 'date'))) {
                        data.value = {
                            start: start,
                            end: selectedDate,
                        };
                    }
                }
                _this.props.onChange(e, data);
            };
            _this.switchToNextPage = function (e, data, callback) {
                _this.setState(function (_a) {
                    var date = _a.date;
                    var nextDate = date.clone();
                    nextDate.add(1, 'month');
                    return { date: nextDate };
                }, callback);
            };
            _this.switchToPrevPage = function (e, data, callback) {
                _this.setState(function (_a) {
                    var date = _a.date;
                    var prevDate = date.clone();
                    prevDate.subtract(1, 'month');
                    return { date: prevDate };
                }, callback);
            };
            _this.PAGE_WIDTH = PAGE_WIDTH;
            return _this;
        }
        DatesRangePicker.prototype.render = function () {
            var _a = this.props, onChange = _a.onChange, value = _a.value, initializeWith = _a.initializeWith, closePopup = _a.closePopup, inline = _a.inline, isPickerInFocus = _a.isPickerInFocus, isTriggerInFocus = _a.isTriggerInFocus, onCalendarViewMount = _a.onCalendarViewMount, dateFormat = _a.dateFormat, start = _a.start, end = _a.end, minDate = _a.minDate, maxDate = _a.maxDate, marked = _a.marked, markColor = _a.markColor, localization = _a.localization, allowSameEndDate = _a.allowSameEndDate, rest = __rest(_a, ["onChange", "value", "initializeWith", "closePopup", "inline", "isPickerInFocus", "isTriggerInFocus", "onCalendarViewMount", "dateFormat", "start", "end", "minDate", "maxDate", "marked", "markColor", "localization", "allowSameEndDate"]);
            return (React.createElement(DatesRangeView_1.default, __assign({}, rest, { values: this.buildCalendarValues(), onNextPageBtnClick: this.switchToNextPage, onPrevPageBtnClick: this.switchToPrevPage, onCellHover: this.onHoveredCellPositionChange, hoveredItemIndex: this.state.hoveredCellPosition, onValueClick: this.handleChange, inline: this.props.inline, hasPrevPage: this.isPrevPageAvailable(), hasNextPage: this.isNextPageAvailable(), onBlur: this.handleBlur, onMount: this.props.onCalendarViewMount, currentHeadingValue: this.getCurrentDate(), currentRangeHeadingValue: this.getSelectedRange(), activeRange: this.getActiveCellsPositions(), markedItemIndexes: this.getMarkedPositions(), markColor: markColor, disabledItemIndexes: this.getDisabledPositions(), localization: localization })));
        };
        DatesRangePicker.prototype.getCurrentDate = function () {
            /* Return currently selected year and month(string) to display in calendar header. */
            return this.state.date.format('MMMM YYYY');
        };
        DatesRangePicker.prototype.getMarkedPositions = function () {
            /*
              Return position numbers of dates that should be displayed as marked
              (position in array returned by `this.buildCalendarValues`).
            */
            var marked = this.props.marked;
            if (marked) {
                return sharedFunctions_1.getMarkedDays(marked, this.state.date, DayPicker_1.DAYS_ON_PAGE);
            }
            else {
                return [];
            }
        };
        DatesRangePicker.prototype.buildCalendarValues = function () {
            /*
              Return array of dates (strings) like ['31', '1', ...]
              that used to populate calendar's page.
            */
            return sharedFunctions_1.buildDays(this.state.date, DayPicker_1.DAYS_ON_PAGE);
        };
        DatesRangePicker.prototype.getSelectableCellPositions = function () {
            var _this = this;
            return filter_1.default(range_1.default(0, DayPicker_1.DAYS_ON_PAGE), function (d) { return !includes_1.default(_this.getDisabledPositions(), d); });
        };
        DatesRangePicker.prototype.getInitialDatePosition = function () {
            return sharedFunctions_1.getInitialDatePosition(this.state.date.date().toString(), this.buildCalendarValues(), this.getSelectableCellPositions());
        };
        // TODO: too complicated method
        DatesRangePicker.prototype.getActiveCellsPositions = function () {
            /*
              Return starting and ending positions of dates range that should be displayed as active
              { start: number, end: number }
              (position in array returned by `this.buildCalendarValues`).
            */
            var date = this.state.date;
            var _a = this.props, start = _a.start, end = _a.end;
            var allDays = this.buildCalendarValues();
            var fromCurrentMonthDayPositions = sharedFunctions_1.getDefaultEnabledDayPositions(allDays, date);
            var fromPrevMonthDates = getDatesFromPrevMonth(date, allDays, fromCurrentMonthDayPositions[0]);
            var fromNextMonthDates = getDatesFromNextMonth(date, allDays, last_1.default(fromCurrentMonthDayPositions) + 1);
            var fromCurrentMonthDates = range_1.default(1, this.state.date.daysInMonth() + 1);
            var prevMonth = date.clone();
            prevMonth.subtract(1, 'month');
            var nextMonth = date.clone();
            nextMonth.add(1, 'month');
            if (start && end) {
                var startPosition = getDatePosition(prevMonth, this.state.date, nextMonth, start, fromPrevMonthDates, fromCurrentMonthDates, fromNextMonthDates);
                var endPosition = getDatePosition(prevMonth, this.state.date, nextMonth, end, fromPrevMonthDates, fromCurrentMonthDates, fromNextMonthDates);
                if (startPosition && endPosition) {
                    return { start: startPosition, end: endPosition };
                }
                if (startPosition) {
                    return { start: startPosition, end: DayPicker_1.DAYS_ON_PAGE - 1 };
                }
                if (endPosition) {
                    return { start: 0, end: endPosition };
                }
                if (this.state.date.isBetween(start, end)) {
                    return { start: 0, end: DayPicker_1.DAYS_ON_PAGE - 1 };
                }
            }
            if (start) {
                var startPosition = getDatePosition(prevMonth, this.state.date, nextMonth, start, fromPrevMonthDates, fromCurrentMonthDates, fromNextMonthDates);
                return { start: startPosition, end: undefined };
            }
            return { start: undefined, end: undefined };
        };
        DatesRangePicker.prototype.getDisabledPositions = function () {
            /*
              Return position numbers of dates that should be displayed as disabled
              (position in array returned by `this.buildCalendarValues`).
            */
            var _a = this.props, maxDate = _a.maxDate, minDate = _a.minDate;
            return sharedFunctions_1.getDisabledDays(undefined, maxDate, minDate, this.state.date, DayPicker_1.DAYS_ON_PAGE, undefined);
        };
        DatesRangePicker.prototype.isNextPageAvailable = function () {
            return sharedFunctions_1.isNextPageAvailable(this.state.date, this.props.maxDate);
        };
        DatesRangePicker.prototype.isPrevPageAvailable = function () {
            return sharedFunctions_1.isPrevPageAvailable(this.state.date, this.props.minDate);
        };
        DatesRangePicker.prototype.getSelectedRange = function () {
            /* Return currently selected dates range(string) to display in calendar header. */
            var _a = this.props, start = _a.start, end = _a.end, dateFormat = _a.dateFormat;
            return (start ? start.format(dateFormat) : '- - -') + " - " + (end ? end.format(dateFormat) : '- - -');
        };
        return DatesRangePicker;
    }(BasePicker_1.RangeSelectionPicker));
    /** Return position of a given date on the page.
     *
     * Page consists of some dates from previous month, dates from current month
     * and some dates from next month.
     *
     * Return undefined if date that is under test is out of page.
     */
    function getDatePosition(prevMonth, currentMonth, nextMonth, date, fromPrevMonthDates, fromCurrentMonthDates, fromNextMonthDates) {
        if (date.isSame(prevMonth, 'month')) {
            var position = fromPrevMonthDates.indexOf(date.date());
            if (position >= 0) {
                return position;
            }
        }
        if (date.isSame(currentMonth, 'month')) {
            return fromCurrentMonthDates.indexOf(date.date()) + fromPrevMonthDates.length;
        }
        if (date.isSame(nextMonth, 'month')) {
            var position = fromNextMonthDates.indexOf(date.date());
            if (position >= 0) {
                return position + fromPrevMonthDates.length + fromCurrentMonthDates.length;
            }
        }
    }
    function getDatesFromPrevMonth(date, allDays, currentMonthStartPosition) {
        if (currentMonthStartPosition === 0) {
            return [];
        }
        return allDays.slice(0, currentMonthStartPosition).map(function (d) { return parseInt(d, 10); });
    }
    function getDatesFromNextMonth(date, allDays, nextMonthStartPosition) {
        if (nextMonthStartPosition === allDays.length) {
            return [];
        }
        return allDays.slice(nextMonthStartPosition, allDays.length).map(function (d) { return parseInt(d, 10); });
    }
    /** Build moment based on current page and date position on that page. */
    function buildMoment(pageReferenceDate, firstOnPage, dateToBuildPosition, localization) {
        var result;
        if (firstOnPage === 1 /* page starts from first day in month */) {
            var dateOptions = {
                year: pageReferenceDate.year(),
                month: pageReferenceDate.month(),
                date: firstOnPage,
            };
            result = localization ? moment_1.default(dateOptions).locale(localization) : moment_1.default(dateOptions);
        }
        else {
            /* page starts from day in previous month */
            var dateOptions = {
                year: pageReferenceDate.month() ? pageReferenceDate.year() : pageReferenceDate.year() - 1,
                month: (pageReferenceDate.month() + 11) % 12,
                date: firstOnPage,
            };
            result = localization ? moment_1.default(dateOptions).locale(localization) : moment_1.default(dateOptions);
        }
        result.add(dateToBuildPosition, 'day');
        return result;
    }
    exports.default = DatesRangePicker;
});
