define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Return true if run on Internet Explorer. */
    var checkIE = function () {
        if (typeof window === "undefined") {
            return false;
        }
        var navigator = window.navigator;
        if (!navigator) {
            return false;
        }
        if (navigator.appName === 'Microsoft Internet Explorer'
            || !!(navigator.userAgent.match(/Trident/)
                || navigator.userAgent.match(/rv:11/))) {
            return true;
        }
        return false;
    };
    exports.default = checkIE;
});
