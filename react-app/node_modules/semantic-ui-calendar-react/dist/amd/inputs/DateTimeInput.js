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
define(["require", "exports", "lodash/isNil", "lodash/invoke", "moment", "prop-types", "react", "../pickers/dayPicker/DayPicker", "../pickers/monthPicker/MonthPicker", "../pickers/timePicker/HourPicker", "../pickers/timePicker/MinutePicker", "../pickers/YearPicker", "../views/InputView", "./BaseInput", "../lib", "./parse", "./shared"], function (require, exports, isNil_1, invoke_1, moment_1, PropTypes, React, DayPicker_1, MonthPicker_1, HourPicker_1, MinutePicker_1, YearPicker_1, InputView_1, BaseInput_1, lib_1, parse_1, shared_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    isNil_1 = __importDefault(isNil_1);
    invoke_1 = __importDefault(invoke_1);
    moment_1 = __importDefault(moment_1);
    PropTypes = __importStar(PropTypes);
    React = __importStar(React);
    DayPicker_1 = __importDefault(DayPicker_1);
    MonthPicker_1 = __importDefault(MonthPicker_1);
    HourPicker_1 = __importDefault(HourPicker_1);
    MinutePicker_1 = __importDefault(MinutePicker_1);
    YearPicker_1 = __importDefault(YearPicker_1);
    InputView_1 = __importDefault(InputView_1);
    BaseInput_1 = __importStar(BaseInput_1);
    var nextMode = {
        year: 'month',
        month: 'day',
        day: 'hour',
        hour: 'minute',
        minute: 'year',
    };
    function getNextMode(currentMode) {
        return nextMode[currentMode];
    }
    var prevMode = {
        minute: 'hour',
        hour: 'day',
        day: 'month',
        month: 'year',
        year: 'minute',
    };
    function getPrevMode(currentMode) {
        return prevMode[currentMode];
    }
    var DateTimeInput = /** @class */ (function (_super) {
        __extends(DateTimeInput, _super);
        function DateTimeInput(props) {
            var _this = _super.call(this, props) || this;
            _this.componentDidUpdate = function (prevProps) {
                // update internal date if ``value`` prop changed and successuffly parsed
                if (prevProps.value !== _this.props.value) {
                    var parsed = parse_1.parseValue(_this.props.value, _this.getDateTimeFormat(), _this.props.localization);
                    if (parsed) {
                        _this.setState({
                            year: parsed.year(),
                            month: parsed.month(),
                            date: parsed.date(),
                            hour: parsed.hour(),
                            minute: parsed.minute(),
                        });
                    }
                }
            };
            _this.switchToNextModeUndelayed = function () {
                _this.setState(function (_a) {
                    var mode = _a.mode;
                    return { mode: getNextMode(mode) };
                }, _this.onModeSwitch);
            };
            _this.switchToNextMode = function () {
                lib_1.tick(_this.switchToNextModeUndelayed);
            };
            _this.switchToPrevModeUndelayed = function () {
                _this.setState(function (_a) {
                    var mode = _a.mode;
                    return { mode: getPrevMode(mode) };
                }, _this.onModeSwitch);
            };
            _this.switchToPrevMode = function () {
                lib_1.tick(_this.switchToPrevModeUndelayed);
            };
            _this.handleSelect = function (e, _a) {
                var value = _a.value;
                lib_1.tick(_this.handleSelectUndelayed, e, { value: value });
            };
            _this.onFocus = function () {
                if (!_this.props.preserveViewMode) {
                    _this.setState({ mode: _this.props.startMode });
                }
            };
            _this.handleSelectUndelayed = function (e, _a) {
                var value = _a.value;
                var _b = _this.props, closable = _b.closable, disableMinute = _b.disableMinute;
                var closeCondA = closable && _this.state.mode === 'minute';
                var closeCondB = closable && disableMinute && _this.state.mode === 'hour';
                if (closeCondA || closeCondB) {
                    _this.closePopup();
                }
                var endAtMode = disableMinute ? 'hour' : 'minute';
                _this.setState(function (prevState) {
                    var mode = prevState.mode;
                    if (mode === endAtMode) {
                        var outValue = moment_1.default(value).format(_this.getDateTimeFormat());
                        invoke_1.default(_this.props, 'onChange', e, __assign({}, _this.props, { value: outValue }));
                    }
                    return {
                        year: value.year,
                        month: value.month,
                        date: value.date,
                        hour: value.hour,
                        minute: value.minute,
                    };
                }, function () { return _this.state.mode !== endAtMode && _this.switchToNextMode(); });
            };
            /** Keeps internal state in sync with input field value. */
            _this.onInputValueChange = function (e, _a) {
                var value = _a.value;
                var parsedValue = moment_1.default(value, _this.getDateTimeFormat());
                if (parsedValue.isValid()) {
                    _this.setState({
                        year: parsedValue.year(),
                        month: parsedValue.month(),
                        date: parsedValue.date(),
                        hour: parsedValue.hour(),
                        minute: parsedValue.minute(),
                    });
                }
                invoke_1.default(_this.props, 'onChange', e, __assign({}, _this.props, { value: value }));
            };
            var parsedValue = parse_1.parseValue(props.value, _this.getDateTimeFormat(), props.localization);
            _this.state = {
                mode: props.startMode,
                year: parsedValue ? parsedValue.year() : undefined,
                month: parsedValue ? parsedValue.month() : undefined,
                date: parsedValue ? parsedValue.date() : undefined,
                hour: parsedValue ? parsedValue.hour() : undefined,
                minute: parsedValue ? parsedValue.minute() : undefined,
                popupIsClosed: true,
            };
            return _this;
        }
        DateTimeInput.prototype.render = function () {
            var _this = this;
            var _a = this.props, value = _a.value, dateTimeFormat = _a.dateTimeFormat, dateFormat = _a.dateFormat, timeFormat = _a.timeFormat, initialDate = _a.initialDate, disable = _a.disable, maxDate = _a.maxDate, minDate = _a.minDate, preserveViewMode = _a.preserveViewMode, startMode = _a.startMode, divider = _a.divider, closable = _a.closable, markColor = _a.markColor, marked = _a.marked, localization = _a.localization, onChange = _a.onChange, disableMinute = _a.disableMinute, rest = __rest(_a, ["value", "dateTimeFormat", "dateFormat", "timeFormat", "initialDate", "disable", "maxDate", "minDate", "preserveViewMode", "startMode", "divider", "closable", "markColor", "marked", "localization", "onChange", "disableMinute"]);
            return (React.createElement(InputView_1.default, __assign({ popupIsClosed: this.state.popupIsClosed, closePopup: this.closePopup, openPopup: this.openPopup, onFocus: this.onFocus, onMount: this.onInputViewMount, onChange: this.onInputValueChange }, rest, { value: parse_1.dateValueToString(value, dateFormat, localization), renderPicker: function () { return _this.getPicker(); } })));
        };
        DateTimeInput.prototype.parseInternalValue = function () {
            /*
              Creates moment instance from values stored in component's state
              (year, month, date, hour, minute) in order to pass this moment instance to
              underlying picker.
              Return undefined if none of these state fields has value.
            */
            var _a = this.state, year = _a.year, month = _a.month, date = _a.date, hour = _a.hour, minute = _a.minute;
            if (!isNil_1.default(year)
                || !isNil_1.default(month)
                || !isNil_1.default(date)
                || !isNil_1.default(hour)
                || !isNil_1.default(minute)) {
                return moment_1.default({ year: year, month: month, date: date, hour: hour, minute: minute });
            }
        };
        DateTimeInput.prototype.getDateTimeFormat = function () {
            var _a = this.props, dateFormat = _a.dateFormat, divider = _a.divider, timeFormat = _a.timeFormat, dateTimeFormat = _a.dateTimeFormat;
            return dateTimeFormat || "" + dateFormat + divider + parse_1.TIME_FORMAT[timeFormat];
        };
        DateTimeInput.prototype.getPicker = function () {
            var _a = this.props, value = _a.value, initialDate = _a.initialDate, dateFormat = _a.dateFormat, disable = _a.disable, minDate = _a.minDate, maxDate = _a.maxDate, inline = _a.inline, marked = _a.marked, markColor = _a.markColor, localization = _a.localization, tabIndex = _a.tabIndex, pickerStyle = _a.pickerStyle, pickerWidth = _a.pickerWidth;
            var dateTimeFormat = this.getDateTimeFormat();
            var pickerProps = {
                tabIndex: tabIndex,
                isPickerInFocus: this.isPickerInFocus,
                isTriggerInFocus: this.isTriggerInFocus,
                inline: inline,
                pickerWidth: pickerWidth,
                pickerStyle: pickerStyle,
                onCalendarViewMount: this.onCalendarViewMount,
                closePopup: this.closePopup,
                onChange: this.handleSelect,
                onHeaderClick: this.switchToPrevMode,
                initializeWith: parse_1.buildValue(this.parseInternalValue(), initialDate, localization, dateTimeFormat),
                value: parse_1.buildValue(value, null, localization, dateTimeFormat, null),
                minDate: parse_1.parseValue(minDate, dateTimeFormat, localization),
                maxDate: parse_1.parseValue(maxDate, dateTimeFormat, localization),
                localization: localization,
            };
            var disableParsed = parse_1.parseArrayOrValue(disable, dateTimeFormat, localization);
            var mode = this.state.mode;
            var markedParsed = parse_1.parseArrayOrValue(marked, dateTimeFormat, localization);
            if (mode === 'year') {
                return (React.createElement(YearPicker_1.default, __assign({}, pickerProps, { disable: shared_1.getDisabledYears(disableParsed) })));
            }
            if (mode === 'month') {
                return (React.createElement(MonthPicker_1.default, __assign({}, pickerProps, { hasHeader: true, disable: shared_1.getDisabledMonths(disableParsed) })));
            }
            if (mode === 'day') {
                return (React.createElement(DayPicker_1.default, __assign({}, pickerProps, { marked: markedParsed, markColor: markColor, disable: disableParsed })));
            }
            if (mode === 'hour') {
                return (React.createElement(HourPicker_1.default, __assign({ timeFormat: this.props.timeFormat, hasHeader: true }, pickerProps, { disable: disableParsed })));
            }
            return (React.createElement(MinutePicker_1.default, __assign({ timeFormat: this.props.timeFormat, hasHeader: true }, pickerProps, { disable: disableParsed })));
        };
        /**
         * Component responsibility:
         *  - parse input value
         *  - handle underlying picker change
         */
        DateTimeInput.defaultProps = __assign({}, BaseInput_1.default.defaultProps, { dateFormat: 'DD-MM-YYYY', timeFormat: '24', startMode: 'day', divider: ' ', icon: 'calendar', preserveViewMode: true, disableMinute: false });
        DateTimeInput.propTypes = __assign({}, BaseInput_1.BaseInputPropTypes, BaseInput_1.DateRelatedPropTypes, BaseInput_1.TimeRelatedPropTypes, BaseInput_1.MultimodePropTypes, BaseInput_1.DisableValuesPropTypes, BaseInput_1.MarkedValuesPropTypes, BaseInput_1.MinMaxValuePropTypes, {
            startMode: PropTypes.oneOf(['year', 'month', 'day']),
            /** Date and time divider. */
            divider: PropTypes.string,
            /** Datetime formatting string. */
            dateTimeFormat: PropTypes.string,
        });
        return DateTimeInput;
    }(BaseInput_1.default));
    exports.default = DateTimeInput;
});
