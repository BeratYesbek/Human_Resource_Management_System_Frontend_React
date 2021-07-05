"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = __importDefault(require("lodash/filter"));
var range_1 = __importDefault(require("lodash/range"));
var includes_1 = __importDefault(require("lodash/includes"));
var isArray_1 = __importDefault(require("lodash/isArray"));
var some_1 = __importDefault(require("lodash/some"));
var React = __importStar(require("react"));
var DayView_1 = __importDefault(require("../../views/DayView"));
var DayView_2 = require("../../views/DayView");
var BasePicker_1 = require("../BasePicker");
var sharedFunctions_1 = require("./sharedFunctions");
var PAGE_WIDTH = 7;
exports.DAYS_ON_PAGE = DayView_2.WEEKS_TO_DISPLAY * PAGE_WIDTH;
var DayPicker = /** @class */ (function (_super) {
    __extends(DayPicker, _super);
    function DayPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.isNextPageAvailable = function () {
            var _a = _this.props, maxDate = _a.maxDate, enable = _a.enable;
            if (isArray_1.default(enable)) {
                return some_1.default(enable, function (enabledDate) { return enabledDate.isAfter(_this.state.date, 'month'); });
            }
            return sharedFunctions_1.isNextPageAvailable(_this.state.date, maxDate);
        };
        _this.isPrevPageAvailable = function () {
            var _a = _this.props, minDate = _a.minDate, enable = _a.enable;
            if (isArray_1.default(enable)) {
                return some_1.default(enable, function (enabledDate) { return enabledDate.isBefore(_this.state.date, 'month'); });
            }
            return sharedFunctions_1.isPrevPageAvailable(_this.state.date, minDate);
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
        return (React.createElement(DayView_1.default, __assign({}, rest, { values: this.buildCalendarValues(), hasNextPage: this.isNextPageAvailable(), hasPrevPage: this.isPrevPageAvailable(), onNextPageBtnClick: this.switchToNextPage, onPrevPageBtnClick: this.switchToPrevPage, onValueClick: this.handleChange, onBlur: this.handleBlur, inline: this.props.inline, onMount: this.props.onCalendarViewMount, hoveredItemIndex: this.state.hoveredCellPosition, onCellHover: this.onHoveredCellPositionChange, currentHeadingValue: this.getCurrentDate(), disabledItemIndexes: this.getDisabledPositions(), activeItemIndex: this.getActiveCellPosition(), markedItemIndexes: this.getMarkedPositions(), markColor: markColor, localization: localization })));
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
        return sharedFunctions_1.buildDays(this.state.date, exports.DAYS_ON_PAGE);
    };
    DayPicker.prototype.getSelectableCellPositions = function () {
        var _this = this;
        return filter_1.default(range_1.default(0, exports.DAYS_ON_PAGE), function (d) { return !includes_1.default(_this.getDisabledPositions(), d); });
    };
    DayPicker.prototype.getInitialDatePosition = function () {
        return sharedFunctions_1.getInitialDatePosition(this.state.date.date().toString(), this.buildCalendarValues(), this.getSelectableCellPositions());
    };
    DayPicker.prototype.getActiveCellPosition = function () {
        /*
          Return position of a date that should be displayed as active
          (position in array returned by `this.buildCalendarValues`).
        */
        if (this.props.value && this.props.value.isSame(this.state.date, 'month')) {
            var disabledPositions_1 = this.getDisabledPositions();
            var active = this.buildCalendarValues()
                .map(function (day, i) { return includes_1.default(disabledPositions_1, i) ? undefined : day; })
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
        return sharedFunctions_1.getDisabledDays(disable, maxDate, minDate, this.state.date, exports.DAYS_ON_PAGE, enable);
    };
    DayPicker.prototype.getMarkedPositions = function () {
        /*
          Return position numbers of dates that should be displayed as marked
          (position in array returned by `this.buildCalendarValues`).
        */
        var marked = this.props.marked;
        if (marked) {
            return sharedFunctions_1.getMarkedDays(marked, this.state.date, exports.DAYS_ON_PAGE);
        }
        else {
            return [];
        }
    };
    return DayPicker;
}(BasePicker_1.SingleSelectionPicker));
exports.default = DayPicker;
