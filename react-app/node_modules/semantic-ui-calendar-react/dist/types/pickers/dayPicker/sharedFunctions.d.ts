import { Moment } from 'moment';
/** Build days to fill page. */
export declare function buildDays(date: Moment, daysOnPage: number): string[];
/** Return dates from ends of months.
 *
 * On one datepicker's page not only days from current month are displayed
 * but also some days from adjacent months. This function returns days
 * that separate one month from other (last day in month).
 * Return array of one or two numbers.
 */
declare function getBrakepoints(referenceDate: Moment): number[];
export declare function getDefaultEnabledDayPositions(allDays: string[], date: Moment): number[];
/** Return day positions that shoud be displayed as disabled. */
export declare function getDisabledDays(disable: Moment[], maxDate: Moment, minDate: Moment, currentDate: Moment, daysOnPage: number, enable: Moment[]): number[];
/** Return day positions that should be displayed as marked. */
export declare function getMarkedDays(marked: Moment[], currentDate: Moment, daysOnPage: number): number[];
export declare function isNextPageAvailable(date: Moment, maxDate: Moment): boolean;
export declare function isPrevPageAvailable(date: Moment, minDate: Moment): boolean;
declare function getDaysArray(start: number, brakepoints: number[], length: number): number[];
export declare const testExport: {
    buildDays: typeof buildDays;
    getBrakepoints: typeof getBrakepoints;
    getDisabledDays: typeof getDisabledDays;
    isNextPageAvailable: typeof isNextPageAvailable;
    isPrevPageAvailable: typeof isPrevPageAvailable;
    getDaysArray: typeof getDaysArray;
    getDefaultEnabledDayPositions: typeof getDefaultEnabledDayPositions;
};
export declare function getInitialDatePosition(initDate: string, values: string[], selectablePositions: number[]): number;
export {};
