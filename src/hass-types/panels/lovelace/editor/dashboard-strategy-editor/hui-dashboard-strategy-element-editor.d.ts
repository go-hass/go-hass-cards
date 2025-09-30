import type { LovelaceDashboardStrategyConfig } from "../../../../data/lovelace/config/types";
import type { LovelaceStrategyEditor } from "../../strategies/types";
import { HuiTypedElementEditor } from "../hui-typed-element-editor";
export declare class HuiDashboardStrategyElementEditor extends HuiTypedElementEditor<LovelaceDashboardStrategyConfig> {
    protected getConfigElement(): Promise<LovelaceStrategyEditor | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dashboard-strategy-element-editor": HuiDashboardStrategyElementEditor;
    }
}
