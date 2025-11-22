import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-next";
import "../../../components/ha-list";
import "../../../components/ha-list-item";
import "../../../components/ha-tip";
import type { Blueprints } from "../../../data/blueprint";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { NewAutomationDialogParams } from "./show-dialog-new-automation";
declare class DialogNewAutomation extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _mode;
    blueprints?: Blueprints;
    showDialog(params: NewAutomationDialogParams): void;
    closeDialog(): boolean;
    private _processedBlueprints;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _blueprint;
    private _blank;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-new-automation": DialogNewAutomation;
    }
}
export {};
