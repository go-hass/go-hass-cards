import type { LovelaceDashboardStrategyConfig } from "../../../../../data/lovelace/config/types";
export interface DashboardStrategyEditorDialogParams {
    config: LovelaceDashboardStrategyConfig;
    title?: string;
    saveConfig: (config: LovelaceDashboardStrategyConfig) => void;
    takeControl: () => void;
    deleteDashboard: () => Promise<boolean>;
}
export declare const loadDashboardStrategyEditorDialog: () => Promise<typeof import("./dialog-dashboard-strategy-editor")>;
export declare const showDashboardStrategyEditorDialog: (element: HTMLElement, params: DashboardStrategyEditorDialogParams) => void;
