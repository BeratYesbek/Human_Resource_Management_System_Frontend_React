import moment from 'moment';
import * as React from 'react';
import { Table } from 'semantic-ui-react';
/** Return array of week day names.
 *
 * getWeekDays() --> ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su']
 */
var getWeekDays = function (m, localization) {
    var weekDays = [];
    var day = localization ? m().locale(localization).startOf('week') : m().startOf('week');
    for (var i = 0; i < 7; i++) {
        weekDays[i] = day.format('dd');
        day.add(1, 'd');
    }
    return weekDays;
};
var cellStyle = {
    border: 'none',
    borderBottom: '1px solid rgba(34,36,38,.1)',
};
var getWeekDayCells = function (m, localization) { return getWeekDays(m, localization).map(function (weekDay) { return (React.createElement(Table.HeaderCell, { key: weekDay, style: cellStyle, colSpan: '1' }, weekDay)); }); };
function HeaderWeeks(props) {
    var localization = props.localization;
    return (React.createElement(Table.Row, null, getWeekDayCells(moment, localization)));
}
export default HeaderWeeks;
