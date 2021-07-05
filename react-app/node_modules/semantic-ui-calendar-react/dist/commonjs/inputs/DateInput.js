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
var isNil_1 = __importDefault(require("lodash/isNil"));
var invoke_1 = __importDefault(require("lodash/invoke"));
var moment_1 = __importDefault(require("moment"));
var PropTypes = __importStar(require("prop-types"));
var React = __importStar(require("react"));
var DayPicker_1 = __importDefault(require("../pickers/dayPicker/DayPicker"));
var MonthPicker_1 = __importDefault(require("../pickers/monthPicker/MonthPicker"));
var YearPicker_1 = __importDefault(require("../pickers/YearPicker"));
var InputView_1 = __importDefault(require("../views/InputView"));
var BaseInput_1 = __importStar(require("./BaseInput"));
var lib_1 = require("../lib");
var parse_1 = require("./parse");
var shared_1 = require("./shared");
function getNextMode(currentMode) {
    if (currentMode === 'year') {
        return 'month';
    }
    if (currentMode === 'month') {
        return 'day';
    }
    return 'year';
}
function getPrevMode(currentMode) {
    if (currentMode === 'day') {
        return 'month';
    }
    if (currentMode === 'month') {
        return 'year';
    }
    return 'day';
}
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidUpdate = function (prevProps) {
            // update internal date if ``value`` prop changed and successuffly parsed
            if (prevProps.value !== _this.props.value) {
                var parsed = parse_1.parseValue(_this.props.value, _this.props.dateFormat, _this.props.localization);
                if (parsed) {
                    _this.setState({
                        year: parsed.year(),
                        month: parsed.month(),
                        date: parsed.date(),
                    });
                }
            }
        };
        _this.getPicker = function () {
            var _a = _this.props, value = _a.value, initialDate = _a.initialDate, dateFormat = _a.dateFormat, disable = _a.disable, minDate = _a.minDate, maxDate = _a.maxDate, enable = _a.enable, inline = _a.inline, marked = _a.marked, markColor = _a.markColor, localization = _a.localization, tabIndex = _a.tabIndex, pickerWidth = _a.pickerWidth, pickerStyle = _a.pickerStyle;
            var pickerProps = {
                isPickerInFocus: _this.isPickerInFocus,
                isTriggerInFocus: _this.isTriggerInFocus,
                inline: inline,
                onCalendarViewMount: _this.onCalendarViewMount,
                closePopup: _this.closePopup,
                tabIndex: tabIndex,
                pickerWidth: pickerWidth,
                pickerStyle: pickerStyle,
                onChange: _this.handleSelect,
                onHeaderClick: _this.switchToPrevMode,
                initializeWith: parse_1.buildValue(_this.parseInternalValue(), initialDate, localization, dateFormat),
                value: parse_1.buildValue(value, null, localization, dateFormat, null),
                enable: parse_1.parseArrayOrValue(enable, dateFormat, localization),
                minDate: parse_1.parseValue(minDate, dateFormat, localization),
                maxDate: parse_1.parseValue(maxDate, dateFormat, localization),
                localization: localization,
            };
            var disableParsed = parse_1.parseArrayOrValue(disable, dateFormat, localization);
            var markedParsed = parse_1.parseArrayOrValue(marked, dateFormat, localization);
            var mode = _this.state.mode;
            if (mode === 'year') {
                return (React.createElement(YearPicker_1.default, __assign({}, pickerProps, { disable: shared_1.getDisabledYears(disableParsed) })));
            }
            if (mode === 'month') {
                return (React.createElement(MonthPicker_1.default, __assign({}, pickerProps, { hasHeader: true, disable: shared_1.getDisabledMonths(disableParsed) })));
            }
            return React.createElement(DayPicker_1.default, __assign({}, pickerProps, { disable: disableParsed, marked: markedParsed, markColor: markColor }));
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
        _this.onFocus = function () {
            if (!_this.props.preserveViewMode) {
                _this.setState({ mode: _this.props.startMode });
            }
        };
        _this.handleSelect = function (e, _a) {
            var value = _a.value;
            if (_this.state.mode === 'day' && _this.props.closable) {
                _this.closePopup();
            }
            _this.setState(function (prevState) {
                var mode = prevState.mode;
                if (mode === 'day') {
                    var outValue = moment_1.default(value).format(_this.props.dateFormat);
                    invoke_1.default(_this.props, 'onChange', e, __assign({}, _this.props, { value: outValue }));
                }
                return {
                    year: value.year,
                    month: value.month,
                    date: value.date,
                };
            }, function () { return _this.state.mode !== 'day' && _this.switchToNextMode(); });
        };
        /** Keeps internal state in sync with input field value. */
        _this.onInputValueChange = function (e, _a) {
            var value = _a.value;
            var parsedValue = moment_1.default(value, _this.props.dateFormat);
            if (parsedValue.isValid()) {
                _this.setState({
                    year: parsedValue.year(),
                    month: parsedValue.month(),
                    date: parsedValue.date(),
                });
            }
            invoke_1.default(_this.props, 'onChange', e, __assign({}, _this.props, { value: value }));
        };
        var parsedValue = parse_1.parseValue(props.value, props.dateFormat, props.localization);
        _this.state = {
            mode: props.startMode,
            popupIsClosed: true,
            year: parsedValue ? parsedValue.year() : undefined,
            month: parsedValue ? parsedValue.month() : undefined,
            date: parsedValue ? parsedValue.date() : undefined,
        };
        return _this;
    }
    DateInput.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, dateFormat = _a.dateFormat, initialDate = _a.initialDate, disable = _a.disable, enable = _a.enable, maxDate = _a.maxDate, minDate = _a.minDate, preserveViewMode = _a.preserveViewMode, startMode = _a.startMode, closable = _a.closable, markColor = _a.markColor, marked = _a.marked, localization = _a.localization, onChange = _a.onChange, rest = __rest(_a, ["value", "dateFormat", "initialDate", "disable", "enable", "maxDate", "minDate", "preserveViewMode", "startMode", "closable", "markColor", "marked", "localization", "onChange"]);
        return (React.createElement(InputView_1.default, __assign({ closePopup: this.closePopup, openPopup: this.openPopup, popupIsClosed: this.state.popupIsClosed, onMount: this.onInputViewMount, onFocus: this.onFocus, onChange: this.onInputValueChange }, rest, { renderPicker: function () { return _this.getPicker(); }, value: parse_1.dateValueToString(value, dateFormat, localization) })));
    };
    DateInput.prototype.parseInternalValue = function () {
        /*
          Creates moment instance from values stored in component's state
          (year, month, date) in order to pass this moment instance to
          underlying picker.
          Return undefined if none of these state fields has value.
        */
        var _a = this.state, year = _a.year, month = _a.month, date = _a.date;
        if (!isNil_1.default(year) || !isNil_1.default(month) || !isNil_1.default(date)) {
            return moment_1.default({ year: year, month: month, date: date });
        }
    };
    /**
     * Component responsibility:
     *  - parse input value
     *  - handle underlying picker change
     */
    DateInput.defaultProps = __assign({}, BaseInput_1.default.defaultProps, { dateFormat: 'DD-MM-YYYY', startMode: 'day', preserveViewMode: true, icon: 'calendar' });
    DateInput.propTypes = __assign({}, BaseInput_1.BaseInputPropTypes, BaseInput_1.DateRelatedPropTypes, BaseInput_1.MultimodePropTypes, BaseInput_1.DisableValuesPropTypes, BaseInput_1.EnableValuesPropTypes, BaseInput_1.MarkedValuesPropTypes, BaseInput_1.MinMaxValuePropTypes, {
        /** Display mode to start. */
        startMode: PropTypes.oneOf(['year', 'month', 'day']),
    });
    return DateInput;
}(BaseInput_1.default));
exports.default = DateInput;
