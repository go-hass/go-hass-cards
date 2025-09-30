import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-spinner";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-markdown-element";
import "../../../../components/ha-md-dialog";
import "../../../../components/ha-select";
import "../../../../components/ha-textarea";
import type { HomeAssistant } from "../../../../types";
export declare class DialogSupportPackage extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _supportPackage?;
    private _dialog?;
    showDialog(): void;
    private _dialogClosed;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _loadSupportPackage;
    private _download;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-cloud-support-package": DialogSupportPackage;
    }
}
