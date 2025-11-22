import { LitElement, nothing } from "lit";
import "../../components/buttons/ha-progress-button";
import "../../components/ha-textarea";
import type { HomeAssistant } from "../../types";
import type { TTSTryDialogParams } from "./show-dialog-tts-try";
export declare class TTSTryDialog extends LitElement {
    hass: HomeAssistant;
    private _loadingExample;
    private _params?;
    private _valid;
    private _messageInput?;
    private _messages?;
    showDialog(params: TTSTryDialogParams): void;
    closeDialog(): void;
    private get _defaultMessage();
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _inputChanged;
    private _playExample;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-tts-try": TTSTryDialog;
    }
}
