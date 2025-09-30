import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import type { EnergyValidationIssue } from "../../../../data/energy";
import type { HomeAssistant } from "../../../../types";
declare class EnergyValidationMessage extends LitElement {
    hass: HomeAssistant;
    issues: EnergyValidationIssue[];
    render(): typeof nothing | import("lit-html").TemplateResult<1>[];
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-validation-result": EnergyValidationMessage;
    }
}
export {};
