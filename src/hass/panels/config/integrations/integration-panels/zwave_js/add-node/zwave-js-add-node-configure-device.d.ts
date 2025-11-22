import { LitElement, type PropertyValues } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-form/ha-form";
export declare class ZWaveJsAddNodeConfigureDevice extends LitElement {
    hass: HomeAssistant;
    deviceName: string;
    longRangeSupported: boolean;
    private _options?;
    protected willUpdate(changedProps: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1>;
    private _getSchema;
    private _computeLabel;
    private _setOptions;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-configure-device": ZWaveJsAddNodeConfigureDevice;
    }
}
