/// <reference types="react" />
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithOptionalHeaderViewProps, SingleSelectionCalendarViewProps } from './BaseCalendarView';
declare type MinuteViewProps = BaseCalendarViewProps & SingleSelectionCalendarViewProps & CalendarWithOptionalHeaderViewProps;
declare class MinuteView extends BaseCalendarView<MinuteViewProps, any> {
    render(): JSX.Element;
}
export default MinuteView;
