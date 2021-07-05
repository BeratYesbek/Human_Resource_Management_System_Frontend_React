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
import isNil from 'lodash/isNil';
import invoke from 'lodash/invoke';
import moment from 'moment';
import * as React from 'react';
import { tick } from '../lib';
import HourPicker from '../pickers/timePicker/HourPicker';
import MinutePicker from '../pickers/timePicker/MinutePicker';
import InputView from '../views/InputView';
import BaseInput, { BaseInputPropTypes, MultimodePropTypes, TimeRelatedPropTypes, } from './BaseInput';
import { parseValue, TIME_FORMAT, buildValue, } from './parse';
function getNextMode(currentMode) {
    if (currentMode === 'hour') {
        return 'minute';
    }
    return 'hour';
}
var TimeInput = /** @class */ (function (_super) {
    __extends(TimeInput, _super);
    function TimeInput(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSelect = function (e, _a) {
            var value = _a.value;
            tick(_this.handleSelectUndelayed, e, { value: value });
        };
        _this.handleSelectUndelayed = function (e, _a) {
            var value = _a.value;
            var hour = value.hour, minute = value.minute;
            var _b = _this.props, timeFormat = _b.timeFormat, disableMinute = _b.disableMinute;
            var outputTimeString = '';
            if (_this.state.mode === 'hour' && !isNil(hour)) {
                outputTimeString = moment({ hour: hour }).format(TIME_FORMAT[timeFormat]);
            }
            else if (!isNil(hour) && !isNil(minute)) {
                outputTimeString = moment({ hour: hour, minute: minute }).format(TIME_FORMAT[timeFormat]);
            }
            invoke(_this.props, 'onChange', e, __assign({}, _this.props, { value: outputTimeString }));
            if (_this.props.closable && (_this.state.mode === 'minute' || _this.props.disableMinute)) {
                _this.closePopup();
            }
            if (!disableMinute) {
                _this.switchToNextMode();
            }
        };
        _this.switchToNextMode = function () {
            _this.setState(function (_a) {
                var mode = _a.mode;
                return { mode: getNextMode(mode) };
            }, _this.onModeSwitch);
        };
        _this.state = {
            mode: 'hour',
            popupIsClosed: true,
        };
        return _this;
    }
    TimeInput.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, timeFormat = _a.timeFormat, closable = _a.closable, disableMinute = _a.disableMinute, rest = __rest(_a, ["value", "timeFormat", "closable", "disableMinute"]);
        return (React.createElement(InputView, __assign({ popupIsClosed: this.state.popupIsClosed, onMount: this.onInputViewMount, closePopup: this.closePopup, openPopup: this.openPopup }, rest, { value: value, renderPicker: function () { return _this.getPicker(); } })));
    };
    TimeInput.prototype.getPicker = function () {
        var _a = this.props, value = _a.value, timeFormat = _a.timeFormat, inline = _a.inline, localization = _a.localization, tabIndex = _a.tabIndex, pickerStyle = _a.pickerStyle, pickerWidth = _a.pickerWidth;
        var currentValue = parseValue(value, TIME_FORMAT[timeFormat], localization);
        var pickerProps = {
            inline: inline,
            onCalendarViewMount: this.onCalendarViewMount,
            isPickerInFocus: this.isPickerInFocus,
            isTriggerInFocus: this.isTriggerInFocus,
            hasHeader: false,
            pickerWidth: pickerWidth,
            pickerStyle: pickerStyle,
            onHeaderClick: function () { return undefined; },
            closePopup: this.closePopup,
            initializeWith: buildValue(currentValue, null, localization, TIME_FORMAT[timeFormat]),
            value: buildValue(currentValue, null, TIME_FORMAT[timeFormat], localization, null),
            onChange: this.handleSelect,
            timeFormat: timeFormat,
            tabIndex: tabIndex,
            localization: localization,
        };
        if (this.state.mode === 'hour') {
            return React.createElement(HourPicker, __assign({}, pickerProps));
        }
        return React.createElement(MinutePicker, __assign({}, pickerProps));
    };
    /**
     * Component responsibility:
     *  - parse time input string
     *  - switch between modes ['hour', 'minute']
     *  - handle HourPicker/MinutePicker change (format { hour: number, minute: number } into output time string)
     */
    TimeInput.defaultProps = __assign({}, BaseInput.defaultProps, { icon: 'time', timeFormat: '24', disableMinute: false });
    TimeInput.propTypes = __assign({}, BaseInputPropTypes, MultimodePropTypes, TimeRelatedPropTypes);
    return TimeInput;
}(BaseInput));
export default TimeInput;
