import { LitElement } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import type { ZWaveJSAddNodeDevice } from "./data";
import "../../../../../../components/ha-alert";
import "../../../../../../components/ha-button";
export declare class ZWaveJsAddNodeFailed extends LitElement {
    hass: HomeAssistant;
    error?: string;
    device?: ZWaveJSAddNodeDevice;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-failed": ZWaveJsAddNodeFailed;
    }
}
