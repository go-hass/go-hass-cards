import { LitElement, nothing } from "lit";
import type { TemplateResult } from "lit";
import type { HassDialog } from "../../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/ha-code-editor";
export interface SSDPRawDataDialogParams {
    key: string;
    data: Record<string, unknown>;
}
declare class DialogSSDPRawData extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: SSDPRawDataDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): TemplateResult | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-ssdp-raw-data": DialogSSDPRawData;
    }
}
export {};
