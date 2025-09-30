import type { HomeAssistant } from "../../types";
export interface SupervisorApiCallOptions {
    method?: "get" | "post" | "delete";
    data?: Record<string, any>;
    timeout?: number;
}
export declare const supervisorApiCall: <T>(hass: HomeAssistant, endpoint: string, options?: SupervisorApiCallOptions) => Promise<T>;
