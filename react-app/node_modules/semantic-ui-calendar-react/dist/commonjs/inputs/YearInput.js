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
var moment_1 = __importDefault(require("moment"));
var React = __importStar(require("react"));
var YearPicker_1 = __importDefault(require("../pickers/YearPicker"));
var InputView_1 = __importDefault(require("../views/InputView"));
var BaseInput_1 = __importStar(require("./BaseInput"));
var parse_1 = require("./parse");
var YearInput = /** @class */ (function (_super) {
    __extends(YearInput, _super);
    function YearInput(props) {
        var _this = _super.call(this, props) || this;
        _this.getPicker = function () {
            var _a = _this.props, value = _a.value, disable = _a.disable, maxDate = _a.maxDate, minDate = _a.minDate, initialDate = _a.initialDate, dateFormat = _a.dateFormat, localization = _a.localization;
            return (React.createElement(YearPicker_1.default, { isPickerInFocus: _this.isPickerInFocus, isTriggerInFocus: _this.isTriggerInFocus, inline: _this.props.inline, onCalendarViewMount: _this.onCalendarViewMount, closePopup: _this.closePopup, onChange: _this.handleSelect, initializeWith: parse_1.buildValue(value, initialDate, localization, dateFormat), value: parse_1.buildValue(value, null, localization, dateFormat, null), disable: parse_1.parseArrayOrValue(disable, dateFormat, localization), maxDate: parse_1.parseValue(maxDate, dateFormat, localization), minDate: parse_1.parseValue(minDate, dateFormat, localization), onHeaderClick: function () { return undefined; } }));
        };
        _this.handleSelect = function (e, _a) {
            var value = _a.value;
            var localization = _this.props.localization;
            var date = localization ? moment_1.default({ year: value.year }).locale(localization) : moment_1.default({ year: value.year });
            var output = '';
            if (date.isValid()) {
                output = date.format(_this.props.dateFormat);
            }
            var data = __assign({}, _this.props, { value: output });
            _this.props.onChange(e, data);
            if (_this.props.closable) {
                _this.closePopup();
            }
        };
        _this.state = {
            popupIsClosed: true,
        };
        return _this;
    }
    YearInput.prototype.render = function () {
        var _a = this.props, value = _a.value, disable = _a.disable, maxDate = _a.maxDate, minDate = _a.minDate, initialDate = _a.initialDate, dateFormat = _a.dateFormat, closable = _a.closable, localization = _a.localization, rest = __rest(_a, ["value", "disable", "maxDate", "minDate", "initialDate", "dateFormat", "closable", "localization"]);
        return (React.createElement(InputView_1.default, __assign({ popupIsClosed: this.state.popupIsClosed, closePopup: this.closePopup, openPopup: this.openPopup }, rest, { value: value, onMount: this.onInputViewMount, renderPicker: this.getPicker })));
    };
    YearInput.defaultProps = __assign({}, BaseInput_1.default.defaultProps, { dateFormat: 'YYYY', icon: 'calendar' });
    YearInput.propTypes = __assign({}, BaseInput_1.BaseInputPropTypes, BaseInput_1.DateRelatedPropTypes, BaseInput_1.MinMaxValuePropTypes, BaseInput_1.DisableValuesPropTypes);
    return YearInput;
}(BaseInput_1.default));
exports.default = YearInput;
