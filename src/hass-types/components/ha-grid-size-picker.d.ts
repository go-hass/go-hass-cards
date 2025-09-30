import { LitElement } from "lit";
import "../panels/lovelace/editor/card-editor/ha-grid-layout-slider";
import "./ha-icon-button";
import type { CardGridSize } from "../panels/lovelace/common/compute-card-grid-size";
import type { HomeAssistant } from "../types";
export declare class HaGridSizeEditor extends LitElement {
    hass: HomeAssistant;
    value?: CardGridSize;
    rows: number;
    columns: number;
    rowMin?: number;
    rowMax?: number;
    columnMin?: number;
    columnMax?: number;
    isDefault?: boolean;
    step: number;
    _localValue?: CardGridSize;
    protected willUpdate(changedProperties: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _cellClick;
    private _valueChanged;
    private _reset;
    private _sliderMoved;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-grid-size-picker": HaGridSizeEditor;
    }
}
