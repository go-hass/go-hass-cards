import { LitElement, nothing } from "lit";
import "../../../../../components/entity/ha-entities-picker";
import type { HomeAssistant } from "../../../../../types";
import type { LovelaceStrategyEditor } from "../../types";
import type { HomeDashboardStrategyConfig } from "../home-dashboard-strategy";
export declare class HuiHomeDashboardStrategyEditor extends LitElement implements LovelaceStrategyEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: HomeDashboardStrategyConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-home-dashboard-strategy-editor": HuiHomeDashboardStrategyEditor;
    }
}
