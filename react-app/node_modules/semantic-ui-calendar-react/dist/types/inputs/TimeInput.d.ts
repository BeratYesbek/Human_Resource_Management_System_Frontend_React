/// <reference types="react" />
import BaseInput, { BaseInputProps, BaseInputState, MultimodeProps, TimeRelatedProps } from './BaseInput';
declare type CalendarMode = 'hour' | 'minute';
export declare type TimeInputProps = BaseInputProps & MultimodeProps & TimeRelatedProps;
export declare type TimeInputOnChangeData = TimeInputProps;
interface TimeInputState extends BaseInputState {
    mode: CalendarMode;
}
declare class TimeInput extends BaseInput<TimeInputProps, TimeInputState> {
    /**
     * Component responsibility:
     *  - parse time input string
     *  - switch between modes ['hour', 'minute']
     *  - handle HourPicker/MinutePicker change (format { hour: number, minute: number } into output time string)
     */
    static readonly defaultProps: {
        icon: string;
        timeFormat: string;
        disableMinute: boolean;
        inline: boolean;
        localization: string;
    };
    static readonly propTypes: {
        timeFormat: import("prop-types").Requireable<string>;
        disableMinute: import("prop-types").Requireable<boolean>;
        preserveViewMode: import("prop-types").Requireable<boolean>;
        value: import("prop-types").Validator<string>;
        onChange: import("prop-types").Validator<(...args: any[]) => any>;
        closable: import("prop-types").Requireable<boolean>;
        inline: import("prop-types").Requireable<boolean>;
        icon: import("prop-types").Requireable<string | boolean>;
        iconPosition: import("prop-types").Requireable<string>;
        onClear: import("prop-types").Requireable<(...args: any[]) => any>;
        clearable: import("prop-types").Requireable<boolean>;
        clearIcon: import("prop-types").Requireable<any>;
        popupPosition: import("prop-types").Requireable<string>;
        closeOnMouseLeave: import("prop-types").Requireable<boolean>;
        mountNode: import("prop-types").Requireable<any>;
        inlineLabel: import("prop-types").Requireable<boolean>;
        pickerWidth: import("prop-types").Requireable<string>;
        pickerStyle: import("prop-types").Requireable<object>;
        duration: import("prop-types").Requireable<number>;
        animation: import("prop-types").Requireable<string>;
        localization: import("prop-types").Requireable<string>;
        hideMobileKeyboard: import("prop-types").Requireable<boolean>;
    };
    constructor(props: any);
    render(): JSX.Element;
    private handleSelect;
    private handleSelectUndelayed;
    private switchToNextMode;
    private getPicker;
}
export default TimeInput;
