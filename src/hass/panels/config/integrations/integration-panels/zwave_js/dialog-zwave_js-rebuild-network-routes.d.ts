import "@material/mwc-linear-progress/mwc-linear-progress";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import type { HomeAssistant } from "../../../../../types";
import type { ZWaveJSRebuildNetworkRoutesDialogParams } from "./show-dialog-zwave_js-rebuild-network-routes";
declare class DialogZWaveJSRebuildNetworkRoutes extends LitElement {
    hass: HomeAssistant;
    private entry_id?;
    private _status?;
    private _progress_total;
    private _progress_finished;
    private _progress_in_progress;
    private _subscribed?;
    showDialog(params: ZWaveJSRebuildNetworkRoutesDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _fetchData;
    private _startRebuildingRoutes;
    private _stopRebuildingRoutes;
    private _handleMessage;
    private _unsubscribe;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-rebuild-network-routes": DialogZWaveJSRebuildNetworkRoutes;
    }
}
export {};
