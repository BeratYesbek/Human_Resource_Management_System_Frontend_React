import { Moment } from 'moment';
import * as React from 'react';
import { RangeIndexes } from '../../views/BaseCalendarView';
import { BasePickerOnChangeData, BasePickerProps, MinMaxValueProps, ProvideHeadingValue, RangeSelectionPicker, MarkedValuesProps } from '../BasePicker';
interface DatesRangePickerProps extends BasePickerProps, MinMaxValueProps, MarkedValuesProps {
    /** Moment date formatting string. */
    dateFormat: string;
    /** Start of currently selected dates range. */
    start: Moment;
    /** End of currently selected dates range. */
    end: Moment;
    /** Allow end date to be the same as start date. */
    allowSameEndDate: boolean;
}
export declare type DatesRangePickerOnChangeData = BasePickerOnChangeData;
declare class DatesRangePicker extends RangeSelectionPicker<DatesRangePickerProps> implements ProvideHeadingValue {
    constructor(props: any);
    render(): JSX.Element;
    getCurrentDate(): string;
    protected getMarkedPositions(): number[];
    protected buildCalendarValues(): string[];
    protected getSelectableCellPositions(): number[];
    protected getInitialDatePosition(): number;
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
}
export default DatesRangePicker;
