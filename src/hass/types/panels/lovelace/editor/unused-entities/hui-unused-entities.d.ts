import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-fab";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { Lovelace } from "../../types";
import "../card-editor/hui-entity-picker-table";
export declare class HuiUnusedEntities extends LitElement {
    lovelace: Lovelace;
    hass: HomeAssistant;
    narrow: boolean;
    private _unusedEntities;
    private _selectedEntities;
    private get _config();
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _getUnusedEntities;
    private _handleSelectedChanged;
    private _addToLovelaceView;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-unused-entities": HuiUnusedEntities;
    }
}
