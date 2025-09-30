import type { HassEntity, HassEntityAttributeBase } from "home-assistant-js-websocket";
import type { EntityRegistryDisplayEntry } from "../../data/entity_registry";
import type { FrontendLocaleData } from "../../data/translation";
/**
 * Returns true if the entity is considered numeric based on the attributes it has
 * @param stateObj The entity state object
 */
export declare const isNumericState: (stateObj: HassEntity) => boolean;
export declare const isNumericFromAttributes: (attributes: HassEntityAttributeBase, numericDeviceClasses?: string[]) => boolean;
export declare const numberFormatToLocale: (localeOptions: FrontendLocaleData) => string | string[] | undefined;
/**
 * Formats a number based on the user's preference with thousands separator(s) and decimal character for better legibility.
 *
 * @param num The number to format
 * @param localeOptions The user-selected language and formatting, from `hass.locale`
 * @param options Intl.NumberFormatOptions to use
 */
export declare const formatNumber: (num: string | number, localeOptions?: FrontendLocaleData, options?: Intl.NumberFormatOptions) => string;
/**
 * Checks if the current entity state should be formatted as an integer based on the `state` and `step` attribute and returns the appropriate `Intl.NumberFormatOptions` object with `maximumFractionDigits` set
 * @param entityState The state object of the entity
 * @returns An `Intl.NumberFormatOptions` object with `maximumFractionDigits` set to 0, or `undefined`
 */
export declare const getNumberFormatOptions: (entityState?: HassEntity, entity?: EntityRegistryDisplayEntry) => Intl.NumberFormatOptions | undefined;
/**
 * Generates default options for Intl.NumberFormat
 * @param num The number to be formatted
 * @param options The Intl.NumberFormatOptions that should be included in the returned options
 */
export declare const getDefaultFormatOptions: (num: string | number, options?: Intl.NumberFormatOptions) => Intl.NumberFormatOptions;
