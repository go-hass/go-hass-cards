import { HaIconButton } from "./ha-icon-button";
export declare class HaIconButtonToggle extends HaIconButton {
    selected: boolean;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-toggle": HaIconButtonToggle;
    }
}
