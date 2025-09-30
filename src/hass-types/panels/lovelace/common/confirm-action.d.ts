import type { ConfirmationRestrictionConfig } from "../../../data/lovelace/config/action";
import type { HomeAssistant } from "../../../types";
export declare const confirmAction: (node: HTMLElement, hass: HomeAssistant, config: ConfirmationRestrictionConfig, action: string) => Promise<boolean>;
