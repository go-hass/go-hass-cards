import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-assist-pipeline-picker";
import "../../../components/ha-help-tooltip";
import "../../../components/ha-list-item";
import "../../../components/ha-navigation-picker";
import "../../../components/ha-service-control";
import type { ActionConfig } from "../../../data/lovelace/config/action";
import type { HomeAssistant } from "../../../types";
export type UiAction = Exclude<ActionConfig["action"], "fire-dom-event">;
export declare class HuiActionEditor extends LitElement {
    config?: ActionConfig;
    label?: string;
    actions?: UiAction[];
    defaultAction?: UiAction;
    tooltipText?: string;
    hass?: HomeAssistant;
    private _select;
    get _navigation_path(): string;
    get _url_path(): string;
    get _service(): string;
    private _serviceAction;
    protected updated(changedProperties: PropertyValues<typeof this>): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _actionPicked;
    private _valueChanged;
    private _formValueChanged;
    private _computeFormLabel;
    private _serviceValueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-action-editor": HuiActionEditor;
    }
}
