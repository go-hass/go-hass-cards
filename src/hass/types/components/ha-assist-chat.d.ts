import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import { type AssistPipeline } from "../data/assist_pipeline";
import type { HomeAssistant } from "../types";
import "./ha-alert";
import "./ha-textfield";
export declare class HaAssistChat extends LitElement {
    hass: HomeAssistant;
    pipeline?: AssistPipeline;
    disableSpeech: boolean;
    startListening?: boolean;
    private _messageInput;
    private _scrollContainer;
    private _conversation;
    private _showSendButton;
    private _processing;
    private _conversationId;
    private _audioRecorder?;
    private _audioBuffer?;
    private _audio?;
    private _stt_binary_handler_id?;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _scrollMessagesBottom;
    private _handleKeyUp;
    private _handleInput;
    private _handleSendMessage;
    private _handleListeningButton;
    private _toggleListening;
    private _addMessage;
    private _showNotSupportedMessage;
    private _startListening;
    private _stopListening;
    private _sendAudioChunk;
    private _unloadAudio;
    private _processText;
    private _createAddHassMessageProcessor;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-assist-chat": HaAssistChat;
    }
}
