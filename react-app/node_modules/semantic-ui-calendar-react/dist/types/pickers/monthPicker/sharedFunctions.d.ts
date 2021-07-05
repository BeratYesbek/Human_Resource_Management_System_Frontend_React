import moment from 'moment';
declare const buildCalendarValues: (localization?: string) => string[];
declare const getInitialDatePosition: (selectable: number[], currentDate: moment.Moment) => number;
declare const getDisabledPositions: (enable: moment.Moment[], disable: moment.Moment[], maxDate: moment.Moment, minDate: moment.Moment, currentDate: moment.Moment) => number[];
declare const isNextPageAvailable: (maxDate: moment.Moment, enable: moment.Moment[], currentDate: moment.Moment) => boolean;
declare const isPrevPageAvailable: (minDate: moment.Moment, enable: moment.Moment[], currentDate: moment.Moment) => boolean;
export { buildCalendarValues, getInitialDatePosition, getDisabledPositions, isNextPageAvailable, isPrevPageAvailable, };
