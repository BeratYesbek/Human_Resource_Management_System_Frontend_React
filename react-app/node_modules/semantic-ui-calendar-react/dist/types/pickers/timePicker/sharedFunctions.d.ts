import { Moment } from 'moment';
import { TimeFormat } from '../BasePicker';
export declare function buildTimeStringWithSuffix(hour: string, minute: string, timeFormat: TimeFormat): string;
export declare function isNextPageAvailable(date: Moment, maxDate: Moment): boolean;
export declare function isPrevPageAvailable(date: Moment, minDate: Moment): boolean;
export declare function getCurrentDate(date: Moment): string;
