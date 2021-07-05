/// <reference types="react" />
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithOptionalHeaderViewProps, SingleSelectionCalendarViewProps } from './BaseCalendarView';
declare type HourViewProps = BaseCalendarViewProps & SingleSelectionCalendarViewProps & CalendarWithOptionalHeaderViewProps;
declare class HourView extends BaseCalendarView<HourViewProps, any> {
    render(): JSX.Element;
}
export default HourView;
