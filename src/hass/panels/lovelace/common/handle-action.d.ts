import type { ActionConfig } from "../../../data/lovelace/config/action";
import type { HomeAssistant } from "../../../types";
declare global {
    interface HASSDomEvents {
        "ll-custom": ActionConfig;
    }
}
export interface ActionConfigParams {
    entity?: string;
    camera_image?: string;
    image_entity?: string;
    hold_action?: ActionConfig;
    tap_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
export declare const handleAction: (node: HTMLElement, hass: HomeAssistant, config: ActionConfigParams, action: string) => Promise<void>;
