/// <reference types="react" />
import * as PropTypes from 'prop-types';
import BaseInput, { BaseInputProps, BaseInputState, DateRelatedProps, DisableValuesProps, MinMaxValueProps, MultimodeProps, TimeRelatedProps, MarkedValuesProps } from './BaseInput';
declare type CalendarMode = 'year' | 'month' | 'day' | 'hour' | 'minute';
export interface DateTimeInputProps extends BaseInputProps, DateRelatedProps, TimeRelatedProps, MultimodeProps, DisableValuesProps, MarkedValuesProps, MinMaxValueProps {
    startMode?: 'year' | 'month' | 'day';
    /** Date and time divider. */
    divider?: string;
    /** Preserve last mode (day, hour, minute) each time user opens dialog. */
    preserveViewMode?: boolean;
    /** Datetime formatting string. */
    dateTimeFormat?: string;
    /** If true, minutes picker won't be shown after picking the hour. Default: false */
    disableMinute?: boolean;
}
export declare type DateTimeInputOnChangeData = DateTimeInputProps;
interface DateTimeInputState extends BaseInputState {
    mode: CalendarMode;
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;
}
declare class DateTimeInput extends BaseInput<DateTimeInputProps, DateTimeInputState> {
    /**
     * Component responsibility:
     *  - parse input value
     *  - handle underlying picker change
     */
    static readonly defaultProps: {
        dateFormat: string;
        timeFormat: string;
        startMode: string;
        divider: string;
        icon: string;
        preserveViewMode: boolean;
        disableMinute: boolean;
        inline: boolean;
        localization: string;
    };
    static readonly propTypes: {
        startMode: PropTypes.Requireable<string>;
        /** Date and time divider. */
        divider: PropTypes.Requireable<string>;
        /** Datetime formatting string. */
        dateTimeFormat: PropTypes.Requireable<string>;
        maxDate: PropTypes.Requireable<string | {}>;
        minDate: PropTypes.Requireable<string | {}>;
        marked: PropTypes.Requireable<{}[]>;
        markColor: PropTypes.Requireable<string>;
        disable: PropTypes.Requireable<string | {} | {}[]>;
        preserveViewMode: PropTypes.Requireable<boolean>;
        timeFormat: PropTypes.Requireable<string>;
        disableMinute: PropTypes.Requireable<boolean>;
        dateFormat: PropTypes.Requireable<string>;
        initialDate: PropTypes.Requireable<string | {}>;
        value: PropTypes.Validator<string>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
        closable: PropTypes.Requireable<boolean>;
        inline: PropTypes.Requireable<boolean>;
        icon: PropTypes.Requireable<string | boolean>;
        iconPosition: PropTypes.Requireable<string>;
        onClear: PropTypes.Requireable<(...args: any[]) => any>;
        clearable: PropTypes.Requireable<boolean>;
        clearIcon: PropTypes.Requireable<any>;
        popupPosition: PropTypes.Requireable<string>;
        closeOnMouseLeave: PropTypes.Requireable<boolean>;
        mountNode: PropTypes.Requireable<any>;
        inlineLabel: PropTypes.Requireable<boolean>;
        pickerWidth: PropTypes.Requireable<string>;
        pickerStyle: PropTypes.Requireable<object>;
        duration: PropTypes.Requireable<number>;
        animation: PropTypes.Requireable<string>;
        localization: PropTypes.Requireable<string>;
        hideMobileKeyboard: PropTypes.Requireable<boolean>;
    };
    constructor(props: DateTimeInputProps);
    componentDidUpdate: (prevProps: DateTimeInputProps) => void;
    render(): JSX.Element;
    private parseInternalValue;
    private getDateTimeFormat;
    private getPicker;
    private switchToNextModeUndelayed;
    private switchToNextMode;
    private switchToPrevModeUndelayed;
    private switchToPrevMode;
    private handleSelect;
    private onFocus;
    private handleSelectUndelayed;
    /** Keeps internal state in sync with input field value. */
    private onInputValueChange;
}
export default DateTimeInput;
