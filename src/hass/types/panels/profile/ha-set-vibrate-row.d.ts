import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-settings-row";
import "../../components/ha-switch";
import type { HomeAssistant } from "../../types";
declare class HaSetVibrateRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): TemplateResult;
    private _checkedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-set-vibrate-row": HaSetVibrateRow;
    }
}
export {};
