import type { HomeAssistant } from "../types";
import type { DataEntryFlowStep } from "./data_entry_flow";
export declare const createOptionsFlow: (hass: HomeAssistant, handler: string) => Promise<DataEntryFlowStep>;
export declare const fetchOptionsFlow: (hass: HomeAssistant, flowId: string) => Promise<DataEntryFlowStep>;
export declare const handleOptionsFlowStep: (hass: HomeAssistant, flowId: string, data: Record<string, any>) => Promise<DataEntryFlowStep>;
export declare const deleteOptionsFlow: (hass: HomeAssistant, flowId: string) => Promise<unknown>;
