import type { HassConfig, HassEntity } from "home-assistant-js-websocket";
import type { EntityRegistryDisplayEntry } from "../../data/entity_registry";
import type { FrontendLocaleData } from "../../data/translation";
import type { HomeAssistant } from "../../types";
import type { LocalizeFunc } from "../translations/localize";
export declare const computeStateDisplay: (localize: LocalizeFunc, stateObj: HassEntity, locale: FrontendLocaleData, sensorNumericDeviceClasses: string[], config: HassConfig, entities: HomeAssistant["entities"], state?: string) => string;
export declare const computeStateDisplayFromEntityAttributes: (localize: LocalizeFunc, locale: FrontendLocaleData, sensorNumericDeviceClasses: string[], config: HassConfig, entity: EntityRegistryDisplayEntry | undefined, entityId: string, attributes: any, state: string) => string;
