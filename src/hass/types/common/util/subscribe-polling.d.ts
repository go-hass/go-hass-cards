import type { HomeAssistant } from "../../types";
export declare const subscribePollingCollection: (hass: HomeAssistant, updateData: (hass: HomeAssistant) => void, interval: number) => () => void;
