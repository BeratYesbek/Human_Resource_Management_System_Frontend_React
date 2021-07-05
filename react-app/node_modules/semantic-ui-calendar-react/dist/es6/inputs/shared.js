/**
 * Filter out all moments that don't have
 * all dates in month disabled.
 * @param {*} moments
 * @return An array of moments; each of these moments
 * doesn't have any selectable date in month.
 */
export function getDisabledMonths(moments) {
    if (!moments) {
        return;
    }
    var disabledMonths = [];
    var checkedMonths = [];
    var _loop_1 = function (m) {
        if (checkedMonths.indexOf(m.month()) < 0) {
            var momentsForMonth = moments.filter(function (mForMonth) { return mForMonth.month() === m.month(); });
            var momentsForMonthUniq = [];
            for (var _i = 0, momentsForMonth_1 = momentsForMonth; _i < momentsForMonth_1.length; _i++) {
                var mForMonth = momentsForMonth_1[_i];
                if (momentsForMonthUniq.indexOf(mForMonth) < 0) {
                    momentsForMonthUniq.push(mForMonth);
                }
            }
            if (momentsForMonthUniq.length === m.daysInMonth()) {
                disabledMonths.push(m);
            }
            checkedMonths.push(m);
        }
    };
    for (var _i = 0, moments_1 = moments; _i < moments_1.length; _i++) {
        var m = moments_1[_i];
        _loop_1(m);
    }
    return disabledMonths;
}
/**
 * Filter out all moments that don't have
 * all months in year disabled.
 * @param {*} moments
 * @return An array of moments; each of these moments
 * doesn't have any selectable month in year.
 */
export function getDisabledYears(moments) {
    if (!moments) {
        return;
    }
    var disabledYears = [];
    var checkedYears = [];
    var _loop_2 = function (y) {
        if (checkedYears.indexOf(y.year()) < 0) {
            var momentsForYear = getDisabledMonths(moments.filter(function (mForYear) { return mForYear.year() === y.year(); }));
            var momentsForYearUniq = [];
            for (var _i = 0, momentsForYear_1 = momentsForYear; _i < momentsForYear_1.length; _i++) {
                var mForYear = momentsForYear_1[_i];
                if (momentsForYearUniq.indexOf(mForYear) < 0) {
                    momentsForYearUniq.push(mForYear);
                }
            }
            if (momentsForYearUniq.length === 12) {
                disabledYears.push(y);
            }
            checkedYears.push(y);
        }
    };
    for (var _i = 0, moments_2 = moments; _i < moments_2.length; _i++) {
        var y = moments_2[_i];
        _loop_2(y);
    }
    return disabledYears;
}
