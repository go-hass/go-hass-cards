import { LitElement, nothing } from "lit";
import "../../components/ha-alert";
import "../../components/ha-svg-icon";
import type { HomeAssistant } from "../../types";
declare class DialogShortcuts extends LitElement {
    hass: HomeAssistant;
    private _opened;
    showDialog(): Promise<void>;
    closeDialog(): Promise<void>;
    private _renderShortcut;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-shortcuts": DialogShortcuts;
    }
}
export {};
