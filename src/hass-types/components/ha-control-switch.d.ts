import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-svg-icon";
export declare class HaControlSwitch extends LitElement {
    disabled: boolean;
    vertical: boolean;
    reversed: boolean;
    checked: boolean;
    pathOn?: string;
    pathOff?: string;
    label?: string;
    touchAction?: string;
    private _mc?;
    protected firstUpdated(changedProperties: PropertyValues): void;
    private _toggle;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private switch;
    setupListeners(): void;
    destroyListeners(): void;
    private _keydown;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-switch": HaControlSwitch;
    }
}
