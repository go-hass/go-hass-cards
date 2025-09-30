import { LitElement, nothing } from "lit";
import "../../../../components/ha-theme-picker";
import type { HomeAssistant } from "../../../../types";
import type { PictureCardConfig } from "../../cards/types";
import "../../components/hui-action-editor";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiPictureCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: PictureCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-card-editor": HuiPictureCardEditor;
    }
}
