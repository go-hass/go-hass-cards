declare global {
    interface HASSDomEvents {
    }
}
export type ValidHassDomEvent = keyof HASSDomEvents;
export interface HASSDomEvent<T> extends Event {
    detail: T;
}
/**
 * Dispatches a custom event with an optional detail value.
 *
 * @param {string} type Name of event type.
 * @param {*=} detail Detail value containing event-specific
 *   payload.
 * @param {{ bubbles: (boolean|undefined),
 *           cancelable: (boolean|undefined),
 *           composed: (boolean|undefined) }=}
 *  options Object specifying options.  These may include:
 *  `bubbles` (boolean, defaults to `true`),
 *  `cancelable` (boolean, defaults to false), and
 *  `node` on which to fire the event (HTMLElement, defaults to `this`).
 * @return {Event} The new event that was fired.
 */
export declare const fireEvent: <HassEvent extends ValidHassDomEvent>(node: HTMLElement | Window, type: HassEvent, detail?: HASSDomEvents[HassEvent], options?: {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}) => Event;
