import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { LovelaceViewHeaderConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export declare class HuiViewHeaderSettingsEditor extends LitElement {
    hass: HomeAssistant;
    config?: LovelaceViewHeaderConfig;
    private narrow;
    private _unsubMql?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-header-settings-editor": HuiViewHeaderSettingsEditor;
    }
}
