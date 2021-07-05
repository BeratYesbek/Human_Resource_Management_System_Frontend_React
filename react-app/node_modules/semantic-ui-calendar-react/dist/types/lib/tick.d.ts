/** Set zero timeout.
 *
 * Sometimes we need to delay rerendering components
 * on one tick (if they are inside  `Popup` and rerendering could
 * change `Popup`'s content sizes).
 * Because it races with Popup's onclick handler.
 * `Popup` relies on it's content sizes when computing
 * should popup stay open or be closed. So we need
 * to wait until `Popup`'s onclick handler done its job.
 */
declare const tick: (leadToRerendering: any, ...args: any[]) => void;
export default tick;
