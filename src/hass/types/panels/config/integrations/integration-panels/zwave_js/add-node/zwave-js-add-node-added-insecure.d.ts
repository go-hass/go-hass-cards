import "@home-assistant/webawesome/dist/components/animation/animation";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-alert";
import "../../../../../../components/ha-svg-icon";
export declare class ZWaveJsAddNodeFinished extends LitElement {
    hass: HomeAssistant;
    deviceName?: string;
    reason?: any;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-added-insecure": ZWaveJsAddNodeFinished;
    }
}
