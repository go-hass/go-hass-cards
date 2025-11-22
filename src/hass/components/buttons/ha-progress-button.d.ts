import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-button";
import type { Appearance } from "../ha-button";
import "../ha-spinner";
import "../ha-svg-icon";
export declare class HaProgressButton extends LitElement {
    label?: string;
    disabled: boolean;
    progress: boolean;
    appearance: Appearance;
    iconPath?: string;
    variant: "brand" | "danger" | "neutral" | "warning" | "success";
    private _result?;
    render(): TemplateResult;
    actionSuccess(): void;
    actionError(): void;
    private _setResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-progress-button": HaProgressButton;
    }
}
