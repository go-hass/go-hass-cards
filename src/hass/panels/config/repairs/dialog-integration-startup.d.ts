import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import "./integrations-startup-time";
declare class DialogIntegrationStartup extends LitElement {
    hass: HomeAssistant;
    private _opened;
    showDialog(): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-integration-startup": DialogIntegrationStartup;
    }
}
export {};
