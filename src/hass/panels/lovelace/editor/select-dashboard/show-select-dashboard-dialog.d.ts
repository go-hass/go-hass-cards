import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { LovelaceDashboard } from "../../../../data/lovelace/dashboard";
export interface SelectDashboardDialogParams {
    lovelaceConfig: LovelaceConfig;
    dashboards?: LovelaceDashboard[];
    urlPath?: string | null;
    header?: string;
    actionLabel?: string;
    dashboardSelectedCallback: (urlPath: string | null) => any;
}
export declare const showSelectDashboardDialog: (element: HTMLElement, selectViewDialogParams: SelectDashboardDialogParams) => void;
