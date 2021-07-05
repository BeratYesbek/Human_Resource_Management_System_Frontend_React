import * as React from 'react';
import { BasePickerOnChangeData, BasePickerProps, DisableValuesProps, EnableValuesProps, MinMaxValueProps, MarkedValuesProps, ProvideHeadingValue, SingleSelectionPicker } from '../BasePicker';
export declare const DAYS_ON_PAGE: number;
export interface DayPickerOnChangeData extends BasePickerOnChangeData {
    value: {
        year: number;
        month: number;
        date: number;
    };
}
declare type DayPickerProps = BasePickerProps & DisableValuesProps & EnableValuesProps & MinMaxValueProps & MarkedValuesProps;
declare class DayPicker extends SingleSelectionPicker<DayPickerProps> implements ProvideHeadingValue {
    constructor(props: any);
    render(): JSX.Element;
    getCurrentDate(): string;
    protected buildCalendarValues(): string[];
    protected getSelectableCellPositions(): number[];
    protected getInitialDatePosition(): number;
    protected getActiveCellPosition(): number;
    protected getDisabledPositions(): number[];
    protected getMarkedPositions(): number[];
    protected isNextPageAvailable: () => boolean;
    protected isPrevPageAvailable: () => boolean;
    protected handleChange: (e: React.SyntheticEvent<HTMLElement, Event>, { value }: {
        value: any;
    }) => void;
    protected switchToNextPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
    protected switchToPrevPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
}
export default DayPicker;
