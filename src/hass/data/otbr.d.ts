import type { HomeAssistant } from "../types";
export interface OTBRInfo {
    active_dataset_tlvs: string;
    border_agent_id: string;
    channel: number;
    extended_address: string;
    extended_pan_id: string;
    url: string;
}
export type OTBRInfoDict = Record<string, OTBRInfo>;
export declare const getOTBRInfo: (hass: HomeAssistant) => Promise<OTBRInfoDict>;
export declare const OTBRCreateNetwork: (hass: HomeAssistant, extended_address: string) => Promise<void>;
export declare const OTBRSetNetwork: (hass: HomeAssistant, extended_address: string, dataset_id: string) => Promise<void>;
export declare const OTBRSetChannel: (hass: HomeAssistant, extended_address: string, channel: number) => Promise<{
    delay: number;
}>;
