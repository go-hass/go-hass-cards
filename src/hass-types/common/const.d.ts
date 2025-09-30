/** Constants to be used in the frontend. */
/** Domains that have a state card. */
export declare const DOMAINS_WITH_CARD: string[];
export declare const SENSOR_ENTITIES: string[];
export declare const ASSIST_ENTITIES: string[];
/** Domains that render an input element instead of a text value when displayed in a row.
 *  Those rows should then not show a cursor pointer when hovered (which would normally
 *  be the default) unless the element itself enforces it (e.g. a button). Also those elements
 *  should not act as a click target to open the more info dialog (the row name and state icon
 *  still do of course) as the click should instead e.g. activate the input field  or toggle
 *  the button that this row shows.
 */
export declare const DOMAINS_INPUT_ROW: string[];
/** States that we consider "off". */
export declare const STATES_OFF: string[];
/** Binary States */
export declare const BINARY_STATE_ON = "on";
export declare const BINARY_STATE_OFF = "off";
/** Domains where we allow toggle in Lovelace. */
export declare const DOMAINS_TOGGLE: Set<string>;
/** Domains that have a dynamic entity image / picture. */
export declare const DOMAINS_WITH_DYNAMIC_PICTURE: Set<string>;
/** Temperature units. */
export declare const UNIT_C = "\u00B0C";
export declare const UNIT_F = "\u00B0F";
/** Entity ID of the default view. */
export declare const DEFAULT_VIEW_ENTITY_ID = "group.default_view";
