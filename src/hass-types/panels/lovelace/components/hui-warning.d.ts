import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-alert";
import type { HomeAssistant } from "../../../types";
import "../cards/hui-error-card";
export declare const createEntityNotFoundWarning: (hass: HomeAssistant, _entityId: string) => string;
export declare class HuiWarning extends LitElement {
    hass?: HomeAssistant;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-warning": HuiWarning;
    }
}
