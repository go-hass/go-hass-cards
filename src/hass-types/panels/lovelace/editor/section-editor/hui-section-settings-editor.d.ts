import { LitElement } from "lit";
import "../../../../components/ha-form/ha-form";
import type { LovelaceSectionRawConfig } from "../../../../data/lovelace/config/section";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export declare class HuiDialogEditSection extends LitElement {
    hass: HomeAssistant;
    config: LovelaceSectionRawConfig;
    viewConfig: LovelaceViewConfig;
    private _schema;
    render(): import("lit-html").TemplateResult<1>;
    private _computeLabel;
    private _computeHelper;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section-settings-editor": HuiDialogEditSection;
    }
}
