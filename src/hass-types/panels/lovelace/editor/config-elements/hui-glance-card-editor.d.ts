import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { GlanceCardConfig } from "../../cards/types";
import "../../components/hui-entity-editor";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiGlanceCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _configEntities?;
    setConfig(config: GlanceCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _entitiesChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-glance-card-editor": HuiGlanceCardEditor;
    }
}
