import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { OriginalStatesDashboardStrategyConfig } from "../../strategies/original-states/original-states-dashboard-strategy";
import type { LovelaceStrategyEditor } from "../../strategies/types";
export declare class HuiOriginalStatesDashboardStrategyEditor extends LitElement implements LovelaceStrategyEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: OriginalStatesDashboardStrategyConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-original-states-dashboard-strategy-editor": HuiOriginalStatesDashboardStrategyEditor;
    }
}
