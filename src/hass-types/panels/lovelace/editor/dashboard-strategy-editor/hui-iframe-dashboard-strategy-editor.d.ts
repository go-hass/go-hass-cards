import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { IframeDashboardStrategyConfig } from "../../strategies/iframe/iframe-dashboard-strategy";
import type { LovelaceStrategyEditor } from "../../strategies/types";
export declare class HuiIframeDashboarStrategyEditor extends LitElement implements LovelaceStrategyEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: IframeDashboardStrategyConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-iframe-dashboard-strategy-editor": HuiIframeDashboarStrategyEditor;
    }
}
