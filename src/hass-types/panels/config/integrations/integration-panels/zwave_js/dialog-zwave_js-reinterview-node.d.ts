import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-button";
import type { HomeAssistant } from "../../../../../types";
import type { ZWaveJSReinterviewNodeDialogParams } from "./show-dialog-zwave_js-reinterview-node";
declare class DialogZWaveJSReinterviewNode extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status?;
    private _stages?;
    private _subscribed?;
    showDialog(params: ZWaveJSReinterviewNodeDialogParams): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _startReinterview;
    private _handleMessage;
    private _unsubscribe;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-reinterview-node": DialogZWaveJSReinterviewNode;
    }
}
export {};
