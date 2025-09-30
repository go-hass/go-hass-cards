import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-dialog-header";
import "../../../components/ha-dialog";
import type { HomeAssistant } from "../../../types";
import "./entity-voice-settings";
import type { VoiceSettingsDialogParams } from "./show-dialog-voice-settings";
declare class DialogVoiceSettings extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: VoiceSettingsDialogParams): void;
    closeDialog(): void;
    private _viewMoreInfo;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _entityEntryUpdated;
    private _exposedEntitiesChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-voice-settings": DialogVoiceSettings;
    }
}
export {};
