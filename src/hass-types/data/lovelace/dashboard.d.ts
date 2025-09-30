import type { HomeAssistant } from "../../types";
export type LovelaceDashboard = LovelaceYamlDashboard | LovelaceStorageDashboard;
interface LovelaceGenericDashboard {
    id: string;
    url_path: string;
    require_admin: boolean;
    show_in_sidebar: boolean;
    icon?: string;
    title: string;
}
export interface LovelaceYamlDashboard extends LovelaceGenericDashboard {
    mode: "yaml";
    filename: string;
}
export interface LovelaceStorageDashboard extends LovelaceGenericDashboard {
    mode: "storage";
}
export interface LovelaceDashboardMutableParams {
    require_admin: boolean;
    show_in_sidebar: boolean;
    icon?: string;
    title: string;
}
export interface LovelaceDashboardCreateParams extends LovelaceDashboardMutableParams {
    url_path: string;
    mode: "storage";
}
export declare const fetchDashboards: (hass: HomeAssistant) => Promise<LovelaceDashboard[]>;
export declare const createDashboard: (hass: HomeAssistant, values: LovelaceDashboardCreateParams) => Promise<LovelaceDashboard>;
export declare const updateDashboard: (hass: HomeAssistant, id: string, updates: Partial<LovelaceDashboardMutableParams>) => Promise<LovelaceDashboard>;
export declare const deleteDashboard: (hass: HomeAssistant, id: string) => Promise<unknown>;
export {};
