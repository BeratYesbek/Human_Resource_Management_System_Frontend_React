export function buildTimeStringWithSuffix(hour, minute, timeFormat) {
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
export function isNextPageAvailable(date, maxDate) {
    if (maxDate) {
        return maxDate.isAfter(date, 'day');
    }
    return true;
}
export function isPrevPageAvailable(date, minDate) {
    if (minDate) {
        return minDate.isBefore(date, 'day');
    }
    return true;
}
export function getCurrentDate(date) {
    return date.format('MMMM DD, YYYY');
}
