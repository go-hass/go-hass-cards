import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-spinner";
import type { HomeAssistant } from "../../../../../types";
import type { ZWaveJSRebuildNodeRoutesDialogParams } from "./show-dialog-zwave_js-rebuild-node-routes";
declare class DialogZWaveJSRebuildNodeRoutes extends LitElement {
    hass: HomeAssistant;
    private device?;
    private _status?;
    private _error?;
    showDialog(params: ZWaveJSRebuildNodeRoutesDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _fetchData;
    private _startRebuildingRoutes;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-rebuild-node-routes": DialogZWaveJSRebuildNodeRoutes;
    }
}
export {};
