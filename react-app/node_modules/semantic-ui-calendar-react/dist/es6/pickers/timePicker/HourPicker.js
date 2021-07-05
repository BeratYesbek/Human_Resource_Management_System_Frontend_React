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
import concat from 'lodash/concat';
import uniq from 'lodash/uniq';
import sortBy from 'lodash/sortBy';
import * as React from 'react';
import HourView from '../../views/HourView';
import { SingleSelectionPicker, } from '../BasePicker';
import { buildTimeStringWithSuffix, getCurrentDate, isNextPageAvailable, isPrevPageAvailable, } from './sharedFunctions';
var HOURS_ON_PAGE = 24;
var PAGE_WIDTH = 4;
var HourPicker = /** @class */ (function (_super) {
    __extends(HourPicker, _super);
    function HourPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e, _a) {
            var value = _a.value;
            var data = __assign({}, _this.props, { value: {
                    year: _this.state.date.year(),
                    month: _this.state.date.month(),
                    date: _this.state.date.date(),
                    hour: _this.buildCalendarValues().indexOf(value),
                } });
            _this.props.onChange(e, data);
        };
        _this.switchToNextPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var nextDate = date.clone();
                nextDate.add(1, 'day');
                return { date: nextDate };
            }, callback);
        };
        _this.switchToPrevPage = function (e, data, callback) {
            _this.setState(function (_a) {
                var date = _a.date;
                var prevDate = date.clone();
                prevDate.subtract(1, 'day');
                return { date: prevDate };
            }, callback);
        };
        _this.PAGE_WIDTH = PAGE_WIDTH;
        return _this;
    }
    HourPicker.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, value = _a.value, initializeWith = _a.initializeWith, closePopup = _a.closePopup, inline = _a.inline, isPickerInFocus = _a.isPickerInFocus, isTriggerInFocus = _a.isTriggerInFocus, onCalendarViewMount = _a.onCalendarViewMount, minDate = _a.minDate, maxDate = _a.maxDate, disable = _a.disable, timeFormat = _a.timeFormat, localization = _a.localization, rest = __rest(_a, ["onChange", "value", "initializeWith", "closePopup", "inline", "isPickerInFocus", "isTriggerInFocus", "onCalendarViewMount", "minDate", "maxDate", "disable", "timeFormat", "localization"]);
        return (React.createElement(HourView, __assign({}, rest, { values: this.buildCalendarValues(), onNextPageBtnClick: this.switchToNextPage, onPrevPageBtnClick: this.switchToPrevPage, hasPrevPage: this.isPrevPageAvailable(), hasNextPage: this.isNextPageAvailable(), onValueClick: this.handleChange, onBlur: this.handleBlur, inline: this.props.inline, onMount: this.props.onCalendarViewMount, hoveredItemIndex: this.state.hoveredCellPosition, onCellHover: this.onHoveredCellPositionChange, disabledItemIndexes: this.getDisabledPositions(), activeItemIndex: this.getActiveCellPosition(), currentHeadingValue: this.getCurrentDate(), localization: localization })));
    };
    HourPicker.prototype.getCurrentDate = function () {
        /* Return currently selected month, date and year(string) to display in calendar header. */
        return getCurrentDate(this.state.date);
    };
    HourPicker.prototype.buildCalendarValues = function () {
        var _this = this;
        /*
          Return array of hours (strings) like ['16:00', '17:00', ...]
          that used to populate calendar's page.
        */
        return range(0, 24).map(function (h) {
            return "" + (h < 10 ? '0' : '') + h;
        }).map(function (hour) { return buildTimeStringWithSuffix(hour, '00', _this.props.timeFormat); });
    };
    HourPicker.prototype.getSelectableCellPositions = function () {
        var _this = this;
        return filter(range(0, HOURS_ON_PAGE), function (h) { return !includes(_this.getDisabledPositions(), h); });
    };
    HourPicker.prototype.getInitialDatePosition = function () {
        var selectable = this.getSelectableCellPositions();
        if (selectable.indexOf(this.state.date.hour()) < 0) {
            return selectable[0];
        }
        return this.state.date.hour();
    };
    HourPicker.prototype.getActiveCellPosition = function () {
        /*
          Return position of an hour that should be displayed as active
          (position in array returned by `this.buildCalendarValues`).
        */
        var value = this.props.value;
        if (value && value.isSame(this.state.date, 'date')) {
            return this.props.value.hour();
        }
    };
    HourPicker.prototype.isNextPageAvailable = function () {
        return isNextPageAvailable(this.state.date, this.props.maxDate);
    };
    HourPicker.prototype.isPrevPageAvailable = function () {
        return isPrevPageAvailable(this.state.date, this.props.minDate);
    };
    HourPicker.prototype.getDisabledPositions = function () {
        var _this = this;
        /*
          Return position numbers of hours that should be displayed as disabled
          (position in array returned by `this.buildCalendarValues`).
        */
        var _a = this.props, disable = _a.disable, minDate = _a.minDate, maxDate = _a.maxDate;
        var disabledByDisable = [];
        var disabledByMaxDate = [];
        var disabledByMinDate = [];
        if (isArray(disable)) {
            disabledByDisable = concat(disabledByDisable, disable.filter(function (date) { return date.isSame(_this.state.date, 'day'); })
                .map(function (date) { return date.hour(); }));
        }
        if (minDate) {
            if (minDate.isSame(this.state.date, 'day')) {
                disabledByMinDate = concat(disabledByMinDate, range(0, minDate.hour()));
            }
        }
        if (maxDate) {
            if (maxDate.isSame(this.state.date, 'day')) {
                disabledByMaxDate = concat(disabledByMaxDate, range(maxDate.hour() + 1, 24));
            }
        }
        var result = sortBy(uniq(concat(disabledByDisable, disabledByMaxDate, disabledByMinDate)));
        if (result.length > 0) {
            return result;
        }
    };
    HourPicker.defaultProps = {
        timeFormat: '24',
    };
    return HourPicker;
}(SingleSelectionPicker));
export default HourPicker;
