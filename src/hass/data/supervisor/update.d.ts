import type { HomeAssistant } from "../../types";
export interface SupervisorUpdateConfig {
    add_on_backup_before_update: boolean;
    add_on_backup_retain_copies?: number;
    core_backup_before_update: boolean;
}
export declare const getSupervisorUpdateConfig: (hass: HomeAssistant) => Promise<SupervisorUpdateConfig>;
export declare const updateSupervisorUpdateConfig: (hass: HomeAssistant, config: Partial<SupervisorUpdateConfig>) => Promise<unknown>;
