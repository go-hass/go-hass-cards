import { LitElement } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import { InclusionStrategy } from "../../../../../../data/zwave_js";
import "../../../../../../components/ha-form/ha-form";
export declare class ZWaveJsAddNodeSelectMethod extends LitElement {
    hass: HomeAssistant;
    _inclusionStrategy?: InclusionStrategy;
    private _getSchema;
    render(): import("lit-html").TemplateResult<1>;
    private _computeLabel;
    private _selectStrategy;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-select-security-strategy": ZWaveJsAddNodeSelectMethod;
    }
    interface HASSDomEvents {
        "z-wave-strategy-selected": {
            strategy: InclusionStrategy;
        };
    }
}
