import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-expansion-panel";
import "../../../../../components/ha-help-tooltip";
import "../../../../../components/ha-list";
import "../../../../../components/ha-list-item";
import "../../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../../types";
import type { ZWaveJSNodeStatisticsDialogParams } from "./show-dialog-zwave_js-node-statistics";
declare class DialogZWaveJSNodeStatistics extends LitElement {
    hass: HomeAssistant;
    private device?;
    private _nodeStatistics?;
    private _deviceIDsToName;
    private _workingRoutes;
    private _subscribedNodeStatistics?;
    private _subscribedDeviceRegistry?;
    showDialog(params: ZWaveJSNodeStatisticsDialogParams): void;
    closeDialog(): void;
    protected render(): TemplateResult<1> | typeof nothing;
    private _computeRSSI;
    private _computeDeviceNameById;
    private _subscribeNodeStatistics;
    private _subscribeDeviceRegistry;
    private _unsubscribe;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-node-statistics": DialogZWaveJSNodeStatistics;
    }
}
export {};
