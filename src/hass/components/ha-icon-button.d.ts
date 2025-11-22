import "@material/mwc-icon-button";
import type { IconButton } from "@material/mwc-icon-button";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-svg-icon";
export declare class HaIconButton extends LitElement {
    disabled: boolean;
    path?: string;
    label?: string;
    ariaHasPopup: IconButton["ariaHasPopup"];
    hideTitle: boolean;
    private _button?;
    focus(): void;
    static shadowRootOptions: ShadowRootInit;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button": HaIconButton;
    }
}
