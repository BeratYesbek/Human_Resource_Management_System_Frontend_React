import * as React from 'react';
import { BasePickerOnChangeData, BasePickerProps, DisableValuesProps, MinMaxValueProps, OptionalHeaderProps, ProvideHeadingValue, SingleSelectionPicker, TimeFormat, TimePickerProps } from '../BasePicker';
declare type MinutePickerProps = BasePickerProps & MinMaxValueProps & DisableValuesProps & TimePickerProps & OptionalHeaderProps;
export interface MinutePickerOnChangeData extends BasePickerOnChangeData {
    value: {
        year: number;
        month: number;
        date: number;
        hour: number;
        minute: number;
    };
}
declare class MinutePicker extends SingleSelectionPicker<MinutePickerProps> implements ProvideHeadingValue {
    static readonly defaultProps: {
        timeFormat: TimeFormat;
    };
    constructor(props: any);
    render(): JSX.Element;
    getCurrentDate(): string;
    protected buildCalendarValues(): string[];
    protected getSelectableCellPositions(): number[];
    protected getInitialDatePosition(): number;
    protected getDisabledPositions(): number[];
    protected getActiveCellPosition(): number;
    protected isNextPageAvailable(): boolean;
    protected isPrevPageAvailable(): boolean;
    protected handleChange: (e: React.SyntheticEvent<HTMLElement, Event>, { value }: {
        value: any;
    }) => void;
    protected switchToNextPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
    protected switchToPrevPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
}
export default MinutePicker;
