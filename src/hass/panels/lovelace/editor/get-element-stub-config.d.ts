import type { LovelaceElementConfig } from "../elements/types";
import type { HomeAssistant } from "../../../types";
export declare const getElementStubConfig: (hass: HomeAssistant, type: string, entities: string[], entitiesFallback: string[]) => Promise<LovelaceElementConfig>;
