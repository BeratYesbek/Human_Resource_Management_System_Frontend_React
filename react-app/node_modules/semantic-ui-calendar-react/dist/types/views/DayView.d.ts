/// <reference types="react" />
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithHeaderViewProps, HeadingValueProps, SingleSelectionCalendarViewProps } from './BaseCalendarView';
export declare const DAY_CALENDAR_ROW_WIDTH = 7;
export declare const WEEKS_TO_DISPLAY = 6;
declare type DayViewProps = BaseCalendarViewProps & HeadingValueProps & SingleSelectionCalendarViewProps & CalendarWithHeaderViewProps;
declare class DayView extends BaseCalendarView<DayViewProps, any> {
    render(): JSX.Element;
}
export default DayView;
