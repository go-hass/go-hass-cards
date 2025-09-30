import type { HassConfig, HassEntity } from "home-assistant-js-websocket";
import type { FrontendLocaleData } from "../../data/translation";
import type { HomeAssistant } from "../../types";
import type { LocalizeFunc } from "../translations/localize";
export declare const computeAttributeValueDisplay: (localize: LocalizeFunc, stateObj: HassEntity, locale: FrontendLocaleData, config: HassConfig, entities: HomeAssistant["entities"], attribute: string, value?: any) => string;
export declare const computeAttributeNameDisplay: (localize: LocalizeFunc, stateObj: HassEntity, entities: HomeAssistant["entities"], attribute: string) => string;
