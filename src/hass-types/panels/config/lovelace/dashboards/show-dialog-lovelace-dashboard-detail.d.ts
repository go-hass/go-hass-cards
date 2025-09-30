import type { LovelaceDashboard, LovelaceDashboardCreateParams, LovelaceDashboardMutableParams } from "../../../../data/lovelace/dashboard";
export interface LovelaceDashboardDetailsDialogParams {
    dashboard?: LovelaceDashboard;
    urlPath?: string;
    createDashboard?: (values: LovelaceDashboardCreateParams) => Promise<unknown>;
    updateDashboard: (updates: Partial<LovelaceDashboardMutableParams>) => Promise<unknown>;
    removeDashboard: () => Promise<boolean>;
}
export declare const loadDashboardDetailDialog: () => Promise<typeof import("./dialog-lovelace-dashboard-detail")>;
export declare const showDashboardDetailDialog: (element: HTMLElement, dialogParams: LovelaceDashboardDetailsDialogParams) => void;
