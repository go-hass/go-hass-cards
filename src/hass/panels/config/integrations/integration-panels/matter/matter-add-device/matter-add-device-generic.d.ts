import { LitElement } from "lit";
import "../../../../../../components/ha-icon-next";
import "../../../../../../components/ha-md-list-item";
import "../../../../../../components/ha-md-list";
import "../../../../../../components/ha-textfield";
import type { HomeAssistant } from "../../../../../../types";
declare class MatterAddDeviceGeneric extends LitElement {
    hass: HomeAssistant;
    private _code;
    render(): import("lit-html").TemplateResult<1>;
    private _onCodeChanged;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-add-device-generic": MatterAddDeviceGeneric;
    }
}
export {};
