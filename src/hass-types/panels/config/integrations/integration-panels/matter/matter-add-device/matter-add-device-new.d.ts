import { LitElement } from "lit";
import "../../../../../../components/ha-spinner";
import type { HomeAssistant } from "../../../../../../types";
declare class MatterAddDeviceNew extends LitElement {
    hass: HomeAssistant;
    protected firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-add-device-new": MatterAddDeviceNew;
    }
}
export {};
