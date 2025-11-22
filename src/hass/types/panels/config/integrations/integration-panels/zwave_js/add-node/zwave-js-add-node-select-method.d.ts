import { LitElement } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-md-list";
import "../../../../../../components/ha-md-list-item";
import "../../../../../../components/ha-alert";
import "../../../../../../components/ha-icon-next";
export declare class ZWaveJsAddNodeSelectMethod extends LitElement {
    hass: HomeAssistant;
    hideQrWebcam: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _selectMethod;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-select-method": ZWaveJsAddNodeSelectMethod;
    }
    interface HASSDomEvents {
        "z-wave-method-selected": {
            method: "qr_code_webcam" | "qr_code_manual" | "search_device";
        };
    }
}
