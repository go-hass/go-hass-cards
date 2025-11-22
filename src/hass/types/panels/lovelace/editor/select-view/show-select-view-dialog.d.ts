import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { LovelaceDashboard } from "../../../../data/lovelace/dashboard";
export interface SelectViewDialogParams {
    lovelaceConfig: LovelaceConfig;
    allowDashboardChange: boolean;
    includeStrategyViews?: boolean;
    dashboards?: LovelaceDashboard[];
    urlPath?: string | null;
    header?: string;
    actionLabel?: string;
    viewSelectedCallback: (urlPath: string | null, config: LovelaceConfig, view: number) => void;
}
export declare const showSelectViewDialog: (element: HTMLElement, selectViewDialogParams: SelectViewDialogParams) => void;
