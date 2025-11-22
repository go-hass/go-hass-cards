import type { HomeAssistant } from "../../../../types";
import type { LovelaceHeaderFooterConfig } from "../../header-footer/types";
export declare const getHeaderFooterStubConfig: (hass: HomeAssistant, type: LovelaceHeaderFooterConfig["type"], entities: string[], entitiesFallback: string[]) => Promise<LovelaceHeaderFooterConfig>;
