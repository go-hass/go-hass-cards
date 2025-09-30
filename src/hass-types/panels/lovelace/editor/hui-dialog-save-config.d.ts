import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-header";
import "../../../components/ha-formfield";
import "../../../components/ha-icon-button";
import "../../../components/ha-switch";
import "../../../components/ha-yaml-editor";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { SaveDialogParams } from "./show-save-config-dialog";
export declare class HuiSaveConfig extends LitElement implements HassDialog {
    hass?: HomeAssistant;
    private _params?;
    private _emptyConfig;
    private _saving;
    constructor();
    showDialog(params: SaveDialogParams): void;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _close;
    private _emptyConfigChanged;
    private _saveConfig;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-save-config": HuiSaveConfig;
    }
}
