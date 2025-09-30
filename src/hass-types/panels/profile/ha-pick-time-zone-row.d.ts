import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-card";
import "../../components/ha-list-item";
import "../../components/ha-select";
import "../../components/ha-settings-row";
import type { HomeAssistant } from "../../types";
declare class TimeZoneRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): TemplateResult;
    private _handleFormatSelection;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-pick-time-zone-row": TimeZoneRow;
    }
}
export {};
