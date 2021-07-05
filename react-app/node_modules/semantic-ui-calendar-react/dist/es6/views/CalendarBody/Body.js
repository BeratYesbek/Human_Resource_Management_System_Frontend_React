import isNil from 'lodash/isNil';
import isArray from 'lodash/isArray';
import * as React from 'react';
import { Table } from 'semantic-ui-react';
import Cell from './Cell';
import { cellStyleWidth3, cellStyleWidth4, cellStyleWidth7, } from './Cell';
function Body(props) {
    var data = props.data, width = props.width, onCellClick = props.onCellClick, active = props.active, disabled = props.disabled, hovered = props.hovered, onCellHover = props.onCellHover, marked = props.marked, markColor = props.markColor;
    var content = buildRows(data, width).map(function (row, rowIndex) { return (React.createElement(Table.Row, { key: "" + rowIndex + row[0] }, row.map(function (item, itemIndex) { return (React.createElement(Cell, { style: getCellStyle(width), active: isActive(rowIndex, width, itemIndex, active), hovered: isHovered(rowIndex, width, itemIndex, hovered), disabled: isDisabled(rowIndex, width, itemIndex, disabled), marked: isMarked(rowIndex, width, itemIndex, marked), markColor: markColor, key: "" + (rowIndex * width + itemIndex), itemPosition: rowIndex * width + itemIndex, content: item, onHover: onCellHover, onClick: onCellClick })); }))); });
    return (React.createElement(Table.Body, null, content));
}
function buildRows(data, width) {
    var height = data.length / width;
    var rows = [];
    for (var i = 0; i < height; i++) {
        rows.push(data.slice((i * width), (i * width) + width));
    }
    return rows;
}
function isActive(rowIndex, rowWidth, colIndex, active) {
    if (isNil(active)) {
        return false;
    }
    if (isArray(active)) {
        for (var _i = 0, _a = active; _i < _a.length; _i++) {
            var activeIndex = _a[_i];
            if (rowIndex * rowWidth + colIndex === activeIndex) {
                return true;
            }
        }
    }
    return rowIndex * rowWidth + colIndex === active;
}
function isHovered(rowIndex, rowWidth, colIndex, hovered) {
    if (isNil(hovered)) {
        return false;
    }
    return rowIndex * rowWidth + colIndex === hovered;
}
function isDisabled(rowIndex, rowWidth, colIndex, disabledIndexes) {
    if (isNil(disabledIndexes) || disabledIndexes.length === 0) {
        return false;
    }
    for (var _i = 0, disabledIndexes_1 = disabledIndexes; _i < disabledIndexes_1.length; _i++) {
        var disabledIndex = disabledIndexes_1[_i];
        if (rowIndex * rowWidth + colIndex === disabledIndex) {
            return true;
        }
    }
    return false;
}
function getCellStyle(width) {
    switch (width) {
        case 3:
            return cellStyleWidth3;
        case 4:
            return cellStyleWidth4;
        case 7:
            return cellStyleWidth7;
        default:
            break;
    }
}
function isMarked(rowIndex, rowWidth, colIndex, markedIndexes) {
    if (isNil(markedIndexes) || markedIndexes.length === 0) {
        return false;
    }
    for (var _i = 0, markedIndexes_1 = markedIndexes; _i < markedIndexes_1.length; _i++) {
        var markedIndex = markedIndexes_1[_i];
        if (rowIndex * rowWidth + colIndex === markedIndex) {
            return true;
        }
    }
    return false;
}
export default Body;
