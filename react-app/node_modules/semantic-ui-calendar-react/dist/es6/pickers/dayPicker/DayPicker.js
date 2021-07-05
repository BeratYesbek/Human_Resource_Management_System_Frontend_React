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
import filter from 'lodash/filter';
import range from 'lodash/range';
import includes from 'lodash/includes';
import isArray from 'lodash/isArray';
import some from 'lodash/some';
import * as React from 'react';
import DayView from '../../views/DayView';
import { WEEKS_TO_DISPLAY } from '../../views/DayView';
import { SingleSelectionPicker, } from '../BasePicker';
import { buildDays, getDisabledDays, getMarkedDays, getInitialDatePosition, isNextPageAvailable, isPrevPageAvailable, } from './sharedFunctions';
var PAGE_WIDTH = 7;
export var DAYS_ON_PAGE = WEEKS_TO_DISPLAY * PAGE_WIDTH;
var DayPicker = /** @class */ (function (_super) {
    __extends(DayPicker, _super);
    function DayPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.isNextPageAvailable = function () {
            var _a = _this.props, maxDate = _a.maxDate, enable = _a.enable;
            if (isArray(enable)) {
                return some(enable, function (enabledDate) { return enabledDate.isAfter(_this.state.date, 'month'); });
            }
            return isNextPageAvailable(_this.state.date, maxDate);
        };
        _this.isPrevPageAvailable = function () {
            var _a = _this.props, minDate = _a.minDate, enable = _a.enable;
            if (isArray(enable)) {
                return some(enable, function (enabledDate) { return enabledDate.isBefore(_this.state.date, 'month'); });
            }
            return isPrevPageAvailable(_this.state.date, minDate);
        };
        _this.handleChange = function (e, _a) {
            var value = _a.value;
            // `value` is selected date(string) like '31' or '1'
            var data = __assign({}, _this.props, { value: {
                    year: _this.state.date.year(),
                    month: _this.state.date.month(),
                    date: parseInt(value, 10),
                } });
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
    DayPicker.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, value = _a.value, initializeWith = _a.initializeWith, closePopup = _a.closePopup, inline = _a.inline, isPickerInFocus = _a.isPickerInFocus, isTriggerInFocus = _a.isTriggerInFocus, onCalendarViewMount = _a.onCalendarViewMount, disable = _a.disable, enable = _a.enable, minDate = _a.minDate, maxDate = _a.maxDate, marked = _a.marked, markColor = _a.markColor, localization = _a.localization, rest = __rest(_a, ["onChange", "value", "initializeWith", "closePopup", "inline", "isPickerInFocus", "isTriggerInFocus", "onCalendarViewMount", "disable", "enable", "minDate", "maxDate", "marked", "markColor", "localization"]);
        return (React.createElement(DayView, __assign({}, rest, { values: this.buildCalendarValues(), hasNextPage: this.isNextPageAvailable(), hasPrevPage: this.isPrevPageAvailable(), onNextPageBtnClick: this.switchToNextPage, onPrevPageBtnClick: this.switchToPrevPage, onValueClick: this.handleChange, onBlur: this.handleBlur, inline: this.props.inline, onMount: this.props.onCalendarViewMount, hoveredItemIndex: this.state.hoveredCellPosition, onCellHover: this.onHoveredCellPositionChange, currentHeadingValue: this.getCurrentDate(), disabledItemIndexes: this.getDisabledPositions(), activeItemIndex: this.getActiveCellPosition(), markedItemIndexes: this.getMarkedPositions(), markColor: markColor, localization: localization })));
    };
    DayPicker.prototype.getCurrentDate = function () {
        /* Return currently selected year and month(string) to display in calendar header. */
        return this.state.date.format('MMMM YYYY');
    };
    DayPicker.prototype.buildCalendarValues = function () {
        /*
          Return array of dates (strings) like ['31', '1', ...]
          that used to populate calendar's page.
        */
        return buildDays(this.state.date, DAYS_ON_PAGE);
    };
    DayPicker.prototype.getSelectableCellPositions = function () {
        var _this = this;
        return filter(range(0, DAYS_ON_PAGE), function (d) { return !includes(_this.getDisabledPositions(), d); });
    };
    DayPicker.prototype.getInitialDatePosition = function () {
        return getInitialDatePosition(this.state.date.date().toString(), this.buildCalendarValues(), this.getSelectableCellPositions());
    };
    DayPicker.prototype.getActiveCellPosition = function () {
        /*
          Return position of a date that should be displayed as active
          (position in array returned by `this.buildCalendarValues`).
        */
        if (this.props.value && this.props.value.isSame(this.state.date, 'month')) {
            var disabledPositions_1 = this.getDisabledPositions();
            var active = this.buildCalendarValues()
                .map(function (day, i) { return includes(disabledPositions_1, i) ? undefined : day; })
                .indexOf(this.props.value.date().toString());
            if (active >= 0) {
                return active;
            }
        }
    };
    DayPicker.prototype.getDisabledPositions = function () {
        /*
          Return position numbers of dates that should be displayed as disabled
          (position in array returned by `this.buildCalendarValues`).
        */
        var _a = this.props, disable = _a.disable, maxDate = _a.maxDate, minDate = _a.minDate, enable = _a.enable;
        return getDisabledDays(disable, maxDate, minDate, this.state.date, DAYS_ON_PAGE, enable);
    };
    DayPicker.prototype.getMarkedPositions = function () {
        /*
          Return position numbers of dates that should be displayed as marked
          (position in array returned by `this.buildCalendarValues`).
        */
        var marked = this.props.marked;
        if (marked) {
            return getMarkedDays(marked, this.state.date, DAYS_ON_PAGE);
        }
        else {
            return [];
        }
    };
    return DayPicker;
}(SingleSelectionPicker));
export default DayPicker;
