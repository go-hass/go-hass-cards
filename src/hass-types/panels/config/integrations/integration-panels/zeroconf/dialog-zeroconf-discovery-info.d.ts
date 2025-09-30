import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import type { HassDialog } from "../../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../../types";
import type { ZeroconfDiscoveryInfoDialogParams } from "./show-dialog-zeroconf-discovery-info";
declare class DialogZeroconfDiscoveryInfo extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: ZeroconfDiscoveryInfoDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _copyToClipboard;
    protected render(): TemplateResult | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zeroconf-device-info": DialogZeroconfDiscoveryInfo;
    }
}
export {};
