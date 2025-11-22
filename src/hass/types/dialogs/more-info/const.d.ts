import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../../types";
export declare const DOMAINS_NO_INFO: string[];
/**
 * Entity domains that should be editable *if* they have an id present;
 * {@see shouldShowEditIcon}.
 * */
export declare const EDITABLE_DOMAINS_WITH_ID: string[];
/**
 * Entity Domains that should always be editable; {@see shouldShowEditIcon}.
 * */
export declare const EDITABLE_DOMAINS_WITH_UNIQUE_ID: string[];
/** Domains with with new more info design. */
export declare const DOMAINS_WITH_NEW_MORE_INFO: string[];
/** Domains with full height more info dialog */
export declare const DOMAINS_FULL_HEIGHT_MORE_INFO: string[];
/** Domains with separate more info dialog. */
export declare const DOMAINS_WITH_MORE_INFO: string[];
/** Domains that do not show the default more info dialog content (e.g. the attribute section)
 *  and do not have a separate more info (so not in DOMAINS_WITH_MORE_INFO). */
export declare const DOMAINS_HIDE_DEFAULT_MORE_INFO: string[];
/** Domains that should have the history hidden in the more info dialog. */
export declare const DOMAINS_MORE_INFO_NO_HISTORY: string[];
export declare const computeShowHistoryComponent: (hass: HomeAssistant, entityId: string) => boolean;
export declare const computeShowLogBookComponent: (hass: HomeAssistant, entityId: string, sensorNumericalDeviceClasses?: string[]) => boolean;
export declare const computeShowNewMoreInfo: (stateObj: HassEntity) => boolean;
