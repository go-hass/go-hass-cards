import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-spinner";
import "../../../../components/search-input";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
export declare class HuiCardPicker extends LitElement {
    hass?: HomeAssistant;
    suggestedCards?: string[];
    private _clipboard?;
    private _cards;
    lovelace?: LovelaceConfig;
    cardPicked?: (cardConf: LovelaceCardConfig) => void;
    private _filter;
    private _unusedEntities?;
    private _usedEntities?;
    focus(): Promise<void>;
    private _filterCards;
    private _suggestedCards;
    private _customCards;
    private _otherCards;
    protected render(): TemplateResult<1> | typeof nothing;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected firstUpdated(): void;
    protected updated(changedProps: any): void;
    private _loadCards;
    private _renderClipboardCard;
    private _handleSearchChange;
    private _cardPicked;
    private _tryCreateCardElement;
    private _rebuildCard;
    private _renderCardElement;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-picker": HuiCardPicker;
    }
}
