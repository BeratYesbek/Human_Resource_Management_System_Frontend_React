define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function buildTimeStringWithSuffix(hour, minute, timeFormat) {
        if (timeFormat === 'ampm') {
            if (parseInt(hour, 10) < 12) {
                return convertHourTo_12_Format(hour) + ":" + minute + " am";
            }
            return convertHourTo_12_Format(hour) + ":" + minute + " pm";
        }
        if (timeFormat === 'AMPM') {
            if (parseInt(hour, 10) < 12) {
                return convertHourTo_12_Format(hour) + ":" + minute + " AM";
            }
            return convertHourTo_12_Format(hour) + ":" + minute + " PM";
        }
        return hour + ":" + minute;
    }
    exports.buildTimeStringWithSuffix = buildTimeStringWithSuffix;
    function convertHourTo_12_Format(hour) {
        if (hour === '00' || hour === '12') {
            return '12';
        }
        if (parseInt(hour, 10) < 12) {
            return hour;
        }
        var h = (parseInt(hour, 10) - 12).toString();
        if (h.length === 1) {
            return '0' + h;
        }
        return h;
    }
    function isNextPageAvailable(date, maxDate) {
        if (maxDate) {
            return maxDate.isAfter(date, 'day');
        }
        return true;
    }
    exports.isNextPageAvailable = isNextPageAvailable;
    function isPrevPageAvailable(date, minDate) {
        if (minDate) {
            return minDate.isBefore(date, 'day');
        }
        return true;
    }
    exports.isPrevPageAvailable = isPrevPageAvailable;
    function getCurrentDate(date) {
        return date.format('MMMM DD, YYYY');
    }
    exports.getCurrentDate = getCurrentDate;
});
