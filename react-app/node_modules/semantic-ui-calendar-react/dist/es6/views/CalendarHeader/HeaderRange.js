import * as React from 'react';
import { Table } from 'semantic-ui-react';
var cellStyle = {
    border: 'none',
};
function HeaderRange(props) {
    var content = props.content;
    return (React.createElement(Table.Row, null,
        React.createElement(Table.HeaderCell, { style: cellStyle, colSpan: '7' }, content)));
}
export default HeaderRange;
