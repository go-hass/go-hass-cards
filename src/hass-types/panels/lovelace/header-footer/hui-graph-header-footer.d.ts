import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-spinner";
import type { HomeAssistant } from "../../../types";
import "../components/hui-graph-base";
import type { LovelaceHeaderFooter, LovelaceHeaderFooterEditor } from "../types";
import type { GraphHeaderFooterConfig } from "./types";
export declare class HuiGraphHeaderFooter extends LitElement implements LovelaceHeaderFooter {
    static getConfigElement(): Promise<LovelaceHeaderFooterEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): GraphHeaderFooterConfig;
    hass?: HomeAssistant;
    type: "header" | "footer";
    protected _config?: GraphHeaderFooterConfig;
    private _coordinates?;
    private _error?;
    private _interval?;
    private _subscribed?;
    getCardSize(): number;
    setConfig(config: GraphHeaderFooterConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribeHistory;
    private _redrawGraph;
    private _setRedrawTimer;
    private _unsubscribeHistory;
    protected updated(changedProps: PropertyValues): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-graph-header-footer": HuiGraphHeaderFooter;
    }
}
