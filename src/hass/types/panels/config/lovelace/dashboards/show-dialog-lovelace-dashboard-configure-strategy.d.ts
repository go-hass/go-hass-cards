import type { LovelaceDashboardStrategyConfig } from "../../../../data/lovelace/config/types";
export interface LovelaceDashboardConfigureStrategyDialogParams {
    config: LovelaceDashboardStrategyConfig;
    saveConfig: (values: LovelaceDashboardStrategyConfig) => Promise<unknown>;
}
export declare const loadDashboardConfigureStrategyDialog: () => Promise<typeof import("./dialog-lovelace-dashboard-configure-strategy")>;
export declare const showDashboardConfigureStrategyDialog: (element: HTMLElement, dialogParams: LovelaceDashboardConfigureStrategyDialogParams) => void;
