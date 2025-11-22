import type { HomeAssistant } from "../types";
export type SystemLogLevel = "critical" | "error" | "warning" | "info" | "debug";
export interface LoggedError {
    name: string;
    message: [string];
    level: SystemLogLevel;
    source: [string, number];
    exception: string;
    count: number;
    timestamp: number;
    first_occurred: number;
}
export declare const fetchSystemLog: (hass: HomeAssistant) => Promise<LoggedError[]>;
export declare const getLoggedErrorIntegration: (item: LoggedError) => string;
export declare const isCustomIntegrationError: (item: LoggedError) => boolean;
