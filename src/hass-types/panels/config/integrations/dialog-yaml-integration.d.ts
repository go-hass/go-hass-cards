import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { YamlIntegrationDialogParams } from "./show-add-integration-dialog";
import "../../../components/ha-dialog";
import "../../../components/ha-button";
export declare class DialogYamlIntegration extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: YamlIntegrationDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-yaml-integration": DialogYamlIntegration;
    }
}
