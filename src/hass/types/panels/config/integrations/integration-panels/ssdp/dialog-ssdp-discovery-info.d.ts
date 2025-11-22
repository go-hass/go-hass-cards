import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { HassDialog } from "../../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../../types";
import type { SSDPDiscoveryInfoDialogParams } from "./show-dialog-ssdp-discovery-info";
import "../../../../../components/ha-button";
declare class DialogSSDPDiscoveryInfo extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: SSDPDiscoveryInfoDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _copyToClipboard;
    private _showRawData;
    protected render(): TemplateResult | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-ssdp-device-info": DialogSSDPDiscoveryInfo;
    }
}
export {};
