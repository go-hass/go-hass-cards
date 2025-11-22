import { LitElement } from "lit";
import "../../../../../components/ha-textfield";
import "../../../../../components/ha-select";
import "../../../../../components/ha-button";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-list-item";
import type { HomeAssistant } from "../../../../../types";
declare class ZWaveJSCustomParam extends LitElement {
    hass: HomeAssistant;
    deviceId: string;
    private _customParamNumber?;
    private _valueSize;
    private _value?;
    private _valueFormat;
    private _isLoading;
    private _error;
    protected render(): import("lit-html").TemplateResult<1>;
    private _tryParseNumber;
    private _customParamNumberChanged;
    private _customValueSizeChanged;
    private _customValueChanged;
    private _customValueFormatChanged;
    private _getCustomConfigValue;
    private _setCustomConfigValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-custom-param": ZWaveJSCustomParam;
    }
    interface HASSDomEvents {
        "new-value": {
            property: number;
            value: number;
        };
    }
}
export {};
