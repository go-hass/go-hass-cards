import type { HomeAssistant } from "../types";
interface SystemCheckValueDateObject {
    type: "date";
    value: string;
}
interface SystemCheckValueErrorObject {
    type: "failed";
    error: string;
    more_info?: string;
}
interface SystemCheckValuePendingObject {
    type: "pending";
}
export type SystemCheckValueObject = SystemCheckValueDateObject | SystemCheckValueErrorObject | SystemCheckValuePendingObject;
export type SystemCheckValue = string | number | boolean | SystemCheckValueObject;
export type SystemHealthInfo = Partial<{
    homeassistant: {
        info: {
            version: string;
            installation_type: string;
            dev: boolean;
            hassio: boolean;
            docker: boolean;
            container_arch: string;
            user: string;
            virtualenv: boolean;
            python_version: string;
            os_name: string;
            os_version: string;
            arch: string;
            timezone: string;
            config_dir: string;
        };
    };
    [domain: string]: {
        manage_url?: string;
        info: Record<string, SystemCheckValue>;
    };
}>;
export declare const subscribeSystemHealthInfo: (hass: HomeAssistant, callback: (info: SystemHealthInfo | undefined) => void) => Promise<() => Promise<void>>;
export {};
