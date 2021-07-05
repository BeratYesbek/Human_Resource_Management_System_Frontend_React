/// <reference types="react" />
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithHeaderViewProps, HeadingValueProps, RangeSelectionCalendarViewProps } from './BaseCalendarView';
declare type MonthRangeViewProps = BaseCalendarViewProps & HeadingValueProps & RangeSelectionCalendarViewProps & CalendarWithHeaderViewProps;
declare class MonthRangeView extends BaseCalendarView<MonthRangeViewProps, any> {
    static defaultProps: {
        active: {
            start: any;
            end: any;
        };
    };
    render(): JSX.Element;
}
export default MonthRangeView;
