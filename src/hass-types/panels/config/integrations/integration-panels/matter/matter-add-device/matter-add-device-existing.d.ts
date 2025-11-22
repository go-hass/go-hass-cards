import { LitElement } from "lit";
import "../../../../../../components/ha-icon-next";
import "../../../../../../components/ha-md-list";
import "../../../../../../components/ha-md-list-item";
import type { HomeAssistant } from "../../../../../../types";
declare class MatterAddDeviceExisting extends LitElement {
    hass: HomeAssistant;
    render(): import("lit-html").TemplateResult<1>;
    private _onItemClick;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-add-device-existing": MatterAddDeviceExisting;
    }
}
export {};
