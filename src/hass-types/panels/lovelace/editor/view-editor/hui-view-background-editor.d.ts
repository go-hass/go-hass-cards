import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export declare class HuiViewBackgroundEditor extends LitElement {
    hass: HomeAssistant;
    private _config;
    set config(config: LovelaceViewConfig);
    private _localizeValueCallback;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-background-editor": HuiViewBackgroundEditor;
    }
}
