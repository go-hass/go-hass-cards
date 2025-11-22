import type { HomeAssistant } from "../types";
export declare const fileDownload: (href: string, filename?: string) => void;
export declare const downloadFileSupported: (hass: HomeAssistant) => boolean;
