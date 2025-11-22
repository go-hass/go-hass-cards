import { LitElement, nothing } from "lit";
import type { BlueprintDomain, Blueprints } from "../data/blueprint";
import type { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
declare class HaBluePrintPicker extends LitElement {
    hass?: HomeAssistant;
    label?: string;
    value: string;
    domain: BlueprintDomain;
    blueprints?: Blueprints;
    disabled: boolean;
    open(): void;
    private _processedBlueprints;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected firstUpdated(changedProps: any): void;
    private _blueprintChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-blueprint-picker": HaBluePrintPicker;
    }
}
export {};
