import "@home-assistant/webawesome/dist/components/button-group/button-group";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { ToggleButton } from "../types";
import "./ha-button";
import "./ha-svg-icon";
/**
 * @element ha-button-toggle-group
 *
 * @summary
 * A button-group with one active selection.
 *
 * @attr {ToggleButton[]} buttons - the button config
 * @attr {string} active - The value of the currently active button.
 * @attr {("small"|"medium")} size - The size of the buttons in the group.
 * @attr {("brand"|"neutral"|"success"|"warning"|"danger")} variant - The variant of the buttons in the group.
 *
 * @fires value-changed - Dispatched when the active button changes.
 */
export declare class HaButtonToggleGroup extends LitElement {
    buttons: ToggleButton[];
    active?: string;
    size: "small" | "medium";
    nowrap: boolean;
    fullWidth: boolean;
    variant: "brand" | "neutral" | "success" | "warning" | "danger";
    activeVariant?: "brand" | "neutral" | "success" | "warning" | "danger";
    protected render(): TemplateResult;
    private _handleClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-button-toggle-group": HaButtonToggleGroup;
    }
}
