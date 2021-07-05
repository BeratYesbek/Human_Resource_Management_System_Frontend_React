import { Moment } from 'moment';
import * as React from 'react';
import { RangeIndexes } from '../../views/BaseCalendarView';
import { BasePickerOnChangeData, BasePickerProps, MinMaxValueProps, ProvideHeadingValue, RangeSelectionPicker } from '../BasePicker';
interface MonthRangePickerProps extends BasePickerProps, MinMaxValueProps {
    /** Moment date formatting string. */
    dateFormat: string;
    /** Start of currently selected dates range. */
    start: Moment;
    /** End of currently selected dates range. */
    end: Moment;
}
export declare type MonthRangePickerOnChangeData = BasePickerOnChangeData;
declare class MonthRangePicker extends RangeSelectionPicker<MonthRangePickerProps> implements ProvideHeadingValue {
    constructor(props: any);
    render(): JSX.Element;
    getCurrentDate(): string;
    protected buildCalendarValues(): string[];
    protected getSelectableCellPositions(): number[];
    protected getActiveCellsPositions(): RangeIndexes;
    protected getDisabledPositions(): number[];
    protected isNextPageAvailable(): boolean;
    protected isPrevPageAvailable(): boolean;
    protected getSelectedRange(): string;
    protected handleChange: (e: React.SyntheticEvent<HTMLElement, Event>, { itemPosition }: {
        itemPosition: any;
    }) => void;
    protected switchToNextPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
    protected switchToPrevPage: (e: React.SyntheticEvent<HTMLElement, Event>, data: any, callback: () => void) => void;
    protected getInitialDatePosition: () => number;
}
export default MonthRangePicker;
