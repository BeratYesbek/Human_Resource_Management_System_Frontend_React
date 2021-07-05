var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import keyboardKey from 'keyboard-key';
import isNumber from 'lodash/isNumber';
import isNil from 'lodash/isNil';
import includes from 'lodash/includes';
import * as React from 'react';
/** Do not expose this class. Instead use RangeSelectionPicker and SingleSelectionPicker. */
var BasePicker = /** @class */ (function (_super) {
    __extends(BasePicker, _super);
    function BasePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.onHoveredCellPositionChange = function (e, _a) {
            var itemPosition = _a.itemPosition;
            _this.setState({
                hoveredCellPosition: itemPosition,
            });
        };
        _this.canCalendarCatchKeyboardEvents = function () {
            if (_this.props.inline) {
                return _this.props.isPickerInFocus();
            }
            return _this.props.isTriggerInFocus();
        };
        _this.handleKeyPress = function (event) {
            if (!_this.canCalendarCatchKeyboardEvents()) {
                return;
            }
            var key = keyboardKey.getKey(event);
            switch (key) {
                case 'Enter':
                    _this.handleEnterKeyPress(event);
                    break;
                case 'Esc':
                case 'Escape':
                    _this.props.closePopup();
                    break;
                default:
                    _this.handleArrowKeyPress(event);
            }
        };
        _this.handleEnterKeyPress = function (event) {
            var key = keyboardKey.getKey(event);
            if (key === 'Enter' && _this.canCalendarCatchKeyboardEvents()) {
                event.preventDefault();
                var selectedValue = _this.buildCalendarValues()[_this.state.hoveredCellPosition];
                _this.handleChange(null, {
                    value: selectedValue,
                    itemPosition: _this.state.hoveredCellPosition,
                });
            }
        };
        _this.handleBlur = function () {
            _this.props.closePopup();
        };
        _this.handleArrowKeyPress = function (event) {
            if (!_this.canCalendarCatchKeyboardEvents()) {
                return;
            }
            var key = keyboardKey.getKey(event);
            var selectableCells = _this.getSelectableCellPositions();
            var nextSelectableCellPositionLeft = selectableCells
                .slice(0, selectableCells.indexOf(_this.state.hoveredCellPosition)).pop();
            var nextSelectableCellPositionRight = selectableCells
                .slice(selectableCells.indexOf(_this.state.hoveredCellPosition) + 1)[0];
            switch (key) {
                case 'Left':
                case 'ArrowLeft':
                    if (!isNil(nextSelectableCellPositionLeft)) {
                        _this.onHoveredCellPositionChange(null, { itemPosition: nextSelectableCellPositionLeft });
                    }
                    else {
                        if (_this.isPrevPageAvailable()) {
                            _this.switchToPrevPage(null, null, function () {
                                var selectableCellsPrevPage = _this.getSelectableCellPositions();
                                _this.onHoveredCellPositionChange(null, { itemPosition: selectableCellsPrevPage[selectableCellsPrevPage.length - 1] });
                            });
                        }
                    }
                    break;
                case 'Right':
                case 'ArrowRight':
                    if (!isNil(nextSelectableCellPositionRight)) {
                        _this.onHoveredCellPositionChange(null, { itemPosition: nextSelectableCellPositionRight });
                    }
                    else {
                        if (_this.isNextPageAvailable()) {
                            _this.switchToNextPage(null, null, function () {
                                var selectableCellsNextPage = _this.getSelectableCellPositions();
                                _this.onHoveredCellPositionChange(null, { itemPosition: selectableCellsNextPage[0] });
                            });
                        }
                    }
                    break;
                case 'Up':
                case 'ArrowUp':
                    event.preventDefault();
                    if (includes(selectableCells, _this.state.hoveredCellPosition - _this.PAGE_WIDTH)) {
                        _this.onHoveredCellPositionChange(null, { itemPosition: _this.state.hoveredCellPosition - _this.PAGE_WIDTH });
                    }
                    break;
                case 'Down':
                case 'ArrowDown':
                    event.preventDefault();
                    if (includes(selectableCells, _this.state.hoveredCellPosition + _this.PAGE_WIDTH)) {
                        _this.onHoveredCellPositionChange(null, { itemPosition: _this.state.hoveredCellPosition + _this.PAGE_WIDTH });
                    }
                    break;
                default:
                    break;
            }
        };
        _this.state = {
            hoveredCellPosition: undefined,
            date: _this.props.initializeWith.clone(),
        };
        return _this;
    }
    BasePicker.prototype.componentDidMount = function () {
        document.addEventListener('keydown', this.handleKeyPress);
    };
    BasePicker.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.handleKeyPress);
    };
    return BasePicker;
}(React.Component));
var RangeSelectionPicker = /** @class */ (function (_super) {
    __extends(RangeSelectionPicker, _super);
    function RangeSelectionPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeSelectionPicker.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var _a = this.getActiveCellsPositions(), start = _a.start, end = _a.end;
        var hoveredPos;
        if (end) {
            hoveredPos = end;
        }
        else if (start) {
            hoveredPos = start;
        }
        else {
            hoveredPos = this.getInitialDatePosition();
        }
        this.setState({
            hoveredCellPosition: hoveredPos,
        });
    };
    return RangeSelectionPicker;
}(BasePicker));
export { RangeSelectionPicker };
var SingleSelectionPicker = /** @class */ (function (_super) {
    __extends(SingleSelectionPicker, _super);
    function SingleSelectionPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleSelectionPicker.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var active = this.getActiveCellPosition();
        this.setState({
            hoveredCellPosition: isNumber(active) ? active : this.getInitialDatePosition(),
        });
    };
    return SingleSelectionPicker;
}(BasePicker));
export { SingleSelectionPicker };
