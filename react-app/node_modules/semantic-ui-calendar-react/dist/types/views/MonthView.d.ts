/// <reference types="react" />
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithOptionalHeaderViewProps, SingleSelectionCalendarViewProps } from './BaseCalendarView';
export declare const MONTH_CALENDAR_ROW_WIDTH = 3;
declare type MonthViewProps = BaseCalendarViewProps & SingleSelectionCalendarViewProps & CalendarWithOptionalHeaderViewProps;
declare class MonthView extends BaseCalendarView<MonthViewProps, any> {
    render(): JSX.Element;
}
export default MonthView;
