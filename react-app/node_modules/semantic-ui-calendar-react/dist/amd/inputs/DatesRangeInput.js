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
define(["require", "exports", "lodash/invoke", "react", "../views/InputView", "./parse", "../pickers/dayPicker/DatesRangePicker", "./BaseInput"], function (require, exports, invoke_1, React, InputView_1, parse_1, DatesRangePicker_1, BaseInput_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    invoke_1 = __importDefault(invoke_1);
    React = __importStar(React);
    InputView_1 = __importDefault(InputView_1);
    DatesRangePicker_1 = __importDefault(DatesRangePicker_1);
    BaseInput_1 = __importStar(BaseInput_1);
    var DATES_SEPARATOR = ' - ';
    var DatesRangeInput = /** @class */ (function (_super) {
        __extends(DatesRangeInput, _super);
        function DatesRangeInput(props) {
            var _this = _super.call(this, props) || this;
            _this.getPicker = function () {
                var _a = _this.props, value = _a.value, dateFormat = _a.dateFormat, markColor = _a.markColor, marked = _a.marked, initialDate = _a.initialDate, localization = _a.localization, minDate = _a.minDate, maxDate = _a.maxDate, tabIndex = _a.tabIndex, pickerWidth = _a.pickerWidth, pickerStyle = _a.pickerStyle, allowSameEndDate = _a.allowSameEndDate;
                var _b = parse_1.parseDatesRange(value, dateFormat), start = _b.start, end = _b.end;
                var markedParsed = parse_1.parseArrayOrValue(marked, dateFormat, localization);
                var minDateParsed = parse_1.parseValue(minDate, dateFormat, localization);
                var maxDateParsed = parse_1.parseValue(maxDate, dateFormat, localization);
                var initializeWith;
                if (!initialDate && minDateParsed || maxDateParsed) {
                    initializeWith = minDateParsed || maxDateParsed;
                }
                else {
                    initializeWith = parse_1.buildValue(start, initialDate, localization, dateFormat);
                }
                return (React.createElement(DatesRangePicker_1.default, { isPickerInFocus: _this.isPickerInFocus, isTriggerInFocus: _this.isTriggerInFocus, inline: _this.props.inline, onCalendarViewMount: _this.onCalendarViewMount, closePopup: _this.closePopup, onChange: _this.handleSelect, dateFormat: dateFormat, initializeWith: initializeWith, start: start, end: end, marked: markedParsed, markColor: markColor, minDate: parse_1.parseValue(minDate, dateFormat, localization), maxDate: parse_1.parseValue(maxDate, dateFormat, localization), localization: localization, onHeaderClick: function () { return undefined; }, tabIndex: tabIndex, pickerWidth: pickerWidth, pickerStyle: pickerStyle, allowSameEndDate: allowSameEndDate }));
            };
            _this.handleSelect = function (e, _a) {
                var value = _a.value;
                var dateFormat = _this.props.dateFormat;
                var start = value.start, end = value.end;
                var outputString = '';
                if (start && end) {
                    outputString = "" + start.format(dateFormat) + DATES_SEPARATOR + end.format(dateFormat);
                }
                else if (start) {
                    outputString = "" + start.format(dateFormat) + DATES_SEPARATOR;
                }
                invoke_1.default(_this.props, 'onChange', e, __assign({}, _this.props, { value: outputString }));
                if (_this.props.closable && start && end) {
                    _this.closePopup();
                }
            };
            _this.state = {
                popupIsClosed: true,
            };
            return _this;
        }
        DatesRangeInput.prototype.render = function () {
            var _a = this.props, value = _a.value, dateFormat = _a.dateFormat, initialDate = _a.initialDate, maxDate = _a.maxDate, minDate = _a.minDate, closable = _a.closable, marked = _a.marked, markColor = _a.markColor, localization = _a.localization, allowSameEndDate = _a.allowSameEndDate, rest = __rest(_a, ["value", "dateFormat", "initialDate", "maxDate", "minDate", "closable", "marked", "markColor", "localization", "allowSameEndDate"]);
            return (React.createElement(InputView_1.default, __assign({ popupIsClosed: this.state.popupIsClosed }, rest, { value: value, onMount: this.onInputViewMount, closePopup: this.closePopup, openPopup: this.openPopup, renderPicker: this.getPicker })));
        };
        /**
         * Component responsibility:
         *  - parse input value (start: Moment, end: Moment)
         *  - handle DayPicker change (format {start: Moment, end: Moment} into
         *    string 'start - end')
         */
        DatesRangeInput.defaultProps = __assign({}, BaseInput_1.default.defaultProps, { dateFormat: 'DD-MM-YYYY', icon: 'calendar' });
        DatesRangeInput.propTypes = __assign({}, BaseInput_1.BaseInputPropTypes, BaseInput_1.DateRelatedPropTypes, BaseInput_1.MarkedValuesPropTypes, BaseInput_1.MinMaxValuePropTypes, BaseInput_1.RangeRelatedPropTypes);
        return DatesRangeInput;
    }(BaseInput_1.default));
    exports.default = DatesRangeInput;
});
