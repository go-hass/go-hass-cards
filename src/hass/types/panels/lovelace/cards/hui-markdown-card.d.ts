import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-markdown";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { MarkdownCardConfig } from "./types";
export declare class HuiMarkdownCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): MarkdownCardConfig;
    hass?: HomeAssistant;
    preview: boolean;
    private _config?;
    private _error?;
    private _errorLevel?;
    private _templateResult?;
    private _unsubRenderTemplate?;
    getCardSize(): number;
    setConfig(config: MarkdownCardConfig): void;
    connectedCallback(): void;
    private _computeCacheKey;
    disconnectedCallback(): void;
    protected willUpdate(_changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected updated(changedProps: PropertyValues): void;
    private _tryConnect;
    private _tryDisconnect;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-markdown-card": HuiMarkdownCard;
    }
}
