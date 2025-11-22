import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-switch";
import type { HomeAssistant } from "../../../types";
declare class HuiEntitiesToggle extends LitElement {
    entities?: string[];
    hass?: HomeAssistant;
    private _toggleEntities?;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _callService;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entities-toggle": HuiEntitiesToggle;
    }
}
export {};
