/// <reference types="react" />
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithHeaderViewProps, SingleSelectionCalendarViewProps } from './BaseCalendarView';
declare type YearViewProps = BaseCalendarViewProps & SingleSelectionCalendarViewProps & CalendarWithHeaderViewProps;
declare class YearView extends BaseCalendarView<YearViewProps, any> {
    render(): JSX.Element;
}
export default YearView;
