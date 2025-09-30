import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { EntitiesCardEntityConfig } from "../../cards/types";
import type { LovelaceRowEditor } from "../../types";
export declare class HuiGenericEntityRowEditor extends LitElement implements LovelaceRowEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntitiesCardEntityConfig): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-generic-entity-row-editor": HuiGenericEntityRowEditor;
    }
}
