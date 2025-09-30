import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entities-picker";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { CalendarCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiCalendarCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: CalendarCardConfig): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _entitiesChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-calendar-card-editor": HuiCalendarCardEditor;
    }
}
