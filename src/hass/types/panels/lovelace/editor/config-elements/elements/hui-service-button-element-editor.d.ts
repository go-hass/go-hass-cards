import { LitElement, nothing } from "lit";
import "../../../../../components/ha-form/ha-form";
import "../../../../../components/ha-service-control";
import type { HomeAssistant } from "../../../../../types";
import type { ServiceButtonElementConfig } from "../../../elements/types";
import type { LovelacePictureElementEditor } from "../../../types";
export declare class HuiServiceButtonElementEditor extends LitElement implements LovelacePictureElementEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ServiceButtonElementConfig): void;
    private _serviceData;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _serviceDataChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-service-button-element-editor": HuiServiceButtonElementEditor;
    }
}
