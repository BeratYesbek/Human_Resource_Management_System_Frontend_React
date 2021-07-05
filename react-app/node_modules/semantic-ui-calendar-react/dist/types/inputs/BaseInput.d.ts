import { Moment } from 'moment';
import * as React from 'react';
import { SemanticTRANSITIONS, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';
import * as PropTypes from 'prop-types';
import { TimeFormat } from '../pickers/BasePicker';
export interface BaseInputProps {
    [key: string]: any;
    /** Currently selected value. */
    value: string;
    /** Called on selected value change. */
    onChange: (e: React.SyntheticEvent<HTMLElement>, data: any) => void;
    /** If true, popup closes after selecting a value. */
    closable?: boolean;
    /** An input can be formatted to appear inline in other content. */
    inline?: boolean;
    /** Optional icon to display inside the Input. */
    icon?: SemanticICONS | false;
    /** Icon position inside Input. Default: 'right'. */
    iconPosition?: 'right' | 'left';
    /**
     * Called on clear.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     */
    onClear?: (event: React.SyntheticEvent<HTMLInputElement>, data: any) => void;
    /** Using the clearable setting will let users remove their selection from a calendar. */
    clearable?: boolean;
    /** Optional Icon to display inside the clearable Input. */
    clearIcon?: any;
    /** Position for the popup. */
    popupPosition?: 'top left' | 'top right' | 'bottom left' | 'bottom right' | 'right center' | 'left center' | 'top center' | 'bottom center';
    /** Should close when cursor leaves calendar popup. */
    closeOnMouseLeave?: boolean;
    /** The node where the picker should mount. */
    mountNode?: any;
    /** A field can have its label next to instead of above it. */
    inlineLabel?: boolean;
    /** Picker width (any value that `style.width` can take). */
    pickerWidth?: string;
    /** Style object for picker. */
    pickerStyle?: object;
    /** Duration of the CSS transition animation in milliseconds. */
    duration?: number;
    /** Named animation event to used. Must be defined in CSS. */
    animation?: SemanticTRANSITIONS;
    /** Moment date localization. */
    localization?: string;
    /** Try to prevent mobile keyboard appearing. */
    hideMobileKeyboard?: boolean;
}
export declare const BaseInputPropTypes: {
    /** Currently selected value. */
    value: PropTypes.Validator<string>;
    /** Called on selected value change. */
    onChange: PropTypes.Validator<(...args: any[]) => any>;
    /** If true, popup closes after selecting a value. */
    closable: PropTypes.Requireable<boolean>;
    /** An input can be formatted to appear inline in other content. */
    inline: PropTypes.Requireable<boolean>;
    /** Optional icon to display inside the Input. */
    icon: PropTypes.Requireable<string | boolean>;
    /** Icon position inside Input. Default: 'right'. */
    iconPosition: PropTypes.Requireable<string>;
    /**
     * Called on clear.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     */
    onClear: PropTypes.Requireable<(...args: any[]) => any>;
    /** Using the clearable setting will let users remove their selection from a calendar. */
    clearable: PropTypes.Requireable<boolean>;
    /** Optional Icon to display inside the clearable Input. */
    clearIcon: PropTypes.Requireable<any>;
    /** Position for the popup. */
    popupPosition: PropTypes.Requireable<string>;
    /** Should close when cursor leaves calendar popup. */
    closeOnMouseLeave: PropTypes.Requireable<boolean>;
    /** The node where the picker should mount. */
    mountNode: PropTypes.Requireable<any>;
    /** A field can have its label next to instead of above it. */
    inlineLabel: PropTypes.Requireable<boolean>;
    /** Picker width (any value that `style.width` can take). */
    pickerWidth: PropTypes.Requireable<string>;
    /** Style object for picker. */
    pickerStyle: PropTypes.Requireable<object>;
    /** Duration of the CSS transition animation in milliseconds. */
    duration: PropTypes.Requireable<number>;
    /** Named animation event to used. Must be defined in CSS. */
    animation: PropTypes.Requireable<string>;
    /** Moment date localization. */
    localization: PropTypes.Requireable<string>;
    /** Try to prevent mobile keyboard appearing. */
    hideMobileKeyboard: PropTypes.Requireable<boolean>;
};
export interface MarkedValuesProps {
    /** Array of marked dates. */
    marked?: Moment[] | Date[];
    /** String specifying the mark color (Optional). */
    markColor?: SemanticCOLORS;
}
export declare const MarkedValuesPropTypes: {
    /** Array of marked dates. */
    marked: PropTypes.Requireable<{}[]>;
    /** String specifying the mark color (Optional). */
    markColor: PropTypes.Requireable<string>;
};
export interface DateRelatedProps {
    /** Moment date formatting string. */
    dateFormat?: string;
    /** Date to display initially when no date is selected. */
    initialDate?: string | Date | Moment;
}
export declare const DateRelatedPropTypes: {
    /** Moment date formatting string. */
    dateFormat: PropTypes.Requireable<string>;
    /** Date to display initially when no date is selected. */
    initialDate: PropTypes.Requireable<string | {}>;
};
export interface TimeRelatedProps {
    /** Time format. */
    timeFormat?: TimeFormat;
    /** If true, minutes picker won't be shown after picking the hour. */
    disableMinute?: boolean;
}
export declare const TimeRelatedPropTypes: {
    /** Time format. */
    timeFormat: PropTypes.Requireable<string>;
    /** If true, minutes picker won't be shown after picking the hour. */
    disableMinute: PropTypes.Requireable<boolean>;
};
export interface DisableValuesProps {
    /** Date or list of dates that are displayed as disabled. */
    disable?: string | string[] | Moment | Moment[] | Date | Date[];
}
export declare const DisableValuesPropTypes: {
    /** Date or list of dates that are displayed as disabled. */
    disable: PropTypes.Requireable<string | {} | {}[]>;
};
export interface EnableValuesProps {
    /** Date or list of dates that are enabled (the rest are disabled). */
    enable?: string | string[] | Moment | Moment[] | Date | Date[];
}
export declare const EnableValuesPropTypes: {
    /** Date or list of dates that are enabled (the rest are disabled). */
    enable: PropTypes.Requireable<string | {} | {}[]>;
};
export interface MinMaxValueProps {
    /** Maximum date that can be selected. */
    maxDate?: string | Moment | Date;
    /** Minimum date that can be selected. */
    minDate?: string | Moment | Date;
}
export declare const MinMaxValuePropTypes: {
    /** Maximum date that can be selected. */
    maxDate: PropTypes.Requireable<string | {}>;
    /** Minimum date that can be selected. */
    minDate: PropTypes.Requireable<string | {}>;
};
export interface MultimodeProps {
    /** Preserve viewmode on focus? */
    preserveViewMode?: boolean;
}
export declare const MultimodePropTypes: {
    /** Preserve viewmode on focus? */
    preserveViewMode: PropTypes.Requireable<boolean>;
};
export interface RangeRelatedProps {
    /** Allow end date to be the same as start date. */
    allowSameEndDate?: boolean;
}
export declare const RangeRelatedPropTypes: {
    /** Allow end date to be the same as start date. */
    allowSameEndDate: PropTypes.Requireable<boolean>;
};
export interface BaseInputState {
    popupIsClosed: boolean;
}
declare abstract class BaseInput<P extends BaseInputProps, S extends BaseInputState> extends React.Component<P, S> {
    static defaultProps: {
        inline: boolean;
        localization: string;
    };
    private calendarNode;
    private inputNode;
    protected closePopup: () => void;
    protected openPopup: () => void;
    protected isPickerInFocus: () => boolean;
    protected isTriggerInFocus: () => boolean;
    protected onModeSwitch: () => void;
    protected onCalendarViewMount: (calendarNode: HTMLElement) => void;
    protected onInputViewMount: (inputNode: HTMLElement) => void;
}
export default BaseInput;
