import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiBadge } from "../badges/hui-badge";
import "../badges/hui-view-badges";
import type { HuiCard } from "../cards/hui-card";
import type { Lovelace } from "../types";
export declare class SideBarView extends LitElement implements LovelaceViewElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    index?: number;
    isStrategy: boolean;
    cards: HuiCard[];
    badges: HuiBadge[];
    private _config?;
    private _mqlListenerRef?;
    private _mql?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setConfig(config: LovelaceViewConfig): void;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _addCard;
    private _createCards;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sidebar-view": SideBarView;
    }
}
