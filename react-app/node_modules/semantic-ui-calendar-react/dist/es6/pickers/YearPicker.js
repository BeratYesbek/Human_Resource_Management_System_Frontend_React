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
import range from 'lodash/range';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';
import isArray from 'lodash/isArray';
import concat from 'lodash/concat';
import uniq from 'lodash/uniq';
import filter from 'lodash/filter';
import last from 'lodash/last';
import first from 'lodash/first';
import some from 'lodash/some';
import * as React from 'react';
import YearView from '../views/YearView';
import { SingleSelectionPicker, } from './BasePicker';
var PAGE_WIDTH = 3;
var PAGE_HEIGHT = 4;
var YEARS_ON_PAGE = PAGE_WIDTH * PAGE_HEIGHT;
var YearPicker = /** @class */ (function (_super) {
    __extends(YearPicker, _super);
    /*
      Note:
        use it like this <YearPicker key={someInputValue} />
        to make react create new instance when input value changes
    */
    function YearPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e, _a) {
            var value = _a.value;
            var data = __assign({}, _this.props, { value: { year: parseInt(value, 10) } });
            _this.props.onChange(e, data);
        };
        _this.switchToNextPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var nextDate = date.clone();
                nextDate.add(YEARS_ON_PAGE, 'year');
                return { date: nextDate };
            }, callback);
        };
        _this.switchToPrevPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var prevDate = date.clone();
                prevDate.subtract(YEARS_ON_PAGE, 'year');
                return { date: prevDate };
            }, callback);
        };
        _this.PAGE_WIDTH = PAGE_WIDTH;
        return _this;
    }
    YearPicker.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, value = _a.value, initializeWith = _a.initializeWith, closePopup = _a.closePopup, inline = _a.inline, isPickerInFocus = _a.isPickerInFocus, isTriggerInFocus = _a.isTriggerInFocus, onCalendarViewMount = _a.onCalendarViewMount, disable = _a.disable, enable = _a.enable, minDate = _a.minDate, maxDate = _a.maxDate, localization = _a.localization, rest = __rest(_a, ["onChange", "value", "initializeWith", "closePopup", "inline", "isPickerInFocus", "isTriggerInFocus", "onCalendarViewMount", "disable", "enable", "minDate", "maxDate", "localization"]);
        return (React.createElement(YearView, __assign({}, rest, { values: this.buildCalendarValues(), onNextPageBtnClick: this.switchToNextPage, onPrevPageBtnClick: this.switchToPrevPage, onValueClick: this.handleChange, onBlur: this.handleBlur, inline: this.props.inline, onMount: this.props.onCalendarViewMount, hoveredItemIndex: this.state.hoveredCellPosition, onCellHover: this.onHoveredCellPositionChange, hasPrevPage: this.isPrevPageAvailable(), hasNextPage: this.isNextPageAvailable(), disabledItemIndexes: this.getDisabledPositions(), activeItemIndex: this.getActiveCellPosition(), localization: localization })));
    };
    YearPicker.prototype.buildCalendarValues = function () {
        /*
          Return array of years (strings) like ['2012', '2013', ...]
          that used to populate calendar's page.
        */
        var years = [];
        var date = this.state.date;
        var padd = date.year() % YEARS_ON_PAGE;
        var firstYear = date.year() - padd;
        for (var i = 0; i < YEARS_ON_PAGE; i++) {
            years[i] = (firstYear + i).toString();
        }
        return years;
    };
    YearPicker.prototype.getInitialDatePosition = function () {
        var selectable = this.getSelectableCellPositions();
        var values = this.buildCalendarValues();
        var currentYearIndex = values.indexOf(this.state.date.year().toString());
        if (selectable.indexOf(currentYearIndex) < 0) {
            return selectable[0];
        }
        return currentYearIndex;
    };
    YearPicker.prototype.getActiveCellPosition = function () {
        /*
          Return position of a year that should be displayed as active
          (position in array returned by `this.buildCalendarValues`).
        */
        if (!isNil(this.props.value)) {
            var years = this.buildCalendarValues();
            var yearIndex = years.indexOf(this.props.value.year().toString());
            if (yearIndex >= 0) {
                return yearIndex;
            }
        }
    };
    YearPicker.prototype.getSelectableCellPositions = function () {
        var _this = this;
        return filter(range(0, YEARS_ON_PAGE), function (y) { return !includes(_this.getDisabledPositions(), y); });
    };
    YearPicker.prototype.getDisabledPositions = function () {
        /*
          Return position numbers of years that should be displayed as disabled
          (position in array returned by `this.buildCalendarValues`).
        */
        var disabled = [];
        var years = this.buildCalendarValues();
        if (isArray(this.props.enable)) {
            var enabledYears_1 = this.props.enable.map(function (yearMoment) { return yearMoment.year().toString(); });
            disabled = concat(disabled, years
                .filter(function (year) { return !includes(enabledYears_1, year); })
                .map(function (year) { return years.indexOf(year); }));
        }
        if (isArray(this.props.disable)) {
            disabled = concat(disabled, this.props.disable
                .filter(function (yearMoment) { return includes(years, yearMoment.year().toString()); })
                .map(function (yearMoment) { return years.indexOf(yearMoment.year().toString()); }));
        }
        if (!isNil(this.props.maxDate)) {
            if (parseInt(first(years), 10) > this.props.maxDate.year()) {
                disabled = range(0, years.length);
            }
            else if (includes(years, this.props.maxDate.year().toString())) {
                disabled = concat(disabled, range(years.indexOf(this.props.maxDate.year().toString()) + 1, years.length));
            }
        }
        if (!isNil(this.props.minDate)) {
            if (parseInt(last(years), 10) < this.props.minDate.year()) {
                disabled = range(0, years.length);
            }
            else if (includes(years, this.props.minDate.year().toString())) {
                disabled = concat(disabled, range(0, years.indexOf(this.props.minDate.year().toString())));
            }
        }
        if (disabled.length > 0) {
            return uniq(disabled);
        }
    };
    YearPicker.prototype.isNextPageAvailable = function () {
        var _a = this.props, maxDate = _a.maxDate, enable = _a.enable;
        var lastOnPage = parseInt(last(this.buildCalendarValues()), 10);
        if (isArray(enable)) {
            return some(enable, function (enabledYear) { return enabledYear.year() > lastOnPage; });
        }
        if (isNil(maxDate)) {
            return true;
        }
        return lastOnPage < maxDate.year();
    };
    YearPicker.prototype.isPrevPageAvailable = function () {
        var _a = this.props, minDate = _a.minDate, enable = _a.enable;
        var firstOnPage = parseInt(first(this.buildCalendarValues()), 10);
        if (isArray(enable)) {
            return some(enable, function (enabledYear) { return enabledYear.year() < firstOnPage; });
        }
        if (isNil(minDate)) {
            return true;
        }
        return firstOnPage > minDate.year();
    };
    return YearPicker;
}(SingleSelectionPicker));
export default YearPicker;
