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
import moment from 'moment';
import * as React from 'react';
import YearPicker from '../pickers/YearPicker';
import InputView from '../views/InputView';
import BaseInput, { BaseInputPropTypes, DateRelatedPropTypes, DisableValuesPropTypes, MinMaxValuePropTypes, } from './BaseInput';
import { parseArrayOrValue, parseValue, buildValue, } from './parse';
var YearInput = /** @class */ (function (_super) {
    __extends(YearInput, _super);
    function YearInput(props) {
        var _this = _super.call(this, props) || this;
        _this.getPicker = function () {
            var _a = _this.props, value = _a.value, disable = _a.disable, maxDate = _a.maxDate, minDate = _a.minDate, initialDate = _a.initialDate, dateFormat = _a.dateFormat, localization = _a.localization;
            return (React.createElement(YearPicker, { isPickerInFocus: _this.isPickerInFocus, isTriggerInFocus: _this.isTriggerInFocus, inline: _this.props.inline, onCalendarViewMount: _this.onCalendarViewMount, closePopup: _this.closePopup, onChange: _this.handleSelect, initializeWith: buildValue(value, initialDate, localization, dateFormat), value: buildValue(value, null, localization, dateFormat, null), disable: parseArrayOrValue(disable, dateFormat, localization), maxDate: parseValue(maxDate, dateFormat, localization), minDate: parseValue(minDate, dateFormat, localization), onHeaderClick: function () { return undefined; } }));
        };
        _this.handleSelect = function (e, _a) {
            var value = _a.value;
            var localization = _this.props.localization;
            var date = localization ? moment({ year: value.year }).locale(localization) : moment({ year: value.year });
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
        return (React.createElement(InputView, __assign({ popupIsClosed: this.state.popupIsClosed, closePopup: this.closePopup, openPopup: this.openPopup }, rest, { value: value, onMount: this.onInputViewMount, renderPicker: this.getPicker })));
    };
    YearInput.defaultProps = __assign({}, BaseInput.defaultProps, { dateFormat: 'YYYY', icon: 'calendar' });
    YearInput.propTypes = __assign({}, BaseInputPropTypes, DateRelatedPropTypes, MinMaxValuePropTypes, DisableValuesPropTypes);
    return YearInput;
}(BaseInput));
export default YearInput;
