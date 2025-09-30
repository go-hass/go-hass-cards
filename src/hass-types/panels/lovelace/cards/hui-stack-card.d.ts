import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import "./hui-card";
import type { HuiCard } from "./hui-card";
import type { StackCardConfig } from "./types";
export declare abstract class HuiStackCard<T extends StackCardConfig = StackCardConfig> extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): Record<string, unknown>;
    hass?: HomeAssistant;
    preview: boolean;
    protected _cards?: HuiCard[];
    protected _config?: T;
    layout?: string;
    getCardSize(): number | Promise<number>;
    setConfig(config: T): void;
    protected update(changedProperties: any): void;
    private _createCardElement;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static sharedStyles: import("lit").CSSResult;
}
