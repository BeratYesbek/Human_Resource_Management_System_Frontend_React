import * as React from 'react';
import { BasePickerOnChangeData, BasePickerProps, DisableValuesProps, MinMaxValueProps, OptionalHeaderProps, ProvideHeadingValue, SingleSelectionPicker, TimeFormat, TimePickerProps } from '../BasePicker';
declare type HourPickerProps = BasePickerProps & MinMaxValueProps & DisableValuesProps & TimePickerProps & OptionalHeaderProps;
export interface HourPickerOnChangeData extends BasePickerOnChangeData {
    value: {
        year: number;
        month: number;
        date: number;
        hour: number;
    };
}
declare class HourPicker extends SingleSelectionPicker<HourPickerProps> implements ProvideHeadingValue {
    static readonly defaultProps: {
        timeFormat: TimeFormat;
    };
    constructor(props: any);
    render(): JSX.Element;
    getCurrentDate(): string;
    protected buildCalendarValues(): string[];
    protected getSelectableCellPositions(): number[];
    protected getInitialDatePosition(): number;
    protected getActiveCellPosition(): number;
    protected isNextPageAvailable(): boolean;
    protected isPrevPageAvailable(): boolean;
    protected getDisabledPositions(): number[];
    protected handleChange: (e: React.SyntheticEvent<HTMLElement, Event>, { value }: {
        value: any;
    }) => void;
    protected switchToNextPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
    protected switchToPrevPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
}
export default HourPicker;
