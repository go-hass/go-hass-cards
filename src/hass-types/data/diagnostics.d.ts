import type { HomeAssistant } from "../types";
export interface DiagnosticInfo {
    domain: string;
    handlers: {
        config_entry: boolean;
        device: boolean;
    };
}
export declare const fetchDiagnosticHandlers: (hass: HomeAssistant) => Promise<DiagnosticInfo[]>;
export declare const fetchDiagnosticHandler: (hass: HomeAssistant, domain: string) => Promise<DiagnosticInfo>;
export declare const getConfigEntryDiagnosticsDownloadUrl: (entry_id: string) => string;
export declare const getDeviceDiagnosticsDownloadUrl: (entry_id: string, device_id: string) => string;
