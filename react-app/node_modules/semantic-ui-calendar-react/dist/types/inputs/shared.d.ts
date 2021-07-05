import { Moment } from 'moment';
/**
 * Filter out all moments that don't have
 * all dates in month disabled.
 * @param {*} moments
 * @return An array of moments; each of these moments
 * doesn't have any selectable date in month.
 */
export declare function getDisabledMonths(moments: Moment[]): Moment[];
/**
 * Filter out all moments that don't have
 * all months in year disabled.
 * @param {*} moments
 * @return An array of moments; each of these moments
 * doesn't have any selectable month in year.
 */
export declare function getDisabledYears(moments: Moment[]): Moment[];
