import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-list-item";
import "../../../../components/ha-select";
import "../../../../components/ha-button";
import "../../../../components/ha-textarea";
import type { HomeAssistant } from "../../../../types";
import type { TryTtsDialogParams } from "./show-dialog-cloud-tts-try";
export declare class DialogTryTts extends LitElement {
    hass: HomeAssistant;
    private _loadingExample;
    private _params?;
    private _messageInput?;
    private _message;
    private _target;
    showDialog(params: TryTtsDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleTargetChanged;
    private _playExample;
    private _createAutomation;
    private _playBrowser;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-cloud-try-tts": DialogTryTts;
    }
}
