import { LitElement, nothing } from "lit";
import type { PropertyValues } from "lit";
import "../../../../components/ha-form/ha-form";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export declare class HuiViewBackgroundEditor extends LitElement {
    hass: HomeAssistant;
    private _config;
    private _resolvedImage?;
    set config(config: LovelaceViewConfig);
    private _localizeValueCallback;
    private _schema;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _backgroundData;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-background-editor": HuiViewBackgroundEditor;
    }
}
