import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { HistoryGraphCardConfig } from "../../cards/types";
import "../../components/hui-entity-editor";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiHistoryGraphCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _configEntities?;
    setConfig(config: HistoryGraphCardConfig): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _entitiesChanged;
    private _computeLabelCallback;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-history-graph-card-editor": HuiHistoryGraphCardEditor;
    }
}
