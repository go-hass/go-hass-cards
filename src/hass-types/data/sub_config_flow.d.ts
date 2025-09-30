import type { HomeAssistant } from "../types";
import type { DataEntryFlowStep } from "./data_entry_flow";
export declare const createSubConfigFlow: (hass: HomeAssistant, configEntryId: string, subFlowType: string, subentry_id?: string) => Promise<DataEntryFlowStep>;
export declare const fetchSubConfigFlow: (hass: HomeAssistant, flowId: string) => Promise<DataEntryFlowStep>;
export declare const handleSubConfigFlowStep: (hass: HomeAssistant, flowId: string, data: Record<string, any>) => Promise<DataEntryFlowStep>;
export declare const deleteSubConfigFlow: (hass: HomeAssistant, flowId: string) => Promise<unknown>;
