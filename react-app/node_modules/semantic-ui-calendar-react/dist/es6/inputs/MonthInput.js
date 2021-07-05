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
import invoke from 'lodash/invoke';
import moment from 'moment';
import * as React from 'react';
import MonthPicker from '../pickers/monthPicker/MonthPicker';
import InputView from '../views/InputView';
import BaseInput, { BaseInputPropTypes, DateRelatedPropTypes, DisableValuesPropTypes, MinMaxValuePropTypes, } from './BaseInput';
import { parseArrayOrValue, parseValue, buildValue, dateValueToString, } from './parse';
var MonthInput = /** @class */ (function (_super) {
    __extends(MonthInput, _super);
    function MonthInput(props) {
        var _this = _super.call(this, props) || this;
        _this.getPicker = function () {
            var _a = _this.props, value = _a.value, dateFormat = _a.dateFormat, disable = _a.disable, maxDate = _a.maxDate, minDate = _a.minDate, localization = _a.localization, initialDate = _a.initialDate;
            return (React.createElement(MonthPicker, { inline: _this.props.inline, isPickerInFocus: _this.isPickerInFocus, isTriggerInFocus: _this.isTriggerInFocus, onCalendarViewMount: _this.onCalendarViewMount, closePopup: _this.closePopup, hasHeader: false, onChange: _this.handleSelect, initializeWith: buildValue(value, initialDate, localization, dateFormat), value: buildValue(value, null, localization, dateFormat, null), disable: parseArrayOrValue(disable, dateFormat, localization), maxDate: parseValue(maxDate, dateFormat, localization), minDate: parseValue(minDate, dateFormat, localization), localization: localization, onHeaderClick: function () { return undefined; } }));
        };
        _this.handleSelect = function (e, _a) {
            var value = _a.value;
            var localization = _this.props.localization;
            var date = localization ? moment({ month: value.month }).locale(localization) : moment({ month: value.month });
            var output = '';
            if (date.isValid()) {
                output = date.format(_this.props.dateFormat);
            }
            invoke(_this.props, 'onChange', e, __assign({}, _this.props, { value: output }));
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
        return (React.createElement(InputView, __assign({ popupIsClosed: this.state.popupIsClosed }, rest, { value: dateValueToString(value, dateFormat, localization), onMount: this.onInputViewMount, closePopup: this.closePopup, openPopup: this.openPopup, renderPicker: this.getPicker })));
    };
    MonthInput.defaultProps = __assign({}, BaseInput.defaultProps, { dateFormat: 'MMM', icon: 'calendar' });
    MonthInput.propTypes = __assign({}, BaseInputPropTypes, DateRelatedPropTypes, DisableValuesPropTypes, MinMaxValuePropTypes);
    return MonthInput;
}(BaseInput));
export default MonthInput;
