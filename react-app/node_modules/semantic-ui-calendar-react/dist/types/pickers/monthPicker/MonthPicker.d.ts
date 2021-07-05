import * as React from 'react';
import { BasePickerOnChangeData, BasePickerProps, DisableValuesProps, EnableValuesProps, MinMaxValueProps, OptionalHeaderProps, ProvideHeadingValue, SingleSelectionPicker } from '../BasePicker';
declare type MonthPickerProps = BasePickerProps & DisableValuesProps & EnableValuesProps & MinMaxValueProps & OptionalHeaderProps;
export interface MonthPickerOnChangeData extends BasePickerOnChangeData {
    value: {
        year: number;
        month: number;
    };
}
declare class MonthPicker extends SingleSelectionPicker<MonthPickerProps> implements ProvideHeadingValue {
    constructor(props: any);
    render(): JSX.Element;
    getCurrentDate(): string;
    protected buildCalendarValues(): string[];
    protected getSelectableCellPositions(): number[];
    protected getInitialDatePosition(): number;
    protected getActiveCellPosition(): number;
    protected getDisabledPositions(): number[];
    protected isNextPageAvailable(): boolean;
    protected isPrevPageAvailable(): boolean;
    protected handleChange: (e: React.SyntheticEvent<HTMLElement, Event>, { value }: {
        value: any;
    }) => void;
    protected switchToNextPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
    protected switchToPrevPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
}
export default MonthPicker;
