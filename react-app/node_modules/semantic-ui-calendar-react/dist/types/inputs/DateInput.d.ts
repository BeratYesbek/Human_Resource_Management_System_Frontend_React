/// <reference types="react" />
import * as PropTypes from 'prop-types';
import BaseInput, { BaseInputProps, BaseInputState, DateRelatedProps, DisableValuesProps, EnableValuesProps, MinMaxValueProps, MultimodeProps, MarkedValuesProps } from './BaseInput';
declare type CalendarMode = 'year' | 'month' | 'day';
export interface DateInputProps extends BaseInputProps, DateRelatedProps, MultimodeProps, DisableValuesProps, EnableValuesProps, MarkedValuesProps, MinMaxValueProps {
    /** Display mode to start. */
    startMode?: CalendarMode;
}
export declare type DateInputOnChangeData = DateInputProps;
interface DateInputState extends BaseInputState {
    mode: CalendarMode;
    year: number;
    month: number;
    date: number;
}
declare class DateInput extends BaseInput<DateInputProps, DateInputState> {
    /**
     * Component responsibility:
     *  - parse input value
     *  - handle underlying picker change
     */
    static readonly defaultProps: {
        dateFormat: string;
        startMode: string;
        preserveViewMode: boolean;
        icon: string;
        inline: boolean;
        localization: string;
    };
    static readonly propTypes: {
        /** Display mode to start. */
        startMode: PropTypes.Requireable<string>;
        maxDate: PropTypes.Requireable<string | {}>;
        minDate: PropTypes.Requireable<string | {}>;
        marked: PropTypes.Requireable<{}[]>;
        markColor: PropTypes.Requireable<string>;
        enable: PropTypes.Requireable<string | {} | {}[]>;
        disable: PropTypes.Requireable<string | {} | {}[]>;
        preserveViewMode: PropTypes.Requireable<boolean>;
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
    constructor(props: DateInputProps);
    componentDidUpdate: (prevProps: DateInputProps) => void;
    render(): JSX.Element;
    private parseInternalValue;
    private getPicker;
    private switchToNextModeUndelayed;
    private switchToNextMode;
    private switchToPrevModeUndelayed;
    private switchToPrevMode;
    private onFocus;
    private handleSelect;
    /** Keeps internal state in sync with input field value. */
    private onInputValueChange;
}
export default DateInput;
