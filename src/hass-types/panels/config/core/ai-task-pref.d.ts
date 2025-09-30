import { LitElement } from "lit";
import "../../../components/entity/ha-entity-picker";
import "../../../components/ha-card";
import "../../../components/ha-settings-row";
import type { HomeAssistant } from "../../../types";
export declare class AITaskPref extends LitElement {
    narrow: boolean;
    hass: HomeAssistant;
    private _prefs?;
    private _gen_data_entity_id?;
    private _gen_image_entity_id?;
    protected firstUpdated(changedProps: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handlePrefChange;
    private _update;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ai-task-pref": AITaskPref;
    }
}
