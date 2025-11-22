import { HuiConditionalBase } from "../components/hui-conditional-base";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { ConditionalCardConfig } from "./types";
declare class HuiConditionalCard extends HuiConditionalBase implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): ConditionalCardConfig;
    setConfig(config: ConditionalCardConfig): void;
    getCardSize(): Promise<number> | number;
    private _createCardElement;
    protected setVisibility(conditionMet: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-card": HuiConditionalCard;
    }
}
export {};
