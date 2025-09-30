import { LitElement } from "lit";
import "../../../../../../components/ha-icon-next";
import "../../../../../../components/ha-md-list-item";
import "../../../../../../components/ha-md-list";
import type { HomeAssistant } from "../../../../../../types";
declare class MatterAddDeviceGoogleHome extends LitElement {
    hass: HomeAssistant;
    render(): import("lit-html").TemplateResult<1>;
    private _nextStep;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-add-device-google-home": MatterAddDeviceGoogleHome;
    }
}
export {};
