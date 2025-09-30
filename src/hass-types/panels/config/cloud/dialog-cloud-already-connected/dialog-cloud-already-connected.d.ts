import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import type { HomeAssistant } from "../../../../types";
import type { CloudAlreadyConnectedParams as CloudAlreadyConnectedDialogParams } from "./show-dialog-cloud-already-connected";
declare class DialogCloudAlreadyConnected extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _obfuscateIp;
    showDialog(params: CloudAlreadyConnectedDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _toggleObfuscateIp;
    private _logInHere;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-cloud-already-connected": DialogCloudAlreadyConnected;
    }
}
export {};
