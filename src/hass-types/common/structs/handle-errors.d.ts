import type { HomeAssistant } from "../../types";
export declare const handleStructError: (hass: HomeAssistant, err: Error) => {
    warnings: string[];
    errors?: string[];
};
