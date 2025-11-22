import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-button";
import type { HomeAssistant } from "../../../../../types";
import type { ZWaveJSHardResetControllerDialogParams } from "./show-dialog-zwave_js-hard-reset-controller";
declare class DialogZWaveJSHardResetController extends LitElement {
    hass: HomeAssistant;
    private _entryId?;
    private _resetStatus;
    showDialog(params: ZWaveJSHardResetControllerDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _hardResetController;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-hard-reset-controller": DialogZWaveJSHardResetController;
    }
}
export {};
