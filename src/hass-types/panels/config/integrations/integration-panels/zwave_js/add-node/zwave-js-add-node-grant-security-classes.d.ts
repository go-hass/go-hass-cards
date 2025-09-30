import { LitElement } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import { SecurityClass } from "../../../../../../data/zwave_js";
import "../../../../../../components/ha-alert";
import "../../../../../../components/ha-formfield";
import "../../../../../../components/ha-checkbox";
export declare class ZWaveJsAddNodeGrantSecurityClasses extends LitElement {
    hass: HomeAssistant;
    error?: string;
    securityClassOptions: SecurityClass[];
    selectedSecurityClasses: SecurityClass[];
    render(): import("lit-html").TemplateResult<1>;
    private _handleSecurityClassChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-grant-security-classes": ZWaveJsAddNodeGrantSecurityClasses;
    }
}
