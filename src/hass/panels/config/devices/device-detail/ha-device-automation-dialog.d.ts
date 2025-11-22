import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-list-item";
import "../../../../components/ha-list";
import type { HomeAssistant } from "../../../../types";
import type { DeviceAutomationDialogParams } from "./show-dialog-device-automation";
export declare class DialogDeviceAutomation extends LitElement {
    hass: HomeAssistant;
    private _triggers;
    private _conditions;
    private _actions;
    private _params?;
    showDialog(params: DeviceAutomationDialogParams): Promise<void>;
    closeDialog(): void;
    protected firstUpdated(changedProps: any): void;
    protected updated(changedProps: any): void;
    private _handleRowClick;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-device-automation": DialogDeviceAutomation;
    }
}
