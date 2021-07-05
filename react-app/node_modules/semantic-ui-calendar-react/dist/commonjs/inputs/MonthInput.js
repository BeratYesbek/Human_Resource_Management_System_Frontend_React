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
var invoke_1 = __importDefault(require("lodash/invoke"));
var moment_1 = __importDefault(require("moment"));
var React = __importStar(require("react"));
var MonthPicker_1 = __importDefault(require("../pickers/monthPicker/MonthPicker"));
var InputView_1 = __importDefault(require("../views/InputView"));
var BaseInput_1 = __importStar(require("./BaseInput"));
var parse_1 = require("./parse");
var MonthInput = /** @class */ (function (_super) {
    __extends(MonthInput, _super);
    function MonthInput(props) {
        var _this = _super.call(this, props) || this;
        _this.getPicker = function () {
            var _a = _this.props, value = _a.value, dateFormat = _a.dateFormat, disable = _a.disable, maxDate = _a.maxDate, minDate = _a.minDate, localization = _a.localization, initialDate = _a.initialDate;
            return (React.createElement(MonthPicker_1.default, { inline: _this.props.inline, isPickerInFocus: _this.isPickerInFocus, isTriggerInFocus: _this.isTriggerInFocus, onCalendarViewMount: _this.onCalendarViewMount, closePopup: _this.closePopup, hasHeader: false, onChange: _this.handleSelect, initializeWith: parse_1.buildValue(value, initialDate, localization, dateFormat), value: parse_1.buildValue(value, null, localization, dateFormat, null), disable: parse_1.parseArrayOrValue(disable, dateFormat, localization), maxDate: parse_1.parseValue(maxDate, dateFormat, localization), minDate: parse_1.parseValue(minDate, dateFormat, localization), localization: localization, onHeaderClick: function () { return undefined; } }));
        };
        _this.handleSelect = function (e, _a) {
            var value = _a.value;
            var localization = _this.props.localization;
            var date = localization ? moment_1.default({ month: value.month }).locale(localization) : moment_1.default({ month: value.month });
            var output = '';
            if (date.isValid()) {
                output = date.format(_this.props.dateFormat);
            }
            invoke_1.default(_this.props, 'onChange', e, __assign({}, _this.props, { value: output }));
            if (_this.props.closable) {
                _this.closePopup();
            }
        };
        _this.state = {
            popupIsClosed: true,
        };
        return _this;
    }
    MonthInput.prototype.render = function () {
        var _a = this.props, value = _a.value, dateFormat = _a.dateFormat, initialDate = _a.initialDate, disable = _a.disable, maxDate = _a.maxDate, minDate = _a.minDate, closable = _a.closable, localization = _a.localization, rest = __rest(_a, ["value", "dateFormat", "initialDate", "disable", "maxDate", "minDate", "closable", "localization"]);
        return (React.createElement(InputView_1.default, __assign({ popupIsClosed: this.state.popupIsClosed }, rest, { value: parse_1.dateValueToString(value, dateFormat, localization), onMount: this.onInputViewMount, closePopup: this.closePopup, openPopup: this.openPopup, renderPicker: this.getPicker })));
    };
    MonthInput.defaultProps = __assign({}, BaseInput_1.default.defaultProps, { dateFormat: 'MMM', icon: 'calendar' });
    MonthInput.propTypes = __assign({}, BaseInput_1.BaseInputPropTypes, BaseInput_1.DateRelatedPropTypes, BaseInput_1.DisableValuesPropTypes, BaseInput_1.MinMaxValuePropTypes);
    return MonthInput;
}(BaseInput_1.default));
exports.default = MonthInput;
