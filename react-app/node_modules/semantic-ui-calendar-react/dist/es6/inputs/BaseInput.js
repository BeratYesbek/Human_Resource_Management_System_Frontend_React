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
import { default as moment } from 'moment';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import invoke from 'lodash/invoke';
import CustomPropTypes from '../lib/CustomPropTypes';
export var BaseInputPropTypes = {
    /** Currently selected value. */
    value: PropTypes.string.isRequired,
    /** Called on selected value change. */
    onChange: PropTypes.func.isRequired,
    /** If true, popup closes after selecting a value. */
    closable: PropTypes.bool,
    /** An input can be formatted to appear inline in other content. */
    inline: PropTypes.bool,
    /** Optional icon to display inside the Input. */
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    /** Icon position inside Input. Default: 'right'. */
    iconPosition: PropTypes.oneOf(['right', 'left']),
    /**
     * Called on clear.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     */
    onClear: PropTypes.func,
    /** Using the clearable setting will let users remove their selection from a calendar. */
    clearable: PropTypes.bool,
    /** Optional Icon to display inside the clearable Input. */
    clearIcon: PropTypes.any,
    /** Position for the popup. */
    popupPosition: PropTypes.oneOf([
        'top left',
        'top right',
        'bottom left',
        'bottom right',
        'right center',
        'left center',
        'top center',
        'bottom center',
    ]),
    /** Should close when cursor leaves calendar popup. */
    closeOnMouseLeave: PropTypes.bool,
    /** The node where the picker should mount. */
    mountNode: PropTypes.any,
    /** A field can have its label next to instead of above it. */
    inlineLabel: PropTypes.bool,
    /** Picker width (any value that `style.width` can take). */
    pickerWidth: PropTypes.string,
    /** Style object for picker. */
    pickerStyle: PropTypes.object,
    /** Duration of the CSS transition animation in milliseconds. */
    duration: PropTypes.number,
    /** Named animation event to used. Must be defined in CSS. */
    animation: PropTypes.string,
    /** Moment date localization. */
    localization: PropTypes.string,
    /** Try to prevent mobile keyboard appearing. */
    hideMobileKeyboard: PropTypes.bool,
};
export var MarkedValuesPropTypes = {
    /** Array of marked dates. */
    marked: PropTypes.oneOfType([
        PropTypes.arrayOf(CustomPropTypes.momentObj),
        PropTypes.arrayOf(CustomPropTypes.dateObject),
    ]),
    /** String specifying the mark color (Optional). */
    markColor: PropTypes.string,
};
export var DateRelatedPropTypes = {
    /** Moment date formatting string. */
    dateFormat: PropTypes.string,
    /** Date to display initially when no date is selected. */
    initialDate: PropTypes.oneOfType([
        PropTypes.string,
        CustomPropTypes.dateObject,
        CustomPropTypes.momentObj,
    ]),
};
export var TimeRelatedPropTypes = {
    /** Time format. */
    timeFormat: PropTypes.oneOf(['ampm', 'AMPM', '24']),
    /** If true, minutes picker won't be shown after picking the hour. */
    disableMinute: PropTypes.bool,
};
export var DisableValuesPropTypes = {
    /** Date or list of dates that are displayed as disabled. */
    disable: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        CustomPropTypes.momentObj,
        PropTypes.arrayOf(CustomPropTypes.momentObj),
        CustomPropTypes.dateObject,
        PropTypes.arrayOf(CustomPropTypes.dateObject),
    ]),
};
export var EnableValuesPropTypes = {
    /** Date or list of dates that are enabled (the rest are disabled). */
    enable: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        CustomPropTypes.momentObj,
        PropTypes.arrayOf(CustomPropTypes.momentObj),
        CustomPropTypes.dateObject,
        PropTypes.arrayOf(CustomPropTypes.dateObject),
    ]),
};
export var MinMaxValuePropTypes = {
    /** Maximum date that can be selected. */
    maxDate: PropTypes.oneOfType([
        PropTypes.string,
        CustomPropTypes.momentObj,
        CustomPropTypes.dateObject,
    ]),
    /** Minimum date that can be selected. */
    minDate: PropTypes.oneOfType([
        PropTypes.string,
        CustomPropTypes.momentObj,
        CustomPropTypes.dateObject,
    ]),
};
export var MultimodePropTypes = {
    /** Preserve viewmode on focus? */
    preserveViewMode: PropTypes.bool,
};
export var RangeRelatedPropTypes = {
    /** Allow end date to be the same as start date. */
    allowSameEndDate: PropTypes.bool,
};
var BaseInput = /** @class */ (function (_super) {
    __extends(BaseInput, _super);
    function BaseInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closePopup = function () {
            invoke(_this.props, 'onClose');
            invoke(_this.props, 'onBlur');
            _this.setState({ popupIsClosed: true });
        };
        _this.openPopup = function () {
            _this.setState({ popupIsClosed: false });
        };
        _this.isPickerInFocus = function () {
            return document.activeElement === _this.calendarNode;
        };
        _this.isTriggerInFocus = function () {
            return document.activeElement === _this.inputNode;
        };
        _this.onModeSwitch = function () {
            // when using keyboard for selecting values on inline calendar
            // and when mode switches, picker looses focus.
            // In order to preserve focus on active picker
            // we call focus() on `calendarNode`.
            // `calendarNode` goes from *View component via
            // `this.onCalendarViewMount` callback
            if (_this.props.inline
                && !_this.isPickerInFocus()
                && _this.calendarNode) {
                _this.calendarNode.focus();
            }
        };
        _this.onCalendarViewMount = function (calendarNode) {
            _this.calendarNode = calendarNode;
        };
        _this.onInputViewMount = function (inputNode) {
            _this.inputNode = inputNode;
        };
        return _this;
    }
    BaseInput.defaultProps = {
        inline: false,
        localization: moment.locale(),
    };
    return BaseInput;
}(React.Component));
export default BaseInput;
