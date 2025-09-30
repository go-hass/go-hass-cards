import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-spinner";
import "../../../../components/search-input";
import type { LovelaceBadgeConfig } from "../../../../data/lovelace/config/badge";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
export declare class HuiBadgePicker extends LitElement {
    hass?: HomeAssistant;
    suggestedBadges?: string[];
    private _clipboard?;
    private _badges;
    lovelace?: LovelaceConfig;
    badgePicked?: (badgeConf: LovelaceBadgeConfig) => void;
    private _filter;
    private _width?;
    private _height?;
    private _unusedEntities?;
    private _usedEntities?;
    private _filterBadges;
    private _suggestedBadges;
    private _customBadges;
    private _otherBadges;
    protected render(): TemplateResult<1> | typeof nothing;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected firstUpdated(): void;
    private _loadBages;
    private _renderClipboardBadge;
    private _handleSearchChange;
    private _badgePicked;
    private _tryCreateBadgeElement;
    private _rebuildBadge;
    private _renderBadgeElement;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-badge-picker": HuiBadgePicker;
    }
}
