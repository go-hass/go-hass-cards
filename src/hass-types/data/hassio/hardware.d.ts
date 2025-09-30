import type { HomeAssistant } from "../../types";
export interface HassioHardwareAudioDevice {
    device?: string | null;
    name: string;
}
interface HassioHardwareAudioList {
    audio: {
        input: Record<string, string>;
        output: Record<string, string>;
    };
}
interface HardwareDevice {
    attributes: Record<string, string>;
    by_id: null | string;
    dev_path: string;
    name: string;
    subsystem: string;
    sysfs: string;
}
export interface HassioHardwareInfo {
    devices: HardwareDevice[];
}
export declare const fetchHassioHardwareAudio: (hass: HomeAssistant) => Promise<HassioHardwareAudioList>;
export declare const fetchHassioHardwareInfo: (hass: HomeAssistant) => Promise<HassioHardwareInfo>;
export {};
