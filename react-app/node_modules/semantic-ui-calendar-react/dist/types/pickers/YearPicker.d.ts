import * as React from 'react';
import { BasePickerOnChangeData, BasePickerProps, DisableValuesProps, EnableValuesProps, MinMaxValueProps, SingleSelectionPicker } from './BasePicker';
declare type YearPickerProps = BasePickerProps & DisableValuesProps & EnableValuesProps & MinMaxValueProps;
export interface YearPickerOnChangeData extends BasePickerOnChangeData {
    value: {
        year: number;
    };
}
declare class YearPicker extends SingleSelectionPicker<YearPickerProps> {
    constructor(props: any);
    render(): JSX.Element;
    protected buildCalendarValues(): string[];
    protected getInitialDatePosition(): number;
    protected getActiveCellPosition(): number;
    protected getSelectableCellPositions(): number[];
    protected getDisabledPositions(): number[];
    protected isNextPageAvailable(): boolean;
    protected isPrevPageAvailable(): boolean;
    protected handleChange: (e: React.SyntheticEvent<HTMLElement, Event>, { value }: {
        value: any;
    }) => void;
    protected switchToNextPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
    protected switchToPrevPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
}
export default YearPicker;
