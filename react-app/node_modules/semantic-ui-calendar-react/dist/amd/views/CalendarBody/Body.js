var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "lodash/isNil", "lodash/isArray", "react", "semantic-ui-react", "./Cell", "./Cell"], function (require, exports, isNil_1, isArray_1, React, semantic_ui_react_1, Cell_1, Cell_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    isNil_1 = __importDefault(isNil_1);
    isArray_1 = __importDefault(isArray_1);
    React = __importStar(React);
    Cell_1 = __importDefault(Cell_1);
    function Body(props) {
        var data = props.data, width = props.width, onCellClick = props.onCellClick, active = props.active, disabled = props.disabled, hovered = props.hovered, onCellHover = props.onCellHover, marked = props.marked, markColor = props.markColor;
        var content = buildRows(data, width).map(function (row, rowIndex) { return (React.createElement(semantic_ui_react_1.Table.Row, { key: "" + rowIndex + row[0] }, row.map(function (item, itemIndex) { return (React.createElement(Cell_1.default, { style: getCellStyle(width), active: isActive(rowIndex, width, itemIndex, active), hovered: isHovered(rowIndex, width, itemIndex, hovered), disabled: isDisabled(rowIndex, width, itemIndex, disabled), marked: isMarked(rowIndex, width, itemIndex, marked), markColor: markColor, key: "" + (rowIndex * width + itemIndex), itemPosition: rowIndex * width + itemIndex, content: item, onHover: onCellHover, onClick: onCellClick })); }))); });
        return (React.createElement(semantic_ui_react_1.Table.Body, null, content));
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
        if (isNil_1.default(active)) {
            return false;
        }
        if (isArray_1.default(active)) {
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
        if (isNil_1.default(hovered)) {
            return false;
        }
        return rowIndex * rowWidth + colIndex === hovered;
    }
    function isDisabled(rowIndex, rowWidth, colIndex, disabledIndexes) {
        if (isNil_1.default(disabledIndexes) || disabledIndexes.length === 0) {
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
                return Cell_2.cellStyleWidth3;
            case 4:
                return Cell_2.cellStyleWidth4;
            case 7:
                return Cell_2.cellStyleWidth7;
            default:
                break;
        }
    }
    function isMarked(rowIndex, rowWidth, colIndex, markedIndexes) {
        if (isNil_1.default(markedIndexes) || markedIndexes.length === 0) {
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
    exports.default = Body;
});
