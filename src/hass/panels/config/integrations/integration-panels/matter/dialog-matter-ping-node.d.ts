import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-list";
import "../../../../../components/ha-button";
import "../../../../../components/ha-list-item";
import "../../../../../components/ha-spinner";
import type { HomeAssistant } from "../../../../../types";
import type { MatterPingNodeDialogParams } from "./show-dialog-matter-ping-node";
declare class DialogMatterPingNode extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status?;
    private _pingResultEntries?;
    showDialog(params: MatterPingNodeDialogParams): Promise<void>;
    private _copyIpToClipboard;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _startPing;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-ping-node": DialogMatterPingNode;
    }
}
export {};
