import type { HomeAssistant } from "../types";
export declare const uploadFile: (hass: HomeAssistant, file: File) => Promise<any>;
export declare const removeFile: (hass: HomeAssistant, file_id: string) => Promise<unknown>;
