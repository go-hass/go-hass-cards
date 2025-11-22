import type { LovelaceConfig } from "../../../data/lovelace/config/types";
export interface NewDashboardDialogParams {
    selectConfig: (config: LovelaceConfig | undefined) => any;
}
export declare const loadNewDashboardDialog: () => Promise<typeof import("./dialog-new-dashboard")>;
export declare const showNewDashboardDialog: (element: HTMLElement, newDashboardDialogParams: NewDashboardDialogParams) => void;
