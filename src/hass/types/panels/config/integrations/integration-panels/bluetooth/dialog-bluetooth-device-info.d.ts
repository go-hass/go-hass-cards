import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import type { HassDialog } from "../../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../../types";
import type { BluetoothDeviceInfoDialogParams } from "./show-dialog-bluetooth-device-info";
declare class DialogBluetoothDeviceInfo extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: BluetoothDeviceInfoDialogParams): Promise<void>;
    closeDialog(): boolean;
    showDataAsHex(bytestring: string): string;
    private _copyToClipboard;
    protected render(): TemplateResult | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-bluetooth-device-info": DialogBluetoothDeviceInfo;
    }
}
export {};
