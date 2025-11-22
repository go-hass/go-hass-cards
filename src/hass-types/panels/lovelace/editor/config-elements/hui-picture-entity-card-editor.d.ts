import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { PictureEntityCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiPictureEntityCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: PictureEntityCardConfig): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _processData;
    private _valueChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-entity-card-editor": HuiPictureEntityCardEditor;
    }
}
