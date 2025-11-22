import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-code-editor";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-header";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-markdown";
import "../../../components/ha-spinner";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
declare class DialogImportBlueprint extends LitElement {
    hass: HomeAssistant;
    large: boolean;
    private _params?;
    private _importing;
    private _saving;
    private _error?;
    private _result?;
    private _url?;
    private _input?;
    showDialog(params: any): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _enlarge;
    private _import;
    private _save;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-import-blueprint": DialogImportBlueprint;
    }
}
export {};
