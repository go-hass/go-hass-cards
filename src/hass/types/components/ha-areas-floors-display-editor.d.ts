import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-expansion-panel";
import "./ha-floor-icon";
import "./ha-items-display-editor";
import "./ha-svg-icon";
import "./ha-textfield";
export interface AreasFloorsDisplayValue {
    areas_display?: {
        hidden?: string[];
        order?: string[];
    };
    floors_display?: {
        order?: string[];
    };
}
export declare class HaAreasFloorsDisplayEditor extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: AreasFloorsDisplayValue;
    helper?: string;
    disabled: boolean;
    required: boolean;
    actionsRenderer?: () => TemplateResult<1> | typeof nothing;
    showNavigationButton: boolean;
    protected render(): TemplateResult;
    private _groupedAreasItems;
    private _sortedFloors;
    private _floorMoved;
    private _areaDisplayChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-areas-floors-display-editor": HaAreasFloorsDisplayEditor;
    }
}
