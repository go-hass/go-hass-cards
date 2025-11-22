import type { HassConfig, HassEntity } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../data/translation";
import type { HomeAssistant } from "../../types";
import { type EntityNameItem, type EntityNameOptions } from "../entity/compute_entity_name_display";
import type { LocalizeFunc } from "./localize";
export type FormatEntityStateFunc = (stateObj: HassEntity, state?: string) => string;
export type FormatEntityAttributeValueFunc = (stateObj: HassEntity, attribute: string, value?: any) => string;
export type FormatEntityAttributeNameFunc = (stateObj: HassEntity, attribute: string) => string;
export type EntityNameType = "entity" | "device" | "area" | "floor";
export type FormatEntityNameFunc = (stateObj: HassEntity, name: EntityNameItem | EntityNameItem[], options?: EntityNameOptions) => string;
export declare const computeFormatFunctions: (localize: LocalizeFunc, locale: FrontendLocaleData, config: HassConfig, entities: HomeAssistant["entities"], devices: HomeAssistant["devices"], areas: HomeAssistant["areas"], floors: HomeAssistant["floors"], sensorNumericDeviceClasses: string[]) => Promise<{
    formatEntityState: FormatEntityStateFunc;
    formatEntityAttributeValue: FormatEntityAttributeValueFunc;
    formatEntityAttributeName: FormatEntityAttributeNameFunc;
    formatEntityName: FormatEntityNameFunc;
}>;
