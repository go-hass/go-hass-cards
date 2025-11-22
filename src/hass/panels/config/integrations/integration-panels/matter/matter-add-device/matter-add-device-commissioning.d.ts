import { LitElement } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-spinner";
declare class MatterAddDeviceCommissioning extends LitElement {
    hass: HomeAssistant;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-add-device-commissioning": MatterAddDeviceCommissioning;
    }
}
export {};
